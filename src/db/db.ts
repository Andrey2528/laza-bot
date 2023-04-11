import { DataTypes, Sequelize } from 'sequelize'

/*const sequelize = new Sequelize('laza-db', 'postgres', 'VIsFCxAF7jucKIJ', { //название дб, имя пользователя и пароль(паросль оставил пустным)
  dialect: 'postgres',
  //host: 'laza-db.internal',
  host: process.env.PSQL_HOST || "laza-bot-db.flycast:",
  port: 8080,
})*/

const sequelize = new Sequelize('postgres://postgres:VIsFCxAF7jucKIJ@laza-bot-db.flycast:5432')


const Users = sequelize.define('Users', {
  userId: { type: DataTypes.INTEGER },
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

export { Users, sequelize }
