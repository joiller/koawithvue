const connection = require('../config/connection')
const Sequelize = require('sequelize')

let sequelize = new Sequelize(connection.database, connection.username, connection.password,
  connection.options)

sequelize.authenticate()
  .then(() => {
    console.log('Connection is ok')
  })
  .catch(err => {
    console.log(`err:${err}`)
  })

const User = sequelize.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    get () {
      return this.getDataValue('name')
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    set (val) {
      this.setDataValue('email', val)
      return this.email
    }
  }
})

const todolist = sequelize.define('todolist',{
  user_id:{
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  content:{
    type:Sequelize.CHAR(255)
    allowNull:false
  },
  status:{
    type:Sequelize.BOOLEAN,
    allowNull:false
  }
})

sequelize.sync()
const tables = {'user': User,'todolist':todolist}

module.exports = tables
