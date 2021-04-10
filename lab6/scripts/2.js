const counterElement = document.getElementsByClassName('counter')[0];

let counter;

// TODO: pass counter by reference.
counterElement.addEventListener('pointerover', () => {
    counter = setInterval(() => {
        counterElement.innerHTML++;
    }, 1000);
});
counterElement.addEventListener('pointerout', () => {
    clearInterval(counter);
});