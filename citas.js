//Crear los selectores
const mascota = document.querySelector('#mascota')
const propietario = document.querySelector('#propietario')
const telefono = document.querySelector('#telefono')
const fecha = document.querySelector('#fecha')
const hora = document.querySelector('#hora')
const sintomas = document.querySelector('#sintomas')
const formulario = document.querySelector('#nueva-cita')
const contenedorCitas = document.querySelector('#citas')
//Crear estructura de datos objeto, debido a que utilizar un array es insosteible para crear distintas citas

const objCitas = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

eventos()
function eventos() {
    formulario.addEventListener('submit', nuevaCita)
    // Podemos utilizar change o input
    mascota.addEventListener('change', datosCita)
    propietario.addEventListener('change', datosCita)
    telefono.addEventListener('change', datosCita)
    fecha.addEventListener('change', datosCita)
    hora.addEventListener('change', datosCita)
    sintomas.addEventListener('change', datosCita)
}
// Estructura class orientada a objetos
class citas{
    constructor(){
        this.citas = []
    }

    agregarCita(cita){
        this.citas.push(cita)
        // this.citas = [...citas,cita]
        console.log(this.citas)
    }

    eliminarCita(id){

    }

    editarCita(cita){

    }
    // CRUD (Operaciones)
    // CREATE
    // READ
    // UPDATE
    // DELETE
}

//Hacemos una instanciacion
const administrarCitas = new citas()




function nuevaCita(e) {
    e.preventDefault()
    const { mascota, propietario, telefono, fecha, hora, sintomas } = objCitas
    // console.log("nueva cita")
    if(mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '' ){
        console.log('todos los campos son obligatorios')
    } else {
        //Agregar al arreglo o crear nueva cita
        administrarCitas.agregarCita({...objCitas})
    }
}

function datosCita(e) {
    // console.log(e.target.name)

    objCitas[e.target.name] = e.target.value
    // console.log(objCitas)

}