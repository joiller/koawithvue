const todolist = require('../models/db').todolist
const jwt = require('jsonwebtoken')

const getTodoListByid = async function () {
  await todolist.findAll({
    where:{
      user_id:id
    }
  })
}


const createTodoList = async function (data) {
  await todolist.create({
    user_id: data.id,
    content: data.content,
    status: data.status
  })
  console.log(`create at uid:${data.id}`)
}

module.exports = {
  getTodoListByid,
  createTodoList
}
