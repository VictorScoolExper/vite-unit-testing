export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    // Added the "+" in front of the variable 
    // returns a NaN if not valid or a number if valid
    sum += +number;
  }
  return sum;
}
