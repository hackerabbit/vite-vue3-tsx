### vite-vue3-tsx

看名字就知道本项目是一个在vue3中使用tsx的项目。

至于为什么要这样呢？
- vue3中的template对ts不太友好
- 习惯于react的jsx语法，又不能很好的解决class组件的副作用以及HOC的使用和hooks的闭包和依赖头疼的问题。

本项目有两个分支
- master
  - 只包含最基本的vue3 + router + vuex + eslint + ts
- Integrated-UI-framework
  - 除了最基本还涵盖了Element-plus，以及一些小的示例demo。

原文项目博客地址
- [极致的开发体验 ! Vite + Vue 3 + tsx](https://juejin.cn/post/6972094589251354632#heading-24)。

本人跑原项目，出了很多问题。所以百度出了此项目。但是任然有些不太满意的地方
- eslint会报错，据说是配置问题。
- import tsx或ts文件，不能带后缀。这个是ts解析器规定的。

额，就这些吧，与各位菜鸡共勉，求大神优化。或者大家都提点建议。
