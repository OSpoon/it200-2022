const json = [
  // {
  //   name: '综合整理',
  //   type: '1a99f70b-1db6-4c91-8703-3957bb14f881',
  //   icon: 'euro',
  //   menus: [
  //     {
  //       name: 'PDF整理',
  //       type: 'c2f791e7-d739-48f5-802a-066113b8905e',
  //       icon: 'file-ppt',
  //       list: [
  //         {
  //           title: '我的简历',
  //           icon: './icons/pdf.ico',
  //           href: 'http://it200.cn/pdf/张鑫-移动web前端-个人简历.pdf',
  //           description: '张鑫-移动web前端-个人简历'
  //         },
  //         {
  //           title: 'Java基础',
  //           icon: './icons/pdf.ico',
  //           href: 'http://it200.cn/pdf/java-all.pdf',
  //           description: 'Java基础-java-all'
  //         },
  //         {
  //           title: '重学Java设计模式·小傅哥',
  //           icon: './icons/pdf.ico',
  //           href:
  //             'http://it200.cn/pdf/重学Java设计模式·小傅哥(公众号：bugstack虫洞栈).pdf',
  //           description: '重学Java设计模式·小傅哥'
  //         },
  //         {
  //           title: '阿里巴巴Java开发手册',
  //           icon: './icons/pdf.ico',
  //           href: 'http://it200.cn/pdf/阿里巴巴Java开发手册（泰山版）.pdf',
  //           description: '阿里巴巴Java开发手册'
  //         },
  //         {
  //           title: '老孟Flutter',
  //           icon: './icons/pdf.ico',
  //           href: 'http://it200.cn/pdf/老孟Flutter-控件大全.pdf',
  //           description: '老孟Flutter-控件大全'
  //         },
  //         {
  //           title: 'Git Github GitServer',
  //           icon: './icons/pdf.ico',
  //           href:
  //             'http://it200.cn/pdf/完全学会git github gitserver的24堂课.pdf',
  //           description: 'Git Github GitServer'
  //         }
  //       ]
  //     },
  //     {
  //       name: '其他整理',
  //       type: '0d2b9681-e0c1-4a55-94ef-159d6d84963c',
  //       icon: 'file-unknown',
  //       list: [
  //         {
  //           title: 'pub.flutter-io',
  //           icon: 'https://dartpad.cn/pictures/logo_dart.png',
  //           href: 'https://pub.flutter-io.cn/',
  //           description: 'pub.flutter-io'
  //         },
  //         {
  //           title: 'Fluro的封装',
  //           icon: 'https://dartpad.cn/pictures/logo_dart.png',
  //           href: 'https://www.cnblogs.com/joe235/p/11957838.html',
  //           description: '对Flutter路由管理库Fluro的封装'
  //         },
  //         {
  //           title: 'dartpad',
  //           icon: 'https://dartpad.cn/pictures/logo_dart.png',
  //           href: 'https://dartpad.cn/',
  //           description: 'dartpad在线编码'
  //         },
  //         {
  //           title: 'helloflask',
  //           icon:
  //             'https://gblobscdn.gitbook.com/spaces%2F-LPUGutvb8ubewWLtJw4%2Favatar.png?alt=media',
  //           href: 'https://read.helloflask.com/',
  //           description: 'Flask 入门教程'
  //         },
  //         {
  //           title: 'Flask Web开发实战',
  //           icon: 'http://it200.cn/images/logo/default.png',
  //           href: 'https://passport.jd.com/uc/login',
  //           description: 'Flask Web开发实战-京东阅读'
  //         },
  //         {
  //           title: 'flask-01',
  //           icon: 'http://it200.cn/images/logo/default.png',
  //           href: 'https://www.cnblogs.com/wt11/p/9288605.html',
  //           description: '结合manage.py，在flask项目中使用websocket'
  //         },
  //         {
  //           title: 'flask-02',
  //           icon: 'http://it200.cn/images/logo/default.png',
  //           href:
  //             'https://blog.csdn.net/xujiahui320582/article/details/83065288',
  //           description: 'Flask速成项目：Flask实现计算机资源的实时监控'
  //         },
  //         {
  //           title: 'flask-03',
  //           icon: 'http://it200.cn/images/logo/default.png',
  //           href: 'https://www.jianshu.com/p/b3500954b3d3',
  //           description: 'flask使用flask-socketio 启动服务方式'
  //         }
  //       ]
  //     }
  //     // {
  //     //   name: '振利软件',
  //     //   type: 'b108f443-6831-4fa4-8e1f-2b9967976acf',
  //     //   icon: 'desktop',
  //     //   list: [
  //     //     {
  //     //       title: '工时系统',
  //     //       description: '每日一填,工资满满',
  //     //       icon: 'http://it200.cn/images/logo/default.png',
  //     //       href: 'http://app.n22.com.cn/app/'
  //     //     },
  //     //     {
  //     //       title: 'Git仓库',
  //     //       description: '勤推送,勤拉取',
  //     //       icon:
  //     //         'http://git.n22.com.cn:8089/assets/favicon-7901bd695fb93edb07975966062049829afb56cf11511236e61bcf425070e36e.png',
  //     //       href: 'http://git.n22.com.cn:8089/'
  //     //     },
  //     //     {
  //     //       title: 'SVN仓库',
  //     //       description: '勤推送,勤拉取',
  //     //       icon: './icons/svn.ico',
  //     //       href: 'https://n22beijing.imwork.net:10480/!/#'
  //     //     },
  //     //     {
  //     //       title: '阿亮UI库',
  //     //       description: '新框架通用UI库',
  //     //       icon: 'http://vue-mobile.gitee.io/static/image/al.svg',
  //     //       href: 'http://vue-mobile.gitee.io/al-mobile/#/zh-CN/home'
  //     //     }
  //     //   ]
  //     // }
  //   ]
  // }
];
