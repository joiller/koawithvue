const Router = require('koa-router')
const user = require('../controllers/user')
const router = new Router()
router.get('/', async ctx => {
  await ctx.render('index.html', {user: 'jhl'})
})

router.get('/userid/:id', async ctx => { await user.getUserById(ctx) })
router.post('/username', async ctx => { await user.getUserByName(ctx) })

module.exports = router
