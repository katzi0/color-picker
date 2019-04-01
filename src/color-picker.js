import COLORS from '../assets/colors'
import MATERIAL_COLORS from '../assets/material-colors'

const template = document.createElement('template')
template.innerHTML = `
    <div class="wrapper">
        <ul class="main-color-list"></ul>
        <ul class="selected-color-pallete"></ul>   
    </div>
`

const MAIN_COLORS_ENUM = {
    RED: 'red',
    YELLOW: 'yellow',
    GREEN: 'green',
    PINK: 'pink',
    WHITE: 'white',
}


class ColorPicker extends HTMLElement {
    set input(color) {
        this._input = color
        let elem = this.shadow.querySelector('.context-span')
        elem.innerHTML = color
    }

    get input() {
        this._input
    }

    set colors(colorList) {
        this._colors = colorList
        // this.renderColorList(this._colors)
    }

    get colors() {
        return this._colors
    }

    constructor() {
        super()
        this._shadow = this.attachShadow({ mode: 'open' })
        // const $wrapper = document.createElement('div')
        // $wrapper.setAttribute('class', 'wrapper')
        // const $context = document.createElement('span')
        // $context.setAttribute('class', 'context-span')
        // const $colorsWrapper = document.createElement('div')
        // $colorsWrapper.setAttribute('class', 'colors-wrapper')
        // this.$colorList = document.createElement('ul')
        // this.$colorList.setAttribute('class', 'color-list')
        // $colorsWrapper.appendChild(this.$colorList)
        // $wrapper.appendChild($context)
        // $wrapper.appendChild($colorsWrapper)

        this._shadow.appendChild(template.content.cloneNode(true))
        this.$mainColorList = this._shadow.querySelector('.main-color-list')
        this.$selectedColorPallete = this._shadow.querySelector('.selected-color-pallete')
        this.renderMainColorList()
    }


    renderMainColorList() {
        const mainColors = Object.values(MAIN_COLORS_ENUM)
        mainColors.forEach(colorName => {
            const $colorListItem = document.createElement('li')
            const $colorItem = document.createElement('span')
            $colorItem.setAttribute('class','color-field')
            $colorListItem.appendChild($colorItem)
            $colorItem.innerHTML = colorName
            $colorItem.style.background = COLORS[colorName]
            this.$mainColorList.appendChild($colorListItem)
        })
    }

    renderColorPallete(colorName) {
        const filteredColorKeys = Object.keys(MATERIAL_COLORS).filter(color => color.includes(colorName))
        console.log(filteredColorKeys)
    }

    connectedCallback(){
        const colorFields = this._shadow.querySelectorAll('span')
        colorFields.forEach(colorElm =>
            colorElm.addEventListener('click', () => {
                this.renderColorPallete(colorElm.innerHTML)
            })
        )
    }


}

customElements.define('color-picker', ColorPicker)


