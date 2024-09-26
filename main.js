const arithmetic=require('./arithmetic');
const fs=require('fs');
const a=10;
const b=5;

const sum=arithmetic.add(a,b);
const difference=arithmetic.subtract(a,b);
const product=arithmetic.multiply(a,b);
const quotient=arithmetic.divide(a,b);

console.log(`sum:${sum}`);
console.log(`difference:${difference}`);
console.log(`product:${product}`);
console.log(`quotient:${quotient}`);

const results=
sum:${sum}
Difference:${difference}
Product:${product}
quotient:${quotient};
fs.writeFile(`results.text`)