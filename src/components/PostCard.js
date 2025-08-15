
import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { useAppStore } from '../store/appStore';

export default function PostCard({ post, onPressAuthor, onPressMore }){
  const { users, toggle } = useAppStore();
  const u = users[post.authorId] || {};
  const time = new Date(post.createdAt).toLocaleString();
  const badge = post.type === 'announcement' ? '【公告】' : '';

  return (
    <View style={styles.card}>
      <Pressable onPress={onPressAuthor} style={{ marginRight:12 }}>
        <Image source={{ uri: u.avatar || `https://api.dicebear.com/9.x/initials/png?seed=${encodeURIComponent(u.displayName||u.handle||'U')}` }} style={styles.avatar}/>
      </Pressable>
      <View style={{ flex:1 }}>
        <View style={styles.header}>
          <Pressable onPress={onPressAuthor}><Text style={styles.name}>{u.displayName||u.handle||'用户'}</Text></Pressable>
          <Text style={styles.handle}>@{u.handle}</Text>
          <Text style={styles.dot}>·</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        <Text style={styles.text}>{badge}{post.text}</Text>
        <View style={styles.actions}>
          <Pressable onPress={()=>toggle({ postId: post.id, field:'likes' })}><Text>赞 {post.likes.length}</Text></Pressable>
          <Pressable onPress={()=>toggle({ postId: post.id, field:'reposts' })}><Text>转发 {post.reposts.length}</Text></Pressable>
          <Pressable onPress={()=>toggle({ postId: post.id, field:'bookmarks' })}><Text>收藏 {post.bookmarks.length}</Text></Pressable>
        </View>
      </View>
      <Pressable onPress={onPressMore}><Text style={{fontSize:18}}>⋯</Text></Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  card:{ flexDirection:'row', padding:12, borderBottomWidth:1, borderColor:'#E5E7EB', backgroundColor:'#fff' },
  avatar:{ width:40, height:40, borderRadius:20, backgroundColor:'#eee' },
  header:{ flexDirection:'row', alignItems:'center', gap:6 },
  name:{ fontWeight:'700', color:'#111827' },
  handle:{ color:'#6B7280', marginLeft:6 },
  dot:{ color:'#9CA3AF', marginHorizontal:6 },
  time:{ color:'#9CA3AF' },
  text:{ marginTop:6, lineHeight:20 },
  actions:{ marginTop:8, flexDirection:'row', justifyContent:'space-between' }
});
