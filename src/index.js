import './color-picker'

const colorPicker = document.createElement('color-picker')
colorPicker.addEventListener('click',()=>{
    colorPicker.close()
})
window.onload = ()=>{
    document.body.appendChild(colorPicker)
    const button = document.createElement('button')
    button.innerText = 'open color picker'
    button.addEventListener('click',()=>{
        colorPicker.open()
    })
    document.body.appendChild(button)

}
