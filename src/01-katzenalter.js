let ageYuffie, ageLegoshi, ageRipley;

const birthYuffie = 2019;
const birthLegoshi = 2021;
const birthRipley = 2022;

let date = new Date();
let year = date.getFullYear();
ageYuffie = year - birthYuffie;
ageLegoshi = year - birthLegoshi;
ageRipley = year - birthRipley;

console.log("Yuffie ist " + ageYuffie + ".");
console.log("Legoshi ist " + ageLegoshi + ".");
console.log("Ripley ist " + ageRipley + ".");