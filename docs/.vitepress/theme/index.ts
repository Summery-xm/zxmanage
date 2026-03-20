// docs/.vitepress/theme/index.ts
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

// 重写 Layout 组件，强制替换右侧目录标题
export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // 替换右侧大纲标题的插槽（v1.0+ 通用）
      'outline-title': () => h('div', { class: 'outline-title' }, '本文目录'),
    })
  }
}