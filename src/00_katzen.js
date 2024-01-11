//console.log("Die Fellnasen heißen Yuffie, Legoshi und Ripley.");  //Ausgabe

// let k1 = "Yuffie", k2 = "Legoshi", k3 = "Ripley";

const prompt = require('prompt-sync')({sigint: true});

let catName = prompt("Name: ");
let catBirth = prompt("Geboren: ");
let catJoin = prompt("Eingezogen: ");

console.log(catName + " ist am " + catBirth + "geboren worden und am " + catJoin + " eingezogen.")