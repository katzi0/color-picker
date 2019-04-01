
const template = document.createElement('template')
template.innerHTML = `
<style>
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
    }
    .main-color-list li span {
        flex:1;
    }
     .selected-color-pallete li {
             margin-top: 120px;
            display: flex;
             height: 30px;
    }
    
</style>
    <div class="wrapper">
        <ul class="main-color-list"></ul>
        <ul class="selected-color-pallete"></ul>   
    </div>
`

export default template
