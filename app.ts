let userInput: unknown; 
let userName: string;

userInput = 5;
userInput = 'Roman';

if (typeof userInput === 'string') {
  userName = userInput;
}

function genetateError(message: string, code: number): never {
  throw { message: message, errorCode: code};
}

genetateError('An error occured!', 500);
