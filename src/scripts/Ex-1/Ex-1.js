const userName = prompt("Introduzca su nombre de usuario");
const userAge = prompt("Indique su edad")
if (parseInt(userAge) >= 18) {
    alert("Tiene edad suficiente para conducir");
}
else {
    alert("NO tiene edad suficiente para conducir")
}