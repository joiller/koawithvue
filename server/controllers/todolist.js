const todolist = require('../models/db').todolist
const jwt = require('jsonwebtoken')

const getTodoListByid = async function (ctx) {
  await todolist.findAll({
    where:{
      user_id:ctx.request.body.id
    }
  }).then(value => {
    ctx.body = JSON.stringify(value)
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

const toggleStatus = async function (ctx){
  console.log(ctx.request.body)
  if (ctx.request.body.status) {
    await todolist.update({status: false},{
      where: {
        id: ctx.request.body.todoid
      }
    }).then(value => {
      ctx.body = JSON.stringify(value)
    })
  }else {
    await todolist.update({status: true},{
      where: {
        id: ctx.request.body.todoid
      }
    }).then(value => {
      ctx.body = JSON.stringify(value)
    })
  }
}

module.exports = {
  getTodoListByid,
  createTodoList,
  toggleStatus
}
