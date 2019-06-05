const user = require('../models/db').user

const getUserById = async function (ctx) {
  await user.findOne({where:{id:ctx.params.id}})
    .then(userinfo=>{
      ctx.body = userinfo
    })
    .catch(err=>{
      ctx.body = err
    })
}

const getUserByName = async function(ctx) {
  await user.findOne({where:{name:ctx.params.name}})
    .then(userinfo=>{
      ctx.body = userinfo
    })
}
module.exports = {getUserById,getUserByName}
