// Import the built-in 'readline' module to allow terminal input
const readline = require('readline');

// Set up the interface to read from the terminal (stdin) and output to the terminal (stdout)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// --- 1. THE FUNCTION DEFINITION ---
// 'number' is the PARAMETER waiting for the user's data
function calculateSquare(number) {
    // Multiply the parameter by itself and store it in a variable
    let result = number * number; 
    
    // Print the variable to the console
    console.log("The square is: " + result); 
}

// --- 2. GETTING REAL USER INPUT ---
// rl.question asks the user a question, pauses the program, and waits for them to hit Enter.
rl.question("Please enter a number to square: ", function(userInput) {
    
    // Terminal input is always read as a String (text). 
    // We use Number() to convert the text into an actual math number.
    let convertedNumber = Number(userInput);

    // --- 3. THE FUNCTION CALL ---
    // We call the function and pass the converted user input as the ARGUMENT
    calculateSquare(convertedNumber);

    // We must close the readline interface, otherwise the terminal will stay open forever
    rl.close();
});