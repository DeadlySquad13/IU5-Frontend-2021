const arena = document.getElementsByClassName('tag-along-arena')[0];
const follower = document.getElementsByClassName('tag-along-arena__follower')[0];

let follow = false;
follower.addEventListener('click', () =>  follow = true)
document.addEventListener('keyup', keyboardEvent => {
     if (keyboardEvent.code === 'Escape')
        follow = false;
});

// offsetX and offseyY are really tricky (can be solved with zIndex but still problematic when cursor wanders off the arena) so it's better to implement via pageX and pageY.
const startFollowing = cursor => {
    if (!follow) return;
    const width = follower.getBoundingClientRect().width;
    const height = follower.getBoundingClientRect().height; // I was making program as if follower can be rectangle too.
    let x;
    const leftBorderCoordinates = arena.offsetLeft;
    const rightBorderCoordinates = arena.offsetLeft + arena.offsetWidth;
    const minX = leftBorderCoordinates + width;
    const maxX = rightBorderCoordinates - width;
    if (cursor.pageX < minX) {
        x = 0 - 0.5; // Some strange offsets here...
    } else if (cursor.pageX > maxX) {
        x = arena.offsetWidth - width - 4; // ...and over there.
    } else {
        x = cursor.pageX - arena.offsetLeft - width / 2;
    }

    let y;
    const topBorderCoordinates = arena.offsetTop;
    const bottomBorderCoordinates = arena.offsetTop + arena.offsetHeight;
    const minY = topBorderCoordinates + height;
    const maxY = bottomBorderCoordinates - height;
    if (cursor.pageY < minY) {
        y = 0; // Some strange offsets here...
    } else if (cursor.pageY > maxY) {
        y = arena.offsetHeight - height - 5; // ...and over there.
    } else {
        y = cursor.pageY - arena.offsetTop - width / 2;
    }

    follower.style.left = `${x}px`;
    follower.style.top = `${y}px`;
}
document.addEventListener('mousemove', startFollowing, false);