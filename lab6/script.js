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
let rgbLightningEl = document.getElementsByClassName('square--rgb-lightning')[0];
rgbLightningEl.addEventListener(onclick, );
rgbLightningEl.onclick = () => {
    rgbLightningEl.style.backgroundColor = getRandomColor();
}
