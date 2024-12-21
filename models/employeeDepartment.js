const { sequelize, DataTypes } = require('../lib');
const employee = require('../models/employeeModel');
const department = require('../models/departmentModel');

const employeeDepartment = sequelize.define('employeeDepartment', {
  employeeId: {
    type: DataTypes.INTEGER,
    references: {
      model: employee,
      key: 'id',
    },
  },
  departmentId: {
    type: DataTypes.INTEGER,
    references: {
      model: department,
      key: 'id',
    },
  },
});

department.belongsToMany(employee, { through: employeeDepartment });
employee.belongsTo(department, {});

module.exports = employeeDepartment;
