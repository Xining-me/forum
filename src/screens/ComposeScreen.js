
import React, { useState } from 'react';
import { View, TextInput, Text, Pressable, StyleSheet, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useAppStore } from '../store/appStore';

export default function ComposeScreen(){
  const route = useRoute();
  const nav = useNavigation();
  const { type='post' } = route.params || {};
  const { createPost } = useAppStore();
  const [text, setText] = useState('');

  function submit(){
    if(!text.trim()) return Alert.alert('提示','请输入内容');
    createPost({ text, type });
    nav.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{type==='announcement'?'发布公告':'发布帖子'}</Text>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="此刻想法..."
        multiline
        style={styles.input}
      />
      <Pressable style={styles.btn} onPress={submit}><Text style={styles.btnText}>发布</Text></Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:'#fff', padding:16 },
  title:{ fontSize:18, fontWeight:'800', marginBottom:8 },
  input:{ borderWidth:1, borderColor:'#E5E7EB', borderRadius:12, minHeight:120, padding:12, textAlignVertical:'top' },
  btn:{ backgroundColor:'#1D9BF0', marginTop:12, paddingVertical:12, borderRadius:999, alignItems:'center' },
  btnText:{ color:'#fff', fontWeight:'700' }
});
