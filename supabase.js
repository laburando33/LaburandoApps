import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tkqpqbbljkwsdptcwysk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrcXBxYmJsamt3c2RwdGN3eXNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg3MTg2MTAsImV4cCI6MjA1NDI5NDYxMH0.YmD7mhoCHop7fBi2ZW871kaYItGq1rUt8l52H57Cy48';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
