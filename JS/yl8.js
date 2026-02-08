//Kristjan Mustkivi
//Kuupäev: 04.02
const coins = [200, 0.2, 10, 0.01, 2, 1, 0.1, 0.02, 0.05, 100, 5, 0.5, 50, 20];

let i = 0;
let selectedCoins = [];
let sum = 0;

while (i < coins.length) {
    selectedCoins.push(coins[i]);
    sum += coins[i];
    i++;
}

console.log("Mündid uues massiivis:", selectedCoins);
console.log("Müntide arv:", selectedCoins.length);
console.log("Müntide summa:", sum.toFixed(2));