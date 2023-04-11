import { DataTypes, Sequelize } from 'sequelize'

const db = new Sequelize(
    'u831279752_lazanailartbot',
    'admin',
    'xM5Sy0b4Kc@',
    {
        host: '86.38.202.204',
        dialect: 'mysql',
        port: 3306,
    })
const Users = db.define('Users', {
    userId: { type: DataTypes.INTEGER },
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

export { Users, db }
