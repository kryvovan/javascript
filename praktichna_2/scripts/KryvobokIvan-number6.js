let temperature = prompt("What is the temperature?"), sensorError = prompt("Is there an error?") === "true";

if (sensorError === true) {
    alert("помилка")
} else {
    if (temperature < 18 ) {
        console.log("Увімкнути обігрів");
    } else if (temperature >= 18 && temperature < 25) {
        console.log("Температура комфортна")
    } else if (temperature >= 25) {
        console.log("Увімкнути кондиціонер")
    }
}

