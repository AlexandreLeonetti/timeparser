/* parsing time */
/* add testing later to package */


// Define a type for the return value of the parseNumber function
type ParsedTime = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;

   };
   
   // Define a type for the input parameter of the parseMilliseconds function
   type Milliseconds = number | bigint;
   
   // Function to convert milliseconds to a more readable format
   const toZeroIfInfinity = (value: number): number => Number.isFinite(value) ? value : 0;
   
   function parseNumber(milliseconds: number): ParsedTime {
    return {
       days: Math.trunc(milliseconds / 86_400_000),
       hours: Math.trunc(milliseconds / 3_600_000 % 24),
       minutes: Math.trunc(milliseconds / 60_000 % 60),
       seconds: Math.trunc(milliseconds / 1000 % 60),
       milliseconds: Math.trunc(milliseconds % 1000),

    };
   }
   
   // Function to parse milliseconds and handle non-finite values
   export default function parseMilliseconds(milliseconds: Milliseconds): ParsedTime | never {
    if (typeof milliseconds === 'number' && Number.isFinite(milliseconds)) {
       return parseNumber(milliseconds);
    }
   
    throw new TypeError('Expected a finite number or bigint');
   }
   
