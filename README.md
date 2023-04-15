# Vue 3 + Vite: 自动 import

- 组件模块使用 unplugin-vue-components, 如一些 UI 库：NaiveUI、Ant Design Vue...
- 非组件模块使用 unplugin-auto-import, 如 vueUse、 navieUI 的 useDialog、useMessage...

```bash
npm i unplugin-auto-import unplugin-vue-components -D
```

- 配置 vite.config.js

## tips

- 全局声明文件 `auto-import.d.ts `和 `components.d.ts` 在启动和热更新时会自动生成，建议放入 `gitigonre`，避免冲突
- 声明文件里没有出现的 api 还是需要自己导入
- 手写的 import 语句不要注释，不需要就删掉，否则可能运行异常

### 参考

- [vite 自动导入组件、API，包括 element-plus、icon](https://juejin.cn/post/7130123453947969573)
- [github: unplugin-vue-componentsPublic](https://github.com/antfu/unplugin-vue-components)
