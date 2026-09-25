const edadminima = (pelicula) =>{
    if (pelicula === "comedia" ){
        return 14;
    } else if (pelicula === "accion"){
        return 16;
    }else if (pelicula === "terror"){
        return 18;
    }
    
} 


function Tipopelicula (pelicula){
while (pelicula !== "comedia" && pelicula !== "accion" && pelicula !== "terror"){
    
    alert("Ingrese alguna de las categorias validas: comedia, accion o terror");
    console.log("Ingrese alguna de las categorias validas: comedia, accion o terror");

    pelicula = prompt("Ingrese el tipo de pelicula que desea ver: comedia, accion o terror: ").toLowerCase();

}
return pelicula;
}


function verificarIngreso(categoria, edadesMinimas, edad) {
    if (edad >= edadesMinimas) {
        alert(`Puede ingresar a la sala de ${categoria}`);
        console.log(`Puede ingresar a la sala de ${categoria}`);
    }
    else {
        const acompanado = prompt("¿Viene acompañado de un mayor de edad? (si/no)").toLowerCase();
    if (acompanado === "no"){
        alert(`No puede ingresar a la sala ${categoria}`);
        console.log(`No puede ingresar a la sala ${categoria}`);
    }
    
        if (acompanado === "si") {
        const edadAcompanado = parseInt(prompt("Ingrese la edad del mayor de edad: "));
        if (edadAcompanado >= 18){
            alert(`Puede ingresar a la sala ${categoria}`)
            console.log(`Puede ingresar a la sala ${categoria}`);
             
        }
    
    else{
        alert(`No puede ingresar a la sala ${categoria}`)
        console.log(`No puede ingresar a la sala ${categoria}`);
    }
    
}
        
    } 
   
}



alert("Bienvenido al cine las peliculas se dividen en clasificaciones de edad, comedia 14+, accion 16+ y terror 18+ en el caso de que seas menor para alguna categoria deberas ingresar con algun mayor");
console.log("Bienvenido al cine las peliculas se dividen en clasificaciones de edad, comedia 14+, accion 16+ y terror 18+ en el caso de que seas menor para alguna categoria deberas ingresar con algun mayor");

let pelicula = prompt("Ingrese el tipo de pelicula que desea ver: comedia, accion o terror: ").toLowerCase();


pelicula = Tipopelicula(pelicula); 

const edadesMinimas = edadminima (pelicula);
  

let edad = parseInt(prompt("Ingrese su edad:"));





verificarIngreso(pelicula, edadesMinimas , edad);


