//Zadatak. 1
//Kreirati klasu Phone koja ima sledece parametre: Model telefona(string), trajanje garancije(number), godina proizvodnje(number), Trenuntni procenat baterije(number)

//Klasa treba da ima sledece funkcije, i to:
//Funkcija turnOn() koja ukljucuje telefon i ispisuje 'Telefon je ukljucen'
//Funkcija turnOff koja iskljucuje telefon i ispisuje 'Telefon je iskljucen'
//Setter koji menja trenutni procenat baterije
//Funkciju koja proverava da li je istekla garancija telefonu(garancija traje od godine kad se proizveo telefon, npr. 2020, traje garancija 1 godinu)

//!USlovi
//Ako je telefon vec uplajen i pokusamo da opet pozovemo funkciju turnOn(), treba da se ispise telefon je vec upaljen
//Ako je telefon ugasen i pokusamo da pozovemo funkciju turnOff(), treba da se ispise telefon je vec ugasen
//Ako je procenat baterija 0 i pokusamo da pozovemo funkciju turnON() treba da se ispise 'Baterija telefona je prazna'

class Phone {
  constructor(model, trajanjeGarancije, godinaProizvodnje, trenutniProcenatBaterije){
    
    this.model = model;
    this.trajanjeGarancije = trajanjeGarancije;
    this.godinaProizvodnje = godinaProizvodnje;
    this.trenutniProcenatBaterije = trenutniProcenatBaterije;
    this.isTurnOn = false;
  }
  turnOn(){
    if (this.isTurnOn === false && trenutniProcenatBaterije === 0) {
        console.log('Telefon je iskljucen i ima 0% posto baterije');
    }
    else if(this.isTurnOn === false){
      this.turnOn === true;
      console.log('Telefon je ukljucen');
    }
    else{
      console.log('Telefon je vec ukljucen')
    }
  }
  turnOff(){
    if (this.turnOn === false) {
      console.log('Telefon je vec ugasen');
    }
    else{
      this.turnOn === false;
      console.log('Telefon je ugasen');
    }
  }
  garancija(){
    let razlika = new Date().getFullYear() - this.godinaProizvodnje;
    if (razlika <= this.trajanjeGarancije) {
      console.log('Telefon je u garanciji');
    }
    else{
      console.log('Garancija je istekla');
    }
  }
  set procenatBaterije(stanje){
    this.trenutniProcenatBaterije = stanje;
    if (this.trenutniProcenatBaterije === 0) {
      this.turnOn = false;
    }
  }


}

let telefon = new Phone('Samsung', 2, 2020, 66)

telefon.turnOn();
telefon.turnOn();
telefon.procenatBaterije = 0;
telefon.turnOn();
telefon.procenatBaterije = 10;
telefon.turnOn();
telefon.turnOn();
telefon.turnOff();
telefon.turnOff();
telefon.garancija();