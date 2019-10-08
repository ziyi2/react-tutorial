# 设置编辑器和应用

可以在 Create React App 中添加改善编辑器或者应用体验的工具。 这里有一些提高效率的技巧：

- VS Code 的 [ESLint](https://eslint.org/) 保存自动修复
- 在 ESLint 中集成 [Prettier](https://prettier.io/)
- 强制检测 git 暂存区的代码能否通过 ESLint 校验规范
- 强制使用符合 Angular 规范的 git commit 提交说明并快速生成开发日志

## 在编辑器中自动修复 Lint

> 提示：ESLint 用于校验 JavaScript 代码是否符合某些校验规则集合，Create React App 默认集成了 ESLint 并有意提供了常见的错误规则配置[`eslint-config-react-app`](https://www.npmjs.com/package/eslint-config-react-app)。初始化的 VS Code 编辑器如果没有安装 ESLint 插件不会自动在编辑器中提示 ESLint 错误信息（具体表现为在代码下显示红色的波浪线），Create React App 可以在`npm start`启动项目后从终端或者浏览器控制台查看 ESLint 错误信息，具体和 Webpack 中的[`eslint-loader`](https://github.com/webpack-contrib/eslint-loader)相关。

在 Create React App 应用已有 ESLint 校验功能的基础上实现 VS Code 的保存自动修复功能。安装 VS Code 的[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)插件并设置 VS Code 的 Auto-Fix on Save 配置（此配置支持 TypeScript）：

```javascript
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    { "language": "react", "autoFix": true },
    { "language": "typescript", "autoFix": true },
    { "language": "typescriptreact","autoFix": true }
  ],
  "eslint.autoFixOnSave": true
}
```

配置完后可以在 VS Code 中写一些不符合 ESLint 规则的错误格式代码，检查保存后能否自动修复格式错误（并不是所有的 ESLint 错误都可以智能修复，而是某些格式错误可以自动修复，保存的功能类似于执行`eslint --fix`）。

## 在编辑器中自动格式化代码

> 提示：Prettier 主要用于校验代码是否符合某些特定的格式规范，以确保项目中的代码风格。Create React App 默认没有集成 Prettier，因此可以在项目中进行集成。Prettier 可以单独使用（如果和 ESLint 同时运行可能会产生某些格式规则冲突），也可以在 ESLint 中集成。由于 Create React App 集成了 ESLint，因此可以将 Prettier 集成到 ESLint 中进行使用。

安装 prettier 依赖(注意使用`--exact`精准安装版本号)：

```javascript
npm install --save-dev --save-exact prettier
```

Eslint 集成 Prettier 并去除两者的格式规则冲突：

```javascript
npm install --save-dev eslint-config-prettier eslint-plugin-prettier
```

- [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier)：处理 ESLint 和 Prettier 中可能存在冲突的格式规则
- [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier)：在 ESLint 中加入和 Prettier 格式化校验相关的规则集

> 提示：`eslint-config-xxx`主要用于分享 ESLint 校验配置给其他开发者使用。`eslint-plugin-xxx` 主要是提供规则（`rules`）、环境（`environments`）、处理器（`processors`）以及多插件配置等。

新建`.eslintrc.json`配置文件(优先读取配置文件，此时`package.json`中的 ESLint 配置会失效)：

```javascript
{
  "extends": ["react-app", "plugin:prettier/recommended"]
}
```

更多 Eslint 集成 Prettier 的细节可查看[`eslint-plugin-prettier/recommended-configuration`](https://github.com/prettier/eslint-plugin-prettier#recommended-configuration)。

VS Code 安装 [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) 插件，如果单独使用 Prettier 可设置 VS Code(`settings.json`)的 Auto-Format on Save 功能（当然也可以用于格式化 ESLint 检测范围之外的文件）：

```javascript
{
  // Set the default
  "editor.formatOnSave": false,
  // Enable per-language
  "[javascript]": {
    "editor.formatOnSave": true
  }
}
```

> 具体可查看官方插件[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)的配置说明 。

## 在应用中加入提交代码的 ESLint 检查功能

> 提示：使用工具强制要求提交的代码通过 ESLint 校验，否则 💩 一样的代码就会被停止提交。

安装以下依赖：

```javascript
npm install --save-dev husky lint-staged
```

- [husky](https://github.com/typicode/husky)：用于处理 [Git 钩子](https://git-scm.com/docs/githooks)。
- [lint-staged](https://github.com/okonet/lint-staged)：在 git 中的 staged 文件上运行脚本。

在`package.json`中处理 lint-staged 的 Git 钩子：

```javascript
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
}
```

新建`.lintstagedrc`配置文件：

```javascript
{
  "*.js": [
    "eslint src",
    "git add"
  ]
}
```

此时进行提交说明`git commit`时 Git 暂存区的代码（本次提交修改的代码）都会进行 ESLint 检测，如果检测不通过则会停止此次提交操作。更多关于`lint-staged`的配置说明可查看[Reformatting the code](https://github.com/okonet/lint-staged#reformatting-the-code)（示例是 Prettier 的配置）。

## 在应用中加入提交说明规范工具

> 使用`git cz`代替`git commit`进行 Angular 规范的提交说明。详情可查看[Cz 工具集使用介绍 - 规范 Git 提交说明](https://juejin.im/post/5cc4694a6fb9a03238106eb9)。

### 快速生成 Angular 规范的提交说明

提供选择的提交信息类别，快速生成提交说明。安装 [cz](https://github.com/commitizen/cz-cli) 工具:

```javascript
npm install -g commitizen
```

定制提交说明，可以使用 [`cz-customizable`](https://github.com/leonardoanalista/cz-customizable) 适配器：

```javascript
npm install cz-customizable --save-dev
```

修改`package.json`

```javascript
"config": {
  "commitizen": {
    "path": "node_modules/cz-customizable"
  }
}
```

新增`.cz-config.js`定制说明文件（可参考官方示例[`cz-config-EXAMPLE.js`](https://github.com/leonardoanalista/cz-customizable/blob/master/cz-config-EXAMPLE.js)）

### 检测提交说明是否符合 Angular 规范

校验提交说明是否符合规范，安装校验工具 [`commitlint`](https://github.com/conventional-changelog/commitlint)：

```javascript
npm install --save-dev @commitlint/cli
```

安装符合 Angular 风格的校验规则

```javascript
npm install --save-dev @commitlint/config-conventional
```

在项目中新建 `commitlint.config.js` 文件并设置校验规则：

```javascript
module.exports = {
  extends: ["@commitlint/config-conventional"]
};
```

在 `package.json` 中配置 `git commit` 提交时的校验钩子

```javascript
"husky": {
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}
```

### 根据 Angular 规范的提交说明生成开发日志

使用[cz](https://github.com/commitizen/cz-cli)工具集配套[conventional-changelog](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog)可以快速生成开发日志：

```javascript
npm install conventional-changelog --save-dev
```

在`pacage.json`中加入生成日志命令：

```javascript
"version": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0 && git add CHANGELOG.md"
```

You could follow the following workflow

- Make changes
- Commit those changes
- Pull all the tags
- Run the npm version [patch|minor|major] command
- Push

执行`npm run version`后可在本地项目生产的日志`CHANGELOG.md`。

> 注意要使用正确的`type`，否则生成的日志会不准确。

## 参考链接

- [ESLint 官网](https://eslint.org/)
- [Preitter 官网](https://prettier.io/)
- [githooks](https://git-scm.com/docs/githooks)
- [Cz 工具集使用介绍 - 规范 Git 提交说明](https://juejin.im/post/5cc4694a6fb9a03238106eb9)
