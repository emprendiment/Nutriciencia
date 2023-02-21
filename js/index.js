//Funcionalidad del Navbar

/**Cuando hago click en la clase button le añado y le quito la clase active (toogle)
 * toogle de la clase active
*/

const button = document.querySelector('.button');

const nav = document.querySelector('.nav');

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
});

//------------------------
