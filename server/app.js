const Koa = require('koa'),
  router = require('./routes/router'),
  views = require('koa-views'),
  colors = require('colors'),
  cors = require('koa-cors2')


const app = new Koa()
app.use(require('koa-bodyparser')())

app.use(views('./schema'))

app.use(async (ctx,next)=>{
  let start = Date.now()
  await next()
  console.log(`${ctx.method} ${ctx.url} ${(Date.now()-start)/1000}s`)
})

app.use(router.routes())

app.listen(3000)

console.log(`${'[SERVER]'.red} is running at ${'http://localhost:3000'.green}`)
