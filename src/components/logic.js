
const handledote = (e) => {
    const value = e.target.value;
    const lastChar = input.slice(-1);
  
    // Regular expression to match a valid number with an optional decimal part
    const validNumberPattern = /^\d+(\.\d*)?$/;
  
    // Check if the input value is a valid number
    const isNumber = validNumberPattern.test(input + value);
  
    // Check if the last character is an operator
    const isOperator = ['+', '-', '*', '/'].includes(lastChar);
  
    if (isNumber || (lastChar === '.' && value === '.') || (!input.includes('.') && value === '.')) {
      setInput((input) => input + value);
    } else if (isOperator && value === '.') {
      setInput((input) => input + '0' + value);
    }
  };





//   const handledote = (e) => {
//     const value = e.target.value;
//     const lastChar = input.slice(-1);
  
//     // Regular expression to match a valid number with optional decimal part
//     const validNumberPattern = /^(\d+(\.\d+)?[\+\-\*\/])?\d+(\.\d+)?$/;
  
//     // Check if the input value is a valid number
//     const isNumber = validNumberPattern.test(input + value);
  
//     // Check if the last character is an operator
//     const isOperator = ['+', '-', '*', '/' ,'.'].includes(lastChar);
  
//     if (isNumber || (lastChar === '.' && value !== '.') || (lastChar === '.' && !isOperator) ) {
//       setInput((input) => input + value);
//     }
//   };