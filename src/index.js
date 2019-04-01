const btnElm = document.createElement('button')
btnElm.setAttribute('class', 'testButton')
const colorPicker = document.createElement('color-picker')
colorPicker.setAttribute('id', 'testColorPicker')
document.body.appendChild(btnElm)
document.body.appendChild(colorPicker)
const btnShai = document.querySelector('.testButton')
const result = document.createElement('div')
result.setAttribute('class', 'result')
document.body.appendChild(result)
btnShai.addEventListener('click', () => {
    const colorPicker = document.getElementById('testColorPicker')
    // colorPicker.colors = COLORS
    // document.querySelector('.result').appendChild(colorPicker.)
})




// function component() {
//     let element = document.createElement('div')
//
//     element.innerHTML = 'hello'
//
//     return element
// }
//
// document.body.appendChild(component())
