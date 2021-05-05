function ListEst() {
  let estudiante = document.getElementById("respuesta").value;
  //condicional
  if ( estudiante === "Presente") {
    alert("El estudiante esta presente");
  } //accion a ejecutar si la condicion no se cumple 

  else {
    alert("El estudiante no esta presente");
  }
  //condicion de si es falso negando al true
  /* if (estudiante !== true) {
      alert ("No esta")
  }*/

}