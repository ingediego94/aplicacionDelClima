const API_key = "069f2a1737dadc173328a5735661062f";
//const city = prompt("De que ciudad deseas consultar el clima?");
let city = "";

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formulario');
  const input = document.getElementById('opcionSeleccion');

  form.addEventListener('submit', (evento) => {
    evento.preventDefault()
    const valorInput = input.value; // Capturamos el valor del input
    console.log("Texto ingresado:", valorInput);
    
    city = valorInput;
    console.log('Variable con valor capturado:', city)
    
    clima();
  })

  // boton.addEventListener('click', () => {
  //   const valorInput = input.value; // Capturamos el valor del input
  //   console.log("Texto ingresado:", valorInput);
  //   city = valorInput;
  //   console.log('Variable con valor capturado:', city);
  // });

  });




async function clima() {
    try {
        const evaluacion = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric&lang=es`)
        
        const response = await evaluacion.json()

        document.getElementById("ciudad").innerHTML = response.name;
        document.getElementById("clima").innerHTML = response.weather[0].description;
        document.getElementById("temp").innerHTML = `${response.main.temp} °C.`;
        document.getElementById("sensacion_t").innerHTML = `${response.main.feels_like} °C.`;
        document.getElementById("temp_max").innerHTML = `${response.main.temp_max} °C.`;
        document.getElementById("temp_min").innerHTML = `${response.main.temp_min} °C.`;
        document.getElementById("vel_viento").innerHTML = `${response.wind.speed} m/sg.`;
        document.getElementById("dir_viento").innerHTML = `${response.wind.deg} °.`;

          console.log(
    `
            Ciudad: ${response.name}.
            Clima: ${response.weather[0].description}.
            Temperatura: ${response.main.temp}°C.
            Sensación termica: ${response.main.feels_like}°C.
            Temperatura max: ${response.main.temp_max}°C.
            Temperatura min: ${response.main.temp_min}°C.
            Velocidad viento: ${response.wind.speed} m/sg.
            Dirección viento: ${response.wind.deg}°.
            `);   
  

    
    } catch (error)
    {
        console.log(error);
        
    }
}


