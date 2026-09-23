alert("Bienvenido al cine las peliculas se dividen en clasificaciones de edad, comedia 14+, accion 16+ y terror 18+ en el caso de que seas menor para alguna categoria deberas ingresar con algun mayor");

const comedia = 14;
const accion = 16;
const terror = 18;
//El codigo toLowerCase() convierte las palabras ingresadas a minusculas para que no haya problemas con el ingreso de datos 

/*Realizar un loop para condicionar al usario a colocar alguna de las 3 categorias validas */

let pelicula = prompt("Ingrese el tipo de pelicula que desea ver: comedia, accion o terror: ").toLowerCase();
function Tipopelicula (){
while (pelicula !== "comedia" && pelicula !== "accion" && pelicula !== "terror"){
    
    alert("Ingrese alguna de las categorias validas: comedia, accion o terror");

    pelicula = prompt("Ingrese el tipo de pelicula que desea ver: comedia, accion o terror: ").toLowerCase();

    if (pelicula === "comedia" || pelicula === "accion" || pelicula === "terror"){
        break
    }

    }
}

Tipopelicula();   
let edad = parseInt(prompt("Ingrese su edad: "));
const mayordeedad = 18;

if (pelicula === "comedia") {
    if (edad >= comedia) {
        alert("Puede ingresar a la sala de comedia");
    } else {
        let acompaniado = prompt("¿Viene acompañado de un mayor de edad? (si/no)").toLowerCase();
        if (acompaniado === "si") {
            let edadAcompaniado = parseInt(prompt("Ingrese la edad del mayor de edad: "));
            if (edadAcompaniado >= mayordeedad) {
           alert("Puede ingresar a la sala de comedia");
        } 
        else {
            alert("No puede ingresar a la sala de comedia");
        }
    }
}
} else if (pelicula === "accion") {
    if (edad >= accion) {
        alert("Puede ingresar a la sala de accion");
    } else {
        let acompaniado = prompt("¿Viene acompañado de un mayor de edad? (si/no)").toLowerCase();
        if (acompaniado === "si") {
            let edadAcompaniado = parseInt(prompt("Ingrese la edad del mayor de edad: "));
            if (edadAcompaniado >= mayordeedad) {
           alert("Puede ingresar a la sala de accion");
        } 
        else{
        alert("No puede ingresar a la sala de accion");
        }
    }

}
} else if (pelicula === "terror") {
    if (edad >= terror) {
        alert("Puede ingresar a la sala de terror");
    } else {
        let acompaniado = prompt("¿Viene acompañado de un mayor de edad? (si/no)").toLowerCase();
        if (acompaniado === "si") {
            let edadAcompaniado = parseInt(prompt("Ingrese la edad del mayor de edad: "));
            if (edadAcompaniado >= mayordeedad) {
           alert("Puede ingresar a la sala de terror");
        } 
        else{
        alert("No puede ingresar a la sala de terror");
        }
    }
 }
}