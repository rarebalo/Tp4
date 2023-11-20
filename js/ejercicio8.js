/*8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", 
y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" 
con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".
*/

class Persona {
  constructor(nombre, edad, profesion, saludo, despedida) {
    this._nombre = nombre;
    this._edad = edad;
    this._profesion = profesion;
    this._saludo = saludo;
    this._despedida = despedida;
  }

  set nombrePersona(elNombre) {
    this._nombre = elNombre;
  }
  set edadPersona(laEdad) {
    this._edad = laEdad;
  }
  set profesionPersona(laProfesion) {
    this._profesion = laProfesion;
  }
  set saludar(elSaludo) {
    this._saludo = elSaludo;
  }
  set despedirse(laDespedida) {
    this._despedida = laDespedida;
  }

  get nombrePersona() {
    return this._nombre;
  }

  get edadPersona() {
    return this._edad;
  }

  get profesionPersona() {
    return this._profesion;
  }

  get saludar() {
    return this._saludo;
  }

  get despedirse() {
    return this._despedida;
  }
}
function unNumAleatorio(topMin, topMax) {
  return Math.floor(Math.random() * (topMax - topMin + 1) + topMin);
}

const fechaActual = new Date();
const hora = fechaActual.getHours();
let momentoDelDia = "";
if (hora > 0 && hora < 6) {
  momentoDelDia = "madrugada";
} else if (hora > 6 && hora < 12) {
  momentoDelDia = "mañana";
} else if (hora > 12 && hora < 18) {
  momentoDelDia = "tarde";
} else {
  momentoDelDia = "noche";
}
let saludosBienvenida = [
  "¡Hola!",
  "¡Buenos días!",
  "¡Bienvenido!",
  "¡Qué alegría verte!",
  "¡Hola, qué tal!",
  "¡Hola, cómo estás!",
  "¡Hola, un placer verte!",
  "¡Hola, qué bueno verte!",
  "¡Hola, bienvenido a casa!",
  "¡Hola, espero que estés bien!",
  "¡Hola, qué bueno tenerte aquí!",
  "¡Hola, espero que tengas un buen día!",
  "¡Hola, disfruta tu día!",
  "¡Hola, que tengas un día maravilloso!",
  "¡Hola, que tengas un día lleno de alegría!",
  "¡Hola, que tengas un día lleno de éxitos!",
  "¡Hola, que tengas un día lleno de bendiciones!",
  "¡Hola, que tengas un día lleno de amor!",
  "¡Hola, que tengas un día lleno de paz!",
  "¡Hola, que tengas un día lleno de felicidad!",
  "¡Hola, que tengas un día lleno de sonrisas!",
  "¡Hola, que tengas un día lleno de risas!",
  "¡Hola, que tengas un día lleno de diversión!",
  "¡Hola, que tengas un día lleno de aventuras!",
  "¡Hola, que tengas un día lleno de sorpresas!",
  "¡Hola, que tengas un día lleno de éxitos!",
  "¡Hola, que tengas un día lleno de logros!",
  "¡Hola, que tengas un día lleno de aprendizaje!",
  "¡Hola, que tengas un día lleno de crecimiento!",
  "¡Hola, que tengas un día lleno de inspiración!",
];
let saludosDespedida = [
  "¡Adiós!",
  "¡Hasta luego!",
  "¡Nos vemos!",
  "¡Hasta la próxima!",
  "¡Hasta pronto!",
  "¡Que tengas un buen día!",
  "¡Que estés bien!",
  "¡Cuidate!",
  "¡Hasta mañana!",
  "¡Hasta la vista!",
  "¡Hasta luego, cuídate mucho!",
  "¡Hasta luego, que estés bien!",
  "¡Hasta luego, que tengas un buen día!",
  "¡Hasta luego, que tengas una buena tarde!",
  "¡Hasta luego, que tengas una buena noche!",
  "¡Hasta luego, que tengas un buen viaje!",
  "¡Hasta luego, que tengas un buen regreso a casa!",
  "¡Hasta luego, que tengas un buen fin de semana!",
  "¡Hasta luego, que tengas unas buenas vacaciones!",
  "¡Hasta luego, que tengas un buen descanso!",
  "¡Hasta luego, que tengas un buen recreo!",
  "¡Hasta luego, que tengas una buena comida!",
  "¡Hasta luego, que tengas una buena siesta!",
  "¡Hasta luego, que tengas un buen estudio!",
  "¡Hasta luego, que tengas un buen trabajo!",
  "¡Hasta luego, que tengas un buen entrenamiento!",
  "¡Hasta luego, que tengas un buen juego!",
  "¡Hasta luego, que tengas una buena lectura!",
  "¡Hasta luego, que tengas una buena película!",
  "¡Hasta luego, que tengas un buen sueño!",
];

let nombresX = [
  "Juan",
  "Ana",
  "Carlos",
  "María",
  "Pedro",
  "Laura",
  "Javier",
  "Sofía",
  "Luis",
  "Carmen",
  "Fernando",
  "Isabel",
  "Pablo",
  "Patricia",
  "Ricardo",
];

let profesionesDiv = [
  "Médico",
  "Ingeniero",
  "Abogado",
  "Profesor",
  "Enfermero",
  "Dentista",
  "Farmacéutico",
  "Psicólogo",
  "Arquitecto",
  "Veterinario",
  "Policía",
  "Bombero",
  "Carpintero",
  "Electricista",
  "Plomero",
  "Chef",
  "Peluquero",
  "Periodista",
  "Fotógrafo",
  "Pintor",
  "Escultor",
  "Músico",
  "Actor",
  "Director de cine",
  "Diseñador gráfico",
  "Programador",
  "Analista de sistemas",
  "Contador",
  "Economista",
  "Administrador de empresas",
];

const lasPersonas = [];
let todosLosNombres = "";
let cantidadDePersonas = unNumAleatorio(2, 29);
let manual = prompt(
  `Deseas agregar de forma manual a la personas?\n En el caso deque si escribe "si" de lo contrario escribe "no"`
);
if (manual.toLowerCase() === "si") {
  cantidadDePersonas = parseInt(
    prompt("Cuantas son las personas que vamos a agregar?")
  );
  for (let index = 0; index < cantidadDePersonas; index++) {
    let nombre = prompt(`Ingresa el nombre de la persona N°${index + 1}.`);
    let edad = prompt(`Ingresa la edad de ${nombre}.`);
    let profesion = prompt(`Ingresa la profesion de ${nombre}.`);
    let saludo = saludosBienvenida[unNumAleatorio(0, 29)];
    let despedida = saludosDespedida[unNumAleatorio(0, 29)];
    let unaPersona = new Persona(nombre, edad, profesion, saludo, despedida);
    lasPersonas.push(unaPersona);
  }
} else {
  for (let index = 0; index < nombresX.length; index++) {
    let saludo = saludosBienvenida[unNumAleatorio(0, 29)];
    let despedida = saludosDespedida[unNumAleatorio(0, 29)];
    let edad = unNumAleatorio(0, 100);
    let profesion = profesionesDiv[unNumAleatorio(0, 29)];
    let unaPersona = new Persona(
      nombresX[index],
      edad,
      profesion,
      saludo,
      despedida
    );
    lasPersonas.push(unaPersona);
  }
}

for (let index = 0; index < lasPersonas.length; index++) {
  todosLosNombres =
    todosLosNombres +
    " " +
    lasPersonas[index]._nombre +
    ": " +
    lasPersonas[index]._edad +
    " años de edad, y su profesion es: " +
    lasPersonas[index]._profesion +
    "\n";
}

alert(`Estas son las personas agregadas: \n${todosLosNombres}`);
alert(`Ahora van a interacturar de forma aleatoria...`);

for (let index = 0; index < cantidadDePersonas / 2; index++) {
  let numUno = unNumAleatorio(0, lasPersonas.length - 1);
  let numDos = unNumAleatorio(0, lasPersonas.length - 1);
  alert(
    `Interaccio N°${index + 1}  de la ${momentoDelDia} es entre: \n ${
      lasPersonas[numUno]._nombre
    } y ${lasPersonas[numDos]._nombre} `
  );
  if (unNumAleatorio(0, 10) > 5) {
    alert(`${lasPersonas[numUno]._nombre}: ${lasPersonas[numUno]._saludo} \n
    ${lasPersonas[numDos]._nombre}: ${lasPersonas[numDos]._saludo}`);
  } else {
    alert(`${lasPersonas[numUno]._nombre}: ${lasPersonas[numUno]._despedida} \n
    ${lasPersonas[numDos]._nombre}: ${lasPersonas[numDos]._despedida}`);
  }
}
