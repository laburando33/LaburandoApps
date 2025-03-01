import React from 'react';
import { View, Platform, StyleSheet, ViewStyle } from 'react-native';
import { useRouter } from 'next/router';
import CustomButton from '@/components/CustomButton';

const Header: React.FC = () => {
  const router = useRouter();

  const navigate = (path: string) => {
    if (Platform.OS === 'web') {
      router.push(path);
    } else {
      // For mobile, you might want to use a different navigation method
      // For example, if you're using React Navigation:
      // navigation.navigate(path);
      console.log('Navigate to:', path);
    }
  };

  const HeaderContent = () => (
    <View style={styles.nav}>
      <CustomButton 
        onPress={() => navigate("/")} 
        variant="link"
        className="text-gray-600 hover:text-primary"
      >
        Inicio
      </CustomButton>
      {/* Add more navigation items here */}
    </View>
  );

  if (Platform.OS === 'web') {
    return (
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeaderContent />
        </nav>
      </header>
    );
  }

  // For mobile platforms
  return (
    <View style={styles.header}>
      <HeaderContent />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  } as ViewStyle,
  nav: {
    flexDirection: 'row' as const,
    justifyContent: 'space-around' as const,
    alignItems: 'center' as const,
    padding: 10,
  } as ViewStyle,
});

export default Header;                                                        