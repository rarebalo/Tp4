/*3-Escribe una clase que permita crear distintos objetos “rectángulos”, 
con las propiedades de alto y ancho, mas los métodos necesarios para 
modificar y mostrar sus propiedades, calcular el perímetro y el área
*/

class rectangulo {
    alto;
    ancho;

    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }

    get alto (){
        return this.alto;
    }
    get ancho(){
        return this.ancho;
    }
    get perimetro(){
        let perimetro = (this.alto + this.ancho) * 2;
        return perimetro;
    }
    get area(){
        let area = (this.alto * this.ancho) / 2;
        return area;
    }
}

let nuevoRectangulo = new rectangulo(10, 5);

document.write(`mues`)

