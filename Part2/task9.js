let input = document.getElementById("input");
let status = document.getElementById("status");
let result = document.getElementById("result");

input.onkeydown = function(event) {

    status.textContent = "Key: " + event.key;

    if (event.key == "Enter") {
        event.preventDefault();
        result.textContent = input.value;
    }

    if (event.key == "Escape") {
        input.value = "";
        result.textContent = "";
    }
};