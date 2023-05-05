import * as readline from 'readline-sync';
let butacas: boolean[] = [true, false, true, false, true, true, false, false, true];
let contador: number = 0;
for (let i = 0; i < butacas.length; i++) {
  if (!butacas[i]) {
    contador++;
  }
}
console.log(`Hay ${contador} butacas desocupadas.`);
