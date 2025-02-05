import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

// URLs de imágenes remotas de ejemplo (reemplázalas con tus propias URLs)
const REMOTE_IMAGES = {
  logo: 'https://i.ibb.co/0jq7Z0Q/logo.png',
  albanil: 'https://i.ibb.co/0jq7Z0Q/albanil.png',
  pintor: 'https://i.ibb.co/0jq7Z0Q/pintor.png',
  electricista: 'https://i.ibb.co/0jq7Z0Q/electricista.png'
};

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header con imagen remota */}
      <View style={styles.header}>
        <Image 
          source={{ uri: REMOTE_IMAGES.logo }}
          style={styles.logo}
        />
        <View style={styles.nav}>
          <Text style={styles.navItem}>Inicio</Text>
          <Text style={styles.navItem}>Servicios</Text>
          <Text style={styles.navItem}>Cómo Funciona</Text>
          <Text style={styles.navItem}>Contacto</Text>
        </View>
      </View>

      {/* Hero Section */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Encuentra profesionales confiables</Text>
        <Text style={styles.heroSubtitle}>Registra tu solicitud y recibe presupuestos</Text>
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaText}>Solicitar presupuesto</Text>
        </TouchableOpacity>
      </View>

      {/* Servicios con imágenes locales */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nuestros Servicios</Text>
        <View style={styles.services}>
          <View style={styles.service}>
            <Image 
              source={require('./assets/albanil-local.jpg')} // Imagen local
              style={styles.serviceIcon}
            />
            <Text style={styles.serviceText}>Albañilería</Text>
          </View>
          <View style={styles.service}>
            <Image 
              source={{ uri: REMOTE_IMAGES.pintor }} // Imagen remota
              style={styles.serviceIcon}
            />
            <Text style={styles.serviceText}>Pintura</Text>
          </View>
          <View style={styles.service}>
            <Image 
              source={{ uri: REMOTE_IMAGES.electricista }}
              style={styles.serviceIcon}
            />
            <Text style={styles.serviceText}>Electricidad</Text>
          </View>
        </View>
      </View>

      {/* Testimonios */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Testimonios</Text>
        <View style={styles.testimonial}>
          <Image
            source={{ uri: 'https://i.ibb.co/0jq7Z0Q/user-icon.png' }}
            style={styles.userAvatar}
          />
          <Text style={styles.testimonialText}>
            "Excelente servicio, profesionales calificados"
          </Text>
          <Text style={styles.testimonialAuthor}>- María Gómez</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  logo: {
    width: 120,
    height: 50,
    resizeMode: 'contain',
  },
  nav: {
    flexDirection: 'row',
    gap: 25,
  },
  navItem: {
    fontSize: 16,
    color: '#2d3436',
    fontWeight: '500',
  },
  hero: {
    paddingHorizontal: 20,
    marginBottom: 40,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2d3436',
    textAlign: 'center',
    marginBottom: 15,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#636e72',
    textAlign: 'center',
    marginBottom: 30,
  },
  ctaButton: {
    backgroundColor: '#0984e3',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    elevation: 3,
  },
  ctaText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2d3436',
    marginBottom: 25,
    textAlign: 'center',
  },
  services: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
  },
  service: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f6fa',
    borderRadius: 12,
    padding: 20,
  },
  serviceIcon: {
    width: 80,
    height: 80,
    marginBottom: 15,
    borderRadius: 10,
  },
  serviceText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2d3436',
    textAlign: 'center',
  },
  testimonial: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  userAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 15,
  },
  testimonialText: {
    fontSize: 16,
    color: '#2d3436',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 10,
  },
  testimonialAuthor: {
    fontSize: 14,
    color: '#636e72',
    fontWeight: '500',
  }
});