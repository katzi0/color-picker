import COLORS from '../assets/colors'

class ColorPicker extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        const wrapper = document.createElement('div')
        wrapper.setAttribute('class', 'wrapper')
        this.context = document.createElement('span')
        this.context.setAttribute('class', 'context-span')
        this._colors = document.createElement('div')
        this._colors.setAttribute('class','colors-wrapper')
        const colorList = document.createElement('ul')
        colorList.setAttribute('class','color-list')
        this.colors(COLORS)
        this._colors.appendChild(colorList)
        wrapper.appendChild(this.context)
        wrapper.appendChild(this._colors)
        this.shadow.appendChild(wrapper)
        this.input = ''
    }

    set input(color) {
        this._input = color
        let elem = this.shadow.querySelector('.context-span')
        elem.innerHTML = color
    }

    get input() {
        this._input
    }
    set colors(colorList){
        console.log(colorList)
    }
    get colors(){
        return this._colors
    }
}

customElements.define('color-picker', ColorPicker)


