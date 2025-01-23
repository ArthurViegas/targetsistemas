// int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça {
//     K = K + 1;
//     SOMA = SOMA + K;
// }
// Imprimir(SOMA);

// Equivalente em javascript, mantendo os valores e regra
function sum() {
    const INDICE = 13; // indice constante
    let SOMA = 0;
  
    for (let K = 0; K < INDICE; K++) {
      SOMA = SOMA + (K + 1); // itera sobre INDICE e soma + var K + 1, para manter a regra de K = 0; caso K iniciasse igual a 1, iteraria soma = soma + K e a condicional seria K <= Indice
    }
  
    return SOMA; // RESULTADO: 91
  }

  console.log(sum())