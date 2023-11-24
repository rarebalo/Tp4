/*4- Escribe una clase Producto para crear objetos. 
Estos objetos, deben presentar las propiedades código, 
nombre y precio, además del método imprime datos, el cual escribe por
 pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos
para mostrar por pantalla los valores de los tres objetos instanciados.*/

class Producto {
    #codigo
    #nombre
    #precio
    constructor(codigo, nombre, precio){
        this.#codigo = codigo;
        this.#nombre = nombre;
        this.#precio = precio;
    }
    get codigo(){
        return this.#codigo;
    }
    set codigo(elcodigo){
        this.#codigo = elcodigo;
    }
    get nombre(){
        return this.#nombre;
    }
    set nombre(elNombre){
        this.#nombre = elNombre;
    }
    get precio(){
        return this.#precio;
    }
    set precio(elPrecio){
        this.#precio = elPrecio;
    }

    imprimeDatos(){
        document.write(`codigo: ${this.#codigo}<br>`);
        document.write(`nombre: ${this.#nombre}<br>`);
        document.write(`precio: ${this.#precio}<br>`);
    }

}

const pan = new Producto (2674,"lactal",16);
const fosforos = new Producto (9842,"parana",20);
const encendedor = new Producto (7741,"cien fuegos",16);

const catalogo = [pan,fosforos,encendedor];

for (let index = 0; index < catalogo.length; index++) {
    
    catalogo[index].imprimeDatos();
    document.write(`<br>`);
    
}