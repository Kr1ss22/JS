//Kristjan Mustkivi
//Kuupäev: 25.01
let kaugusKm = 420;
let kiirusKmH = 67;

let aeg = kaugusKm / kiirusKmH;
console.log("Sõidu aeg :", aeg, "tundi");



let postitusi = 137;
let lehelMax = 10;

let lehti = Math.ceil(postitusi / lehelMax);
let viimaselLehel = postitusi % lehelMax;

if (viimaselLehel === 0) {
  viimaselLehel = lehelMax;
}

console.log("Lehti on vaja:", lehti);
console.log("Viimasel lehel postitusi:", viimaselLehel);



let voimsusW = 400;
let hindSentiKwh = 9.69;

let tarbimineKwh = voimsusW / 1000;
let hindEuroKwh = hindSentiKwh / 100;

let kuluEuro = tarbimineKwh * hindEuroKwh;

console.log("Serveri kulu 1h:", kuluEuro);
