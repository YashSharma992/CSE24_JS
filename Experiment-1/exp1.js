function calculate() {
    let num = document.getElementById("subjects").value;

    if (num <= 0) {
        alert("Enter valid number of subjects");
        return;
    }

    let total = 0;

    for (let i = 1; i <= num; i++) {
        let marks = prompt("Enter marks for subject " + i + ":");
        total += parseFloat(marks);
    }

    let avg = total / num;
    let grade = "";
    let result = "";

    if (avg >= 90) grade = "A";
    else if (avg >= 75) grade = "B+";
    else if (avg >= 60) grade = "B";
    else if (avg >= 50) grade = "C";
    else grade = "D";

    if (avg >= 33) result = "PASS";
    else result = "FAIL";

    document.getElementById("resultBox").innerHTML =
        "Total Marks: " + total +
        "<br>Average Marks: " + avg.toFixed(2) +
        "<br>Grade: " + grade +
        "<br>Result: " + result;
}