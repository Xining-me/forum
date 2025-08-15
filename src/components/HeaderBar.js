
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HeaderBar({ title, right }){
  const nav = useNavigation();
  return (
    <View style={styles.bar}>
      <Text style={styles.title}>{title}</Text>
      <View style={{ marginLeft:'auto' }}>{right}</View>
      <Pressable onPress={()=>nav.navigate('Search')}><Text style={styles.link}>搜索</Text></Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  bar:{ flexDirection:'row', alignItems:'center', paddingHorizontal:12, paddingVertical:10, borderBottomWidth:1, borderColor:'#E5E7EB', backgroundColor:'#fff' },
  title:{ fontWeight:'800', fontSize:18 },
  link:{ color:'#1D9BF0', marginLeft:12 }
});
