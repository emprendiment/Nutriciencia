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
        function calculoGrasa() {
          var cuello = document.getElementById("cuello").value;
          var abdomen = document.getElementById("abdomen").value;
          var alto = document.getElementById("alto").value;
          var sexo = document.getElementById("sex").value;
        
          var porcentaje = 0;
        
          if (sexo == "masculino") {
            porcentaje = 86.010 * Math.log10 * (abdomen - cuello)- 70.041 * Math.log10 (altura) + 36.76;
          }
        
          document.getElementById("porcentaje").innerHTML = porcentaje;
        
        }

    /*Calculadora de grasa
    function calcular() {
      const altura = document.getElementById("altura").value;
      const abdomen = document.getElementById("abdomen").value;
      const cuello = document.getElementById("cuello").value;
      const sexo = document.getElementById("sexo").value;
    
      let cintura = 0;
      let cadera = 0;
      if (sexo === "Mujer") {
        cintura = document.getElementById("cintura").value;
        cadera = document.getElementById("cadera").value;
      }
    
      const factorHombre = 495 / (1.0324 - 0.19077 * (Math.log10(abdomen - cuello)) + 0.15456 * (Math.log10(altura))) - 450;
      const factorMujer = 495 / (0.29569 - 0.15845 * (Math.log10(cintura + cadera - cuello)) + 0.22100 * (Math.log10(altura))) - 450;
    
      let resultado = 0;
      if (sexo === "Hombre") {
        resultado = factorHombre;
      } else if (sexo === "Mujer") {
        resultado = factorMujer;
      }
    
      document.getElementById("resultado").innerHTML = `Su porcentaje de grasa corporal es del ${resultado.toFixed(2)}%`;
    }
    
    document.getElementById("sexo").addEventListener("change", function () {
      const medidasMujer = document.getElementById("medidasMujer");
      if (this.value === "Mujer") {
        medidasMujer.style.display = "block";
      } else {
        medidasMujer.style.display = "none";
      }
    });
    
    document.getElementById("calcular").addEventListener("click", calcular);
    
*/
      