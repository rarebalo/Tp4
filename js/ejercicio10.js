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
  #nombreAeropuerto
  #listaAviones
  constructor(nombreAeropuerto, listaAviones = []) {
    this.#nombreAeropuerto = nombreAeropuerto;
    this.#listaAviones = listaAviones;
  }
  set nombreAeropuerto(nombre) {
    this.#nombreAeropuerto = nombre;
  }
  get nombreAeropuerto() {
    return this.#nombreAeropuerto;
  }

  set listaAviones(lista) {
    this.#listaAviones = lista;
  }

  get listaAviones() {
    return this.#listaAviones;
  }

  agregarAvion(avion) {
    this.#listaAviones.push(avion);
  }

  buscarAvion(nombre) {
    let encontrado = false;
    for (let index = 0; index < this.#listaAviones.length; index++) {
      if (this.#listaAviones[index].nombre === nombre) {
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
  #nombre
  #capacidad
  #destino
  #listaPasajeros 

  constructor(nombre, capacidad, destino, listaPasajeros = []) {
    this.#nombre = nombre;
    this.#capacidad = capacidad;
    this.#destino = destino;
    this.#listaPasajeros  = listaPasajeros;
  }
  set nombre(nombre) {
    this.#nombre = nombre;
  }
  get nombre() {
    return this.#nombre;
  }
  set capacidad(capacidad) {
    this.#capacidad = capacidad;
  }
  get capacidad() {
    return this.#capacidad;
  }
  set destino(destino) {
    this.#destino = destino;
  }
  get destino() {
    return this.#destino;
  }
  abordar(pasajero) {
    let mensaje = "";
    if (this.#capacidad > this.#listaPasajeros .length) {
      this.#listaPasajeros .push(pasajero);
      return (mensaje = "El paajero abordo.");
    } else {
      return (mensaje = "El avion esta lleno, el pasajero no abordo.");
    }
  }
}

let unAeropuerto = new Aeropuerto(
  prompt(`vamos a crear el aeroperto, ingresa el nombre del aeropuerto: `)
);
let losAviones = [];
let numeroDeAviones = parseInt(
  prompt(`Ingresa la cantidad de aviones que vamos a crear:`)
);
for (let index = 0; index < numeroDeAviones; index++) {
  losAviones.push(
    new Avion(
      prompt(
        `Ahora vamos a crear el avion ${index + 1}, ingresa el nombre avion:`
      ),
      parseInt(prompt(`Ingresa la capacidad de pasajeros del avion.`)),
      prompt(`Ingresa el destino del vuelo`)
    )
  );
}

unAeropuerto.listaAviones = losAviones;

unAeropuerto.listaAviones[0].abordar("randi");
unAeropuerto.listaAviones[0].abordar("randi");

alert(
  `mostrar los aviones del aeropuerto: ${unAeropuerto.listaAviones[0][0]}`
);
document.write(
  `muestro el nombre de un avion ${unAeropuerto.listaAviones[0].nombre}`
);
document.write(
  `sube el pasajero randy ${unAeropuerto.listaAviones[0].abordar("randi")}`
);
