export function numberSeparator(num: number | string): string {
    if (typeof num === 'number' || typeof num === 'string') {
      const arr = num.toString().split(".");
      const integerPart = arr[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return arr[1] ? `${integerPart}.${arr[1]}` : integerPart;
    } 
  
    // If the input is not a number or string, you might want to handle this case appropriately.
    throw new Error('Input must be a number or string.');
  }