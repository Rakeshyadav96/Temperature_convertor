const celsiusEL = document.getElementById("celsius");
const FahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");



function getTemperature(event) {
    const currentValue = +event.target.value;

    switch (event.target.id) {
        // Here i am targetting id (html mein, input k andar jo id istemaal hui hai usmein ye value fill ho jaigi)

        
        case "celsius":
            FahrenheitEl.value = (currentValue * 1.8 + 32).toFixed(2);
            kelvinEl.value = (currentValue + 273.32).toFixed(2);

            break;
        case "fahrenheit":
            celsiusEL.value = ((currentValue - 32) / 1.8).toFixed(2);
            kelvinEl.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);

            break;
        case "kelvin":
            celsiusEL.value = (currentValue - 273.32).toFixed(2);
            FahrenheitEl.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);

            break;

        default:
            break;
    }
}