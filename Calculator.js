let outputScreen = document.getElementById("output-screen");

function display(num) {
    outputScreen.value += num;
}

function calculate() {
    try {
        outputScreen.value = eval(outputScreen.value);
    } catch (err) {
        alert("Invalid");
    }
}

function clearScreen() { 
    outputScreen.value = "";
}

function deleteLast() { 
    outputScreen.value = outputScreen.value.slice(0, -1);
}
