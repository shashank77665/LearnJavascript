
const red = document.querySelector(".red");
const lightblue = document.querySelector(".lightblue");
const purple = document.querySelector(".purple");
const salmon = document.querySelector(".salmon");
const magenta = document.querySelector(".magenta");
const circle = document.querySelector(".circle");


const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
};


const magicColorChanger = (element, color) => {
    element.addEventListener("mouseenter", () => {
        circle.style.backgroundColor = color;
    });
};

// Attach the event listeners to each color bar
magicColorChanger(red, getBGColor(red));
magicColorChanger(lightblue, getBGColor(lightblue));
magicColorChanger(purple, getBGColor(purple));
magicColorChanger(salmon, getBGColor(salmon));
magicColorChanger(magenta, getBGColor(magenta));
