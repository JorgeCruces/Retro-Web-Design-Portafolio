let x = 0;
let elements = document.getElementsByClassName('sword');
let array = [...elements];

array[0].classList.remove('hidden');


document.addEventListener('keydown',(e) =>{
    array.forEach(x =>{x.classList.add('hidden')});

    if(e.keyCode == '39'){
        if(x <2){
            x++;
        }
    }
    if(e.keyCode == '37'){
        if(x > 0){
            x--;
        }
    }

    array[x].classList.remove('hidden');
});