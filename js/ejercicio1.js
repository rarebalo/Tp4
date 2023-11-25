/*1- Crea un objeto llamado auto que tenga algunas características como el color, marca,
modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Output:



objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó
*/

const auto = {
  color: "rojo",
  marca: "ferrari",
  modelo: "74",
  encendido: false,

  encender: function () {
    this.encendido = true;

    document.write(
      "Tu nave acaba de despertar y en 5 minutos (después de calentar) estará lista para devorar el asfalto. (auto encendido) <br>"
    );
  },
  apadar: function () {
    this.encendido = false;
    document.write("Tu nave se ha ido a descansar. (el auto se apagó) <br>");
  },
};

document.write(`${auto.encendido}<br>`);

auto.encender();

document.write(auto.encendido);

class Auto{
  #color;
  #marca;
  #modelo;
  #encendido;
  constructor(color, marca, modelo, encendido=false){
    this.#color = color;
    this.#marca = marca;
    this.#modelo = modelo;
    this.#encendido = encendido;
  }
  get color(){
    return this.#color;
  }
  set color(elColor){
    this.#color = elColor;
  }

  get marca (){
    return this.#marca;
  }

  set marca(laMarca){
    this.#marca = laMarca;
  }

  get modelo(){
    return this.#modelo;
  }

  set modelo(elModelo){
    this.#modelo = elModelo;
  }
}
