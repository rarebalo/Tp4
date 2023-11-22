/*10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones,
 esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión,
  además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información 
  en caso de encontrarlo, si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino,
 lista de pasajeros. Los aviones tienen el método abordar el cual permite que un
  pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario 
  mostrar un mensaje que indique que el avión está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", 
crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, 
buscar un avión y usar el método abordar.*/

class Aeropuerto {
  constructor(nombreAeropuerto, listaAviones = []) {
    this._nombreAeropuerto = nombreAeropuerto;
    this._listaAviones = listaAviones;
  }
  set nombreAeropuerto(nombre) {
    this._nombreAeropuerto = nombre;
  }
  get nombreAeropuerto() {
    return this._nombreAeropuerto;
  }

  set listaAviones(lista) {
    this._listaAviones = lista;
  }

  get listaAviones() {
    return this._listaAviones;
  }

  agregarAvion(avion) {
    this._listaAviones.push(avion);
  }

  buscarAvion(nombre) {
    let encontrado = false;
    for (let index = 0; index < this._listaAviones.length; index++) {
      if (this._listaAviones[index].nombre === nombre) {
        encontrado = true;
        //infomracion de avion encontrado
        break;
      }
    }
    if (encontrado) {
      //informacion del avion encontrado
    } else {
      let mensaje = "Avion no encontrado";
      return mensaje;
    }
  }
}

class Avion {
  constructor(nombre, capacidad, destino, listaPasajeros = []) {
    this._nombre = nombre;
    this._capacidad = capacidad;
    this._destino = destino;
    this._listaPasajeros = listaPasajeros;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get nombre() {
    return this._nombre;
  }
  set capacidad(capacidad) {
    this._capacidad = capacidad;
  }
  get capacidad() {
    return this._capacidad;
  }
  set destino(destino) {
    this._destino = destino;
  }
  get destino() {
    return this._destino;
  }
  abordar(pasajero) {
    let mensaje = "";
    if (this._capacidad > this._listaPasajeros.length) {
      this._listaPasajeros.push(pasajero);
      return mensaje = "El paajero abordo.";
    } else {
      return (mensaje = "El avion esta lleno, el pasajero no abordo.");
    }
  }
}

let unAeropuerto = new Aeropuerto("Aeropuerto Internacional");

let avionUno = new Avion("boing 747", 2, "chicligasta");
let avionDos = new Avion("Avionetita", 2, "santiago del estero");
let avionTres = new Avion("Aladelta", 1, "san javier");

unAeropuerto.agregarAvion(avionUno);
unAeropuerto.agregarAvion(avionDos);
unAeropuerto.agregarAvion(avionTres);

unAeropuerto._listaAviones[0].abordar("randi");
unAeropuerto._listaAviones[0].abordar("randi");


alert(`mostrar los aviones del aeropuerto: ${unAeropuerto._listaAviones[0][0]}`);
document.write(`muestro el nombre de un avion ${unAeropuerto.listaAviones[0]._nombre}`);
document.write(`sube el pasajero randy ${unAeropuerto._listaAviones[0].abordar("randi")}`);