const { sequelize, DataTypes } = require('../lib');

const role = sequelize.define('role', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.TEXT,
    unique: true,
    allowNull: false,
    values: [
      'Software Engineer',
      'Marketing Specialist',
      'Product Manager',
      'Software Tester',
      'Associate Software Tester',
    ],
  },
});

module.exports = role;
