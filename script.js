const changeColorBtn = document.querySelector('#change-color-btn')
const pageColor = document.querySelector('main')

const randomHexCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16)
    console.log('#' + n.slice(0, 6))
    return '#' + n.slice(0, 6)
}

changeColorBtn.addEventListener('click', ()=> {
    pageColor.style.backgroundColor = randomHexCode()
    
})

