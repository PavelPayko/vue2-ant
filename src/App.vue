<script lang="ts">
import Vue from 'vue';
import { Layout, Icon, Menu } from 'ant-design-vue';
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Menu);

export default {
  data() {
    return {
      collapsed: true,
    };
  },
};
</script>

<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" theme="light">
      <div class="logo" />
      <a-menu theme="light" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1" class="ant-menu-item-styled">
          <router-link to="/" class="ant-menu-item-link"> 
            <a-icon type="pic-right" />
            <span>События</span>
          </router-link>
        </a-menu-item>

        <a-menu-item key="2" class="ant-menu-item-styled">
          <router-link to="/dashboard" class="ant-menu-item-link"> 
            <a-icon type="bar-chart" />
            <span>dashboard</span>
          </router-link>
        </a-menu-item>
        
        <a-menu-item key="3" class="ant-menu-item-styled">
          <router-link to="/settings" class="ant-menu-item-link">
            <a-icon type="setting" />
            <span>settings</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.ant-menu-item-link {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex !important;
    align-items: center;
    justify-content: center;
    width: 100%;
}
</style>
