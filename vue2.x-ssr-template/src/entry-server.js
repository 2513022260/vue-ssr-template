import { createApp } from './main'

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp()

    router.push(context.url)

    router.onReady(() => {
      // 会在页面渲染完后调用
      context.rendered = () => {
        context.state  = store.state
      }

      resolve(app)
    }, reject)
  })
}
