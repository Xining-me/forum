import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useUser } from '../context/UserContext';

export default function LoginScreen({ navigation }) {
  const { login } = useUser();
  const [studentId, setStudentId] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    if (!studentId && !email) return;
    login({
      id: studentId || email,
      name: '新用户',
      avatar: 'https://via.placeholder.com/150',
      email: email
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>登录</Text>
      <TextInput
        placeholder="学生号"
        value={studentId}
        onChangeText={setStudentId}
        style={styles.input}
      />
      <TextInput
        placeholder="邮箱"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>进入</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>没有账号？注册</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginBottom: 10 },
  button: { backgroundColor: '#1DA1F2', padding: 15, borderRadius: 5 },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
  link: { marginTop: 10, color: '#1DA1F2', textAlign: 'center' }
});
