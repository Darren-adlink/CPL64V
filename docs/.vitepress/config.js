import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'HDV62V 產品介紹',
  description: 'HDV62V 高效能視覺檢測系統',
  base: '/CPL64V/', // 部署到 GitHub Pages 的專案名稱
  themeConfig: {
    nav: [
      { text: '首頁', link: '/' },
      { text: '硬體介紹', link: '/hardware' },
      { text: '功能介紹', link: '/features' },
      { text: 'API 介紹', link: '/api' },
      { text: 'UI 介紹', link: '/ui' }
    ],

    sidebar: [
      {
        text: '學習紀錄',
        items: [
          { text: '硬體介紹', link: '/hardware' },
          { text: '功能介紹', link: '/features' },
          { text: 'API 介紹', link: '/api' },
          { text: 'UI 介紹', link: '/ui' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/darren-adlink/CPL64V' }
    ]
  }
})
