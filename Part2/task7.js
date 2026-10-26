let input = document.getElementById("input");
let preview = document.getElementById("preview");
let count = document.getElementById("count");

input.oninput = function() {
    if (input.value == "") {
        preview.textContent = "Your text will appear here";
    } else {
        preview.textContent = input.value;
    }

    count.textContent = input.value.length;
};

document.getElementById("clear").onclick = function() {
    input.value = "";
    preview.textContent = "Your text will appear here";
    count.textContent = 0;
    input.focus();
};