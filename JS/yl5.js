//Kristjan Mustkivi
//Kuupäev: 03.02
let temp = 10000;

if (temp > 25) {
  console.log("Väga kuum ilm!");
} else if (temp >= 15 && temp <= 25) {
  console.log("Mõnus temperatuur");
} else {
  console.log("Jahe ilm");
}



let kasutajanimi = "külaline";

console.log(kasutajanimi === "admin" ? "Tere, administraator!" : "Tere, külaline!");



let piletityyp = "taispilet";  
let vanus = 15;

let hind = 0;

if (piletityyp === "taispilet") {
  if (vanus < 18) {
    hind = 10;
  } else if (vanus <= 64) {
    hind = 20;
  } else {
    hind = 15;
  }
} else if (piletityyp === "sooduspilet") {
  if (vanus < 18) {
    hind = 8;
  } else if (vanus <= 64) {
    hind = 15;
  } else {
    hind = 8;
  }
} else {
  console.log("Vigane piletitüüp!");
}

if (piletityyp === "taispilet" || piletityyp === "sooduspilet") {
  console.log(`Piletitüüp: ${piletityyp}, vanus: ${vanus}, hind: ${hind}€`);
}
