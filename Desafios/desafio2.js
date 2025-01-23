function isFibonacci(number) {
    if (!Number.isInteger(number)) return `Erro: O valor informado (${number}) não é um número inteiro.`;
    
    if (number < 0) return `${number} não pertence a sequência de Fibonacci.`;
  
    let a = 0;
    let b = 1;
    let next = 0;

    while (a <= number) {
      if (a === number) return `${number} pertence à sequência de Fibonacci.`;
      
      next = a + b;
      a = b;
      b = next;
    }
  
    return `${number} não pertence à sequência de Fibonacci.`;
  }
  
  const number = 0;
  console.log(isFibonacci(number));
  