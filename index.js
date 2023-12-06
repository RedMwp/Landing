const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');

const oneBtn = document.querySelector('.one-btn');
const twoBtn = document.querySelector('.two-btn');
const threeBtn = document.querySelector('.three-btn');


function show(elem){
    elem.style.left =0;
    elem.style.top =0;
    elem.style.opacity=1;
}

function hide(el){
    el.style.top='-50%';
    el.style.opacity= 0;
}
oneBtn.onclick = function(){
    show(one);
    hide(two)
    hide(three);
}

twoBtn.onclick = function() {
    show(two);
    hide(one)
    hide(three);
}
threeBtn.onclick = function() {
    show(three);
    hide(two)
    hide(one);
}
show(one)