// Endpoint to seed database
const router = require('express').Router();
const { sequelize } = require('../lib');
// models
const {
  role,
  employee,
  department,
  employeeDepartment,
  employeeRole,
} = require('../models');

router.route('/').get(async (req, res) => {
  await sequelize.sync({ force: true });

  const departments = await department.bulkCreate([
    { id: 1, name: 'Engineering' },
    { id: 2, name: 'Marketing' },
  ]);

  const roles = await role.bulkCreate([
    { id: 1, title: 'Software Engineer' },
    { id: 2, title: 'Marketing Specialist' },
    { id: 3, title: 'Product Manager' },
  ]);

  const employees = await employee.bulkCreate([
    { id: 1, name: 'Rahul Sharma', email: 'rahul.sharma@example.com' },
    { id: 2, name: 'Priya Singh', email: 'priya.singh@example.com' },
    { id: 3, name: 'Ankit Verma', email: 'ankit.verma@example.com' },
  ]);

  // Associate employees with departments and roles using create method on junction models
  await employeeDepartment.create({
    employeeId: employees[0].id,
    departmentId: departments[0].id,
  });
  await employeeRole.create({
    employeeId: employees[0].id,
    roleId: roles[0].id,
  });

  await employeeDepartment.create({
    employeeId: employees[1].id,
    departmentId: departments[1].id,
  });
  await employeeRole.create({
    employeeId: employees[1].id,
    roleId: roles[1].id,
  });

  await employeeDepartment.create({
    employeeId: employees[2].id,
    departmentId: departments[0].id,
  });
  await employeeRole.create({
    employeeId: employees[2].id,
    roleId: roles[2].id,
  });

  return res.json({ message: 'Database seeded!' });
});

module.exports = router;
