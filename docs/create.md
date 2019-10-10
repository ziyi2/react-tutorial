# 创建应用程序

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
