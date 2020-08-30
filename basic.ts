function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  if (showResult) {
    const result = n1 + n2;
    console.log(phrase + result);
  } else {
    return n1 + n2;
  }
}

const number1 = 10;
const number2 = 3.3;
const printREsult = true;
const resultPhrase = 'Result is ';

const result = add(number1, number2, printREsult, resultPhrase);

// 2

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // tuple
} = {
  name: 'Roman',
  age: 18,
  hobbies: ['Sport', 'Cooking'],
  role: [1, 'user'],
};
console.log(person.name);

const ADMIN = 0;
const READ_ONLY = 1;

enum Role {
  ADMIN = 10,
  READ_ONLY,
  AUTHO,
}

const person2 = {
  name: 'Roman',
  age: 18,
  hobbies: ['Sport', 'Cooking'],
  role: Role.ADMIN,
};

person.role.push('admin');
person.role[0] = 10;

if (person2.role === Role.ADMIN) {
  console.log('is author');
}
