'use strict';

const fontEl = document.getElementById('font');
const heading_one = document.getElementById('heading_one');
const heading_two = document.getElementById('heading_two');


fontEl.addEventListener("change", () => {
    console.log("inside");
    heading_one.style.fontFamily = fontEl.value;
    heading_two.style.fontFamily = fontEl.value;
})
function secondary() {
    if (heading_one.classList.contains('primary'))
        heading_one.classList.remove('primary');
    if (heading_two.classList.contains('primary'))
        heading_two.classList.remove('primary');


    heading_one.classList.add('secondary');
    heading_two.classList.add('secondary');
}
function primary() {

    if (heading_one.classList.contains('secondary'))
        heading_one.classList.remove('secondary');
    if (heading_two.classList.contains('secondary'))
        heading_two.classList.remove('secondary');

    heading_one.classList.add('primary');
    heading_two.classList.add('primary');
}