//Funcionalidad del Navbar

/**Cuando hago click en la clase button le añado y le quito la clase active (toogle)
 * toogle de la clase active
*/

const button = document.querySelector('.button');

const nav = document.querySelector('.nav');

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
});

const btn_dark = document.getElementById('btn_dark');
const main_all = document.querySelector('white_mode_all');


btn_dark.addEventListener('click', (e)=>{
        document.body.classList.toggle('dark_mode')
});



