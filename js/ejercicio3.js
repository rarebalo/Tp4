/*3-Escribe una clase que permita crear distintos objetos “rectángulos”, 
con las propiedades de alto y ancho, mas los métodos necesarios para 
modificar y mostrar sus propiedades, calcular el perímetro y el área
*/

class Rectangulo {
  constructor(alto, ancho) {
    this._alto = alto;
    this._ancho = ancho;
  }

  get alto() {
    return this._alto;
  }

  get ancho() {
    return this._ancho;
  }

  get perimetro() {
    const perimetro = (this._alto + this._ancho) * 2;
    return perimetro;
  }

  get area() {
    const area = this._alto * this._ancho;
    return area;
  }

  set alto(altura) {
    if (altura > 0) {
      this._alto = altura;
    } else {
      document.write("La altura debe ser mayor a 0.<br>");
    }
  }

  set ancho(ancho) {
    if (ancho > 0) {
      this._ancho = ancho;
    } else {
      document.write("El ancho debe ser mayor a 0.<br>");
    }
  }
}

function escr(loQueEscribo){
  document.write(`${loQueEscribo}<br>`)
}

let nuevoRectangulo = new Rectangulo(10, 5);

document.write(`Perímetro del rectángulo: ${nuevoRectangulo.perimetro}<br>`);
nuevoRectangulo.alto = 3;
nuevoRectangulo.ancho = 7;
nuevoRectangulo.alto = 0;
escr(nuevoRectangulo._alto);
escr(nuevoRectangulo._ancho);
  
