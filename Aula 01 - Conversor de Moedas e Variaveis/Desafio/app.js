var temperaturaEmCelcius = parseFloat(prompt("Quantos graus em Celcius?"))

var temperaturaEmFahrenheit = (temperaturaEmCelcius * 1.8) + 32
var temperaturaEmKelvin = temperaturaEmCelcius + 273.15

document.writeln('Graus Celcius: ' + temperaturaEmCelcius + 'ºC<br>')
document.write('Graus Fahrenheit: ' + temperaturaEmFahrenheit + 'ºF<br>')
document.write('Kelvin: ' + temperaturaEmKelvin)