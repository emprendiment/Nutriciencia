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

     

// Función para calcular el porcentaje de grasa corporal en mujeres
function calcularPorcentajeMujer() {
  // Obtener los valores de los inputs
  const cintura = parseFloat(document.getElementById("cintura").value);
  const cadera = parseFloat(document.getElementById("cadera").value);
  const cuello = parseFloat(document.getElementById("cuello").value);
  const talla = parseFloat(document.getElementById("talla").value);

  // Calcular el porcentaje de grasa corporal en mujeres
  const porcentaje = 163.205 * Math.log10( cintura + cadera - cuello ) - 97.684 * Math.log10(talla) - 78.387;

  // Mostrar el resultado en el HTML
  document.getElementById("resultadoMujer").innerHTML = `Tu porcentaje de grasa corporal es ${porcentaje.toFixed(1)}%`;
}

// Función para calcular el porcentaje de grasa corporal en hombres
function calcularPorcentajeHombre() {
  var cuelloHombre = document.getElementById("cuelloHombre").value;
  var abdomenHombre = document.getElementById("abdomenHombre").value;
  var alturaHombre = document.getElementById("alturaHombre").value;
  
  // Calcular el porcentaje de grasa corporal si los valores ingresados son válidos
  if (cuelloHombre > 0 && abdomenHombre > 0 && alturaHombre > 0) {
    var porcentajeHombre = 86.01 * Math.log10(abdomenHombre - cuelloHombre) - 70.041 * Math.log10(alturaHombre) + 36.76;
    document.getElementById("resultadoHombre").innerHTML = "El porcentaje de grasa corporal es: " + porcentajeHombre.toFixed(2) + "%";
  } else {
    document.getElementById("resultadoHombre").innerHTML = "Ingrese valores válidos para todos los campos";
  }
}


      