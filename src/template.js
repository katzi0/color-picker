const templateStr = `
    <style>
    .hidden{
        display: none;
    }
    .wrapper {
        display:flex;
        flex-direction: column;
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
<div class="wrapper hidden">
    <div class="pallate-wrapper">
        <ul class="selected-color-pallete"></ul>   
    </div>
     <div>
        <ul class="main-color-list"></ul>
    </div>
    <div class="selected-color">
        <span class="context-span"></span>
    </div>
</div>
`

export default templateStr
