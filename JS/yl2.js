// KRistjan Mustkivi
// Kuupäev: 25.01


let tunnid = 6;
let minutid = 7;
let sekundid = 67;
let kellaaeg = tunnid + ":" + minutid + ":" + sekundid + "PM";
console.log(kellaaeg);

let tsitaat = '“You have no oblication to be the same person u were 5 minutes ago.”';
let autor = "idk";
let tsitaadiLause = `${tsitaat} – ütles ${autor}.`;
console.log(tsitaadiLause);

let eesnimi = "DIddy";
let perenimi = "Blud";
let eesnimiEsitäht = eesnimi[0];
let perenimiEsitäht = perenimi[0];
let nimetähed = `${eesnimi} ${perenimi} nimetähed on ${eesnimiEsitäht}.${perenimiEsitäht}.`;
console.log(nimetähed);

let nimi = "Diddy, Twink";
let komaIndex = nimi.indexOf(",");
console.log(komaIndex);
let perenimiEraldatud = nimi.substring(0, komaIndex);
let perenimiSuured = perenimiEraldatud.toUpperCase();
console.log(perenimiSuured);
console.log(perenimiEraldatud.length);

let epost = "Epstein@gmail.com";
let muudetudEpost = epost.replace("netlog", "gmail");
console.log(muudetudEpost);

let andmerida = "1,Marshal,Martinovic,mmartinovic0@dedecms.com,Male,40.19.226.175";
let andmed = andmerida.split(",");
let email = andmed[3];
let ip = andmed[5];
let kasutajanimi = email.split("@")[0];
console.log(ip);
console.log(kasutajanimi);