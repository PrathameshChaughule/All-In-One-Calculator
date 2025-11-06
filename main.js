// =============================== Arithmetic Calculator =================================
const navLinks = document.querySelectorAll(".navLink");
const arithmeticCal = document.querySelector(".arithmeticCal");
const geometryCal = document.querySelector(".geometryCal");
const unitConverter = document.querySelector(".unitConverter");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    document.querySelector(".active").classList.remove("active");
    link.classList.add("active");

    arithmeticCal.style.display = "none";
    geometryCal.style.display = "none";
    unitConverter.style.display = "none";

    if (link.classList.contains("arithmeticLink")) {
      arithmeticCal.style.display = "block";
    } else if (link.classList.contains("geometryLink")) {
      geometryCal.style.display = "block";
    } else if (link.classList.contains("unitLink")) {
      unitConverter.style.display = "block";
    }
  });
});

// ==================================== Geometry Calculator ==================================
const geoLinks = document.querySelectorAll(".geoLink");
const circleCalculator = document.querySelector("#circleCalculator");
const squareCalculator = document.querySelector(".squareCalculator");
const rectangleCalculator = document.querySelector(".rectangleCalculator");
const cubeCalculator = document.querySelector(".cubeCalculator");
const sphereCalculator = document.querySelector(".sphereCalculator");
const cylinderCalculator = document.querySelector(".cylinderCalculator");

geoLinks.forEach((link) => {
  link.addEventListener("click", function () {
    document.querySelector(".active2").classList.remove("active2");
    link.classList.add("active2");

    circleCalculator.style.display = "none";
    squareCalculator.style.display = "none";
    rectangleCalculator.style.display = "none";
    cubeCalculator.style.display = "none";
    sphereCalculator.style.display = "none";
    cylinderCalculator.style.display = "none";

    if (link.classList.contains("circleLink")) {
      circleCalculator.style.display = "block";
    } else if (link.classList.contains("squareLink")) {
      squareCalculator.style.display = "block";
    } else if (link.classList.contains("rectangleLink")) {
      rectangleCalculator.style.display = "block";
    } else if (link.classList.contains("cubeLink")) {
      cubeCalculator.style.display = "block";
    } else if (link.classList.contains("sphereLink")) {
      sphereCalculator.style.display = "block";
    } else if (link.classList.contains("cylinderLink")) {
      cylinderCalculator.style.display = "block";
    }
  });
});

// Circle
const calculationType = document.getElementById("calculationType");
const formulaDisplay = document.getElementById("formulaDisplay");
const circleRadius = document.getElementById("circleRadius");
const outputCircle = document.querySelector(".outputCircle");
const unitSelect = document.getElementById("unitSelect");

calculationType.addEventListener("change", function () {
  const type = calculationType.value;
  if (type === "A") {
    formulaDisplay.innerHTML = "A = π x r²";
  } else if (type === "P") {
    formulaDisplay.innerHTML = "P = 2 x π x r";
  }
  circleRadius.value = "";
  outputCircle.textContent = "";
});

function circleCalculate() {
  const r = parseFloat(circleRadius.value);
  const pi = parseFloat(Math.PI.toFixed(5));
  const type = calculationType.value;
  const unit = unitSelect.value;

  if (isNaN(r) || r <= 0) {
    outputCircle.textContent = "Please enter a valid radius.";
    return;
  }

  let result = 0;
  if (type === "A") {
    result = pi * r * r;
    outputCircle.textContent = `Area = ${result.toFixed(2)} ${unit}²`;
  } else if (type === "P") {
    result = 2 * pi * r;
    outputCircle.textContent = `Perimeter = ${result.toFixed(2)} ${unit}`;
  }
}
// Square
const calculationTypeSquare = document.getElementById("calculationTypeSquare");
const formulaDisplaySquare = document.getElementById("formulaDisplaySquare");
const squareSide = document.getElementById("squareSide");
const outputSquare = document.querySelector(".outputSquare");
const unitSelectSquare = document.getElementById("unitSelectSquare");

calculationTypeSquare.addEventListener("change", function () {
  const type = calculationTypeSquare.value;
  if (type === "A") {
    formulaDisplaySquare.innerHTML = "A = a²";
  } else if (type === "P") {
    formulaDisplaySquare.innerHTML = "P = 4 × a";
  }
  squareSide.value = "";
  outputSquare.textContent = "";
});

function calculateSquare() {
  const a = parseFloat(squareSide.value);
  const type = calculationTypeSquare.value;
  const unit = unitSelectSquare.value;

  if (isNaN(a) || a <= 0) {
    outputSquare.textContent = "Please enter a valid side length.";
    return;
  }

  let result = 0;
  if (type === "A") {
    result = a * a;
    outputSquare.textContent = `Area = ${result.toFixed(2)} ${unit}²`;
  } else if (type === "P") {
    result = 4 * a;
    outputSquare.textContent = `Perimeter = ${result.toFixed(2)} ${unit}`;
  }
}

//  Rectangle
const calculationTypeRect = document.getElementById("calculationTypeRect");
const formulaDisplayRect = document.getElementById("formulaDisplayRect");
const rectangleLength = document.getElementById("rectangleLength");
const rectangleBreadth = document.getElementById("rectangleBreadth");
const outputRect = document.querySelector(".outputRectangle");

calculationTypeRect.addEventListener("change", function () {
  const type = calculationTypeRect.value;
  if (type === "A") {
    formulaDisplayRect.innerHTML = "A = l x b";
  } else if (type === "P") {
    formulaDisplayRect.innerHTML = "P = 2 x (l + b)";
  }
  rectangleLength.value = "";
  rectangleBreadth.value = "";
  outputRect.textContent = "";
});

function calculateRectangle() {
  const l = parseFloat(rectangleLength.value);
  const b = parseFloat(rectangleBreadth.value);
  const type = calculationTypeSquare.value;

  if (isNaN(l) || l <= 0 || isNaN(b) || b <= 0) {
    outputRect.textContent = "Please enter a valid number.";
    return;
  }

  let result = 0;
  if (type === "A") {
    result = l * b;
    outputRect.textContent = `Area = ${result.toFixed(2)}`;
  } else if (type === "P") {
    result = 2 * (l + b);
    outputRect.textContent = `Perimeter = ${result.toFixed(2)}`;
  }
}

// Cube
const calculationTypeCube = document.getElementById("calculationTypeCube");
const formulaDisplayCube = document.getElementById("formulaDisplayCube");
const cubeSide = document.getElementById("cubeSide");
const outputCube = document.querySelector(".outputCube");
const unitSelectCube = document.getElementById("unitSelectCube");

calculationTypeCube.addEventListener("change", function () {
  const type = calculationTypeCube.value;
  if (type === "LSA") {
    formulaDisplayCube.innerHTML = "LSA = 4 x a²";
  } else if (type === "TSA") {
    formulaDisplayCube.innerHTML = "TSA = 6 × a²";
  } else if (type === "V") {
    formulaDisplayCube.innerHTML = "V = a³";
  }
  cubeSide.value = "";
  outputCube.textContent = "";
});

function calculateCube() {
  const a = parseFloat(cubeSide.value);
  const type = calculationTypeCube.value;
  const unit = unitSelectCube.value;

  if (isNaN(a) || a <= 0) {
    outputCube.textContent = "Please enter a valid number.";
    return;
  }

  let result = 0;
  if (type === "LSA") {
    result = 4 * a * a;
    outputCube.textContent = `Lateral Surface Area = ${result.toFixed(
      2
    )} ${unit}²`;
  } else if (type === "TSA") {
    result = 6 * a * a;
    outputCube.textContent = `Total Surface Area = ${result.toFixed(
      2
    )} ${unit}²`;
  } else if (type === "V") {
    result = a * a * a;
    outputCube.textContent = `Volume = ${result.toFixed(2)} ${unit}³`;
  }
}

// Sphere
const calculationTypeSphere = document.getElementById("calculationTypeSphere");
const formulaDisplaySphere = document.getElementById("formulaDisplaySphere");
const sphereRadius = document.getElementById("sphereRadius");
const outputSphere = document.querySelector(".outputSphere");
const unitSelectSphere = document.getElementById("unitSelectSphere");

calculationTypeSphere.addEventListener("change", function () {
  const type = calculationTypeSphere.value;

  if (type === "SA") {
    formulaDisplaySphere.innerHTML = "SA = 4 × π × r²";
  } else if (type === "V") {
    formulaDisplaySphere.innerHTML = "V = (4 / 3) × π × r³";
  }
  sphereRadius.value = "";
  outputSphere.textContent = "";
});

function calculateSphere() {
  const r = parseFloat(sphereRadius.value);
  const pi = parseFloat(Math.PI.toFixed(5));
  const type = calculationTypeSphere.value;
  const unit = unitSelectSphere.value;

  if (isNaN(r) || r <= 0) {
    outputSphere.textContent = "Please enter a valid radius.";
    return;
  }

  let result = 0;
  if (type === "SA") {
    result = 4 * pi * r * r;
    outputSphere.textContent = `Surface Area = ${result.toFixed(2)} ${unit}²`;
  } else if (type === "V") {
    result = (4 / 3) * pi * r * r * r;
    outputSphere.textContent = `Volume = ${result.toFixed(2)} ${unit}³`;
  }
}

// Cylinder
const calculationTypeCyl = document.getElementById("calculationTypeCyl");
const formulaDisplayCyl = document.getElementById("formulaDisplayCyl");
const cylinderRadius = document.getElementById("cylinderRadius");
const cylinderHeight = document.getElementById("cylinderHeight");
const outputCylinder = document.querySelector(".outputCylinder");
const pi = Math.PI;

calculationTypeCyl.addEventListener("change", function () {
  const type = calculationTypeCyl.value;

  if (type === "LSA") {
    formulaDisplayCyl.innerHTML = "LSA = 2 × π × r × h";
  } else if (type === "TSA") {
    formulaDisplayCyl.innerHTML = "TSA = 2 × π × r × h + 2 × π × r²";
  } else if (type === "V") {
    formulaDisplayCyl.innerHTML = "V = π × r² × h";
  }
  cylinderRadius.value = "";
  cylinderHeight.value = "";
  outputCylinder.textContent = "";
});

function calculateCylinder() {
  const r = parseFloat(cylinderRadius.value);
  const h = parseFloat(cylinderHeight.value);
  const type = calculationTypeCyl.value;

  if (isNaN(r) || r <= 0 || isNaN(h) || h <= 0) {
    outputCylinder.textContent = "Please enter valid radius and height.";
    return;
  }

  let result = 0;
  if (type === "LSA") {
    result = 2 * pi * r * h;
    outputCylinder.textContent = `Lateral Surface Area = ${result.toFixed(2)}`;
  } else if (type === "TSA") {
    result = 2 * pi * r * h + 2 * pi * r * r;
    outputCylinder.textContent = `Total Surface Area = ${result.toFixed(2)}`;
  } else if (type === "V") {
    result = pi * r * r * h;
    outputCylinder.textContent = `Volume = ${result.toFixed(2)}`;
  }
}

// ======================================= Unit Converter =======================================
const unitLinks = document.querySelectorAll(".unitLink");
const length = document.querySelector("#Length");
const weight = document.querySelector(".weight");
const time = document.querySelector(".time");
const temperature = document.querySelector(".temperature");
const volume = document.querySelector(".volume");
const currency = document.querySelector(".currency");

unitLinks.forEach((link) => {
  link.addEventListener("click", function () {
    document.querySelector(".active1").classList.remove("active1");
    link.classList.add("active1");

    length.style.display = "none";
    weight.style.display = "none";
    time.style.display = "none";
    temperature.style.display = "none";
    volume.style.display = "none";
    currency.style.display = "none";

    if (link.classList.contains("lengthLink")) {
      length.style.display = "block";
    } else if (link.classList.contains("weightLink")) {
      weight.style.display = "block";
    } else if (link.classList.contains("timeLink")) {
      time.style.display = "block";
    } else if (link.classList.contains("temperatureLink")) {
      temperature.style.display = "block";
    } else if (link.classList.contains("volumeLink")) {
      volume.style.display = "block";
    } else if (link.classList.contains("currencyLink")) {
      currency.style.display = "block";
    }
  });
});

// Length conversion
function convertLength() {
  const val = parseFloat(document.getElementById("inputValue").value);
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  let result;

  if (isNaN(val) || val <= 0) {
    document.querySelector(".outputLength").textContent =
      "Please enter valid number.";
    return;
  }

  if (from === to) result = val;
  else if (from === "m" && to === "km") result = val / 1000;
  else if (from === "m" && to === "cm") result = val * 100;
  else if (from === "m" && to === "mm") result = val * 1000;
  else if (from === "km" && to === "m") result = val * 1000;
  else if (from === "km" && to === "cm") result = val * 100000;
  else if (from === "km" && to === "mm") result = val * 1000000;
  else if (from === "cm" && to === "m") result = val / 100;
  else if (from === "cm" && to === "km") result = val / 100000;
  else if (from === "cm" && to === "mm") result = val * 10;
  else if (from === "mm" && to === "m") result = val / 1000;
  else if (from === "mm" && to === "cm") result = val / 10;
  else if (from === "mm" && to === "km") result = val / 1000000;

  document.querySelector(
    ".outputLength"
  ).innerText = `${val} ${from} = ${result} ${to}`;
}

// Weight conversion
function convertWeight() {
  const val = parseFloat(document.getElementById("inputWeight").value);
  const from = document.getElementById("fromWeight").value;
  const to = document.getElementById("toWeight").value;
  let result;

  if (isNaN(val) || val <= 0) {
    document.querySelector(".outputWeight").textContent =
      "Please enter valid number.";
    return;
  }

  if (from === to) result = val;
  else if (from === "kg" && to === "g") result = val * 1000;
  else if (from === "kg" && to === "mg") result = val * 1000000;
  else if (from === "g" && to === "kg") result = val / 1000;
  else if (from === "g" && to === "mg") result = val * 1000;
  else if (from === "mg" && to === "kg") result = val / 1000000;
  else if (from === "mg" && to === "g") result = val / 1000;

  document.querySelector(
    ".outputWeight"
  ).innerText = `${val} ${from} = ${result} ${to}`;
}

// Time conversion
function convertTime() {
  const val = parseFloat(document.getElementById("inputTime").value);
  const from = document.getElementById("fromTime").value;
  const to = document.getElementById("toTime").value;
  let result;

  if (isNaN(val) || val <= 0) {
    document.querySelector(".outputTime").textContent =
      "Please enter valid number.";
    return;
  }

  if (from === to) result = val;
  else if (from === "hr" && to === "min") result = val * 60;
  else if (from === "hr" && to === "sec") result = val * 3600;
  else if (from === "min" && to === "hr") result = val / 60;
  else if (from === "min" && to === "sec") result = val * 60;
  else if (from === "sec" && to === "hr") result = val / 3600;
  else if (from === "sec" && to === "min") result = val / 60;

  document.querySelector(
    ".outputTime"
  ).innerText = `${val} ${from} = ${result.toFixed(5)} ${to}`;
}

// Temperature conversion
function convertTemperature() {
  const val = parseFloat(document.getElementById("inputTemp").value);
  const from = document.getElementById("fromTemp").value;
  const to = document.getElementById("toTemp").value;
  let result;

  if (isNaN(val) || val <= 0) {
    document.querySelector(".outputTemperature").textContent =
      "Please enter valid number.";
    return;
  }

  if (from === to) result = val;
  else if (from === "C" && to === "F") result = (val * 9) / 5 + 32;
  else if (from === "C" && to === "K") result = val + 273.15;
  else if (from === "F" && to === "C") result = ((val - 32) * 5) / 9;
  else if (from === "F" && to === "K") result = ((val - 32) * 5) / 9 + 273.15;
  else if (from === "K" && to === "F") result = ((val - 273.15) * 9) / 5 + 3;
  else if (from === "K" && to === "C") result = val - 273.15;

  document.querySelector(
    ".outputTemperature"
  ).innerText = `${val} ${from} = ${result.toFixed(5)} ${to}`;
}

// Volume conversion
function convertVolume() {
  const val = parseFloat(document.getElementById("inputVolume").value);
  const from = document.getElementById("fromVolume").value;
  const to = document.getElementById("toVolume").value;
  let result;

  if (isNaN(val) || val <= 0) {
    document.querySelector(".outputVolume").textContent =
      "Please enter valid number.";
    return;
  }

  if (from === to) result = val;
  else if (from === "liter" && to === "milliliter") result = val * 1000;
  else if (from === "milliliter" && to === "liter") result = val / 1000;

  document.querySelector(
    ".outputVolume"
  ).innerText = `${val} ${from} = ${result.toFixed(3)} ${to}`;
}

// Currency conversion
function convertCurrency() {
  const val = parseFloat(document.getElementById("inputCurrency").value);
  const from = document.getElementById("fromCu").value;
  const to = document.getElementById("toCu").value;
  let result;

  if (isNaN(val) || val <= 0) {
    document.querySelector(".outputCurrency").textContent =
      "Please enter valid number.";
    return;
  }

  if (from === to) result = val;
  else if (from === "usd" && to === "eur") result = val * 0.85;
  else if (from === "usd" && to === "gbp") result = val * 0.75;
  else if (from === "eur" && to === "usd") result = val * 1.18;
  else if (from === "eur" && to === "gbp") result = val * 0.88;
  else if (from === "gbp" && to === "usd") result = val * 1.33;
  else if (from === "gbp" && to === "eur") result = val * 1.14;
  else if (from === "inr" && to === "eur") result = val * 0.011;
  else if (from === "eur" && to === "inr") result = val * 88.0;
  else if (from === "inr" && to === "usd") result = val * 0.012;
  else if (from === "usd" && to === "inr") result = val * 82.0;
  else if (from === "inr" && to === "gbp") result = val * 0.01;
  else if (from === "gbp" && to === "inr") result = val * 100.0;

  document.querySelector(
    ".outputCurrency"
  ).innerText = `${val} ${from} = ${result.toFixed(3)} ${to}`;
}
