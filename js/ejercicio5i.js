class Persona {
  #nombre;
  #dni;
  #edad;
  #sexo;
  #peso;
  #altura;
  #anioNac;

  constructor(nombre, dni, sexo, peso, altura, anioNac) {
    this.#nombre = nombre;
    this.#anioNac = anioNac;
    this.#edad = anioActual - anioNac;
    this.#dni = dni;
    this.#sexo = sexo;
    this.#peso = peso;
    this.#altura = altura;
  }
  get nombre() {
    return this.#nombre;
  }
  set nombre(elNombre) {
    elNombre = elNombre.toLowerCase();
    this.#nombre = elNombre.charAt(0).toUpperCase() + this.nombre.slice(1);
  }
  get anioNac() {
    return this.#anioNac;
  }
  set anioNac(elAnioNac) {
    this.#anioNac = elAnioNac;
  }

  get edad() {
    return this.#edad;
  }

  set edad(edad) {
    this.#edad = edad;
  }

  get dni(){
    return this.#dni;
  }

  set dni(elDni){
    this.#dni = elDni;
  }

  get sexo(){
    return this.#sexo;
  }

  set sexo(elSexo){
    this.#sexo = elSexo;
  }

  get peso(){
    return this.#peso;
  }

  set peso (elPeso){
    this.#peso = elPeso;
  }

  get altura(){
    return this.#altura;
  }

  set altura (laAltura){
    this.#altura = laAltura;
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
