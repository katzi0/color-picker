class ColorPicker extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode:'open'})
        var wrapper = document.createElement('span')
        wrapper.setAttribute('class','wrapper')
        wrapper.innerText = 'yay succeed'
    }
}

customElements.define('colorPicker',ColorPicker)
