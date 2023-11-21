/*9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad",
 y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato"
  que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente,
   crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato",
    y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado. */

class Animal {
  constructor(nombre, edad) {
    this._nombre = nombre;
    this._edad = edad;
  }

  set elNombre(nombre) {
    this._nombre = nombre;
  }

  get elNombre() {
    return this._nombre;
  }

  set laEdad(edad) {
    this._edad = edad;
  }

  get laEdad() {
    return this._edad;
  }

  emitirSonido() {}
}

class Perro extends Animal {
  constructor(nombre, edad) {
    super(nombre, edad);
  }

  emitirSonido() {
    const elSonido = "guau guau";
    return elSonido;
  }
}

class Gato extends Animal {
  constructor(nombre, edad) {
    super(nombre, edad);
  }
  emitirSonido() {
    const elSonido = "miau miau";
    return elSonido;
  }
}

const primerPerro = new Perro("Manchitas", 5);
const primerGato = new Gato("Magriete", 6);

alert(`El gato ${primerGato._nombre} dice ${primerGato.emitirSonido()} \n
El perro ${primerPerro._nombre} dice ${primerPerro.emitirSonido()} `);
