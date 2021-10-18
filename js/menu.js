let btnmenu = document.getElementById('btnmenu'); /*buscar un elemento por id*/
let menu = document.getElementById('menu');
btnmenu.addEventListener('click',function(){
    'use strict';
    menu.classList.toggle('mostrar');
})/*al darle click, le damos una funcion de mostrar*/