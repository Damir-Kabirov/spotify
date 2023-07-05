const siderBars = document.querySelector('.siderbars')
const main = document.querySelector('.main')
siderBars.style.height = main.offsetHeight
console.log(main.offsetHeight)
window.addEventListener('resize',()=>{
    siderBars.style.height = document.querySelector('body').offsetHeight
})