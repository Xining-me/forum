
import React, { useState, useMemo } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HeaderBar from '../components/HeaderBar';
import TopTabs from '../components/TopTabs';
import PostCard from '../components/PostCard';
import FAB from '../components/FAB';
import { useAppStore } from '../store/appStore';

export default function HomeScreen(){
  const nav = useNavigation();
  const { posts, me, follows, clubs } = useAppStore();
  const [index, setIndex] = useState(0);
  const routes = [
    { key:'latest', title:'最新发帖' },
    { key:'following', title:'正在关注' },
    { key:'clubs', title:'参加社团' },
  ];

  const data = useMemo(()=>{
    if(index===0) return posts;
    if(index===1){
      const setF = new Set(follows[me?.id] || []);
      return posts.filter(p => setF.has(p.authorId));
    }
    // clubs feed: simple demo returns announcements first
    return posts.filter(p => p.type==='announcement').concat(posts.filter(p => p.type!=='announcement'));
  }, [index, posts, follows, me]);

  return (
    <View style={{ flex:1, backgroundColor:'#fff' }}>
      <HeaderBar title="首页" />
      <TopTabs routes={routes} index={index} onIndexChange={setIndex} />
      <FlatList
        data={data}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>(
          <PostCard post={item} onPressAuthor={()=>nav.navigate('Profile', { userId:item.authorId })} onPressMore={()=>{}}/>
        )}
      />
      <FAB/>
    </View>
  )
}
