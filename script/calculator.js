function Clear(){
    document.getElementById('index').value = '';
}

function Display(number){
    document.getElementById('index').value += number;
}

function calculetValue(){
    var store = document.getElementById('index').value; 

    document.getElementById('index').value ="Answer = "+ eval(store);
}

function position(){
    document.getElementById('name').style.display = 'none';
}