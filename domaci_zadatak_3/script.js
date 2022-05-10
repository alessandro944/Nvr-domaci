


//1.Zadatak
/*1.Napisati funkciju koja pronalazi najveci od 3 zadata broja.
Primer: pronadjiNajveci(10,6,400)*/

function pronadjiNajveciBroj(prviBroj, drugiBroj, treciBroj) {
  if (prviBroj > drugiBroj && prviBroj > treciBroj) {
    console.log(`Najveci broj je ${prviBroj}`);
  }
  else if(drugiBroj > prviBroj && drugiBroj > treciBroj){
    console.log(`Najveci broj je ${drugiBroj}`);
  }
  else if(treciBroj > prviBroj && treciBroj > drugiBroj){
    console.log(`Najveci je ${treciBroj}`);
  }
}
pronadjiNajveciBroj(555,55,100);

//2.Zadatak
/*2.Napisati funkciju u kojoj unosimo redom parametre opsegBrojeva(broj, start, end) i koja ispisuje da li se broj nalazi u zadatom opsegu
Primer: opsegBrojeva(5,50,100)*/

function opsegBrojeva(broj, start, end) {
  if (broj >= start && broj <= end) {
    console.log(`Broj ${broj} se nalazi u opsegu brojeva ${start} i ${end}`);
  }
  else{
    console.log(`Broj ${broj} se ne nalazi u opsegu brojeva ${start} i ${end}`);
  }
}
opsegBrojeva(5, 1, 0);

//3.Zadatak
/*3.Napisati funkciju koja kao parametar prima broj i proverava:
-Da li je ono sto je uneto broj a zatim proverava da li je taj broj paran
-Ako nije broj ispisuje se 'Uneta vrednost nije  broj'
-Ako je paran broj ispisuje se 'Uneta vrednost je  paran broj'
-Ako je neparan ispisuje se 'Uneta vrednost je neparan broj'*/

function proveraBrojeva(number) {
  if (typeof number != 'number') {
    console.log(`Uneta vrednost nije broj`);
  }
  else if(typeof number == 'number' && number % 2 == 0){
    console.log(`Broj ${number} je paran broj`);
  }
  else if(typeof number == 'number' && number % 2 != 0){
    console.log(`Broj ${number} je neparan broj`);
  }
}
proveraBrojeva(6);