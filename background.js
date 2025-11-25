var colors = ["#f30808ff", "#ffd000ff", "#07fc71ff", "#3503f9ff"];
var index = 0;
function ubahBackground(){
    document.body.style.backgroundColor = colors
    [index];
    index++;
    
    if(index >= colors.length){
        index = 0;
    }
}