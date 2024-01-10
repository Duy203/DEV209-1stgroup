document.getElementById('add').addEventListener('click', add);
document.getElementById('subtract').addEventListener('click', subtract);
document.getElementById('multiply').addEventListener('click', multiply);
document.getElementById('divide').addEventListener('click', divide);




function add(event) {
    let num1 = parseFloat(document.getElementById("textBox1").value);
    let num2 = parseFloat(document.getElementById("textBox2").value);
    document.getElementById("resultDisplay").innerHTML = "Result: " + (num1 + num2);
}

function subtract(event) {
    let num1 = parseFloat(document.getElementById("textBox1").value);
    let num2 = parseFloat(document.getElementById("textBox2").value);
    document.getElementById("resultDisplay").innerHTML = "Result: " + (num1 - num2);
}

function multiply(event) {
    let num1 = parseFloat(document.getElementById("textBox1").value);
    let num2 = parseFloat(document.getElementById("textBox2").value);
    document.getElementById("resultDisplay").innerHTML = "Result: " + (num1 * num2);
}

function divide(event) {
    let num1 = parseFloat(document.getElementById("textBox1").value);
    let num2 = parseFloat(document.getElementById("textBox2").value);

    if (num2 !== 0) {
        document.getElementById("resultDisplay").innerHTML = "Result: " + (num1 / num2);
    } else {
        //alert('you cannot divide by zero')
        document.getElementById("warningDisplay").innerHTML = "Error: Cannot divide by zero!";
    }
}

