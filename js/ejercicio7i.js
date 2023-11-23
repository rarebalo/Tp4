class Agenda {
    #cantidadDeContactos;
    #contactos;
    constructor(cantidadDeContactos = 10, contactos = []) {
      this.#cantidadDeContactos = cantidadDeContactos;
      this.#contactos = contactos;
    }
  
    anadirContacto(contacto) {
      if (this.#cantidadDeContactos > this.cantidadDeContactos) {
        this.#contactos.push(contacto);
        alert(
          `"${
            this.#contactos[this.contactos.length - 1][0]
          }" fue añadido a tu agenda con exito!`
        );
      } else {
        alert(
          `Su agenda esta llena no se pudo agregar a ${
            this.#contactos[this.contactos.length - 1][0]
          }`
        );
      }
    }
    set cantidadDeContactos(cantidad) {
      this.#cantidadDeContactos = cantidad;
    }
    get cantidadDeContactos() {
      let cantidadDeContactos = this.#contactos.filter(
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
            `El contacto "${consulta}" existe en la posicion n° ${index + 1}.`
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
      if (listaDeContactos === "") {
        alert(`Actualmente tu agenda no tiene ningun contacto.`);
      } else {
        alert(listaDeContactos);
      }
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
    eliminarContacto(contacto) {
      let mensaje = "";
      for (let index = 0; index < this.contactos.length; index++) {
        if (this.contactos[index][0] === contacto) {
          mensaje = `El contacto "${contacto}" fue eliminado de tu agenda.`;
          this.contactos.splice(index, 1);
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
      if (this.#cantidadDeContactos > this.cantidadDeContactos) {
        mensaje = `Su agenda aun tiene ${
          this.#cantidadDeContactos - this.cantidadDeContactos
        } lugares disponibles.`;
      } else {
        mensaje = `Su agenda esta llena.`;
      }
      return mensaje;
    }
    huecosLibres() {
      let mensaje = "";
      if (this.#cantidadDeContactos > this.cantidadDeContactos) {
        mensaje = `Su agenda aun tiene ${
          this.#cantidadDeContactos - this.cantidadDeContactos
        } huecos disponibles.`;
      } else {
        mensaje = `Su agenda esta llena.`;
      }
      return mensaje;
    }
  }