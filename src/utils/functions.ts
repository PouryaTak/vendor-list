/**
 * Utility function to add thousands separators to a number or string.
 * @param {number | string} num - The number or string to which separators should be added.
 * @returns {string} - The formatted string with thousands separators.
 * @throws {Error} - Throws an error if the input is not a number or string.
 */
export function numberSeparator(num: number | string): string {
  if (typeof num === 'number' || typeof num === 'string') {
    // Split the number into integer and decimal parts
    const arr = num.toString().split(".");
    
    // Add thousands separators to the integer part
    const integerPart = arr[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    // Return the formatted number with or without decimal part
    return arr[1] ? `${integerPart}.${arr[1]}` : integerPart;
  } 

  // If the input is not a number or string, throw an error
  throw new Error('Input must be a number or string.');
}
