// .vitepress/config.mts
import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'ZXManage',
  titleTemplate: '高效全能的桌面端项目管理工具',
  description: 'ZXManager 是一款基于 Electron+React 开发的桌面端项目管理软件。支持 Vue, React, Java, 小程序, Node.js 等多语言项目的可视化管理和一键打包部署，内置 Git 管理与 Nginx 本地部署功能。',
  lang:'zh-CN',
  base:'/zxmanage/',

  vite:{
    server:{
      port:8002
    }
  },

  // --- 最后更新时间 (SEO 加分项) ---
  lastUpdated: true,

  // --- Head 标签配置 (核心 SEO 部分) ---
  head: [
    // 1. 图标配置
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],

    // 2. SEO Meta 标签
    ['meta', { name: 'author', content: 'ZXManager Team' }],
    ['meta', { name: 'keywords', content: '项目管理软件, Electron项目, Vue项目管理, React项目管理, 代码打包工具, 本地Nginx部署, Git图形化界面, 开发者工具, 桌面端开发工具' }],

    // 3. Open Graph (社交媒体分享卡片优化 - 微信/微博/推特等)
    // 当用户把你的链接发给别人时，会显示一个卡片
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'ZXManager - 全能桌面端项目管理工具' }],
    ['meta', { property: 'og:description', content: '支持Vue/React/Java等多语言项目管理，集成Git管理、代码打包与Nginx本地部署，开发者的得力助手。' }],
    ['meta', { property: 'og:image', content: '/og-image.png' }], // 务必在 public 文件夹放一张 1200x630 的预览图
    ['meta', { property: 'og:url', content: 'https://summery-xm.github.io/zxmanage/' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],

    // 4. Twitter 卡片 (如果做海外推广)
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'ZXManager - 全能桌面端项目管理工具' }],
    ['meta', { name: 'twitter:description', content: '支持Vue/React/Java等多语言项目管理，集成Git管理、代码打包与Nginx本地部署。' }],
    ['meta', { name: 'twitter:image', content: '/og-image.png' }],

    // 5. JSON-LD 结构化数据
    // 这是一个非常高级的 SEO 技巧，告诉 Google/百度 这是一个软件应用
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      "@context": "https://schema.org" ,
      "@type": "SoftwareApplication",
      "name": "ZXManager",
      "operatingSystem": "Windows, macOS",
      "applicationCategory": "DeveloperApplication",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "CNY"
      },
      "description": "一款支持Vue、React、Java等技术的桌面端项目管理工具，提供Git可视化管理与Nginx本地部署功能。",
      "softwareVersion": "1.0.0"
    })]
  ],
  themeConfig: {
    logo: '/logo.png',
    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '功能介绍', link: '/document/', activeMatch: '/document/' },
      { text: '更新日志', link: '/updateLog' },
      { text: '开发计划', link: '/plan' },
      { text: '下载软件', link: 'https://github.com/Summery-xm/zxmanage/releases/download/lastest/ZXManage-x64-Setup.exe' },
      { text: '联系我们', link: 'https://qm.qq.com/q/7A3qlIPxCw'}
    ],
    sidebar: {
      '/document/':[
      {
        text: '功能介绍',
        collapsed: true,
        items: [
          { text: '快速开始', link: '/document/' },
          { text: '新建项目', link: '/document/create' },
          { text: '项目配置', link: '/document/config' },
          { text: '项目打包', link: '/document/pack' },
          { text: '本地服务运行', link: '/document/service' },
          { text: '笔记管理', link: '/document/note' },
          { text: 'GIT', link: '/document/git' },
          { text: '文件&代码管理', link: '/document/resource' },
        ],
      },
    ]
    } ,
    // 页脚
    footer: {
      message: 'ZXManager - 让项目管理更简单。',
      copyright: 'Copyright © 2026-present ZXManager Team',
    },
    outline: {
      level:[2,3],
      label:'页面导航'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    lastUpdatedText: '上次更新',
    search: {
      provider: 'local'
    }
  },
  sitemap: {
    hostname: 'https://summery-xm.github.io/zxmanage/' ,
    lastmodDateOnly: false
  },
  cleanUrls: false,
});
