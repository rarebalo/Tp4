/*5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer),
 peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje 
indicando a qué generación pertenece la persona creada y cual 
es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
*/
const anioActual = new Date().getFullYear();
class Persona {
  constructor(nombre, dni, sexo, peso, altura, anioNac) {
    nombre = nombre.toLowerCase();
    (this.nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1)),
      (this.anioNac = anioNac),
      (this.edad = anioActual - anioNac),
      (this.dni = dni),
      (this.sexo = sexo),
      (this.peso = peso),
      (this.altura = altura);
  }

  mostrarGeneracion() {
    if (this.anioNac >= 1993 && this.anioNac <= 2011) {
      document.write(
        `Hola ${this.nombre}. Naciste en el '${this.anioNac
          .toString()
          .slice(
            -2
          )}, por lo tanto, perteneces a la generación “Z”. Esta generación tiene una población aproximada de 7,8 millones, fue marcada por la expansión masiva del internet y su rasgo característico es la irreverencia. <br>`
      );
    } else if (this.anioNac >= 1980 && this.anioNac <= 1994) {
      document.write(
        `Hola ${this.nombre}. Naciste en el '${this.anioNac
          .toString()
          .slice(
            -2
          )}, por lo tanto, perteneces a la generación “Y” (millennials). Esta generación tiene una población aproximada de 7,2 millones, fue marcada por el inicio de la digitalización y su rasgo característico es la frustración. <br>`
      );
    } else if (this.anioNac >= 1968 && this.anioNac <= 1981) {
      document.write(
        `Hola ${this.nombre}. Naciste en el '${this.anioNac
          .toString()
          .slice(
            -2
          )}, por lo tanto, perteneces a la generación “X”. Esta generación tiene una población aproximada de 9,3 millones, fue marcada por la crisis del '73 y la transicion española, su rasgo característico es la obsesión por el exito. <br>`
      );
    } else if (this.anioNac >= 1948 && this.anioNac <= 1969) {
      document.write(
        `Hola ${this.nombre}. Naciste en el '${this.anioNac
          .toString()
          .slice(
            -2
          )}, por lo tanto, perteneces a la generación “Baby Boom”. Esta generación tiene una población aproximada de 12,2 millones, fue marcada por la paz y la explosion demografica, su rasgo característico es la ambicion. <br>`
      );
    } else if (this.anioNac >= 1930 && this.anioNac <= 1949) {
      document.write(
        `Hola ${this.nombre}. Naciste en el '${this.anioNac
          .toString()
          .slice(
            -2
          )}, por lo tanto, perteneces a la generación “Silent Generation” (Los niños de la posguerra). Esta generación tiene una población aproximada de 6,3 millones, fue marcada por conflictos belicos y su rasgo característico es la austeridad. <br>`
      );
    } else {
      document.write(
        `Hola ${this.nombre}. se que naciste en el '${this.anioNac
          .toString()
          .slice(-2)}, pero ni idea bro, nose nada de tu generacion :/ <br>`
      );
    }
  }

  esMayorDeEdad() {
    if (this.edad > 18) {
      document.write(`${this.nombre} ya es mayor de edad. <br>`);
    } else {
      document.write(`${this.nombre} por el momento no es mayor de edad. <br>`);
    }
  }

  mostrarDatos() {
    document.write(`nombre: ${this.nombre}<br>`);
    document.write(`edad: ${this.edad} años<br>`);
    document.write(`dni: ${this.dni}<br>`);
    document.write(`sexo: ${this.sexo}<br>`);
    document.write(`peso: ${this.peso} kg<br>`);
    document.write(`altura: ${this.altura} metros<br>`);
    document.write(`año de nacimiento: ${this.anioNac}<br>`);
  }
}

function unDni() {
  const min = 10000000;
  const max = 99999999;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const persona1 = new Persona("eusEvio", unDni(), "H", 85, 1.7, 2010);

persona1.mostrarGeneracion();
persona1.mostrarDatos();
persona1.esMayorDeEdad();
document.write(`Persona 1 : ${persona1.nombre}`);
document.write(`Persona 1 : ${persona1.dni}`);
