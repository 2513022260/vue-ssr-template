const fs = require('fs')
const path = require('path')
// koa
const Koa = require('koa')
const app = new Koa()
// 渲染器
const { createBundleRenderer } = require('vue-server-renderer')
const serverBundle = require(path.resolve(__dirname, '../dist/server/vue-ssr-server-bundle.json'))
const clientManifest = require(path.resolve(__dirname, '../dist/client/vue-ssr-client-manifest.json'))
const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template: fs.readFileSync(path.resolve(__dirname, '../public/index.temp.html'), 'utf-8'),
  clientManifest
})

// 添加一个中间件
// 处理静态文件
app.use(async (ctx, next) => {
  const context = {
    title: 'ssr test',
    url: ctx.url,
    metas: '' // 写网站关键词，网站描述，给爬虫看
  }

  const html = await renderer.renderToString(context)
  ctx.body = html
})

const port = 3000
app.listen(port, _ => {
  console.log(`server started at localhost:${port}`)
})
