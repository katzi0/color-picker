import COLORS from '../assets/colors'
import MATERIAL_COLORS from '../assets/material-colors'
import templateStr from './template'
import MAIN_COLORS_ENUM from './colorEnum'


const template = document.createElement('template')
template.innerHTML =  templateStr

class ColorPicker extends HTMLElement {
    constructor() {
        super()
        this._shadow = this.attachShadow({ mode: 'open' })
        // this.mainColorClickHandler = this.mainColorClickHandler.bind(this)
        this._shadow.appendChild(template.content.cloneNode(true))
    }
    connectedCallback() {
        this.renderMainColorList()
        this.$selectedColorPallete = this._shadow.querySelector('.selected-color-pallete')
        const colorFields = this._shadow.querySelectorAll('.main-color-list li span')
        colorFields.forEach(colorElm =>
            colorElm.addEventListener('click', this.mainColorClickHandler))
    }

    renderMainColorList() {
        const mainColors = Object.values(MAIN_COLORS_ENUM)
        const $mainColorList = this._shadow.querySelector('.main-color-list')
        mainColors.forEach(colorName => {
            const $colorListItem = document.createElement('li')
            const $colorName = document.createElement('span')
            $colorName.setAttribute('class', 'color-field')
            $colorName.setAttribute('class', colorName)
            $colorListItem.appendChild($colorName)
            $colorName.innerHTML = colorName
            $colorListItem.style.background = COLORS[colorName]
            $mainColorList.appendChild($colorListItem)
        })
    }

    renderColorPallete(colorName) {
        const filteredColorKeys = Object.keys(MATERIAL_COLORS).filter(color => color.includes(colorName))
        this.$selectedColorPallete.innerHTML = ''
        filteredColorKeys.forEach(colorName => {
            const $colorListItem = document.createElement('li')
            const $colorItem = document.createElement('span')
            $colorItem.setAttribute('class', 'color-field')
            $colorListItem.appendChild($colorItem)
            $colorItem.innerHTML =
                `<style>
                    .color-field {
                        display: inline-block;
                        height: 0px;
                        width: 0px;
                        transition: width 0.5s, height 0.1s;
                        border: 1px solid darkgray;
                    }
                </style>${colorName}`
            $colorItem.style.background = MATERIAL_COLORS[colorName]
            $colorItem.onclick = () => this.input = MATERIAL_COLORS[colorName]
            this.$selectedColorPallete.appendChild($colorListItem)
        })
        const $colorFanItems = this._shadow.querySelectorAll('.color-field')
        setTimeout(() => {
            $colorFanItems.forEach(item => {
                item.style.width = '200px'
                item.style.height = '100px'
            })
        }, 0)
    }


    disconnectedCallback() {
        const mainColorsFields = this._shadow.querySelectorAll('span')
        mainColorsFields.forEach(colorElm =>
            colorElm.removeEventListener('click', this.mainColorClickHandler)
        )
    }

    mainColorClickHandler = (event) => {
        this.renderColorPallete(event.target.innerHTML)
    }

    get input() {
        return this._input
    }

    set input(color) {
        this._input = color
        let elem = this._shadow.querySelector('.context-span')
        elem.innerHTML = color
    }

    open(){
        const content =  this.querySelector('.wrapper')
        content.classList.remove('hidden')
    }
}

customElements.define('color-picker', ColorPicker)

//move later to sample page
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
btnShai.innerHTML= 'click me'
btnShai.addEventListener('click', () => {
    ColorPicker.open()
    // colorPicker.remove()
})

export default ColorPicker
