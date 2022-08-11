const magnifier = document.querySelector('.magnifier')
const searchEl = document.querySelector('.search-bar-container')
const inputEl = document.querySelector('.input')
const mic = document.querySelector('.mic')

magnifier.addEventListener('click', () => {
    searchEl.classList.toggle('active')
})