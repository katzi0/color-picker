class ColorPicker extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        const wrapper = document.createElement('div')
        wrapper.setAttribute('class', 'wrapper')
        this.context = document.createElement('span')
        this.context.setAttribute('class', 'context-span')
        wrapper.appendChild(this.context)
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
}

customElements.define('color-picker', ColorPicker)


