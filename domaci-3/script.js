//1.Zadatak
  //1.Napisati funkciju koja kao parametar dobija niz
  //2.Svakom clanu niza dodaje rec 'Izmenjeno'
  //3.Vraca nazad novi niz sa izmenjenim clanovima

  //Proveriti da li je funkciji prosledjen niz uz pomocu funkciju array.isarray(), ako nije prosledjen niz, funkcija vraca kao vrednost prazan niz
  

  let nizz = ['Jabuka', 'Kruska', 'Automobil']
  console.log(nizz);
  function mapirajNiz(niz) {
    for(let i = 0; i < niz.length; i++){
    let noviNiz =  niz[i] += 'Izmenjeno';
    console.log(noviNiz);
      return noviNiz;
    }
  }

  mapirajNiz(nizz)

  //2.Zadatak
  /*1. Napisati funckiju koja prima 2 parametra. Prvi parametar je od kog broja krece petlja, dok drugi je do kog broja se krece for petlja
    2.Funckija kao rezultat vraca zbir svih brojeva u tom zadatom opsegu. pr.opsegBrojeva(5,10)
  */ 

    function zbirBrojeva(odBroja, doBroja) {
      let rezultat = 0;
      for(let i = odBroja; i <= doBroja; i++){
        rezultat = rezultat + i;
        console.log(`Rezultat je ${rezultat}`);
      }
      return rezultat;
    }
    zbirBrojeva(1, 3)










  //3.Zadatak
  /*1. Napisati funkciju koja kao parametar prima 2 niza iste duzine
    2.U funkciji kreirati novi niz
    3.Napisati for petlju koja prolazi kroz clanove ova 2 niza i sabira ih prvi sa prvim , drugi sa drugim itd., a taj zbir smesta u novi niz

    //PRIMER
    //Niz 1: [1,5,5]
      Niz 2: [1,3,5]
      Novi niz koji funkcija vraca treba da izgleda ovako: 
      [2,8,10]
  
  */ 
 
 
let prviNiz = [1,3,5]
let drugiNiz = [2,4,6]
function sabiranjeClanova(prviNiz, drugiNiz) {
  let noviNiz = [];
  if (prviNiz.length === drugiNiz.length) {
    for(let i = 0; i < drugiNiz.length; i++){
      let rezultat = prviNiz[i] + drugiNiz[i];
      noviNiz.push(rezultat)
    }
    
  }
  return noviNiz;
}

sabiranjeClanova()
