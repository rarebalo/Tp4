/*7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. 
Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos.
 Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, 
sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda,
 indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt,
 las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
*/
class Agenda {
  #cantidadDeContactos;
  #contactos;
  constructor(cantidadDeContactos = 10, contactos = []) {
    this.#cantidadDeContactos = cantidadDeContactos;
    this.#contactos = contactos;
  }

  set cantidadDeContactos(cantidad) {
    this.#cantidadDeContactos = cantidad;
  }

  get cantidadDeContactos() {
    return this.#cantidadDeContactos;
  }

  anadirContacto(contacto) {
    if (this.#cantidadDeContactos > this.#contactos.length) {
      this.#contactos.push(contacto);
      alert(
        `"${
          this.#contactos[this.#contactos.length - 1][0]
        }" fue añadido con exito!`
      ); //a esto lo tengo que cambiar por un valor return
    } else {
      alert(`Su agenda esta llena no se puedo agregar a "${contacto}"`); //a esto lo tengo que cambiar por un valor return
    }
  }

  existeContacto(consulta) {
    let repetido = false;
    const estadoConsulta = [];
    for (let index = 0; index < this.#contactos.length; index++) {
      if (this.#contactos[index][0] == consulta) {
        estadoConsulta.push(
          `El contacto "${consulta}" existe en la posicion n° ${index + 1}.` //esto tiene que devolver un dato
        );
        estadoConsulta.push(index);
        repetido = true;
        break;
      }
    }
    if (repetido) {
      return estadoConsulta[0];
    } else {
      estadoConsulta.push(`El contacto "${consulta}" no existe en su agenda.`); // esto tiene que devolver un dato
      return estadoConsulta[0];
    }
  }

  listarContactos() {
    let listaDeContactos = "";
    for (let index = 0; index < this.#contactos.length; index++) {
      listaDeContactos =
        listaDeContactos +
        this.#contactos[index][0] +
        " " +
        this.#contactos[index][1] +
        "\n";
    }
    if (listaDeContactos === "") {
      alert(`Actualmente tu agenda no tiene ningun contacto.`);
    } else {
      alert(listaDeContactos);
    }
  }
  buscarContacto(nombre) {
    let mensaje = "";
    for (let index = 0; index < this.#contactos.length; index++) {
      if (this.#contactos[index][0] === nombre) {
        mensaje = `El numero telefonico de "${nombre}" es: ${
          this.#contactos[index][1]
        }`;
        break;
      }
    }
    if (mensaje !== "") {
      return mensaje;
    } else {
      mensaje = `El contacto "${nombre}" no existe en su agenda.`;
      return mensaje;
    }
  }
  eliminarContacto(contacto) {
    let mensaje = "";
    for (let index = 0; index < this.#contactos.length; index++) {
      if (this.#contactos[index][0] === contacto) {
        mensaje = `El contacto "${contacto}" fue eliminado de tu agenda.`;
        this.#contactos.splice(index, 1);
        break;
      }
    }
    if (mensaje !== "") {
      return mensaje;
    } else {
      mensaje = `El contacto "${contacto}" no existe en tu agenda.`;
      return mensaje;
    }
  }
  agendaLlena() {
    let mensaje = "";
    if (this.#cantidadDeContactos > this.#contactos.length) {
      mensaje = `Su agenda aun tiene ${
        this.#cantidadDeContactos - this.#contactos.length
      } lugares disponibles.`;
    } else {
      mensaje = `Su agenda esta llena.`;
    }
    return mensaje;
  }
  huecosLibres() {
    let mensaje = "";
    if (this.#cantidadDeContactos > this.#contactos.length) {
      mensaje = `Su agenda aun tiene ${
        this.#cantidadDeContactos - this.#contactos.length
      } huecos disponibles.`;
    } else {
      mensaje = `Su agenda esta llena.`;
    }
    return mensaje;
  }
}

function unNumeroDeTelefono() {
  const min = 1000000000;
  const max = 9999999999;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function unNombreApellido() {
  const min = 0;
  const max = 29;
  return nombresApellidos[Math.floor(Math.random() * (max - min + 1) + min)];
}

function deseasContinuar() {
  continuar = prompt(
    `Desear realizar otra operacion? \n Si deseas realizar otra operacion teclea "si". \n Si no deseas continuar teclea "no". `
  ).toLowerCase();
  if (continuar === "si") {
    terminar = false;
  } else {
    terminar = true;
  }
}

let nombresApellidos = [
  "Roberto García",
  "Carlos Fernández",
  "Florencia Martínez",
  "Juan Pérez",
  "María Rodríguez",
  "Pedro Gómez",
  "Lucía González",
  "Sofía Ramírez",
  "Mateo Torres",
  "Camila Vargas",
  "Diego Castro",
  "Valentina Ríos",
  "Santiago Morales",
  "Isabella Guzmán",
  "Sebastián Peña",
  "Mía Alvarado",
  "Alejandro Romero",
  "Emma Cordero",
  "Samuel Vásquez",
  "Victoria Mendoza",
  "Benjamín Ruiz",
  "Martina Herrera",
  "Leonardo Guerra",
  "Ana Méndez",
  "Luis Aguilar",
  "Elena Cervantes",
  "Tomás Paredes",
  "Julia Duarte",
  "Felipe Solís",
  "Adriana Navarro",
];

let agendaRoberto = new Agenda();
let terminar = false;
let opciones = 0;
let numeroUsuario = 0;
let nombreUsuario = "";
do {
  opciones = parseInt(
    prompt(
      `Selecciona el numero que corresponde a la operacion que deseas realizar: \n 
      1: Añade un contacto a la agenda. \n
      2: Verificar si existe un contacto. \n
      3: Lista de toda la agenda. \n
      4: Buscar un contacto por su nombre. \n
      5: Elimina un contacto de tu agenda. \n
      6: Consulta si la agenda esta llena. \n
      7: Consulta cuantos lugares quedan en tu agenda.`
    )
  );
  switch (opciones) {
    case 1:
      nombreUsuario = prompt("Ingresa el nombre de tu contacto: ");
      numeroUsuario = parseInt(
        prompt(`Ingresa el numero de telefono de ${nombreUsuario}`)
      );
      agendaRoberto.anadirContacto([nombreUsuario, numeroUsuario]);
      deseasContinuar();
      break;
    case 2:
      nombreUsuario = prompt(
        `Ingresa el nombre del contacto que deseas buscar.`
      );
      alert(agendaRoberto.existeContacto(nombreUsuario));
      deseasContinuar();
      break;
    case 3:
      agendaRoberto.listarContactos();
      deseasContinuar();
      break;
    case 4:
      nombreUsuario = prompt(
        "Ingresa el nombre del contacto que deseas buscar"
      );
      alert(agendaRoberto.buscarContacto(nombreUsuario));
      deseasContinuar();
      break;
    case 5:
      nombreUsuario = prompt(
        "Ingresa el nombre del contacto que deseas eliminar"
      );
      alert(agendaRoberto.eliminarContacto(nombreUsuario));
      deseasContinuar();
      break;
    case 6:
      alert(agendaRoberto.agendaLlena());
      deseasContinuar();
      break;
    case 7:
      alert(agendaRoberto.huecosLibres());
      deseasContinuar();
      break;
    default:
      alert(
        `La opción que ingresaste no es correcta. Asegúrate de ingresar solamente un número entre el 1 y el 7.`
      );
      break;
  }
} while (!terminar);
