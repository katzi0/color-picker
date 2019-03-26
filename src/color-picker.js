class ColorPicker extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        var wrapper = document.createElement('span')
        wrapper.setAttribute('class', 'wrapper')
        wrapper.innerText = 'yay succeed'
    }
}

customElements.define('color-picker', ColorPicker)

window.onload = () => {
    const colotPicker = document.createElement('color-picker')
    document.body.appendChild(colotPicker)
}

