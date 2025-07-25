import DefaultTheme from 'vitepress/theme';
import CppHome from './components/CppHome.vue';
import Utterances from './components/Utterances.vue'
import './styles/custom-containers.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('CppHome', CppHome);
    app.component('Utterances', Utterances);
  }
}
