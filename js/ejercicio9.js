/*9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad",
 y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato"
  que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente,
   crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato",
    y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado. */

class Animal {
  #nombre;
  #edad;
  constructor(nombre, edad) {
    this.#nombre = nombre;
    this.#edad = edad;
  }

  set elNombre(nombre) {
    this.#nombre = nombre;
  }

  get elNombre() {
    return this.#nombre;
  }

  set laEdad(edad) {
    this.#edad = edad;
  }

  get laEdad() {
    return this.#edad;
  }

  emitirSonido() {}
}

class Perro extends Animal {
  constructor(nombre, edad) {
    super(nombre, edad);
  }

  emitirSonido() {,
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

alert(`El gato ${primerGato.elNombre} dice ${primerGato.emitirSonido()} \n
El perro ${primerPerro.elNombre} dice ${primerPerro.emitirSonido()} `);
