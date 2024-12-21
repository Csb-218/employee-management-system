const router = require('express').Router();

// models
const {
  role,
  employee,
  department,
  employeeDepartment,
  employeeRole,
} = require('../models');

const { getEmployeeDetails } = require('../lib/utils');

router.route('/').get(async (req, res) => {
  const response = await employee.findAll({});

  console.log(response.length);

  // const detailedEmployees = response.map(async (empl) => {
  //   // const detailedEmployee = await getEmployeeDetails(employee.dataValues);
  //   // console.log(detailedEmployee);
  //   console.log(empl);
  //   return empl.dataValues;
  // });

  let detailedEmployees = [];

  for (i = 0; i < response.length; i++) {
    detailedEmployees.push(await getEmployeeDetails(response[i].dataValues));
  }

  console.log(detailedEmployees);

  res.status(200).json({
    employees: detailedEmployees,
  });
});

module.exports = router;
