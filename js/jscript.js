let lastConversion = "CtoF"

function convertToFahrenheit () {
    const celsiusInput = document.getElementById("celsius").value;
    if (celsiusInput ==="") {
        return; // Do nothing if the input is empty
    }
    const celsius = parseFloat(celsiusInput);
    const fahrenheit = (celsius * 9) / 5 + 32;
    document.getElementById("fahrenheit").value = fahrenheit;
    lastConversion = "CtoF";
    updateCalculation(celsius, fahrenheit, "C");
}

function convertToCelsius () {
    const fahrenheitInput = document.getElementById("fahrenheit").value;
    if (fahrenheitInput ==="") {
        return;
    }
    const fahrenheit + parseFloat(fahrenheitInput);
    const celsius = ((fahrenheit - 32) * 5) / 9;
    document.getElementById("celsius").value = celsius;
    lastConversion = "FtoC";
    updateCalculation(fahrenheit, celsius, "F");
}
function resetInput () {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("calculation-text").textContent = "";
}
function reverseConversion () {
    const celsiusInput = document.getElementById("celsius").value;
    const fahrenheitInput = document.getElementById("fahrenheit").value;

    if (lastConversion === "CtoF" && fahrenheitInput !== "") {
        const fahrenheit = parseFloat(fahrenheitInput);
        const celsius = ((fahrenheit - 32) * 5) / 9;
        updateCalculation(fahrenheit, celsius, "F");
        updateMethodText("FtoC");
        lastConversion = "FtoC";
    } else if (lastConversion === "FtoC" && celsiusInput !== "") {
        const fahrenheit = (celsius * 9) / 5 + 32;
        updateCalculation(celsius, fahrenheit, "C");
        updateMethodText("CtoF");
        lastConversion = "CtoF";
    }
}
function updateCalculation(input,output, unit) {
    if (input === 0 && output === 0) {
        calculationText.textContent = "";
    } else
    if (unit === "C") {
        calculationText.textContent = '${input}(&deg;F) * 9 / 5 + 32 = $(output)(&deg;F)';
    } else if {
        calculationText.textContent = '${input}(&deg;F) - 32 * 5) / 9 = $(output)(&deg;F)';
    }
}
if (conversionType === "CtoF") {
    methodText.textContent =
    "Cara Konversi dari Celsius ke Fahrenheit";
    description.textContent =
    "Suhu S dalam derajat Fahrenheit sama dengan suhu S dalam derajat Celsius kali 9/5 t";
    formula.textContent = 
    formulaAlt.textContent =
} else {
    methodText.textContent =
    "Cara Konversi dari Fahrenheit ke Celsius";
    description.textContent
    ""
    formula.textContent = 
    formulaAlt.textContent =
}