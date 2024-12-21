const { sequelize, DataTypes } = require('../lib');

const employee = sequelize.define('employee', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.TEXT,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
});

module.exports = employee;
