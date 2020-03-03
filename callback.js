function siguiente(x, next) {
  next(x + 1)
}

function doble(x, next) {
  next(x * 2)
}

function imprimir(resultado) {
  console.log('Resultado =>', resultado)
}

function calcularSiguienteEImprimir(elDoble) {
  siguiente(elDoble, imprimir)
}

siguiente(8, imprimir)
doble(8, imprimir)
doble(8, calcularSiguienteEImprimir)

// Siguiente del doble, usando funciones anónimas:

// doble(8, elDoble => {
//   siguiente(elDoble, elSiguienteDelDoble => {
//     console.log('Resultado =>', elSiguienteDelDoble)
//   })
// })
