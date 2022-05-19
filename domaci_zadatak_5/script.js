//* Zadatak 1
/*
-Kreiramo promenljivu budzet = 1000
-Korisnik unosi koliko zeli da potrosi dok god ne predje budzet ispod 0
-Ukoliko je nakon poslednje iteracije while petlje budzet 0 ispisati: "Potrosili ste sav novac"
-Ukoliko je nakon poslednje iteracije while petlje budzet manji od 0 ispisati: "Usli ste u minus";
-Kolicina novca koju trosi korisnik unosi se preko prompt-a
*/
let budzet = 1000;

let unetiIznos = '';
while(budzet - unetiIznos > 0){
  unetiIznos = prompt('Unesite iznos koji zelite da podignete')
  if(budzet - unetiIznos == 0){
  document.write ('Potrosili ste sav novac');

  }  
  else if(budzet - unetiIznos < 0){
    document.write('U minusu ste')
    
  }
}
