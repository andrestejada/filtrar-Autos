//Variables
const marca = document.querySelector('#marca')
const year = document.querySelector('#year')
const minimo = document.querySelector('#minimo')
const maximo = document.querySelector('#maximo')
const puertas = document.querySelector('#puertas')
const transmision = document.querySelector('#transmision')
const color = document.querySelector('#color')
//Contenedor de marca
const resultado = document.querySelector('#resultado')

const maxYear = new Date().getFullYear()
const min = maxYear -10 ;

//General un objeto con la busqueda

const datosBusqueda ={
    marca: '',
    year: '',
    puertas: '',
    minimo: '',
    maximo: '',
    transmision: '',
    color: '',
}

//Eventos
document.addEventListener('DOMContentLoaded',()=>{
    mostrarAutos(autos)// Muestra la Opciones al cargar

    //Muestras lo años al cargar

    llenarSelect()
})

//Event para los campos de busqueda

marca.addEventListener('change',(e)=>{
 datosBusqueda.marca= e.target.value;

 filtrarAuto();
 
})
year.addEventListener('change',(e)=>{
 datosBusqueda.year= parseInt(e.target.value);

 filtrarAuto();
 
})
maximo.addEventListener('change',(e)=>{
 datosBusqueda.maximo= e.target.value;
 filtrarAuto();
})
minimo.addEventListener('change',(e)=>{
 datosBusqueda.minimo= e.target.value;
 filtrarAuto();
 
})
puertas.addEventListener('change',(e)=>{
 datosBusqueda.puertas= parseInt(e.target.value);
 filtrarAuto()
})
transmision.addEventListener('change',(e)=>{
 datosBusqueda.transmision= e.target.value;
 filtrarAuto();

})
color.addEventListener('change',(e)=>{
 datosBusqueda.color= e.target.value;
 filtrarAuto();

})

//Funciones

function mostrarAutos(autos){

limpiarHTML()

autos.forEach((auto)=>{

    const {marca,modelo,year,puertas,transmision,precio,color}= auto;

    const autoHTML = document.createElement('p');

    autoHTML.textContent = `
    
    ${marca} ${modelo}-${year} - ${puertas} Puertas -Trasmicion:${transmision}-Precio:$ ${precio} - Color :${color}
    `

    //Insertar HTML
    resultado.appendChild(autoHTML)
})
}

//Limpia el Html

function limpiarHTML(){
while(resultado.firstChild)
resultado.removeChild(resultado.firstChild)
}

//llena los campos de años

function llenarSelect (){

    for(i=maxYear;i>= min;i--){
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        year.appendChild(option)
       
    }
 

}

//Funcion que filtra en base a la busqueda

function filtrarAuto (){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo)
    .filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)


    if(resultado.length){
        mostrarAutos(resultado)
    }else{
        noResultado()
    }
    
}

//Filtra los Autos por marca

function filtrarMarca(auto){
    const {marca} = datosBusqueda;
    if(marca){
        return auto.marca === marca ;
    }
    return auto ;

}

//filtrar autos por año

function filtrarYear(auto){
    const {year} = datosBusqueda;
    if(year){
        return auto.year === year ;
    }
    return auto ;

}


//filtra los autos por el valor minimo

function filtrarMinimo (auto){
    const {minimo} = datosBusqueda;
    if(minimo){
        return auto.precio >= minimo ;
    }
    return auto ;
}

function filtrarMaximo(auto){
    const {maximo} = datosBusqueda;
    if(maximo){
        return auto.precio <= maximo ;
    }
    return auto ;
}

function filtrarPuertas(auto){
    const {puertas} = datosBusqueda;
    if(puertas){
        return auto.puertas === puertas ;
    }
    return auto ;
}

function filtrarTransmision(auto){
    const {transmision} = datosBusqueda;
    if(transmision){
        return auto.transmision === transmision ;
    }
    return auto ;
}

function filtrarColor(auto){
    const {color} = datosBusqueda;
    if(color){
        return auto.color === color ;
    }
    return auto ;
}


//mensaje que se muestra cuando no hay concidencia con el filtro

function noResultado(){
limpiarHTML()

    const noResultado = document.createElement('div')
    noResultado.classList.add('error','alerta');
    noResultado.textContent = 'No hay Resultados'
    resultado.appendChild(noResultado)
}