
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useAppStore } from '../store/appStore';

export default function SettingsScreen(){
  const { me, updateProfile, logout } = useAppStore();
  const [displayName, setDisplayName] = useState(me?.displayName || '');

  async function pick(field){
    const res = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images, base64: false, quality: 0.8 });
    if(res.canceled) return;
    const uri = res.assets[0].uri;
    await updateProfile({ [field]: uri });
  }

  async function save(){
    await updateProfile({ displayName: displayName.trim() });
    Alert.alert('已保存');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>编辑资料</Text>
      <View style={styles.row}>
        <Image source={{ uri: me?.avatar || `https://api.dicebear.com/9.x/initials/png?seed=${encodeURIComponent(displayName||me?.handle||'U')}` }} style={styles.avatar}/>
        <Pressable style={styles.btn} onPress={()=>pick('avatar')}><Text style={styles.btnText}>更换头像</Text></Pressable>
      </View>
      <Pressable style={[styles.banner, {justifyContent:'center', alignItems:'center'}]} onPress={()=>pick('banner')}>
        {me?.banner ? <Image source={{ uri: me.banner }} style={styles.banner}/> : <Text style={{color:'#6B7280'}}>点击上传背景图</Text>}
      </Pressable>
      <TextInput style={styles.input} value={displayName} onChangeText={setDisplayName} placeholder="显示名称"/>
      <Pressable style={styles.save} onPress={save}><Text style={styles.saveText}>保存</Text></Pressable>
      <Pressable onPress={logout} style={{ marginTop:20 }}><Text style={{ color:'#EF4444' }}>退出登录</Text></Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:'#fff', padding:16 },
  title:{ fontSize:20, fontWeight:'800', marginBottom:12 },
  row:{ flexDirection:'row', alignItems:'center', gap:16 },
  avatar:{ width:64, height:64, borderRadius:32, backgroundColor:'#eee' },
  btn:{ backgroundColor:'#111827', paddingHorizontal:16, paddingVertical:10, borderRadius:999 },
  btnText:{ color:'#fff' },
  banner:{ width:'100%', height:120, borderRadius:12, backgroundColor:'#E5E7EB', marginTop:12, overflow:'hidden' },
  input:{ borderWidth:1, borderColor:'#E5E7EB', borderRadius:10, paddingHorizontal:12, paddingVertical:10, marginTop:12 },
  save:{ backgroundColor:'#1D9BF0', paddingVertical:12, borderRadius:999, alignItems:'center', marginTop:12 },
  saveText:{ color:'#fff', fontWeight:'700' },
});
