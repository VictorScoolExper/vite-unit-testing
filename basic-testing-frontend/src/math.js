import { cleanNumbers } from "./util/numbers";

export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    // Added the "+" in front of the variable 
    // returns a NaN if not valid or a number if valid
    sum += +number;
  }
  return sum;
}


export function calculateResult(numberValues){
  let result = '';
  try {
    const numbers = cleanNumbers(numberValues);
    
    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  }
  return result;
}