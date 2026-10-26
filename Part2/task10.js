let card = document.getElementById("card");
let text = document.getElementById("text");

card.onmouseenter = function() {
    card.classList.add("highlight");
    text.textContent = "Mouse is on the card";
};

card.onmouseleave = function() {
    card.classList.remove("highlight");
    text.textContent = "Move the mouse over the card";
};

card.onfocus = function() {
    card.classList.add("highlight");
    text.textContent = "Card is focused";
};

card.onblur = function() {
    card.classList.remove("highlight");
    text.textContent = "Move the mouse over the card";
};