const employee={
    name:"Mercy",
    streetAdress:"4th street kasarani",
};
function updateEmployeeWithKeyAndValue(employee, key, value){
     const newEmployee = { ...employee };

     newEmployee[key] = value;
  
    return newEmployee;
  }
  let destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => { employee[key] = value; return employee; }

function deleteFromEmployeeByKey(employee, key){
  const updateEmployee = {...employee}
    delete updateEmployee[key];
    return updateEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
  const employeeByKey = employee;
  delete employeeByKey[key];
  return employeeByKey;
}

