/*1- Crea un objeto llamado auto que tenga algunas características como el color, marca,
modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Output:



objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó
*/

const auto = {
    color: 'rojo',
    marca: 'ferrari',
    modelo: '74',
    encendido: false,
    
    arrancar: function(){
        this.encendido = !this.encendido;
        if (this.encendido) {
            document.write("Tu nave acaba de despertar y en 5 minutos (después de calentar) estará lista para devorar el asfalto. <br>");
        }
        else{
            document.write("Tu nave se ha ido a descansar. <br>");
        }
    }
}

document.write(`${auto.encendido}<br>`);

auto.arrancar();

document.write(auto.encendido);