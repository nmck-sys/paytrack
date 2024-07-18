// Get a reference to the #add-employees-btn element

const addEmployeesBtn = document.querySelector('#add-employees-btn')

// Collect employee data
const collectEmployees = function() {
// TODO: Get user input to create and return an array of employee objects
    let employees = [];
    let isThereMore = true

    while (isThereMore) {
        const firstName = prompt("enter the employee's first name");
        const lastName = prompt("enter the employee's last name");
        const salary = parseInt(prompt("enter the employee's salary"));

        // if (firstName && lastName && salary){
        // }
        const employee = {
          firstName: firstName, 
          lastName: lastName,
          salary: salary
        }
        employees.push(employee)
        isThereMore = confirm("do you want to add another employee")
      }
      
      return employees;
}


// Display the average salary
const displayAverageSalary = function findAverage(employeesArray) {
  // TODO: Calculate and display the average salary
let totalSalary = 0;
for (let i = 0; i < employeesArray.length; i++) {
    // i starts at 0, until it reaches the end of the array, keep going
    totalSalary += employeesArray[i].salary;
    // 0 + 100 = 100
    // 100 + 50 = 150
}

let average = totalSalary/employeesArray.length

console.log("The average salary between our employees is " + average);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  console.log(employeesArray);
    const random = Math.floor(Math.random() * employeesArray.length);
//    console.log("Congratulations to " + employeesArray[random] + ", our random drawing winner!");
// TODO: Select and display a random employee
console.log(`Congratulations ${employeesArray[random].firstName} ${employeesArray[random].lastName}`)
}
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);