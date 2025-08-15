
import React, { useMemo, useState } from 'react';
import { View, TextInput, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import HeaderBar from '../components/HeaderBar';
import { useAppStore } from '../store/appStore';

export default function SearchScreen(){
  const { posts, trends } = useAppStore();
  const [q, setQ] = useState('');
  const filtered = useMemo(()=>{
    const s = q.trim().toLowerCase();
    if(!s) return posts.slice(0,50);
    return posts.filter(p => (p.text||'').toLowerCase().includes(s));
  }, [q, posts]);

  const topAnnouncements = useMemo(()=>posts.filter(p=>p.type==='announcement').slice(0,10), [posts]);

  return (
    <View style={{ flex:1, backgroundColor:'#fff' }}>
      <HeaderBar title="搜索" />
      <View style={styles.search}>
        <TextInput style={styles.input} placeholder="搜索帖子或用户" value={q} onChangeText={setQ}/>
      </View>

      <View style={styles.nav}>
        <Text style={styles.navTitle}>趋势</Text>
        {trends.length===0 ? <Text style={styles.item}>暂无</Text> :
          trends.map(t => <Text key={t.tag} style={styles.item}>#{t.tag} · {t.count}</Text>)
        }
        <Text style={[styles.navTitle, { marginTop:8 }]}>公告（前十）</Text>
        {topAnnouncements.map(a => <Text key={a.id} style={styles.item}>• {a.text.slice(0,40)}</Text>)}
      </View>

      <FlatList
        data={filtered}
        keyExtractor={it=>it.id}
        renderItem={({item})=>(<Text style={styles.result}>• {item.text}</Text>)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  search:{ padding:12, borderBottomWidth:1, borderColor:'#E5E7EB' },
  input:{ backgroundColor:'#F3F4F6', borderRadius:8, paddingHorizontal:12, paddingVertical:10 },
  nav:{ paddingHorizontal:12, paddingVertical:8, borderBottomWidth:1, borderColor:'#E5E7EB', backgroundColor:'#fff' },
  navTitle:{ fontWeight:'700', marginBottom:4 },
  item:{ paddingVertical:2, color:'#374151' },
  result:{ paddingHorizontal:12, paddingVertical:10, borderBottomWidth:1, borderColor:'#F3F4F6' }
});
