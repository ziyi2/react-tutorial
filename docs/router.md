# 路由解决方案

## React 路由和 Vue 路由

React 路由可以分为**动态路由**（[react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)）和**静态路由**（[react-router-config](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config)）两个概念，而 Vue 路由目前仍然只有**静态路由**。

相比 Vue 路由，React 路由的缺点：

- 没有导航守卫，路由即组件，需要自己手动实现守卫功能

当然 React 路由带来的功能更为强大：

- 不仅支持静态路由的配置方式（对象形式），也支持动态路由的配置方式（JSX 语法的组件配置形式）
- 动态路由可实现更强大的功能，例如菜单的动态化
- React Router 4 可以同时匹配多个路由并渲染对应的视图组件（包容性路由），Vue Router 根据优先级同一时刻只能匹配一个路由并渲染对应的视图组件（排他性路由）

## 动态路由

React 的动态路由采用[react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)，它主要提供了三种类型的组件：

- 路由组件（`<BrowserRouter>` 和 `<HashRouter>` ）
- 路由匹配组件（`<Route>` 和 `<Switch>`）
- 导航组件（`<Link>`、`<NavLink>`和`<Redirect>`）

安装 `react-router-dom`（已经包含了`react-router`中的对象和方法）：

```javascript
npm install react-router-dom
```

以上三种类型的组件都可以从`react-router-dom`中获取。

### 路由组件

路由组件主要有两种类型`<BrowserRouter>` 和 `<HashRouter>` ：

- BrowserRouter：它使用浏览器中的 History API 用于处理 URL，创建一个像 example.com/some/path 这样真实的 URL。路由跳转会去请求服务端对应的前端静态资源（例如路由懒加载处理），主要用于动态页面设计，例如后台管理系统。
- HashRouter：Hash history 使用 URL 中的 hash（#）部分去创建形如 example.com/#/some/path 的路由。路由跳转不会请求服务端，主要用于静态页面设计，例如博客。

路由组件的使用方法如下：

```javascript
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

### 匹配组件

有两种类型的匹配组件`<Route>` 和 `<Switch>`：

- Route：根据路径匹配对应的渲染组件，可以同时匹配多个路由
- Switch：可以实现排他性路由，从而使得同一时刻只匹配一个路由，需要嵌套 Route 使用

匹配组件的使用方法如下：

```javascript
// 如果路由是/about/1
<Route path='/about' component={About}/> // 渲染About组件
<Route path='/about/:id' component={Contact}/> // 渲染组件Contact
<Route component={NoMatch404}/> // 没有路径的路由直接渲染对应的组件NoMatch404
```

对于 Route 而言 Switch 并不是必须的配置，Switch 如果匹配到一个 Route 则不再往下匹配（如果不使用 Switch，则默认会匹配并渲染所有路由，除非使用`exeac`），如果没有匹配到路由则可以渲染一个 404 组件等。

```javascript
<Switch>
  <Route path="/about" component={About} />
  <Route path="/contact" component={Contact} />
  <Route component={NoMatch404} />
</Switch>
```

### 渲染方式

路由匹配有三种匹配的渲染方式：`component`、`render`和`children`（很少用）:

- `component`：渲染对应的组件
- `render`：一个返回组件的函数

具体的使用方式如下：

```javascript
<Switch>
  <Route path="/about" component={About} />
  <Route path="/contact" render={props => <Contact {...props} />} />
  <Route component={NoMatch404} />
</Switch>
```

### 导航组件

导航组件的用法如下：

```javascript
<Link to="/">Home</Link>
// <a href='/'>Home</a>

// 如果匹配到路由/react则会在路由组件上新增一个hurray的激活类
<NavLink to="/react" activeClassName="hurray">
  React
</NavLink>
// <a href='/react' className='hurray'>React</a>

// 重定向地址
<Redirect to="/login" />
```

## 服务端渲染

## 滚动还原

## 嵌套路由

## react-router-config

## 代码拆分

## 参考链接

- [react-router 官网](https://reacttraining.com/react-router/web/guides/quick-start)
- [Code Splitting in Create React App](https://serverless-stack.com/chapters/code-splitting-in-create-react-app.html)
