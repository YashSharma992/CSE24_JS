let employees = [];

function addEmployee() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;

    if (name === "" || id === "" || salary === "" || dept === "") {
        alert("Please fill all fields");
        return;
    }

    employees.push({ name, id, salary, dept });
    document.getElementById("output").innerHTML = "Employee Added Successfully!";
}

function displayAll() {
    let output = "All Employees:\n";

    employees.forEach(emp => {
        output += `Name: ${emp.name} | ID: ${emp.id} | Salary: ₹${emp.salary} | Dept: ${emp.dept}\n`;
    });

    document.getElementById("output").innerHTML = output;
}

function salaryAbove() {
    let output = "Employees with Salary > ₹50,000:\n";

    employees.forEach(emp => {
        if (emp.salary > 50000) {
            output += `Name: ${emp.name} | Salary: ₹${emp.salary}\n`;
        }
    });

    document.getElementById("output").innerHTML = output;
}

function totalSalary() {
    let total = 0;

    employees.forEach(emp => {
        total += emp.salary;
    });

    document.getElementById("output").innerHTML = "Total Salary Payout: ₹" + total;
}

function averageSalary() {
    if (employees.length === 0) return;

    let total = 0;
    employees.forEach(emp => total += emp.salary);

    let avg = total / employees.length;

    document.getElementById("output").innerHTML =
        "Average Salary: ₹" + avg.toFixed(2);
}

function countDept() {
    let deptCount = {};

    employees.forEach(emp => {
        deptCount[emp.dept] = (deptCount[emp.dept] || 0) + 1;
    });

    let output = "Employee Count by Department:\n";

    for (let d in deptCount) {
        output += `${d}: ${deptCount[d]}\n`;
    }

    document.getElementById("output").innerHTML = output;
}