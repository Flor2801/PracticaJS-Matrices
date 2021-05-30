
// const grilla =  document.querySelector(".casillero")

// const obtenernumeroalAzar = () => {
//     return Math.floor(Math.random()*3)
// }

// let items = ['🍉', '🍋', '🍌', '🍊', '🍏']
// console.log(items)

// const obtenerfrutaalAzar = () => {
//     return items [obtenernumeroalAzar()]
// }

// console.log(obtenerfrutaalAzar())

// let lista = []

// for (let i = 0; i < 10; i++) {
//    lista[i] = obtenerfrutaalAzar(items)
// }


// console.log(lista)

// grilla.innerHTML = ` <div>${obtenerfrutaalAzar(items)}</div>`


// let divs = ''
// for (let i = 0; i < 20; i++) {
    
// divs += ` <div>${obtenerfrutaalAzar(items)}</div>`
    
// }

// console.log(divs)

// grilla.innerHTML = divs


const grilla = document.querySelector(".grilla")

const crearGrilla = (ancho, alto) => {
  const anchoDeGrilla = 50 * ancho
  grilla.style.width = `${anchoDeGrilla}px`
  // alternativa
  // grilla.style.width = String(anchoDeGrilla) + 'px'
  // grilla.style.width = anchoDeGrilla + 'px'

  const obtenerNumeroAlAzar = () => {
  return Math.floor((Math.random() * 6 ))  
  }

  const items = ['🍉', '🍐', '🍌', '🍇', '🍎', '🍊']

  const obtenerFrutaAlAzar = (items) => {
    return items[obtenerNumeroAlAzar()]
  }

  const listaDeFrutas = []

  for (let i = 0; i < alto * ancho; i++) {
    listaDeFrutas[i] = obtenerFrutaAlAzar(items)
  }

  grilla.innerHTML = ''
  for (let i = 0; i < listaDeFrutas.length; i++) {
    grilla.innerHTML += `<div>${listaDeFrutas[i]}</div>`
  }
}

crearGrilla(6, 6)



const grillaHTML = document.querySelector("#grilla");
const nuevoButton = document.querySelector("#nuevo");
const reiniciarButton = document.querySelector("#reiniciar");
const buscarMatches = document.querySelector("#buscarMatch")

const FRUTAS = ['🍉', '🥥', '🍋', '🥝', '🍒', '🍑']

let grilla = []

const obtenerFrutaAlAzar = (frutas) => {
  return frutas[Math.floor(Math.random() * frutas.length)]
}

const generarGrilla = (tamanio) => {
  grilla = []
  for (let i = 0; i < tamanio; i++) {
    grilla[i] = []
    for (let j = 0; j < tamanio; j++) {
      grilla[i][j] = obtenerFrutaAlAzar(FRUTAS)
    }
  }
  return grilla
}

const buscarBloquesInicial = () => {
  for (let i = 0; i < grilla.length; i++) {
    for (let j = 0; j < grilla[i].length; j++) {
      if (grilla[i][j] === grilla[i][j+1] && grilla[i][j] === grilla[i][j+2]) {
        return true
      }
      if ((grilla[i+1] && grilla[i+2]) && grilla[i][j] === grilla[i+1][j] && grilla[i][j] === grilla[i+2][j]) {
        return true
      }
    }
  }
  return false
}

do {
  grilla = generarGrilla(10)
}
while (buscarBloquesInicial() === true)



const crearGrilla = (ancho) => {
  const anchoDeGrilla = 50 * ancho
  grillaHTML.style.width = `${anchoDeGrilla}px`
  const listaDeFrutas = grilla
  grillaHTML.innerHTML = ''
  for (let i = 0; i < listaDeFrutas.length; i++) {
    for (let j = 0; j < listaDeFrutas[i].length; j++) {
      grillaHTML.innerHTML += `<div data-x="${i}" data-y="${j}">${listaDeFrutas[i][j]}</div>`
    }
  }
}

crearGrilla(10)

const escucharClicks = () => {
  const todosLosCuadrados = document.querySelectorAll(".grilla > div")
  
  let primerCuadrado = ''
  let segundoCuadrado = ''

  for (let cuadrado of todosLosCuadrados) {
    cuadrado.onclick = (e) => {
      console.log("primer click")
      primerCuadrado = e.target
      for (let cuadrado2 of todosLosCuadrados) {
        cuadrado2.onclick = (event) => {
          console.log("segundo click")
          segundoCuadrado = event.target
          console.log(primerCuadrado, segundoCuadrado)
