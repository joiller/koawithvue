const Router = require('koa-router')
const user = require('../controllers/user')
const todolist = require('../controllers/todolist')
const router = new Router()
router.get('/', async ctx => {
  await ctx.render('index.html', {user: 'jhl'})
})

router.get('/userid/:id', async ctx => { await user.getUserById(ctx) })
router.post('/username', async ctx => { await user.getUserByName(ctx) })
router.post('/createTodo',async ctx=>{await todolist.createTodoList(ctx)})
router.post('/getTodoListByid', async ctx=>{await todolist.getTodoListByid(ctx)})
router.post('/toggleStatus',async ctx=>{await todolist.toggleStatus(ctx)})

module.exports = router
