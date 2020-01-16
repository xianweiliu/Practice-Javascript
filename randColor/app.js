// an array of eight different colors
const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "indigo",
    "violet",
];

// selects HTML tags

const sec = document.querySelector("#mainSec");
const box = document.createElement("div");
const h1 = document.querySelector("h1");

// append the div created to the section
sec.append(box);
// added class "box" to the div.
box.classList.add("box");

// added clicl event listener
box.addEventListener("click", function() {
    // run loop through out the color array
    for (let i = 0; i < colors.length; i++) {
        // generates a random number between 0-7;
        const randIdx = Math.floor(Math.random() * colors.length);
        // set the background color to a random color from the array
        box.style.backgroundColor = colors[randIdx];
        // set the color name on top of the box div
        h1.innerText = colors[randIdx];
    }
});
