import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "C++学习笔记",
  description: "note cpp",
  lang: "zh-CN",
  base: "/note-cpp/",

  head: [
    ["link", { rel: "icon", href: "/note-cpp/favicon.ico" }]
  ],

  markdown: {
    lineNumbers: true, // 显示行号
    container: {
      infoLabel: '说明',
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '警示',
      detailsLabel: '详细信息'
    }
  },

  themeConfig: {
    logo: "/favicon.ico",

    search: {
      provider: 'local',
      options: {
        placeholder: '搜索文档...'
      }
    },

    nav: [
      { text: '首页', link: '/' },
      { text: '学习目录', link: '/cpp/' },
    ],

    sidebar: [
      {
        text: '基础知识',
        collapsed: false,
        items: [
          { text: '1.C++历史', link: '/cpp/01C++历史' },
          { text: '2.数据类型', link: '/cpp/02数据类型' },
          { text: '3.运算符', link: '/cpp/03运算符' },
          { text: '4.条件判断语句', link: '/cpp/04条件判断语句' },
          { text: '5.循环语句', link: '/cpp/05循环语句' },
          { text: '6.函数', link: '/cpp/06函数' },
          { text: '7.数组、指针和引用', link: '/cpp/07数组、指针和引用' },
          { text: '8.构造数据类型', link: '/cpp/08构造数据类型' },
        ]
      },
    ],

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航',
      level: 'deep'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    notFound: {
      title: '页面未找到',
      quote:
        '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页'
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/onion-chen/note-cpp' }
    ]
  }
})
