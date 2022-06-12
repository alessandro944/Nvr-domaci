//Zadatak:
//Uz pomocu JavaScripta napraviti konverter koji konvertuje dinare u evre
//Korisnik unosi sumu u dinarima preko input polja
//U drugom input polju se upisuje kolika je ta suma u evrima
//Kako bi stilizovali ovu formu koristi Tailwind klase po uzoru sa predavanja.


const button = document.getElementById('btn')
const inputRSD = document.getElementById('input-rsd')
const inputEUR = document.getElementById('input-eur')

button.addEventListener('click',()=>{
  inputEUR.value = inputRSD.value / 117.5
})