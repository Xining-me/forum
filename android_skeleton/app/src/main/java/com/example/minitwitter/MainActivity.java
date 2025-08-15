package com.example.minitwitter;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;

public class MainActivity extends ReactActivity {

    /**
     * 返回React Native应用的根组件名称
     * 必须与index.js中注册的组件名称完全匹配
     */
    @Override
    protected String getMainComponentName() {
        // 确保此处名称与index.js中的registerRootComponent(App)保持一致
        // 通常为"App"，如果你的入口组件注册为其他名称请相应修改
        return "App";
    }

    /**
     * 配置Activity委托，用于支持新架构等特性
     */
    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new DefaultReactActivityDelegate(
            this,
            getMainComponentName(),
            // 启用新架构（可选，根据项目需求设置）
            DefaultNewArchitectureEntryPoint.getFabricEnabled(), // fabricEnabled
            DefaultNewArchitectureEntryPoint.getConcurrentRootEnabled() // concurrentRootEnabled
        );
    }
}
    
