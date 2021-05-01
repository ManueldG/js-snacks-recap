function main(){
    
    
    
      /*snack1_1();
      snack2_1();
      snack1_2();
      snack2_2();
      snack3_2();
      snack1_3();*/
      snack2_3();
    
    
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


// SNACK 2/2
// Crea un array di 8 oggetti che rappresentano delle persone: ogni persona ha un nome, un cognome e un'età.
// Crea un nuovo array inserendo per ogni persona una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.
// 'Mario Rossi può guidare',
// 'Luigi Verdi non può guidare',
// 'Silvia Neri può guidare',

function snack2_2(){
const persona = [{nome:'Mario',cognome:'Rossi',eta:20},{nome:'Luigi',cognome:'Verdi',eta:15},{nome:'Silvia',cognome:'Neri',eta:30}];
persona.forEach((el,i)=>{ ( console.log(persona[i].nome+' '+persona[i].cognome+((el.eta>18)? ' '  : ' non ')+'può guidare')) });
}


// SNACK 3
// Crea un array di 8 oggetti che rappresenti i pc in vendita nel nostro negozio: ogni pc ha un nome, una marca, un booleano 
// che indica se esce con Windows come OS di fabbrica (hasWindows: true oppure hasWindows: false) ed il prezzo
// Creiamo un nuovo array che indichi i pc che hanno Windows e di questi andiamo a tirar fuori la differenza tra prezzo e scontato.

function snack3_2()
{
let computers=[
  {
    nome:'dudu',
    marca:'asus',
    osWin:1,
    prezzo: 500,
    prezzoS: 450,
  },
  {
    nome:'Mandriva',
    marca:'acer',
    osWin:0,
    prezzo: 600,
    prezzoS: 590,
  },
  {
    nome:'Suse',
    marca:'lenovo',
    osWin:0,
    prezzo: 1000,
    prezzoS: 850,
  },
  {
    nome:'DSL',
    marca:'Chaintek',
    osWin:0,
    prezzo: 2300,
    prezzoS: 2100,
  },
  {
    nome:'Fuffi',
    marca:'LG',
    osWin:1,
    prezzo: 970,
    prezzoS: 960,
  },
  {
    nome:'Infinite',
    marca:'Trust',
    osWin:1,
    prezzo: 700,
    prezzoS: 650,
  },
  {
    nome:'Gnauo',
    marca:'Lexodan',
    osWin:1,
    prezzo: 900,
    prezzoS: 850,
  },
  {
    nome:'LongHorn',
    marca:'IBM',
    osWin:1,
    prezzo: 900,
    prezzoS: 850,
  }
];


let com=computers
        .map((pc)=> ({...pc,risparmio:pc.prezzo-pc.prezzoS}))
        .filter((x)=>x.osWin);

console.log(computers,com);
}


/*SNACK 1/3
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']*/

function snack1_3()
{
  let str=['pippo', 'PLUTO', 'Paperino'];
  console.log(str.map((x)=>(toUpperCaseFL(x.toLowerCase())) ) ); 

  function toUpperCaseFL(stringa){return (stringa[0].toUpperCase()+stringa.substring(1));}
}

/*SNACK 2/3
Un oggetto rappresenta una finestra di un browser e contiene due campi: 
un array di tab aperte
un numero che indica l'indice della tab aperta nell'array:
{
    "tab": ["Facebook", "GitHub", "Gmail"],
    "activeTab": 0
}
Il software deve guardare se c'è un social aperto ed eliminarlo dalle tab.
Nel caso la tab fosse attiva, deve attivare la successiva.*/

function snack2_3(){
  let obj = { "tab": ("Facebook GitHub Gmail Istagram Plus DEV codePen CodeWars").split(' '),
              "activeTab" : 0,
            };
         
  let objTmp = obj.tab.filter((x)=>(!("Facebook Istagram Plus").split(' ').includes(x)));
  objTmp = {...objTmp,activeTab : ++obj.activeTab} ;
  console.log(objTmp);  
}