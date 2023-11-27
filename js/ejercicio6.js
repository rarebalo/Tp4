/*6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. 
Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/

class Libro {
  #titulo;
  #isbn;
  #autor;
  #numPaginas;
  constructor(titulo="",isbn="",autor="",numPaginas=0) {
    this.#titulo = titulo;
    this.#isbn = isbn;
    this.#autor = autor;
    this.#numPaginas = numPaginas;
  }

  get titulo() {
    return this.#titulo;
  }
  get isbn() {
    return this.#isbn;
  }
  get autor() {
    return this.#autor;
  }
  get numPaginas() {
    return this.#numPaginas;
  }

  set titulo(newTitulo) {      
    newTitulo = (newTitulo.toString()).toLowerCase();
    this.#titulo = newTitulo.charAt(0).toUpperCase() + newTitulo.slice(1);
  }
  set isbn(newIsbn) {
    this.#isbn = newIsbn;
  }
  set autor(newAutor) {
    newAutor = newAutor.toLowerCase();
    this.#autor = newAutor.charAt(0).toUpperCase() + newAutor.slice(1);
  }
  set numPaginas(NewNumPaginas) {
    this.#numPaginas = parseInt(NewNumPaginas);
  }

  mostrarLibro() {
    document.write(
      `El libro ${ this.#titulo} con ISBN ${this.#isbn} creado por el autor ${this.#autor} tiene páginas ${this.#numPaginas} <br><br>`
    );
  }
}

function unIsbn() {
  const min = 1000000000;
  const max = 9999999999999;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let milNueveOchentaYCuatro = new Libro();
let cienAniosDeSoledad = new Libro();
let matarAUnRuiseñor = new Libro();
const libros = [];

milNueveOchentaYCuatro.autor = "George Orwell";
milNueveOchentaYCuatro.isbn = unIsbn();
milNueveOchentaYCuatro.titulo = 1984;
milNueveOchentaYCuatro.numPaginas = 328;

cienAniosDeSoledad.autor = "Gabriel García Márquez";
cienAniosDeSoledad.isbn = unIsbn();
cienAniosDeSoledad.titulo = "Cien años de soledad";
cienAniosDeSoledad.numPaginas = 417;

matarAUnRuiseñor.autor = "Harper Lee";
matarAUnRuiseñor.isbn = unIsbn();
matarAUnRuiseñor.titulo = "Matar a un ruiseñor";
matarAUnRuiseñor.numPaginas = 324;

milNueveOchentaYCuatro.mostrarLibro();
cienAniosDeSoledad.mostrarLibro();
matarAUnRuiseñor.mostrarLibro();

libros.push(milNueveOchentaYCuatro);
libros.push(cienAniosDeSoledad);
libros.push(matarAUnRuiseñor);

function libroConMasPaginas(libros){
    let numeroMax = new Libro();
    for (let index = 0; index < libros.length; index++) {        
        
        if (libros[index].numPaginas > numeroMax.numPaginas) {
            numeroMax = libros[index];
        }
            
    }
    return numeroMax;   
}

document.write(`El libro con mas paginas es: ${libroConMasPaginas(libros).titulo} `);

