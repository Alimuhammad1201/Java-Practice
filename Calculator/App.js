function addToScreen(value) {
    document.getElementById('screen').value += value;
}

function clearScreen(value){
    document.getElementById('screen').value = '';
}

function calculate(){
    var cal = document.getElementById('screen').value;
    var res = eval(cal);
    document.getElementById('screen').value = res
}
   

    
    