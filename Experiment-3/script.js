function changeHeading() {
    let text = document.getElementById("newHeading").value;
    if (text.trim() !== "") {
        document.getElementById("mainHeading").innerText = text;
    }
}

function changeBackground() {
    document.body.style.background =
        document.body.style.background === "lightyellow" ? "#f1f1f1" : "lightyellow";
}

function increaseFont() {
    let para = document.getElementById("samplePara");
    let size = window.getComputedStyle(para).fontSize;
    para.style.fontSize = (parseFloat(size) + 2) + "px";
}

function togglePara() {
    let para = document.getElementById("samplePara");
    para.style.display = (para.style.display === "none") ? "block" : "none";
}

function resetAll() {
    document.getElementById("mainHeading").innerText = "Welcome to JavaScript Lab";
    document.getElementById("samplePara").style.fontSize = "18px";
    document.getElementById("samplePara").style.display = "block";
    document.body.style.background = "#f1f1f1";
    document.getElementById("newHeading").value = "";
}