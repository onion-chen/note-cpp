import DefaultTheme from 'vitepress/theme';
import CppHome from './components/CppHome.vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('CppHome', CppHome)
  }
}
