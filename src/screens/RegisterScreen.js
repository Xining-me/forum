import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useUser } from '../context/UserContext';

export default function RegisterScreen({ navigation }) {
  const { login } = useUser();
  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = () => {
    if (!name || (!studentId && !email)) return;
    login({
      id: studentId || email,
      name,
      avatar: 'https://via.placeholder.com/150',
      email: email
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>注册</Text>
      <TextInput placeholder="昵称" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="学生号" value={studentId} onChangeText={setStudentId} style={styles.input} />
      <TextInput
        placeholder="邮箱"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>注册并进入</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>已有账号？登录</Text>
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
