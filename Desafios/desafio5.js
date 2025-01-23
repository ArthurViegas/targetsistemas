function reverseString(input) {
    let reversed = '';
    
    for (let i = input.length - 1; i >= 0; i--) {        
      reversed += input[i];
    }
    
    return reversed;
  }
  
  const inputString = "Target Sistemas";
  const result = reverseString(inputString);
  
  console.log("Original:", inputString);
  console.log("Reversed:", result);
  