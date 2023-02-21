//SECCION DE SERVICIOS

const servicios = [
    {
        id:01,
        Titulo:'Entrevista nutricional , antropometria y plan personalizado',
        Descripcion:'Incluye antropometria para <br> conocer el estado de grasa y musculo<br>una entrevista nutricional y la<br>confeccion de un plan alimentario según objetivos.<br><strong class="precio">Presencial</strong>',
        img:'../public/icons/plan1.png',
        precio: 7000
    },
    {
        id:02,
        Titulo:'Entrevista nutricional y plan personalizado',
        Descripcion:'Incluye entrevista nutricional y<br>confección del plan alimentario según objetivos.<br><strong class="precio">Presencial u online</strong>',
        img:'../public/icons/plan2.png',
        precio: 5000
    },
    {
        id:03,
        Titulo:'Control Nutricional',
        Descripcion:'Incluye control nutricional.<br><strong class="precio">Presencial y online</strong>',
        img:'../public/icons/plan3.png',
        precio: 3500
    },
    {
        id:04,
        Titulo:'Antropometria',
        Descripcion:'Incluye antropometria completa (perfiles ISAK 1 o 2)<br>con entrega y explicación de informe.<br><strong class="precio">Presencial</strong>',
        img:'../public/icons/plan3.png',
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

    //Calculadora de IMC
        // función que realiza los calculos
        function calculateIMC() {
            const weight = document.getElementById("weight").value;
            const height = document.getElementById("height").value / 100;
            const age = document.getElementById("age").value;
            const sex = document.getElementById("sex").value;
            
            if (weight && height && age) {
              const imc = weight / (height ** 2);
              
              let category;
              if (sex === "hombre") {
                if (imc < 20) {
                  category = "Bajo peso";
                } else if (imc < 25) {
                  category = "Peso normal";
                } else if (imc < 30) {
                  category = "Sobrepeso";
                } else if (imc < 40) {
                  category = "Obesidad";
                } else {
                  category = "Obesidad extrema";
                }
              } else if (sex === "mujer") {
                if (imc < 19) {
                  category = "Bajo peso";
                } else if (imc < 24) {
                  category = "Peso normal";
                } else if (imc < 29) {
                  category = "Sobrepeso";
                } else if (imc < 39) {
                  category = "Obesidad";
                } else {
                  category = "Obesidad extrema";
                }
              }
              const resultElement = document.getElementById("result")
            resultElement.innerHTML=`Tu imc es ${imc.toFixed(2)}`  
            }
        }
        
        //Calcular calorias
        function calcular() {
          var peso = document.getElementById("peso").value;
          var altura = document.getElementById("altura").value;
          var edad = document.getElementById("edad").value;
          var sexo = document.getElementById("genero").value;
          var actividad = document.getElementById("activity").value;
        
          var calorias = 0;
        
          if (sexo == "hombre") {
            calorias = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * edad);
          } else if (sexo == "mujer") {
            calorias = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * edad);
          }
        
          calorias *= actividad;
        
          document.getElementById("calorias").innerHTML = Math.round(calorias);
        }

        //Calcular porcentaje graso
        function calculo() {
          var pesaje = document.getElementById("pesaje").value;
          var cintura = document.getElementById("cintura").value;
          var cadera = document.getElementById("cadera").value;
          var sexo = document.getElementById("sex").value;
        
          var porcentaje = 0;
        
          if (sexo == "masculino") {
            porcentaje = 495 / (1.0324 - 0.19077 * Math.log10(cintura - cadera) + 0.15456 * Math.log10(pesaje)) - 450;
          } else if (sexo == "femenino") {
            porcentaje = 495 / (1.29579 - 0.35004 * Math.log10(cintura + cadera - pesaje) + 0.22100 * Math.log10(pesaje)) - 450;
          }
        
          document.getElementById("porcentaje").innerHTML = porcentaje;
        console.log(calculo)
        }
        