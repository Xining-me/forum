import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const AuthScreen = () => {
  const navigation = useNavigation();

  // 导航到登录页面
  const goToLogin = () => {
    navigation.navigate('Login');
  };

  // 导航到注册页面
  const goToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 应用图标 */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/icon.png')}
          style={styles.logo}
          resizeMode="contain"
          alt="Mini Twitter Logo"
        />
        <Text style={styles.appName}>Mini Twitter</Text>
      </View>

      {/* 应用描述 */}
      <Text style={styles.description}>
        连接世界，分享你的想法
      </Text>

      {/* 按钮区域 */}
      <View style={styles.buttonsContainer}>
        {/* 登录按钮 */}
        <TouchableOpacity 
          style={[styles.button, styles.loginButton]}
          onPress={goToLogin}
          activeOpacity={0.8}
        >
          <Ionicons name="log-in-outline" size={20} color="#fff" style={styles.buttonIcon} />
          <Text style={styles.loginButtonText}>登录</Text>
        </TouchableOpacity>

        {/* 注册按钮 */}
        <TouchableOpacity 
          style={[styles.button, styles.registerButton]}
          onPress={goToRegister}
          activeOpacity={0.8}
        >
          <Ionicons name="person-add-outline" size={20} color="#007AFF" style={styles.buttonIcon} />
          <Text style={styles.registerButtonText}>注册</Text>
        </TouchableOpacity>
      </View>

      {/* 底部文本 */}
      <Text style={styles.footerText}>
        继续即表示你同意我们的服务条款和隐私政策
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 15,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1DA1F2', // Twitter蓝
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 60,
    maxWidth: 250,
  },
  buttonsContainer: {
    width: '100%',
    gap: 15,
    marginBottom: 40,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 30,
    width: '100%',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  buttonIcon: {
    marginRight: 10,
  },
  loginButton: {
    backgroundColor: '#1DA1F2',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  registerButton: {
    backgroundColor: '#fff',
    borderColor: '#1DA1F2',
    borderWidth: 1,
  },
  registerButtonText: {
    color: '#1DA1F2',
    fontSize: 18,
    fontWeight: '600',
  },
  footerText: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    position: 'absolute',
    bottom: 20,
    maxWidth: 300,
  },
});

export default AuthScreen;

