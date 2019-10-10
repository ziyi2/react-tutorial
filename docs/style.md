# 样式设置

## 添加 Less

> 如何添加 Sass 可以查看 Create React App 的官方文档。

Create React App 默认不支持 Less（个人比较喜欢 Less），可以通过 Webpack 配置使其支持，首先需要[暴露 Webpack 配置信息](https://www.html.cn/create-react-app/docs/available-scripts/#npm-run-eject)：

```javascript
npm run eject
```

安装[less-loader](https://github.com/webpack-contrib/less-loader)

```javascript
npm i less less-loader -D
```

在 `config/webpack.config.js` 中写入以下配置:

```javascript
// style files regexes
// const cssRegex = /\.css$/;
// const cssModuleRegex = /\.module\.css$/;
// const sassRegex = /\.(scss|sass)$/;
// const sassModuleRegex = /\.module\.(scss|sass)$/;
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

module.exports = function(webpackEnv) {
  return {
    module: {
      rules: [
        {
          OneOf: [
            {
              // Opt-in support for Less (using .less extensions).
              // By default we support Less Modules with the
              // extensions .module.less
              test: lessRegex,
              exclude: lessModuleRegex,
              use: getStyleLoaders(
                {
                  importLoaders: 2,
                  sourceMap: isEnvProduction && shouldUseSourceMap
                },
                "less-loader"
              ),
              // Don't consider CSS imports dead code even if the
              // containing package claims to have no side effects.
              // Remove this when webpack adds a warning or an error for this.
              // See https://github.com/webpack/webpack/issues/6571
              sideEffects: true
            },
            // Adds support for CSS Modules, but using Less
            // using the extension .module.less
            {
              test: lessModuleRegex,
              use: getStyleLoaders(
                {
                  importLoaders: 2,
                  sourceMap: isEnvProduction && shouldUseSourceMap,
                  modules: true,
                  getLocalIdent: getCSSModuleLocalIdent
                },
                "less-loader"
              )
            }
          ]
        }
      ]
    }
  };
};
```

## 添加 Scoped Css

> 熟悉 Vue 的同学可能都知道在 Vue 中有[Scoped CSS](https://vue-loader.vuejs.org/zh/guide/scoped-css.html)功能，那么在 React 中也可以实现类似的功能。

React 中的 CSS 解决方案有很多，例如[styled-components](https://github.com/styled-components/styled-components)、[Css Modules](https://github.com/css-modules/css-modules)(React Create App 已经支持)、[radium](https://github.com/FormidableLabs/radium)等（更多关于这些解决方案的使用可查看[React 拾遗：从 10 种现在流行的 CSS 解决方案谈谈我的最爱 （上）](https://juejin.im/post/5b39e63ae51d4562aa017c81)），但是对于 Vue 技术栈的同学而言可能都不是很熟悉，这里可以使用[styled-jsx](https://github.com/zeit/styled-jsx)实现类似 Vue 的 Scoped CSS 功能。

### 安装使用

安装 `styled-jsx`

```javascript
npm i styled-jsx -D
```

在 `package.json` 中配置 Babel(Create React App 没有使用独立文件配置 Babel，对于动态化配置 Babel 可能不是很友好)：

```javascript
"babel": {
 "plugins": [
    "styled-jsx/babel"
  ]
},
```

此时可以使用以下示例尝试是否生效：

```javascript
export default () => (
  <div>
    <p>only this paragraph will get the style :)</p>

    {/* you can include <Component />s here that include
         other <p>s that don't get unexpected styles! */}

    <style jsx>{`
      p {
        color: red;
      }
    `}</style>
  </div>
);
```

由于样式其实是一个字符串，因此可以通过变量来动态实现 CSS，这是 Vue 中的 Scoped CSS 暂时没法实现的功能（我觉得这是一个最突出的亮点）：

```javascript
const Button = props => (
  <button>
    {props.children}
    <style jsx>{`
      button {
        padding: ${"large" in props ? "50" : "20"}px;
        background: ${props.theme.background};
        color: #999;
        display: inline-block;
        font-size: 1em;
      }
    `}</style>
  </button>
);
```

### 文档说明

[styled-jsx](https://github.com/zeit/styled-jsx)更多资料可查看官方文档，官方文档列出的功能更多，归结为以下几点：

- [Babel 配置选项](https://github.com/zeit/styled-jsx#configuration-options)
- [特性](https://github.com/zeit/styled-jsx#features)
- [如何设置未被包含的根节点元素样式](https://github.com/zeit/styled-jsx#targeting-the-root)（例如上述的 button 元素）
- [如何设置全局样式](https://github.com/zeit/styled-jsx#global-styles)
- [如何设置其中的某一个样式为全局样式](https://github.com/zeit/styled-jsx#one-off-global-selectors)
- [利用多个 style 标签分离静态和动态样式](https://github.com/zeit/styled-jsx#dynamic-styles)（一旦动态样式有变化，不会重渲染静态样式）
- [内联样式优先级更高](https://github.com/zeit/styled-jsx#via-inline-style)
- [服务端渲染解决方案](https://github.com/zeit/styled-jsx#server-side-rendering)

### 通过插件支持预处理器

如果想在`styled-jsx`中支持 Less 预处理器，可通过[`styled-jsx-plugin-less`](https://github.com/erasmo-marin/styled-jsx-plugin-less)插件实现（感觉要谨慎使用，毕竟下载的仍然是 alpha 版本）：

```javascript
npm install --save-dev styled-jsx-plugin-less@alpha
```

配置 Babel：

```javascript
{
  "plugins": [
      [
        "styled-jsx/babel",
        {
          "plugins": [
            "styled-jsx-plugin-less"
          ]
        }
      ]
    ]
}
```

## 参考链接

- [React 拾遗：从 10 种现在流行的 CSS 解决方案谈谈我的最爱 （上）](https://juejin.im/post/5b39e63ae51d4562aa017c81)
