function Tipopelicula (){
while (pelicula !== "comedia" && pelicula !== "accion" && pelicula !== "terror"){
    
    alert("Ingrese alguna de las categorias validas: comedia, accion o terror");

    pelicula = prompt("Ingrese el tipo de pelicula que desea ver: comedia, accion o terror: ").toLowerCase();

    return pelicula;

}
}
function verificarIngreso(categoria, edadMinima, edad) {
    if (edad >= edadMinima) {
        alert(`Puede ingresar a la sala de ${categoria}`);
    }
    else {
        const acompanado = prompt("¿Viene acompañado de un mayor de edad? (si/no)").toLowerCase();
    if (acompanado === "no"){
        alert(`No puede ingresar a la sala ${categoria}`)
    }
    
        if (acompanado === "si") {
        const edadAcompanado = parseInt(prompt("Ingrese la edad del mayor de edad: "));
        if (edadAcompanado >= edadMinima){
            alert(`Puede ingresar a la sala ${categoria}`)
             
        }
    
    else{
        alert(`No puede ingresar a la sala ${categoria}`)
    }
    
}
        
    } 
   
}

alert("Bienvenido al cine las peliculas se dividen en clasificaciones de edad, comedia 14+, accion 16+ y terror 18+ en el caso de que seas menor para alguna categoria deberas ingresar con algun mayor");

const comedia = 14;
const accion = 16;
const terror = 18;

let pelicula = prompt("Ingrese el tipo de pelicula que desea ver: comedia, accion o terror: ").toLowerCase();

Tipopelicula();   

let edad = parseInt(prompt("Ingrese su edad: "));

const mayordeedad = 18;

const edadesMinimas = { comedia, accion, terror };
verificarIngreso(pelicula, edadesMinimas[pelicula], edad);

alert(`El usuario ingreso a la sala de ${pelicula} con edad ${edad} acompanado ${acompanado}`);

