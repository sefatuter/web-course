// var generateName = require('sillyname');

import generateName from "sillyname";
var sillyName = generateName();

console.log('Welcome ' + sillyName + '!');


import superheroes, { randomSuperhero } from 'superheroes';

var hero = randomSuperhero();
//=> ['3-D Man', 'A-Bomb', …]

console.log("I AM " + hero.toUpperCase() + "!");


// {
//     "name": "npm-test",
//     "version": "1.0.0",
//     "description": "test",
//     "main": "index.js",
//     "type": "module",  
// "type": "module",        dont forget to add this into package.json file
