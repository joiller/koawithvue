const user = require('../models/db').user
const jwt = require('koa-jwt')

const getUserById = async function (ctx) {
  await user.findOne({where: {id: ctx.params.id}})
    .then(userinfo => {
      ctx.body = userinfo
    })
    .catch(err => {
      ctx.body = err
    })
}

const getUserByName = async function (ctx) {
  await user.findOne({where: {name: ctx.request.body.name}})
    .then(userinfo => {
      if (userinfo.password !== ctx.request.password || !userinfo) {
        console.log(userinfo.password,ctx.request.password)
        ctx.body = {
          success: false,
          info: '用户名或密码错误！'
        }
      } else {
        const userToken = {
          name: userinfo.name,
          id: userinfo.id
        }
        const secret = 'vue-koa-secret'
        const token = jwt(userToken, secret)
        ctx.body = {
          success: true,
          token: token
        }
      }
    })
}
module.exports = {getUserById, getUserByName}
