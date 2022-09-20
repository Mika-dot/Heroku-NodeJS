
const Celsius = prompt('°C', 25);
const Fahrenheit = prompt('°F"', 66.2);

//alert(Celsius + "°C соответствует " + Number(Celsius * (9/5) + 32) + "°F");
//alert(Fahrenheit + "°F соответствует " + Number((Fahrenheit -  32)  *  (5/9)) + "°C");

alert(`${Celsius} °C соответствует ${Number(Celsius * (9/5) + 32)} °F`);
alert(`${Fahrenheit} °F соответствует ${Number((Fahrenheit -  32)  *  (5/9))} °C`);