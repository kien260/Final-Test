
const numberOneTriangle = (number) => {
   
    Number.isInteger(number);
    for (let i = 1; i <= number; i++) {
      
      let string = "";
      for (let j = 1; j <= i; j++) {
        
        string += "*";
      }
      console.log(string);
    }
  };
  
  numberOneTriangle(4);