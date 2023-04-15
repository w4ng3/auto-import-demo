import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite"; // 自动按需导入组件
import AutoImport from "unplugin-auto-import/vite"; // 自动导入Api
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // 自动导入vue相关的Api
      imports: [
        "vue",
        "vue-router",
        "@vueuse/core",
        // 自定义 ：https://github.com/antfu/unplugin-auto-import#configurations
        {
          // onBeforeRouteLeave 'vue-router’的这个Api未被自动导入，在这里补充
          "vue-router": ["onBeforeRouteLeave"],
        },
      ],
      // 指定文件夹位置， 加 /** 可遍历子目录
      dirs: ["src/hooks"],
      // 生成auto-import.d.ts声明文件
      dts: "src/auto-import.d.ts",
      // 解析 Api
      resolvers: [
        // ElementPlusResolver()
      ],
    }),
    Components({
      // 指定组件所在文件夹的位置，默认是src/components
      dirs: ["src/components"],
      // ui库解析器
      resolvers: [
        // ElementPlusResolver(),
        // AntDesignVueResolver({ importLess: true }),
        // NaiveUiResolver()
      ],
      // 组件的有效文件扩展名
      extensions: ["vue"],
      // 配置type文件生成位置，生成components.d.ts; 可以设置为 false
      dts: "src/components.d.ts",
      // 遍历子目录
      deep: true,
    }),
  ],
});
