let employees = [];

function addEmployee() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;

    if (!name || !id || !salary || !dept) {
        alert("Please fill all fields.");
        return;
    }

    employees.push({ name, id, salary, dept });
    alert("Employee Added!");
}

function displayTable(data) {
    if (data.length === 0) {
        document.getElementById("output").innerHTML = "<h3>No Records Found</h3>";
        return;
    }

    let table = `
    <table>
        <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Salary</th>
            <th>Department</th>
        </tr>`;

    data.forEach(emp => {
        table += `
        <tr>
            <td>${emp.name}</td>
            <td>${emp.id}</td>
            <td>${emp.salary}</td>
            <td>${emp.dept}</td>
        </tr>`;
    });

    table += "</table>";
    document.getElementById("output").innerHTML = table;
}

function displayAll() {
    displayTable(employees);
}

function salaryAbove50000() {
    let filtered = employees.filter(emp => emp.salary > 50000);
    displayTable(filtered);
}

function totalSalary() {
    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    document.getElementById("output").innerHTML = `<h3>Total Salary: ${total}</h3>`;
}

function averageSalary() {
    if (employees.length === 0) return;

    let avg = employees.reduce((sum, emp) => sum + emp.salary, 0) / employees.length;
    document.getElementById("output").innerHTML = `<h3>Average Salary: ${avg.toFixed(2)}</h3>`;
}

function countByDepartment() {
    let counts = {};

    employees.forEach(emp => {
        counts[emp.dept] = (counts[emp.dept] || 0) + 1;
    });

    let result = "<h3>Count by Department:</h3>";

    for (let dept in counts) {
        result += `<p><b>${dept}</b>: ${counts[dept]}</p>`;
    }

    document.getElementById("output").innerHTML = result;
}

function minimumSalary() {
    if (employees.length === 0) return;

    let minEmp = employees.reduce((min, emp) =>
        emp.salary < min.salary ? emp : min
    );

    displayTable([minEmp]);
}

function employeesByDepartment() {
    let deptName = prompt("Enter Department Name:");

    if (!deptName) return;

    let filtered = employees.filter(emp =>
        emp.dept.toLowerCase() === deptName.toLowerCase()
    );

    displayTable(filtered);
}