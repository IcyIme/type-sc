import * as readline from "readline";

// Creates input interface.
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // This is nested async function that handle user input and return string as input.
export function getUserInput(userInput: string) : Promise<string>{
    return new Promise((resolve) => input.question(userInput, resolve));
};