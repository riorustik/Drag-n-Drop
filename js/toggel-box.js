const check = document.getElementById('switch');
const firstBox = document.querySelector('.first');
const secondBox = document.querySelector('.second');

check.addEventListener('change', (e) => {
    if (e.target.checked) {
        firstBox.style.display = 'none';
        secondBox.style.display = 'flex';
    } else {
        firstBox.style.display = 'flex';
        secondBox.style.display = 'none';
    }
})