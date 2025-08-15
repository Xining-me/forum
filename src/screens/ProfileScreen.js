
import React, { useMemo, useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable, FlatList } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useAppStore } from '../store/appStore';
import PostCard from '../components/PostCard';

export default function ProfileScreen(){
  const route = useRoute();
  const nav = useNavigation();
  const { userId } = route.params || {};
  const { users, posts, me } = useAppStore();
  const u = users[userId] || me;

  const [tab, setTab] = useState('posts');
  const lists = useMemo(()=>{
    const mine = posts.filter(p => p.authorId === u.id);
    const replies = posts.filter(p => p.replyTo && p.authorId===u.id);
    const likes = posts.filter(p => p.likes.includes(u.id));
    const bookmarks = posts.filter(p => p.bookmarks.includes(u.id));
    return { posts: mine, replies, bookmarks, likes };
  }, [posts, u]);

  return (
    <View style={{ flex:1, backgroundColor:'#fff' }}>
      <View style={{ height:120, backgroundColor:'#E5E7EB' }}>
        {u.banner ? <Image source={{ uri: u.banner }} style={{ width:'100%', height:'100%' }}/> : null}
      </View>
      <View style={{ paddingHorizontal:12, marginTop:-30 }}>
        <Image source={{ uri: u.avatar || `https://api.dicebear.com/9.x/initials/png?seed=${encodeURIComponent(u.displayName||u.handle||'U')}` }} style={styles.avatar} />
        <View style={{ flexDirection:'row', alignItems:'center', marginTop:4 }}>
          <Text style={{ fontSize:20, fontWeight:'800' }}>{u.displayName}</Text>
          <Text style={{ color:'#6B7280', marginLeft:8 }}>@{u.handle}</Text>
          <Pressable style={{ marginLeft:'auto' }} onPress={()=>nav.navigate('Settings')}><Text style={{ color:'#1D9BF0' }}>设置</Text></Pressable>
        </View>
        <Text style={{ color:'#6B7280', marginTop:2 }}>注册时间 {new Date(u.registeredAt).toLocaleDateString()}</Text>
        <View style={styles.tabRow}>
          {['posts','replies','bookmarks','likes'].map(key=>(
            <Pressable key={key} onPress={()=>setTab(key)} style={[styles.tab, tab===key&&styles.tabActive]}>
              <Text style={tab===key?styles.tabActiveText:styles.tabText}>{({posts:'帖子',replies:'回复',bookmarks:'收藏',likes:'点赞'})[key]}</Text>
            </Pressable>
          ))}
        </View>
      </View>
      <FlatList
        data={lists[tab]}
        keyExtractor={(it)=>it.id}
        renderItem={({item})=>(<PostCard post={item} onPressAuthor={()=>{}} onPressMore={()=>{}}/>)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  avatar:{ width:72, height:72, borderRadius:36, borderWidth:4, borderColor:'#fff', backgroundColor:'#eee' },
  tabRow:{ flexDirection:'row', marginTop:12, borderBottomWidth:1, borderColor:'#E5E7EB' },
  tab:{ flex:1, alignItems:'center', paddingVertical:12 },
  tabActive:{ borderBottomWidth:2, borderColor:'#111827' },
  tabText:{ color:'#6B7280' },
  tabActiveText:{ color:'#111827', fontWeight:'700' },
});
