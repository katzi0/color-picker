const btnElm = document.createElement('button')
btnElm.setAttribute('class', 'testButton')
const $colorPicker = document.createElement('color-picker')
$colorPicker.setAttribute('id', 'testColorPicker')
document.body.appendChild(btnElm)
document.body.appendChild($colorPicker)
const btnShai = document.querySelector('.testButton')
const result = document.createElement('div')
result.setAttribute('class', 'result')
document.body.appendChild(result)
const colorPicker = document.getElementById('testColorPicker')
btnShai.addEventListener('click', () => {
    colorPicker.remove()
})
