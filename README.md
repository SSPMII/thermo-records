# 热电偶记录的一个小网页

- 使用 Nuxt 3， prisma， tailwindcss，以及 element-plus，具体看 package.json
- 数据库使用 mysql，具体见 prisma 的配置文件 schema.prisma
- 测试的两组数据，在搜索框中输入 test 或 test2

## 安装依赖

其它基本和 Nuxt 官网一样

```bash
# npm
npm install

服务器地址 `http://localhost:3000`:

```bash
# npm
npm run dev

```

## 生成生产环境文件

使用 Build

```bash
# npm
npm run build

```

本地预览

```bash
# npm
npm run preview

```

## 部署

更改 `\server\api\records\[name].get.js` 中的 `DATABASE_URL` 为正式的数据库地址

进行 build

按提示执行 `node .output/server/index.mjs`

# 预览
![homepage](README/homepage.jpeg)

![pageTest](README/pageTest.jpeg)