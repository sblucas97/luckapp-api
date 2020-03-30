import Koa from 'koa'
import router from 'routes'
import KoaBody from 'koa-body'
import Logger from 'koa-logger'

const app = new Koa()

app.use(KoaBody({ multipart: true }))
app.use(Logger())

app.use(async (ctx, next) => {
  try {
    ctx.body = await next()
  } catch (err) {
    console.log(err)
  }
})

app.use(router.routes())
app.use(router.allowedMethods())

export default app
