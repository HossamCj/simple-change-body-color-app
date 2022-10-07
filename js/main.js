const btn = document.querySelector('#btn')

btn.addEventListener('click', randomBackground)

function randomBackground() {
    document.body.style.backgroundColor = '#' + Math.random().toString(16).slice(2, 8)
}