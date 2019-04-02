import COLORS from '../assets/colors'
import MATERIAL_COLORS from '../assets/material-colors'
import template from './template'

const MAIN_COLORS_ENUM = {
    RED: 'red',
    YELLOW: 'yellow',
    GREEN: 'green',
    PINK: 'pink',
    WHITE: 'white',
    indigo: 'indigo',
    purple: 'purple',
    blue: 'blue',
    cyan: 'cyan',
    teal: 'teal',
    lime: 'lime',
    amber: 'amber',
    orange: 'orange',
    brown: 'brown',
    grey: 'grey',
}


class ColorPicker extends HTMLElement {
    constructor() {
        super()
        this._shadow = this.attachShadow({ mode: 'open' })
        this.mainColorClickHandler = this.mainColorClickHandler.bind(this)
        this._shadow.appendChild(template.content.cloneNode(true))
        this.$mainColorList = this._shadow.querySelector('.main-color-list')
        this.$selectedColorPallete = this._shadow.querySelector('.selected-color-pallete')
        this.renderMainColorList()
    }

    get input() {
        this._input
    }

    set input(color) {
        this._input = color
        let elem = this.shadow.querySelector('.context-span')
        elem.innerHTML = color
    }

    get colors() {
        return this._colors
    }

    set colors(colorList) {
        this._colors = colorList
        // this.renderColorList(this._colors)
    }

    renderMainColorList() {
        const mainColors = Object.values(MAIN_COLORS_ENUM)
        mainColors.forEach(colorName => {
            const $colorListItem = document.createElement('li')
            const $colorName = document.createElement('span')
            $colorName.setAttribute('class', 'color-field')
            $colorListItem.appendChild($colorName)
            $colorName.innerHTML = colorName
            $colorListItem.style.background = COLORS[colorName]
            this.$mainColorList.appendChild($colorListItem)
        })
    }

    renderColorPallete(colorName) {
        const filteredColorKeys = Object.keys(MATERIAL_COLORS).filter(color => color.includes(colorName))
        this.$selectedColorPallete.innerHTML = ''
        filteredColorKeys.forEach(colorName => {
            const $colorListItem = document.createElement('li')
            // $colorListItem.setAttribute('class','pallete-animation')
            const $colorItem = document.createElement('span')
            $colorItem.setAttribute('class', 'color-field')
            $colorListItem.appendChild($colorItem)
            $colorItem.innerHTML = `<style>
            .color-field {
            display: inline-block;
                height:100px;
                width:30px;
                        }
                                    </style>${colorName}`
            $colorItem.style.background = MATERIAL_COLORS[colorName]
            this.$selectedColorPallete.appendChild($colorListItem)
        })
    }

    connectedCallback() {
        const colorFields = this._shadow.querySelectorAll('.main-color-list li span')
        colorFields.forEach(colorElm =>
            colorElm.addEventListener('click', this.mainColorClickHandler))
    }

    disconnectedCallback() {
        const mainColorsFields = this._shadow.querySelectorAll('span')
        mainColorsFields.forEach(colorElm =>
            colorElm.removeEventListener('click', this.mainColorClickHandler)
        )
    }

    mainColorClickHandler(event) {
        this.renderColorPallete(event.target.innerHTML)
    }

}

customElements.define('color-picker', ColorPicker)


