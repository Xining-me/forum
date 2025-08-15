
# Mini Twitter RN

仿推特交互的安卓前端（Expo + React Native）。本项目仅包含前端，数据本地持久化，便于后续替换为真实 API。

## 栈
- Expo 51
- React Navigation Native Stack
- Zustand 状态管理
- AsyncStorage 持久化
- react-native-tab-view（自制顶部 Tab）

## 关键页面
- AuthScreen：学号登录、邮箱+验证码登录
- HomeScreen：顶部三栏「最新发帖｜正在关注｜参加社团」+ 悬浮发布按钮
- ComposeScreen：发布帖子，支持“公告”类型
- ProfileScreen：昵称、头像、背景、注册时间；Tab「帖子｜回复｜收藏｜点赞」；右上角设置
- SettingsScreen：编辑昵称、头像、背景
- SearchScreen：搜索 + 「趋势 Top10」与「公告 Top10」

## 运行
```bash
npm i
npm start
# 在安卓设备或模拟器中打开
```
