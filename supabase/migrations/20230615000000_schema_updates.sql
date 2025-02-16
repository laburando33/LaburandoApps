-- filepath: /C:/Users/PC/Desktop/LaburandoApps/supabase/migrations/20230615000000_schema_updates.sql

-- Add new indexes for improved query performance
CREATE INDEX IF NOT EXISTS idx_service_requests_status ON service_requests(status);
CREATE INDEX IF NOT EXISTS idx_professional_profiles_rating ON professional_profiles(rating);

-- Add new constraint to ensure positive prices
ALTER TABLE service_requests
ADD CONSTRAINT check_price_positive CHECK (price >= 0);

-- Create new enum type for service categories
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'service_category') THEN
        CREATE TYPE service_category AS ENUM ('home_repair', 'cleaning', 'tutoring', 'pet_care', 'other');
    END IF;
END$$;

-- Add new column with the enum type to service_requests
ALTER TABLE service_requests
ADD COLUMN IF NOT EXISTS category service_category;

-- Create function to update professional rating
CREATE OR REPLACE FUNCTION update_professional_rating()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE professional_profiles
    SET rating = (
        SELECT AVG(rating)
        FROM reviews
        WHERE professional_id = NEW.professional_id
    ),
    total_reviews = (
        SELECT COUNT(*)
        FROM reviews
        WHERE professional_id = NEW.professional_id
    )
    WHERE user_id = NEW.professional_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for updating professional rating
DROP TRIGGER IF EXISTS update_professional_rating_trigger ON reviews;
CREATE TRIGGER update_professional_rating_trigger
AFTER INSERT OR UPDATE ON reviews
FOR EACH ROW
EXECUTE FUNCTION update_professional_rating();

-- Add new columns to service_requests for more detailed tracking
ALTER TABLE service_requests
ADD COLUMN IF NOT EXISTS estimated_duration INTERVAL,
ADD COLUMN IF NOT EXISTS actual_duration INTERVAL,
ADD COLUMN IF NOT EXISTS payment_status TEXT CHECK (payment_status IN ('pending', 'paid', 'refunded'));

-- Create a new table for service categories
CREATE TABLE IF NOT EXISTS service_categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT UNIQUE NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create a new table for professional skills
CREATE TABLE IF NOT EXISTS professional_skills (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  professional_id UUID REFERENCES professional_profiles(id),
  skill_name TEXT NOT NULL,
  proficiency_level INTEGER CHECK (proficiency_level BETWEEN 1 AND 5),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(professional_id, skill_name)
);

-- Enable RLS on new tables
ALTER TABLE service_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE professional_skills ENABLE ROW LEVEL SECURITY;

-- Create policies for new tables
CREATE POLICY "Service categories are viewable by everyone" ON service_categories FOR SELECT USING (true);
CREATE POLICY "Admins can manage service categories" ON service_categories FOR ALL USING (auth.role() = 'admin');

CREATE POLICY "Professional skills are viewable by everyone" ON professional_skills FOR SELECT USING (true);
CREATE POLICY "Professionals can manage their own skills" ON professional_skills FOR ALL USING (auth.uid() = (SELECT user_id FROM professional_profiles WHERE id = professional_id));

-- Create triggers for updating timestamps on new tables
CREATE TRIGGER update_service_categories_modtime
    BEFORE UPDATE ON service_categories
    FOR EACH ROW
    EXECUTE FUNCTION update_modified_column();

CREATE TRIGGER update_professional_skills_modtime
    BEFORE UPDATE ON professional_skills
    FOR EACH ROW
    EXECUTE FUNCTION update_modified_column();