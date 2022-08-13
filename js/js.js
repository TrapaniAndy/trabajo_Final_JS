let precio,cantidad, totalViaje= 0;
let ciudad, destino;

function viaje() {
    destino = parseInt(prompt("Introduce el número de tu destino:"));
    cantidad = parseInt(prompt("Ingresa cantidad de pasajeros"));
    
   if (destino == "") {
    console.log("No ingresaste destino");
  } else if (destino == 1) {
    
    precio = 10000;
    ciudad = "Marruecos";
    totalViaje = precio * cantidad;
    return totalViaje;

    console.log("if",destino, cantidad, precio, ciudad);

  } else if (destino == 2) {
    precio = 20000;
    ciudad = "Londres";
    totalViaje = precio * cantidad;
    return totalViaje;
    
    console.log("if",destino, cantidad, precio, ciudad);

  } else if (destino == 3) {
    precio = 30000;
    ciudad = "Italia";
    totalViaje = precio * cantidad;
    return totalViaje;

    console.log("if",destino, cantidad, precio, ciudad);
    
  } else {
    console.log("Destino no disponible");
  }
  
}

let total = viaje(totalViaje);
console.log("alert",destino, cantidad, precio, ciudad);

alert("Tu total para " + ciudad + " es de $" + total);
let cuotas = parseInt(prompt("financioar en 1, 3, 6 y 12 cuotas:"));
function tCuotas(){
    return(total / cuotas);
}

let totalcuotas = tCuotas()

alert("Su viaje para "+cantidad+" personas, con destino a "+ciudad+" con un costo total de $"+total+" en cuotas "+cuotas+" de: $"+totalcuotas);
