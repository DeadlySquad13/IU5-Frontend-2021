const arena = document.getElementsByClassName('tag-along-arena')[0];
const follower = document.getElementsByClassName('tag-along-arena__follower')[0];

let follow = false;
follower.addEventListener('click', () => follow = true)
document.addEventListener('keyup', keyboardEvent => {
    if (keyboardEvent.code === 'Escape')
        follow = false;
});

const startFollowing = cursor => {
    if (!follow) return;
    follower.style.left = cursor.offsetX + 'px';
    follower.style.top = cursor.offsetY + 'px';
}
document.addEventListener('mousemove', startFollowing);