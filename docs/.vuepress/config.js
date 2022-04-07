const root = "/navigation-area";
module.exports = {
  lang: "zh-CN",
  title: "IT200持续为您导航",
  description: "IT200持续为您导航",
  // base: "/it200.cn/",
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "/images/logo.b96656d2.jpg",
    repo: "https://github.com/OSpoon/it200-2022",
    editLinkText: "编辑此页",
    lastUpdatedText: "最近更新时间",
    contributorsText: "贡献者列表",
    docsRepo: "https://github.com/OSpoon/it200.cn",
    docsBranch: "main",
    docsDir: "docs",
    editLinkPattern: ":repo/edit/:branch/:path",
    navbar: [
      {
        text: "页面内容你来定",
        link: `https://github.com/OSpoon/it200.cn/issues`,
      },
      {
        text: "常逛社区",
        children: [
          {
            text: "掘金",
            link: "https://juejin.cn/user/3966693685871694",
          },
          {
            text: "语雀",
            link: "https://www.yuque.com/it200",
          },
          {
            text: "思否",
            link: "https://segmentfault.com/u/xiaoxintongxue",
          },
          {
            text: "51Blog",
            link: "https://blog.51cto.com/u_11711012",
          },
          {
            text: "幕布",
            link: "https://mubu.com/explore",
          },
          {
            text: "微信开发社区",
            link: "https://developers.weixin.qq.com/community/homepage",
          },
        ],
      },
      {
        text: "编码工具",
        children: [
          {
            text: "CodeSandBox",
            link: "https://codesandbox.io/",
          },
          {
            text: "Stackblitz",
            link: "https://stackblitz.com/",
          },
          {
            text: "JSRUN.NET",
            link: "http://jsrun.net/",
          },
          {
            text: "正则编辑器",
            link: "https://regex101.com/",
          },
          {
            text: "正则可视化",
            link: "https://jex.im/regulex/",
          },
        ],
      },
      {
        text: "查询一下",
        children: [
          {
            text: "NPM",
            link: "https://www.npmjs.com/",
          },
          {
            text: "MDN",
            link: "https://developer.mozilla.org/zh-CN/docs/Web",
          },
          {
            text: "caniuse",
            link: "https://caniuse.com/",
          },
          {
            text: "unpkg",
            link: "https://unpkg.com/",
          },
          {
            text: "astexplorer",
            link: "https://astexplorer.net/",
          },
          {
            text: "crontab",
            link: "https://crontab.guru/",
          },
          {
            text: "emojiall",
            link: "https://www.emojiall.com/zh-hans/all-cate",
          },
        ],
      },
      {
        text: "转换工具",
        children: [
          {
            text: "carbon",
            link: "https://carbon.now.sh/",
          },
          {
            text: "mdnice",
            link: "https://www.mdnice.com/",
          },
          {
            text: "MD2富文本",
            link: "https://doocs.github.io/md/",
          },
          {
            text: "小码短链接",
            link: "https://xiaomark.com/",
          },
          {
            text: "JSON转typescript",
            link: "https://tooltt.com/json2typescript/",
          },
        ],
      },
      {
        text: "绘图区",
        children: [
          {
            text: "在线流程图",
            link: "https://www.processon.com/",
          },
          {
            text: "手绘风绘图",
            link: "https://excalidraw.com/",
          },
        ],
      },
      {
        text: "设计工具",
        children: [
          {
            text: "可画设计",
            link: "https://www.canva.cn/",
          },
          {
            text: "图怪兽",
            link: "https://818ps.com//",
          },
          {
            text: "扁平插图",
            link: "https://undraw.co/illustrations",
          },
        ],
      },
      {
        text: "开源作品",
        children: [
          {
            text: "var-conv（VSCode编码命名转换插件）",
            link: "https://github.com/OSpoon/var-conv",
          },
        ],
      },
    ],
    sidebar: [
      `${root}/fe-frame.md`,
      `${root}/node-frame.md`,
      `${root}/universal-library.md`,
      `${root}/learning-materials.md`,
      `${root}/all-tools.md`,
      `${root}/design-correlation.md`,
      `${root}/open-platform.md`,
      `${root}/cloud-testing.md`,
      `${root}/plug-in.md`,
      `${root}/self-taught.md`,
    ],
  },
  plugins: [
    ["@vuepress/plugin-nprogress"],
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "搜一下看",
          },
        },
      },
    ],
  ],
};
