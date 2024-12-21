const { sequelize, DataTypes } = require('../lib');
const role = require('../models/roleModel');
const employee = require('../models/employeeModel');

const employeeRole = sequelize.define('employeeRole', {
  employeeId: {
    type: DataTypes.INTEGER,
    references: {
      model: role,
      key: 'id',
    },
  },
  roleId: {
    type: DataTypes.INTEGER,
    references: {
      model: role,
      key: 'id',
    },
  },
});

role.belongsToMany(employee, { through: employeeRole });
employee.belongsTo(role, {});

module.exports = employeeRole;
