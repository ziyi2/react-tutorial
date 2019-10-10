# VS Code 配置

> 主要是添加插件和修改 VS Code 中的 `settings.json` 中的配置，从而提供开发效率。

## 在 React 的`.js` 中支持使用 Emmet

Emmet 是 VS Code 自带的功能，但是对于在`.js`文件中默认是不支持的，可以修改 `settings.json` 中的配置支持：

```javascript
"emmet.includeLanguages": {
  // vue
  "vue-html": "html",
  // react
  "javascript": "javascriptreact"
}
```

## 快速创建注释

> 添加 [Document This](https://marketplace.visualstudio.com/items?itemName=joelday.docthis) 插件，用于快速生成注释。

在 `settings.json` 中的配置注释信息(以下配置可以在编辑器的设置中进行勾选设置，这是我的配置信息)：

```javascript
"docthis.authorName": "子弈",
"docthis.includeAuthorTag": true,
"docthis.includeDateTag": true,
"docthis.includeDescriptionTag": true,
"docthis.inferTypesFromNames": true,
"docthis.enableHungarianNotationEvaluation": true,
"docthis.includeMemberOfOnInterfaceMembers": false,
"docthis.includeMemberOfOnClassMembers": false,
```

此时可以通过**双击**`Ctrl + Alt + D`快速生成注释（例如对于函数的块注释）：

```javascript
/**
 * @description
 * @author 子弈
 * @date 2019-10-10
 * @returns
 */
function App() {}
```

## 自动修复 Lint

具体可查看[设置编辑器和应用/在编辑器中自动修复 Lint](https://github.com/ziyi2/react-tutorial/blob/master/docs/tools.md#%E5%9C%A8%E7%BC%96%E8%BE%91%E5%99%A8%E4%B8%AD%E8%87%AA%E5%8A%A8%E4%BF%AE%E5%A4%8D-lint)。

## 自动格式化代码

具体可查看[设置编辑器和应用/在编辑器中自动格式化代码](https://github.com/ziyi2/react-tutorial/blob/master/docs/tools.md#%E5%9C%A8%E7%BC%96%E8%BE%91%E5%99%A8%E4%B8%AD%E8%87%AA%E5%8A%A8%E6%A0%BC%E5%BC%8F%E5%8C%96%E4%BB%A3%E7%A0%81)。
