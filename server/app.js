const Koa = require('koa'),
  router = require('./routes/router'),
  views = require('koa-views'),
  colors = require('colors')


const app = new Koa()
app.use(views('./schema'))
// app.use(require('koa-bodyparser')())

app.use(async (ctx,next)=>{
  let start = Date.now()
  await next()
  console.log(`${ctx.method} ${ctx.url} ${Date.now()-start}s`)
})

app.use(router.routes())

app.listen(3000)

console.log(`${'[SERVER]'.red} is running at ${'http://localhost:3000'.green}`)
