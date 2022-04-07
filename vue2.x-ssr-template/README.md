# vue2.x-ssr-template

## 思路
1. 通用代码 【vue、router、store】
    app.js
        entry.client.js
            webpack build:client
                client 【vue-ssr-client-manifest.json】
        entry.server.js
            webpack build:server
                server 【vue-ssr-server-bundle.json】

2. server/index.js 【服务端】
    server 【vue-ssr-server-bundle.json】
    client 【vue-ssr-client-manifest.json】
      Browser【浏览器】
