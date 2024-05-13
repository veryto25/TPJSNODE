'use strict'

function inicializarCarousel(claseImagen, clasePunto) {

    const grande    = document.querySelector(claseImagen);
    const punto     = document.querySelectorAll(clasePunto);

    // Cuando CLICK en punto
        // Saber la posición de ese punto
        // Aplicar un transform translateX al grande
        // QUITAR la clase activo de TODOS puntos
        // AÑADIR la clase activo al punto que hemos hecho CLICK

    // Recorrer TODOS los punto
    punto.forEach( ( cadaPunto , i )=> {
        // Asignamos un CLICK a cadaPunto
        punto[i].addEventListener('click',()=>{

            // Guardar la posición de ese PUNTO
            let posicion  = i
            // Calculando el espacio que debe DESPLAZARSE el GRANDE
            let operacion = posicion * -33.33333

            // MOVEMOS el grande
            grande.style.transform = `translateX(${ operacion }%)`

            // Recorremos TODOS los punto
            punto.forEach( ( cadaPunto , i )=>{
                // Quitamos la clase ACTIVO a TODOS los punto
                punto[i].classList.remove('activo')
            })
            // Añadir la clase activo en el punto que hemos hecho CLICK
            punto[i].classList.add('activo')

        })
    });

}

inicializarCarousel('.g1', '.p1');
inicializarCarousel('.g2', '.p2');
inicializarCarousel('.g3', '.p3');
inicializarCarousel('.g4', '.p4');
inicializarCarousel('.g5', '.p5');
inicializarCarousel('.g6', '.p6');
inicializarCarousel('.g7', '.p7');
inicializarCarousel('.g8', '.p8');
inicializarCarousel('.g9', '.p9');
inicializarCarousel('.g10', '.p10');
inicializarCarousel('.g11', '.p11');
inicializarCarousel('.g12', '.p12');
// inicializarCarousel('.grande-2', '.punto-2');
// inicializarCarousel('.grande-3', '.punto-3');
