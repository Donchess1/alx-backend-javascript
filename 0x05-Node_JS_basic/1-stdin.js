// Import the readline module to handle input and output
const readline = require('readline');

// Create an interface to read input from the standard input (stdin) and write output to the standard output (stdout)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Display the initial message
console.log('Welcome to Holberton School, what is your name?');

// Read user input from the command line
rl.question('', (name) => {
  // Display the user's name
  console.log(`Your name is: ${name}`);

  // Close the readline interface
  rl.close();
});

// Listen for the close event to display the closing message
rl.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
