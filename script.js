let btn = document.getElementById('btn');
let ebtn = document.getElementById('e_btn');
let square = document.getElementById('square');
let circle = document.getElementById('circle');
let range = document.getElementById('range');
let span = document.getElementById('range-span');

function toggler() {
    let text = document.querySelectorAll('input')[1].value;
    console.log(text);
    square.style.backgroundColor = text;
}
function display() {
    circle.style = 'display: none';
}
function rangeEvent(event) {
    span.textContent = event.target.value;
    circle.style.width = span.textContent + '%';
    circle.style.height = span.textContent + '%';
}
btn.addEventListener('click', toggler);
ebtn.addEventListener('click', display);
range.addEventListener('input', rangeEvent);
range.addEventListener('change', rangeEvent);



