const { UUIDV4 } = require('sequelize')
const { DataTypes } = require('sequelize')
module.exports = (sequelize) => {
    sequelize.define('genre', {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
}