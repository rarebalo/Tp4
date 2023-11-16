/*
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y 
volver a mostrar la descripción del estado de la cuenta.

Rectángulos
*/

class cuenta {
    #titular;
    #saldo;

    constructor(titular, saldo) {
        this.#titular = titular;
        this.#saldo = saldo;
    }

    get titular() {
        return this.#titular;
    }

    ingresar(monto) {
        if (monto > 0) {
            this.#saldo = this.#saldo + monto;
        } else {
            document.write(`El importe tiene que ser mayor a 0 <br>`);
        }
        this.informar();
    }

    extraer(monto) {
        if (this.#saldo - monto > 0) {
            this.#saldo = this.#saldo - monto;
        } else {
            document.write(`No tiene el saldo suficiente para hacer la extraccion. <br>`);
        }
        this.informar();
    }

    informar() {
        document.write(`Su saldo actual es ${this.#saldo}<br>`);
    }
}

const nuevaCuenta = new cuenta("Alex", 0);

document.write(`Consulto el nombre de la cuenta:  ${nuevaCuenta.titular} <br>`);
//document.write(`Consulto el saldo de la cuenta:  ${nuevaCuenta.informar} <br>`);
//ingreso 16 pesos
nuevaCuenta.ingresar(16);

nuevaCuenta.informar();

nuevaCuenta.extraer(10);

nuevaCuenta.informar();

nuevaCuenta.extraer(9);


