import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Navbar({ title }) {
  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 50,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: { fontSize: 18, fontWeight: 'bold' }
});
