"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var butacas = [true, false, true, false, true, true, false, false, true];
var contador = 0;
for (var i = 0; i < butacas.length; i++) {
    if (!butacas[i]) {
        contador++;
    }
}
console.log("Hay ".concat(contador, " butacas desocupadas."));
