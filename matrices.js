// ANCHOR ---> Matrices --> arreglos bidimensionales




let a = [ 1, 5, 3 ]

// console.log ( mat[1][1] )

// FILAS Y COLUMNAS 

let mat = [ 
    [1, 2, 3], // fila 0
    [4, 5]  // fila 1
]

// console.log( mat[1][0] )
// 3filas x 3columnas
// MATRIZ CUADRADA

let matriz = [
    [1, 5, 4],
    [6, 8, 7],
    [3, 7]
]

// RECORRER 
// RECORRER UNA FILA ---> la fila es estatica y la columna es dinamica

// mat[1][0] 
// mat[1][1]
// mat[1][2]

const recorrerFila = ( mat, numFila  )=>{

    let acc = 0
    for( let i = 0; i < mat[numFila].length ; i++){
        acc += mat[numFila][i] 
    }
    return acc

}
let res = recorrerFila(matriz, 1)

console.log(res )

// RECORRER UNA COLUMNA  --> le pido la longitud a la matriz

let matriz2 = [
    [1, 5, 4],
    [6, 8],
    [3],
    [3, 7, 8],
    [3, 7],
    [3, 7, 8],
]

// matriz2[0][2]
// matriz2[1][2]
// matriz2[2][2]

const recorrerCol = (mat, numCol)=>{

    let acc = 0
    for (let i = 0; i < mat.length; i++) {

        if( mat[i][numCol] !== undefined ){
            acc += mat[i][numCol]
        }

    }
    return acc

}
let res2 = recorrerCol(matriz2, 1)
console.log( res2 )


// RECORRER LA MATRIZ COMPLETA ---> DOBLE FOR 

// SI LA MATRIZ ES CUADRADA ---> DIAGONAL
// RECORRER LA PRINCIAL --> le pido la longitud a la matriz
// RECORRER LA SECUNDARIA --> le pido la longitud a la matriz



  let matrix = [
    [1, 5, 4],
    [2, 7, 1],
    [1, 8, 3],
  ]

// matrix[0][0]
// matrix[1][1]
// matrix[2][2]

// matrix[0][2]
// matrix[1][1]
// matrix[2][0]