function main(){
    snack1_1();
    snack2_1();
    snack1_2();
}


function rnd(min,max){  
  return (Math.floor((Math.random()*(max-min)+min+1)));  
};

/*************************************************************************************************************  
*Snack 1/1                                                                                                   *
*Crea un array composto da 10 brand famosi (Sony, Gucci, Apple, Samsung, Dolce&Gabbana).                     *
*- Partendo da questo array creare un nuovo array dove tutti i brand dovranno essere "normalizzati"          *
*(le lettere maiuscole saranno convertite in minuscolo quindi Gucci diventerà gucci) e aggiungere,           *
*sempre in questo contesto di "clonazione", una nuova proprietà denominata "foundationYear".                 *
*Quest'ultima proprietà conterrà l'anno                                                                      *
*(mettete un valore voi, è necessario inserire valore reale) in cui l'azienda è stata fondata.               *
*                                                                                                            *
* [{  name: 'Gucci' }, { name: 'Sony' },....]                                                                *
*oppure                                                                                                      * 
*[‘Gucci’, ‘Sony’, ….]                                                                                       *
**************************************************************************************************************/

function snack1_1(){
    let string = "Sony, Gucci, Apple, Samsung, Dolce&Gabbana, Asus, IBM, Lenovo, Chaintek, Trust";
    let array = string.split(", ");
    const obj = array.map((val)=>({
    nome : val.toLowerCase(),
    anno : rnd(1900,2000),
    })
);
console.log(obj);
}

/*
// 
*/
/*************************************************************************************************************  
*                                                                                                            *
* Snack 2/1                                                                                                  *
*Crea un array composto da 10 automobili. Ogni oggetto automobile avrà le seguenti proprietà:                *
* marca, modello, alimentazione (benzina, diesel, gpl, elettrico, metano).                                   *
*- Dividi in 3 array separati. Inserire nel primo array solo le auto a benzina,                              *
* nel secondo solo le auto a diesel, nel terzo e ultimo il resto delle auto.                                 *
*- Infine stampa separatamente i 3 array.                                                                    *
*@qui ricordatevi una cosa, su questo tipo di richieste :faccia_leggermente_sorridente:                      *
* Domani potrei aggiungere alimentazione ad idrogeno :occhiolino:                                            *
*  Di conseguenza vorrei finisse sempre nel gruppo 3 ma SENZA scrivere nuovo codice :linguaccia:             *
*                                                                                                            *
*                                                                                                            *
*                                                                                                            *
**************************************************************************************************************/
function snack2_1(){

const auto = "audi bmw aprilia fiat citroen renault guzzi lancia ford celica";
const modello = "gianno fiesta fufu mongo alfa gigi dede bho bmax gta";
const alimentazione ="benzina diesel gpl benzina metano elettrico metano elettrico metano benzina";

const autoArr = auto.split(" ");
const modelloArr = modello.split(" ");
const alimArray = alimentazione.split(" ");

let autoObj = autoArr.map((val,i)=>({
    nome : val,
    alimentazione: alimArray[i],
    modello: modelloArr[i],
})
);

autoObj=autoObj.filter((ele)=>{
  return (ele.alimentazione=='benzina');
})
console.log(autoObj);
}

//SNACK 1
// Crea un array di oggetti che rappresentano degli animali: ogni animale ha un nome, una famiglia e una classe.
// Crea un nuovo array con la lista dei mammiferi.
// [
// { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
// { nome: 'cane', 'famiglia: 'canidi', classe: 'mammiferi' },
// { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
// ]

function snack1_2(){
  const animali=[
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    ];
    
    console.log (animali.filter((x)=>{return x.classe=='mammiferi'} ));    
}