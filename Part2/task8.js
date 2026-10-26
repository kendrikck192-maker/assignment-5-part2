let select = document.getElementById("animal");
let image = document.getElementById("image");
let caption = document.getElementById("caption");

select.onchange = function() {
    image.src = "images/" + select.value;
    image.alt = select.options[select.selectedIndex].text;
    caption.textContent = image.alt;
};