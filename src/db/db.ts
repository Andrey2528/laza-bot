import { DataTypes, Sequelize } from 'sequelize'

const db = new Sequelize(
    'u831279752_lazanailartbot',
    'u831279752_admin',
    'xM5Sy0b4Kc@',
    {
        host: 'sql960.main-hosting.eu',
        dialect: 'mysql',
    })
const Users = db.define('Users', {
    userId: { type: DataTypes.INTEGER },
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

export { Users, db }
