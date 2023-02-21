//Funcionalidad del Navbar

/**Cuando hago click en la clase button le añado y le quito la clase active (toogle)
 * toogle de la clase active
*/

const button = document.querySelector('.button');

const nav = document.querySelector('.nav');

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
});

<<<<<<< HEAD
//------------------------
=======
const btn_dark = document.getElementById('btn_dark');
const main_all = document.querySelector('white_mode_all');


btn_dark.addEventListener('click', (e)=>{
        document.body.classList.toggle('dark_mode')
});


>>>>>>> 2fcc215211f54f89e5a366d1822dd2f96a25319d
