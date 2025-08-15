
import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function FAB(){
  const [open, setOpen] = useState(false);
  const nav = useNavigation();

  return (
    <View style={styles.wrap}>
      <Pressable style={styles.fab} onPress={()=>setOpen(true)}>
        <Text style={styles.plus}>＋</Text>
      </Pressable>
      <Modal visible={open} transparent animationType="fade" onRequestClose={()=>setOpen(false)}>
        <Pressable style={styles.backdrop} onPress={()=>setOpen(false)}>
          <View/>
        </Pressable>
        <View style={styles.sheet}>
          <Pressable style={styles.item} onPress={()=>{ setOpen(false); nav.navigate('Compose', { type:'post' }); }}><Text>发布帖子</Text></Pressable>
          <Pressable style={styles.item} onPress={()=>{ setOpen(false); nav.navigate('Compose', { type:'announcement' }); }}><Text>发布公告</Text></Pressable>
          <Pressable style={[styles.item, {alignItems:'center'}]} onPress={()=>setOpen(false)}><Text>取消</Text></Pressable>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap:{ position:'absolute', right:16, bottom:24 },
  fab:{ width:56, height:56, borderRadius:28, backgroundColor:'#1D9BF0', alignItems:'center', justifyContent:'center', elevation:4 },
  plus:{ color:'#fff', fontSize:28, lineHeight:28 },
  backdrop:{ flex:1, backgroundColor:'rgba(0,0,0,0.2)' },
  sheet:{ position:'absolute', right:16, bottom:90, backgroundColor:'#fff', borderRadius:12, elevation:5 },
  item:{ paddingHorizontal:16, paddingVertical:14, borderBottomWidth:1, borderColor:'#F3F4F6' }
});
