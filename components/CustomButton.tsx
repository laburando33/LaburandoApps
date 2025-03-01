import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';

interface CustomButtonProps {
  onPress: () => void;
  children: React.ReactNode;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onPress, children, variant = "default", className }) => {
  if (Platform.OS === 'web') {
    return (
      <button 
        onClick={onPress} 
        className={`${className} ${variant ? `btn-${variant}` : ''}`}
      >
        {children}
      </button>
    );
  }

  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={[styles.button, styles[variant as keyof typeof styles]]}
    >
      <Text style={styles[`${variant}Text` as keyof typeof styles]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
  },
  default: {
    backgroundColor: '#007bff',
  },
  destructive: {
    backgroundColor: '#dc3545',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007bff',
  },
  secondary: {
    backgroundColor: '#6c757d',
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  link: {
    backgroundColor: 'transparent',
  },
  defaultText: {
    color: 'white',
  },
  destructiveText: {
    color: 'white',
  },
  outlineText: {
    color: '#007bff',
  },
  secondaryText: {
    color: 'white',
  },
  ghostText: {
    color: '#007bff',
  },
  linkText: {
    color: '#007bff',
  },
});

export default CustomButton;