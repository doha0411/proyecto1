//variables globales

const formularioUI = document.querySelector('#formulario');
const listaActividadesUI = document.getElementById('listaBusquedas');
let arrayBusquedas = [];

// funciones

const CrearItem = (actividad) => {
    let item = {
        actividad: actividad,
        estado: true
    }
    arrayBusquedas.push(item); // push significa empujar el item al array vacio para que se guarde alli
    return item;
}

const guardarDB = (actividad) => {
    localStorage.setItem('busqueda', JSON.stringify(arrayBusquedas));
    PintarDB();
}
const PintarDB = () => {
        listaActividadesUI.innerHTML = '';
        arrayBusquedas = JSON.parse(localStorage.getItem('busqueda'));
        if (arrayBusquedas.length > 3) {
            arrayBusquedas.shift(); // asi hgo que se marquen solo las ultimas tres busquedas
        }
        if (arrayBusquedas === null) {
            arrayBusquedas = [];
        } else {
            arrayBusquedas.forEach(Element => {
                listaActividadesUI.innerHTML += `
            <div>
            <b class="clickeable" onclick="enviarvalor('${Element.actividad}')">${Element.actividad}</b>
            </div>`
            });
        }
    }
    // escuchar el evento del click del boton

formularioUI.addEventListener('submit', (e) => {
    e.preventDefault();
    let actividadUI = document.getElementById('search').value;
    CrearItem(actividadUI);
    guardarDB();
    formularioUI.reset();
});

// pintamos en el Dom
document.addEventListener('DOMContentLoaded', PintarDB);