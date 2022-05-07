window.onload = function() {
      
  const fahrenheit = document.getElementById("fahrenheit");
  const celsius = document.getElementById("celsius");
  const left = document.getElementById("left");
  const right = document.getElementById("right");

  fahrenheit.addEventListener('input', function () {

    function fahrToCels(x) {
      let c = (x - 32) / 1.8;
      celsius.value = c.toFixed(1);
      left.innerHTML = "";
      right.innerHTML = "";
    }

    function fahrLenCelsRight(x) {
      if (x == "" || x == "-" || isNaN(x)) {
        fahrenheit.setAttribute("maxlength", "4");
        celsius.value = "";
        right.innerHTML = "";
      }
    }

    function setLength(x) {
      if (x < 0) {
        fahrenheit.setAttribute("maxlength", "5");
      }
      else if (x > 0 || x == 0) {
        fahrenheit.setAttribute("maxlength", "4");
      }
    }

    if (fahrenheit.value == "" || fahrenheit.value == "-") {
      fahrLenCelsRight(fahrenheit.value);
      left.innerHTML = "";
    }
    else if (isNaN(fahrenheit.value)) {
      fahrLenCelsRight(fahrenheit.value);
      fahrenheit.value = "";
      left.innerHTML = "invalid input";
    }
    else {
      setLength(fahrenheit.value);
      fahrToCels(fahrenheit.value);
    }
  })
  
  celsius.addEventListener('input', function () {

    function celsTofahr(x) {
      let f = x * 1.8 + 32;
      fahrenheit.value = f.toFixed(1);
      left.innerHTML = "";
      right.innerHTML = "";
    }

    function celsLenFahrLeft(x) {
      if (x == "" || x == "-" || isNaN(x)) {
        celsius.setAttribute("maxlength", "4");
        fahrenheit.value = "";
        left.innerHTML = "";
      }
    }

    function setLength(x) {
      if (x < 0) {
        celsius.setAttribute("maxlength", "5");
      }
      else if (x > 0 || x == 0) {
        celsius.setAttribute("maxlength", "4");
      }
    }

    if (celsius.value == "" || celsius.value == "-") {
      celsLenFahrLeft(celsius.value);
      right.innerHTML = "";
    }
    else if (isNaN(celsius.value)) {
      celsLenFahrLeft(celsius.value);
      celsius.value = "";
      right.innerHTML = "invalid input";
    }
    else {
      setLength(celsius.value);
      celsTofahr(celsius.value);
    }
  })

}