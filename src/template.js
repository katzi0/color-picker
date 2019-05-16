const templateStr = `
    <style>
            .overlay {
            opacity: 1;
            visibility: visible;
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.42);
            -webkit-transition: opacity 0.5s;
            transition: opacity 0.5s;
            display: flex;
            align-items: center; 
            justify-content: center;
        }
    
        .overlay-hidden {
            opacity: 0;
            visibility: hidden;
            -webkit-transition: opacity 0.5s, visibility 0s 0.5s;
            transition: opacity 0.5s, visibility 0s 0.5s;
        }
    .hidden{
    visibility: hidden;
        display: none;
    }
    .wrapper {
        display:flex;
        flex-direction: column;
        border:1px solid ghostwhite;
        padding-top: 20px;
    }
    .main-color-list {
        display: flex;
    }
    .main-color-list li{
        margin-top: 20px;
        height: 60px;
        display: flex;
        border: 1px solid gray;
        border-radius: 28px;
        width: 60px;
    }
    .main-color-list li span {
        flex:1;
    }
    .pallate-wrapper{
        display: flex;
        justify-content: space-around;
     }
    .selected-color-pallete {
        position: relative;
        width: 200px;
        height: 300px;
        top: 0px;
    }
    .selected-color-pallete li {
            position: absolute;
            top:200px;
            list-style: none;
            height: 30px;
            transform-origin: top right;
            border:1px solid darkgray;         
    }   
    .selected-color-pallete li:nth-child(18){
        transform: rotate(10deg);
    }
    .selected-color-pallete li:nth-child(17){
        transform: rotate(20deg);
    }
    .selected-color-pallete li:nth-child(16){
        transform: rotate(30deg);
    }
    .selected-color-pallete li:nth-child(15){
        transform: rotate(40deg);
    }
    .selected-color-pallete li:nth-child(14){
        transform: rotate(50deg);
    }
    .selected-color-pallete li:nth-child(13){
        transform: rotate(60deg);
    }
    .selected-color-pallete li:nth-child(12){
        transform: rotate(70deg);
    }
    .selected-color-pallete li:nth-child(11){
        transform: rotate(80deg);
    }
    .selected-color-pallete li:nth-child(10){
        transform: rotate(90deg);
    }
    .selected-color-pallete li:nth-child(9){
        transform: rotate(100deg);
    }
    .selected-color-pallete li:nth-child(8){
        transform: rotate(110deg);
    }
    .selected-color-pallete li:nth-child(7){
        transform: rotate(120deg);
    }
    .selected-color-pallete li:nth-child(6){
        transform: rotate(130deg);
    }
    .selected-color-pallete li:nth-child(5){
        transform: rotate(140deg);
    }
    .selected-color-pallete li:nth-child(4){
        transform: rotate(150deg);
    }
    .selected-color-pallete li:nth-child(3){
        transform: rotate(160deg);
    }
    .selected-color-pallete li:nth-child(2){
        transform: rotate(170deg);
    }
    .selected-color-pallete li:nth-child(1){
        transform: rotate(180deg);
    }
    
</style>
<div class="overlay overlay-hidden">
    <div class="wrapper">
        <div class="pallate-wrapper">
            <ul class="selected-color-pallete"></ul>   
        </div>
         <div>
            <ul class="main-color-list"></ul>
            <button id="toggleColorPicker">toggleColorPicker</button>
        </div>
        <div class="selected-color">
            <span class="context-span"></span>
        </div>
        <div class="classic-color-input hidden">
            <input type="color" />
        </div>
    </div>
</div>
`

export default templateStr
