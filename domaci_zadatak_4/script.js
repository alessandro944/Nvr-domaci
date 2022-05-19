//Zadatak.1
//*Mapirati niz tako da kod svih polaznika koji imaju manje od 50 score, name bude "IZBACEN". Novi mapirani niz odstampati kroz document.write na stranici kao listu
let  polaznici = [
  {
    name: 'Marko Markovic',
    score: 90
  },
  {
    name: 'Petar Petrovic',
    score: 30
  },
  {
    name: 'Stefan Stefanovic',
    score: 50
  },
]

let noviNizPolaznika = polaznici.map(polaznik=>{
  if (polaznik.score < 50) {
    return {
      name: 'Izbacen',
      score: polaznik.score
    }
  }
  else{
    return polaznik
  }
});

console.log(noviNizPolaznika);

noviNizPolaznika.forEach(polaznik=>{
  document.write(`<li>Ime:${polaznik.name} Score: ${polaznik.score}  </li>`)
})




//Zadatak.2
//Zadati niz mapirati tako da name za svakog polaznika bude napisan velikim slovima. POMOC: Potraziti funkciju za konvertovanje stringa u velika slova. Rezultat: ['MARKO MARKOVIC', 'PETAR PETROVIC']
let imenaVelikimSlovima = polaznici.map(polaznik=>{
if (polaznik.name === typeof(String)) {
}
return polaznik.name.toUpperCase();
});
console.log(imenaVelikimSlovima);



//Zadatak.3
//Zadati niz mapirati tako da novi niz ne bude niz objekata nego niz name stringova. Rezultat: ['Marko Markovic', 'Petar Petrovic']

let noviNiz = [];
let mapiranjeNiza = polaznici.map(polaznik=>{
  noviNiz.push(polaznik.name);
});
console.log(noviNiz);

//Zadatak.4
//MApirati niz brojeva tako da dobijemo novi niz brojeva koju su pomnozeni brojem 2. Primer niza: [1,2,3,4]  Rezultat: [2,4,6,8]
/*let nizBrojeva = [1,2,3,4,4,4,4,3,5,10,55,33]
console.log(nizBrojeva);
let noviNizBrojeva = [];
let mapiranjeBrojeva = nizBrojeva.map(element=>{
 let rezultat;
 rezultat = nizBrojeva[element - 1]  * 2;
 noviNizBrojeva.push(rezultat);
});
console.log(noviNizBrojeva);*/
let prviNizz = [1,3,55]
let novNiz = [];
let mnozenjeClanova = prviNizz.map(i=>{

let rezultat;
rezultat = i * 2;
novNiz.push(rezultat);
});
console.log(novNiz);

//Zadatak.5
//Mapirati niz brojeva tako da dobijemo niz stringova. PRimer niza: [1,2,3,4], Rezultat:['1', '2','3', '4']. Pomoc potraziti na google-u za konvertovanje u string

let numbers = prviNizz.map(i=>{
let noviNiz = [];
  if (i === typeof(number)) {
    
  }
  return i.toString();
});
console.log(numbers);