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
  constructor(nombreAeropuerto, listaAviones){
    this._nombreAeropuerto = nombreAeropuerto;
    this._listaAviones = listaAviones;
  }
  set nombreAeropuerto(nombre){
    this._nombreAeropuerto = nombre;
  }
  get nombreAeropuerto(){
    return this._nombreAeropuerto;
  }

  set listaAviones(lista){
    this._listaAviones = lista;
  }

  get listaAviones(){
    return this._listaAviones;
  }

  agregarAvion(avion){
    this._listaAviones.push(avion);
  }

  buscarAvion(nombre){
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
      return let = "Avion no encontrado";
    }
  }
}

