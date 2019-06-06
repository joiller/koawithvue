const todolist = require('../models/db').todolist
const jwt = require('jsonwebtoken')

const getTodoListByid = async function () {
  await todolist.findAll({
    where:{
      user_id:id
    }
  })
}


const createTodoList = async function (ctx) {
  console.log(ctx.request.body)
  await todolist.create({
    user_id: ctx.request.body.id,
    content: ctx.request.body.content,
    status: ctx.request.body.status
  }).then(value => {
    ctx.body = {
      success:true
    }
  })
  console.log(`create at user:${ctx.request.body.name}`)
}

module.exports = {
  getTodoListByid,
  createTodoList
}
