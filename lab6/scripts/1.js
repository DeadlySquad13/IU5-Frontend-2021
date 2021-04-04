// min and max included.
function rand(min, max) {
    let randomNum = Math.random() * (max - min) + min;
    return Math.round(randomNum);
}

const getRandomColor = () => {
    const hexChars = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += hexChars[rand(0, 15)];
    }
    return color;
};



const rgbLightningElement = document.getElementsByClassName('square--rgb-lightning')[0];

// Which one is better???

// Closure.
// Creates a possibility for different color generating functions.
function applyBackgroundColor(getColor) {
    return function() {
        this.style.backgroundColor = getColor();
    }
}
rgbLightningElement.addEventListener('click', applyBackgroundColor(getRandomColor));

// // IIFE.
// // No pollution in global scope.
// rgbLightningElement.addEventListener('click', (function(getColor) {
//     return function () {
//         this.style.backgroundColor = getRandomColor();
//     }
// })());

// // Bind.
// // Relatively easy to implement.
// function applyBackgroundColor(getColor) {
//     console.dir(this);
//     this.style.backgroundColor = getColor();
// }
// rgbLightningElement.addEventListener('click', applyBackgroundColor.bind(rgbLightningElement, getRandomColor));

