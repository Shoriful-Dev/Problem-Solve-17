// Write a function called simplePasswordValidator that takes a single parameter.

const simplePasswordValidator = (password) => {
  let hasLowerCase = false;
  let hasUpperCase = false;
  let hasNumber = false;
  for (let char of password) {
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
      hasUpperCase = true;
    } else if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 122) {
      hasLowerCase = true;
    } else if (!isNaN(Number(char))) {
      hasNumber = true;
    }
  }
  if (!hasLowerCase || !hasUpperCase || !hasNumber || password.length < 8) {
    return false;
  }
  return true;
}


console.log(simplePasswordValidator('afdfssr')); // Output: false 
console.log(simplePasswordValidator('afdfssr1')); // Output: false 
console.log(simplePasswordValidator('afdfssr1A')); // Output: true 
console.log(simplePasswordValidator('afdfssrW')); // Output: false 
console.log(simplePasswordValidator('afdfssr1Aa')); // Output: true 
