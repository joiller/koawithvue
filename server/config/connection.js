const connection = {
  database:'nodejs',
  username:'root',
  password:'jhl233666',
  options:{
    host:'localhost',
    dialect:'mysql',
    pool:{
      max:5,
      min:0,
      acquire:30000,
      idle:10000
    }
  }
}

module.exports = connection
