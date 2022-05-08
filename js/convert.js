window.onload = function() {
      
  const fahrenheit = document.getElementById("fahrenheit");
  const celsius = document.getElementById("celsius");
  const left = document.getElementById("left");
  const right = document.getElementById("right");

  function setLength(x) {
    if (x < 0 && x % 1 !=0) {
      fahrenheit.setAttribute("maxlength", "6");
      celsius.setAttribute("maxlength", "6");
    }
    else if ((x < 0 && x % 1 ==0) || (x >= 0 && x % 1 !=0)) {
      fahrenheit.setAttribute("maxlength", "5");
      celsius.setAttribute("maxlength", "5");
    }
    else if (x >= 0) {
      fahrenheit.setAttribute("maxlength", "4");
      celsius.setAttribute("maxlength", "4");
    }
  }
  
  function fahrToCels(x) {
    x = (x - 32) / 1.8;
    celsius.value = x.toFixed(1);
    left.innerHTML = "";
    right.innerHTML = "";
  }

  function fahrLenCelsRight(x) {
    if (x == "" || x == "-" || isNaN(x)) {
      fahrenheit.setAttribute("maxlength", "4");
      celsius.value = "";
      right.innerHTML = "";
      left.innerHTML = "";
    }
  }

  function celsTofahr(x) {
    x = x * 1.8 + 32;
    fahrenheit.value = x.toFixed(1);
    left.innerHTML = "";
    right.innerHTML = "";
  }

  function celsLenFahrLeft(x) {
    if (x == "" || x == "-" || isNaN(x)) {
      celsius.setAttribute("maxlength", "4");
      fahrenheit.value = "";
      left.innerHTML = "";
      right.innerHTML = "";
    }
  }
  
  fahrenheit.addEventListener('input', function () {
    if (fahrenheit.value == "" || fahrenheit.value == "-") {
      fahrLenCelsRight(fahrenheit.value);
    }
    else if (isNaN(fahrenheit.value)) {
      fahrLenCelsRight(fahrenheit.value);
      fahrenheit.value = "";
      left.innerHTML = "that's not a number";
    }
    else {
      setLength(fahrenheit.value);
      fahrToCels(fahrenheit.value);
    }
  })
  
  celsius.addEventListener('input', function () {
    if (celsius.value == "" || celsius.value == "-") {
      celsLenFahrLeft(celsius.value);
    }
    else if (isNaN(celsius.value)) {
      celsLenFahrLeft(celsius.value);
      celsius.value = "";
      right.innerHTML = "that's not a number";
    }
    else {
      setLength(celsius.value);
      celsTofahr(celsius.value);
    }
  })

}