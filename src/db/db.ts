import { DataTypes, Sequelize } from 'sequelize'

const sequelize = new Sequelize('TelegramBot', 'postgres', '', { //название дб, имя пользователя и пароль(паросль оставил пустным)
  dialect: 'postgres',
  host: 'laza-db.internal',
  port: 5433,

})

const Users = sequelize.define('Users', {
  userId: { type: DataTypes.INTEGER },
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

export { Users, sequelize }
