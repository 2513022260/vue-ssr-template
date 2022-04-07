// 客户端 entry 只需创建应用程序，并且将其挂载到 DOM 中
import { createApp } from './main'

const { app, router, store } = createApp()

// 在服务器端渲染路由组件树，所产生的 context.state 将作为脱水数据挂载到 window.__INITIAL_STATE__
// 在客户端，只需要将 window.__INITIAL_STATE__ 重新注入到 store 中即可（通过 store.replaceState 函数）
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

router.onReady(() => {
  // app挂载
  app.$mount('#app')
})
