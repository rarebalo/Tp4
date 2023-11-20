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
  constructor() {
    this._cantidadDeContactos = 10;
    this.contactos = [];
  }

  set anadirContacto(contacto) {
    this.contactos.push(contacto);
  }
  set cantidadDeContactos(cantidad) {
    this._cantidadDeContactos = cantidad;
  }
  get cantidadDeContactos() {
    let cantidadDeContactos = this.contactos.filter(
      (contacto) => contacto !== undefined
    ).length;
    return cantidadDeContactos;
  }

  existeContacto(consulta) {
    let repetido = false;
    const estadoConsulta = [];
    for (let index = 0; index < this.contactos.length; index++) {
      if (this.contactos[index][0] == consulta) {
        estadoConsulta.push(
          `El contacto "${consulta}" ya se encuentra agendado en la posicion n° ${
            index + 1
          }.`
        );
        estadoConsulta.push(index);
        repetido = true;
        break;
      }
    }
    if (repetido) {
      return estadoConsulta[0];
    } else {
      estadoConsulta.push(`El contacto "${consulta}" no existe en su agenda.`);
      return estadoConsulta[0];
    }
  }

  listarContactos() {
    let listaDeContactos = "";
    for (let index = 0; index < this.contactos.length; index++) {
      listaDeContactos =
        listaDeContactos +
        this.contactos[index][0] +
        " " +
        this.contactos[index][1] +
        "\n";
    }
    alert(listaDeContactos);
  }
  buscarContacto(nombre) {
    let mensaje = "";
    for (let index = 0; index < this.contactos.length; index++) {
      if (this.contactos[index][0] === nombre) {
        mensaje = `El numero telefonico de "${nombre}" es: ${this.contactos[index][1]}`;
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
}

function unNumeroDeTelefono() {
  const min = 1000000000;
  const max = 9999999999;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let agendaRoberto = new Agenda();

agendaRoberto.anadirContacto = ["Roberto Vicente", unNumeroDeTelefono()];
agendaRoberto.anadirContacto = ["Carlos Leonardo", unNumeroDeTelefono()];
agendaRoberto.anadirContacto = ["Florencia Ines", unNumeroDeTelefono()];

alert(agendaRoberto.cantidadDeContactos);
agendaRoberto.listarContactos();
alert(agendaRoberto.existeContacto("Roberto Vicente"));
alert(agendaRoberto.existeContacto("Juanito"));
alert(agendaRoberto.buscarContacto("Juanito"));
alert(agendaRoberto.buscarContacto("Carlos Leonardo"));
