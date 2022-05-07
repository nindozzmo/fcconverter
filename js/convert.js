window.onload = function() {
      
  const fahrenheit = document.getElementById("fahrenheit");
  const celsius = document.getElementById("celsius");  

  fahrenheit.addEventListener('input', fahrenheitToCelsius => {
    let c = (fahrenheit.value - 32) / 1.8;
    celsius.value = c.toFixed(1);    
  })
  
  celsius.addEventListener('input', celsiusToFahrenheit => {
    let f = celsius.value * 1.8 + 32;
    fahrenheit.value = f.toFixed(1);
  })
  
}