const sidebar = {
  "/": [
    {
      text: "快速开始",
      link: "/",
    },
    {
      text: "组件",
      children: [
        {
          text: "Button",
          link: "/components/button/",
        },
      ],
    },
  ],
};

const config = {
  title: 'MyUI',
  description: '我的组件Blog',
  themeConfig: {
    sidebar,
  },
  markdown: {
    config: (md) => {
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin)
    }
  }
};

export default config;
