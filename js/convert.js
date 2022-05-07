window.onload = function() {
      
  const fahrenheit = document.getElementById("fahrenheit");
  const celsius = document.getElementById("celsius");
  const left = document.getElementById("left");
  const right = document.getElementById("right");

  fahrenheit.addEventListener('input', fahrenheitToCelsius => {
    
    function fToC (){
      let c = (fahrenheit.value - 32) / 1.8;
      celsius.value = c.toFixed(1);
      left.innerHTML = "";
      right.innerHTML = "";
    }
    
    if (fahrenheit.value == "" || fahrenheit.value == "-") {
      fahrenheit.setAttribute("maxlength", "4");
      celsius.value = "";
      left.innerHTML = "";
      right.innerHTML = "";
    }
    else if (isNaN(fahrenheit.value)) {
      fahrenheit.setAttribute("maxlength", "4");
      celsius.value = "";
      fahrenheit.value = "";
      left.innerHTML = "invalid input";
      right.innerHTML = "";
    }
    else if (fahrenheit.value < 0) {
      fahrenheit.setAttribute("maxlength", "5");
      fToC(fahrenheit.value);
    }
    else if (fahrenheit.value > 0 || fahrenheit.value == 0) {
      fahrenheit.setAttribute("maxlength", "4");
      fToC(fahrenheit.value);
    }
  })

  celsius.addEventListener('input', celsiusToFahrenheit => {
    
    function cToF (){
      let f = celsius.value * 1.8 + 32;
      fahrenheit.value = f.toFixed(1);
      left.innerHTML = "";
      right.innerHTML = "";
    }
    
    if (celsius.value == "" || celsius.value == "-") {
      celsius.setAttribute("maxlength", "4");
      fahrenheit.value = "";
      left.innerHTML = "";
      right.innerHTML = "";
    }
    else if (isNaN(celsius.value)) {
      celsius.setAttribute("maxlength", "4");
      fahrenheit.value = "";
      celsius.value = "";
      right.innerHTML = "invalid input";
      left.innerHTML = "";
    }
    else if (celsius.value < 0) {
      celsius.setAttribute("maxlength", "5");
      cToF(celsius.value);
    }
    else if (celsius.value > 0 || celsius.value == 0) {
      celsius.setAttribute("maxlength", "4");
      cToF(celsius.value);
    }
  })
}