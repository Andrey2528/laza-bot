import { DataTypes, Sequelize } from 'sequelize'

const sequelize = new Sequelize('laza-db', 'postgres', 'M6KlebgYJt7jnfK', { //название дб, имя пользователя и пароль(паросль оставил пустным)
  dialect: 'postgres',
  host: 'laza-db.internal',
  port: 5432,

})

const Users = sequelize.define('Users', {
  userId: { type: DataTypes.INTEGER },
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

export { Users, sequelize }
