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
