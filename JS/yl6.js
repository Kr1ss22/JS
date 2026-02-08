//Kristjan Mustkivi
//Kuupäev: 04.02
let number = -5;
let tulemus;

switch (true) {
  case (number > 0):
    tulemus = "Number on positiivne";
    break;
  case (number < 0):
    tulemus = "Number on negatiivne";
    break;
  default:
    tulemus = "Number on null";
}

console.log(tulemus);



let broneering = 5;
let laud;

switch (true) {
  case (broneering === 1 || broneering === 2):
    laud = "Valige laud kahele inimesele.";
    break;
  case (broneering === 3 || broneering === 4):
    laud = "Valige laud neljale inimesele.";
    break;
  case (broneering === 5 || broneering === 6):
    laud = "Valige laud kuuele inimesele.";
    break;
  default:
    laud = "Valige suur laud.";
}

console.log(laud);
