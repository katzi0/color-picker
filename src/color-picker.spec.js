import MAIN_COLORS_ENUM from './colorEnum'
import './color-picker'
describe('App tests', () => {
    let elm, shadowRoot
    beforeEach(() => {
        elm = document.createElement('color-picker')
        shadowRoot = elm.shadowRoot
        document.body.appendChild(elm)
    })

    describe('init color picker', () => {
        it('should add a div with main-color-list', () => {
            expect(shadowRoot.querySelector('.main-color-list')).toBeTruthy()
        })
    })
    describe('render color list', () => {
        it('should contain all colors from const', () => {
            const numOfMainColors = Object.keys(MAIN_COLORS_ENUM).length
            const $mainColorList = shadowRoot.querySelector('.main-color-list')
            expect($mainColorList.children.length).toEqual(numOfMainColors)
        })
    })
//     describe('color list correct values', () => {
//         it('each color in list should have same name class and background color', () => {
//             const mainColorsNames = Object.values(MAIN_COLORS_ENUM)
//             const $mainColorList = shadowRoot.querySelector('.main-color-list')
//             Array.from($mainColorList.children).forEach(colorLi => {
//                 console.log(shadowRoot.querySelector(`.main-color-list ${colorLi.innerHTML}`).innerHTML === colorLi.innerHTML)
//                 const elm = colorLi.querySelector('span').innerText
//                     console.log(elm)
//                 // console.log(shadowRoot.querySelector(`.main-color-list . ${colorLi.innerHTML}`))
//             })
//         })
//     })
})
