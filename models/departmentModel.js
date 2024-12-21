const { sequelize, DataTypes } = require('../lib');

const department = sequelize.define('department', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
    values: [
      'Engineering',
      'Marketing',
      'Design',
      'Sales',
      'Accounts',
      'Research and Development',
    ],
  },
});

module.exports = department;
