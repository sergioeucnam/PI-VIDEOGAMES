const { DataTypes } = require('sequelize')
module.exports = (sequelize) => {
    sequelize.define('genre', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
}