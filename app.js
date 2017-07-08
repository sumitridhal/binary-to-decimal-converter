"use strict"
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



var toDecimal = function(n){
  //  let decimal = 0;
  //  let binary = n.split('');
  //  binary.reverse().map(function(val, key){
  //    decimal += Math.pow(2, key)*val;
  //  })
  // return decimal;

   return parseInt(n, 2);
 }

 var toBinary = function(decimal){
   let remainder = []
   while(decimal>0){
     remainder.push(decimal%2)
     decimal = Math.floor(decimal/2)
   }
   return remainder.reverse().join('');
  }


rl.question('Enter Number: ', (n) => {
  let res = toBinary(n)
  console.log(`Decimal : ${res}`)
  rl.close()
});
