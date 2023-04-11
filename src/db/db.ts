import { DataTypes, Sequelize } from 'sequelize'

const sequelize = new Sequelize('laza-bot-db', 'postgres', 'VIsFCxAF7jucKIJ', {
  host: 'laza-bot-db.flycast',
  dialect: 'postgres',
  port: 8080
})

const Users = sequelize.define('Users', {
  userId: { type: DataTypes.INTEGER },
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

export { Users, sequelize }
