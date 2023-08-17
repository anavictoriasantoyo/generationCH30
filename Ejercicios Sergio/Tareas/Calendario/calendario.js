function checalo() {
    let dia = document.getElementById("dia").value;
    let mes = document.getElementById("mes").value;
    let anio = document.getElementById("anio").value;
    let tomarFecha= new Date(anio, mes, dia).getDay();
    console.log(tomarFecha);
    let diasDeLabor = "";

switch (tomarFecha) {
     
     case 1:
         return document.getElementById("resultado").innerHTML="Lunes, a jalar perro!.";
     case 2:
         return document.getElementById("resultado").innerHTML="Martes, falta mucho para viernes.";
     case 3:
         return document.getElementById("resultado").innerHTML="Miércoles, 2x1 en mojitos!.";
     case 4:
         return document.getElementById("resultado").innerHTML="Juevebes.";
     case 5:
         return document.getElementById("resultado").innerHTML="Viernes, salgo y me voy con las cariñosas.";
     case 6:
         return document.getElementById("resultado").innerHTML="sabado de paseos y excesos.";
     case 0:
         return document.getElementById("resultado").innerHTML="Dominguito de descanso y darle gracias a diosito.";
         diasDeLabor += "no se que hice"
         break;

        
}
 }