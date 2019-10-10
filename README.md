# React-Tutorial

这是一个刚从 Vue 转向 React 技术栈的小白学习教程。

## 创建应用程序

Vue 的开发者一般都知道开发的标准工具[Vue CLI](https://cli.vuejs.org/zh/)，在 React 中也有类似的开发工具[Create React App](https://www.html.cn/create-react-app/docs/getting-started/)用于创建 React 应用：

```javascript
npx create-react-app react-tutorial
```

个人觉得 Vue CLI 相比 Create React App 更加灵活好用：

- 提供了插件化的思想，不仅可以通过插件快速集成工具配置（Webpack、Babel、ESLint、TypeScript 等），还可以动态扩展方案（路由、状态管理、国际化等），甚至可以自定义插件
- 灵活的脚手架设计方案（可通过 `preset.json` 快速组装官方以及自定义插件集，从而快速生成特定需求场景的脚手架）
- 可以通过图形化界面`vue ui`创建和管理项目
- Create React App 只能构建单页应用，但是 Vue CLI 也可以用于构建组件库
- Create React App 默认不允许对项目进行任何配置，当然如果对于项目需求非常简单，Create React App 不会让开发者限于脚手架设计的选择困难症

Create React App 的优势：

- 无须学习和配置构建工具
- 只需要一个构建依赖项，不会出现多个依赖项版本难以管理的问题

## 设置编辑器和应用

以前设计 Vue 脚手架时会在脚手架中集成一些提高开发效率的小工具（可以通过 Vue CLI 插件的形式集成），在 Create React App 中需要手动添加改善编辑器或者应用体验的这些工具：

- [在编辑器中自动修复 Lint](https://github.com/ziyi2/react-tutorial/blob/master/docs/tools.md#%E5%9C%A8%E7%BC%96%E8%BE%91%E5%99%A8%E4%B8%AD%E8%87%AA%E5%8A%A8%E4%BF%AE%E5%A4%8D-lint)
- [在编辑器中自动格式化代码](https://github.com/ziyi2/react-tutorial/blob/master/docs/tools.md#%E5%9C%A8%E7%BC%96%E8%BE%91%E5%99%A8%E4%B8%AD%E8%87%AA%E5%8A%A8%E6%A0%BC%E5%BC%8F%E5%8C%96%E4%BB%A3%E7%A0%81)
- [在应用中加入提交代码的 ESLint 检查功能](https://github.com/ziyi2/react-tutorial/blob/master/docs/tools.md#%E5%9C%A8%E5%BA%94%E7%94%A8%E4%B8%AD%E5%8A%A0%E5%85%A5%E6%8F%90%E4%BA%A4%E4%BB%A3%E7%A0%81%E7%9A%84-eslint-%E6%A3%80%E6%9F%A5%E5%8A%9F%E8%83%BD)
- [在应用中加入提交说明规范工具](https://github.com/ziyi2/react-tutorial/blob/master/docs/tools.md#%E5%9C%A8%E5%BA%94%E7%94%A8%E4%B8%AD%E5%8A%A0%E5%85%A5%E6%8F%90%E4%BA%A4%E8%AF%B4%E6%98%8E%E8%A7%84%E8%8C%83%E5%B7%A5%E5%85%B7)

## 样式设置

- [添加 Less]()
- [添加 Scoped Css]()

## Ant Design of React

> [antd](https://ant.design/docs/react/introduce-cn) 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。

引入 antd 尝试使用组件库。

## 路由解决方案

Vue 的路由解决方案[`vue-router`](https://github.com/vuejs/vue-router)可以通过 Vue CLI 系统的`vue create`命令快速集成到项目中，但是在 React 中需要手动集成 React 的路由解决方案[`react-router`](https://github.com/ReactTraining/react-router)：

- 路由组件
- 匹配组件
- 匹配组件渲染方式
- 导航组件
- 服务端渲染
- 滚动还原
- 嵌套路由
- 代码拆分

## React 语法

## React 调试工具

## React Redux

## React Awesome

## React Static

## React Next

## 参考链接

- [Create React App](https://www.html.cn/create-react-app/docs/getting-started/)
