//define utilites
//function to append html elements
function addElement(element, parent) {
    if (typeof element === "undefined") {
        throw "Unable to append undefined element!";
    }
    if (parent === null) {
        document.body.appendChild(element);
    } else {
        document.getElementById(parent).appendChild(element);
    }
}
//get mouse cords, buttons
//mouse coordinates relative to top left corner of page
//0: left, 1: middle, 2: right
function getMouse(event) {
    return {x: event.clientX, y: event.clientY, click: null};
}

//hidden content for the page
//whenever the button is pressed, more text is revealed
let data = {};

let text = [
    ``,
    ``,
    ``,
    ``,
    ``,
    ``
];
