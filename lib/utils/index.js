const {
  employeeDepartment,
  employeeRole,
  department,
  role,
} = require('../../models');

// Helper function to get employee's associated departments
async function getEmployeeDepartments(employeeId) {
  const employeeDepartments = await employeeDepartment.findAll({
    where: { employeeId },
  });

  let departmentData;
  for (let empDep of employeeDepartments) {
    departmentData = await department.findOne({
      where: { id: empDep.departmentId },
    });
  }

  return departmentData;
}

// Helper function to get employee's associated departments
async function getEmployeeRoles(employeeId) {
  const employeeRoles = await employeeRole.findAll({
    where: { employeeId },
  });

  let RoleData;
  for (let empRol of employeeRoles) {
    RoleData = await role.findOne({
      where: { id: empRol.roleId },
    });
  }

  return RoleData;
}

// Helper function to get employee details with associated departments and roles
async function getEmployeeDetails(employeeData) {
  const department = await getEmployeeDepartments(employeeData.id);
  const role = await getEmployeeRoles(employeeData.id);

  console.log(
    employeeData,
    department.dataValues,
    role.dataValues,
    999999999999
  );

  return {
    ...employeeData,
    department: { ...department.dataValues },
    role: { ...role.dataValues },
  };
}

module.exports = { getEmployeeDetails, getEmployeeDepartments };
