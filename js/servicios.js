//SECCION DE SERVICIOS

const servicios = [
    {
        id:01,
        Titulo:'Entrevista nutricional ,<br>antropometria y plan personalizado.',
        Descripcion:'Incluye antropometria para conocer el estado de grasa <br> y musculo una entrevista nutricional y <br>laconfeccion de un plan alimentario según objetivos.<br><strong class="precio">Presencial</strong>',
        img:'../public/icons/logo1.PNG',
        precio: 7000
    },
    {
        id:02,
        Titulo:'Entrevista nutricional <br> y plan personalizado.',
        Descripcion:'Incluye entrevista nutricional y<br>confección del plan alimentario según objetivos.<br><strong class="precio">Presencial u online</strong>',
        img:'../public/icons/logo2.PNG',
        precio: 5000
    },
    {
        id:03,
        Titulo:'Control Nutricional.',
        Descripcion:'Incluye control nutricional.<br><strong class="precio">Presencial y online</strong>',
        img:'../public/icons/logo3.PNG',
        precio: 3500
    },
    {
        id:04,
        Titulo:'Antropometria.',
        Descripcion:'Incluye antropometria completa (perfiles ISAK 1 o 2) <br> con entrega y explicación de informe.<br><strong class="precio">Presencial</strong>',
        img:'../public/icons/logo4.PNG',
        precio: 3000
    },
    
];

    const section = document.querySelector('#servicios');
    servicios.forEach(service => {
        const article = document.createElement('article')
        article.className = 'article'
        article.innerHTML = 
        `
        <div class="aling">
        <div class="art-content">
        <img class="img-content" src="${service.img}" alt="${service.img}"> 
        <h3><strong class="precio">${service.Titulo}</strong></h3>
        <p>${service.Descripcion}</p>
        <p><strong class="precio">$${service.precio}</strong></p>
        <a href="../views/Turnos.html"><button class="btn-content">Pedi un turno</button></a>
        </div>
        </div>
        `
        document.body.appendChild(article)
    });

    
        