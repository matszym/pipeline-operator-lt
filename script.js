const assert = require('assert');

const prop = propName => obj => obj[propName];
const greet = name => `Hello, ${name}`;
const exclaim = str => `${str}!!!`;

const user = {
    name: 'Alexa',
};

const greetUser = () => {}

const actual = greetUser(user);

const expected = 'Hello, Alexa!!!'

assert.equal(actual, expected);
console.log(actual);
