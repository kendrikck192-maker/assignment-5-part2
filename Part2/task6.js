
let number = 0;
let count = document.getElementById("count");

function update() {
    count.textContent = number;
}

document.getElementById("increase").onclick = function() {
    number++;
    update();
};

document.getElementById("decrease").onclick = function() {
    if (number > 0) {
        number--;
        update();
    }
};

document.getElementById("reset").onclick = function() {
    number = 0;
    update();
};
