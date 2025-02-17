//Funcion que aplica el estilo a la opcion en el menu seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    opciones[5].className = "";
    link.className = "seleccionado";

    //Desaparece el menu una vez se seleccione una opcion en el menu responsivo
    var x = document.getElementById("nav");
    x.className = "";
}
//Funcion para Mostrar y Ocultar el Menu Responsivo
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = " responsive";
    } else {
        x.className = "";
    }
}

//detecto el evento de scroll para aplicar animaciones en las barras de skills
window.onscroll = function() {
    efectoHabilidades();
}

//funcion que aplica la animacion a las barras de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300){
        document.getElementById("html").classList.add("barra-progreso1")
        document.getElementById("js").classList.add("barra-progreso2")
        document.getElementById("bd").classList.add("barra-progreso3")
        document.getElementById("ps").classList.add("barra-progreso4")
        document.getElementById("ai").classList.add("barra-progreso5")
    }
}