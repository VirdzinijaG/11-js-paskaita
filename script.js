"use strict"

// Objektas turi savo kintamuosius ir atileka tam tikrus veiskmus
// Objektas gali tureti savo objekta

//Objektas objekte
const zmogus = {
    vardas: "Vardas", // kintamieji 
    pavarde: "Pavarde",
    asmensKodas: "123456789",

    automobiliai: { // objektas objekte, kintamasis automobiliai apibreziamas kaip objektas
        auto1: "BMW",
        auto2: "Ford",
        auto3: "Lada",

        arVaziuoja: function() { // metodas atliekami veiksmai
            return "Vaziuoja tik" + this.auto1;
        }
    }, 
    dirbti: function() { // atliekami veiksmai
        return "Dirbu"
    },
    tingeti: function() {
        return "Tingeti"
    }
}

console.log(zmogus); // visas objektas
console.log(zmogus.automobiliai); // objekto objektas automobiliai 
console.log(zmogus.automobiliai.auto1); //objekto objekte esantis elementas
console.log(zmogus['automobiliai']['auto1']); // galima rasyti ir taip
console.log(zmogus.automobiliai.arVaziuoja()); // objekto objekto metodas 


//Daug objektu objekte
const zmogus1 = {
    vardas: "Vardas", // kintamieji 
    pavarde: "Pavarde",
    asmensKodas: "123456789",

    automobiliai: [ // masyvas, masyve trys objektai
        // 0 masyvo objektas
        {
        pavadinimas: "BWM",
         modelius: ["e46", "e90"],
         arVaziuoja: function() {
             return "Vaziuoja"
         }
        },
        // 1 masyvo objektas
        {
        pavadinimas: "Ford",
        modelius: ["Mondeo", "Sierra"],
        arVaziuoja: function() {
            return "Vaziuoja"
        }
    },
    // 2 masyvo objektas
        {
        pavadinimas: "Lada",
        modelius: ["9", "8"],
        arVaziuoja: function() {
            return "Vaziuoja"
        }
    }
    ],
    //  { // objektas objekte, kintamasis automobiliai apibreziamas kaip objektas
    //     auto1: "BMW",
    //     auto2: "Ford",
    //     auto3: "Lada",

    //     arVaziuoja: function() { // metodas atliekami veiksmai
    //         return "Vaziuoja tik" + this.auto1;
    //     }
    // }, 
    dirbti: function() { // atliekami veiksmai
        return "Dirbu"
    },
    tingeti: function() {
        return "Tingeti"
    }
}

// objekto kintamasis yra masyvas

console.log(zmogus1.automobiliai); // objekto masyvai
console.log(zmogus1.automobiliai[0]); // 0 masyvas
console.log(zmogus1.automobiliai[2]); // 2 masyvas
console.log(zmogus1.automobiliai[2].pavadinimas); // objekto 2 masyvo elementas pavadinimas
console.log(zmogus1.automobiliai[2].modelius[1]); // objekto 2 masyvo elemeto modelius antras elementas
console.log(zmogus1.automobiliai[2].arVaziuoja()); // objekto 2 masyvo metodas

// Visu objektu isvedimas(automobiliai), taikomas ciklas
let masyvoIlgis = zmogus1.automobiliai.length;
console.log(masyvoIlgis);

for (let i = 0; i < masyvoIlgis; i++) {
    console.log(zmogus1.automobiliai[i]);
}

// Kitas ciklas, supaprastinta ciklo sintakse 
// Ciklas suksis tol kol objekto masyvas turi elementu 
for (let i in zmogus1.automobiliai) {
    console.log(zmogus1.automobiliai[i].pavadinimas);



for (let x in zmogus1.automobiliai[i].modelius) { 
    console.log(zmogus1.automobiliai[i].modelius[x]);// kiekvieno automobilio modeliai isvedami

}
}


// masyvai

let skaiciai = [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10]

for (let i in skaiciai) {
    console.log(skaiciai[i]); // isvedamas kiekvienas skaicius atskirai
}

// dvimatis masyvas masyvas masyve

let skaiciai1 = [
    [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10],
]
console.log(skaiciai1);

for (let i in skaiciai1) {
    console.log(skaiciai1[i]); // isvedami kiekvienas elementas, isvedami masyvo masyvai, eilutes
}

console.log(skaiciai1[6]); // isvedamas masyvo kitas masyvas kuris yra 6
console.log(skaiciai1[6][8]); // isvedamas masyvo 6 eilutes(kito masyvo) 8 elementas

// isvesti visus skaicius kurie yra dvimaciame masyve
for (let i in skaiciai1[6]) {
    console.log(skaiciai1[6][i]); // 7 eilutes visi elementai
}

for (let i in skaiciai1) { // i praeina pro visas eilutes
    for (let j in skaiciai1[i]) { // j praeina pro visus stulpelius
        console.log(skaiciai1[i][j]); // isvedami dvimacio masyvo visi skaiciai atskirai
    }
}

let skaiciai1Ilgis = skaiciai1.length
console.log(skaiciai1Ilgis); // masyvo elementai - 10, 10 eiluciu kiti masyvai

let eilutesIlgis = skaiciai1.length;
for (let i = 0; i < eilutesIlgis; i++) {
    let stulpelioIlgis = skaiciai1[i].length // kievienos eilutes ilgi. Masyvo kievkieno masyvo ilgis
    console.log(stulpelioIlgis);
}

for (let i = 0; i < eilutesIlgis; i++) {
    let stulpelioIlgis = skaiciai1[i].length;
    for (let j = 0; j < stulpelioIlgis; j++) {
        console.log(skaiciai1[i][j]); // isvedami dvimacio masyvo visi skaiciai atskirai
    }
}


////////

const skaiciuotuvas = {
    sk1: 1,
    sk2: 2,

    paleidimas: function(sk1, sk2) {
        this.sk1 = sk1;
        this.sk2 = sk2;
    }
}
skaiciuotuvas.paleidimas(4,6)

// objekto sablonas (vienoda struktura, vienodi metodai, tie patys propierties), 100
// 4 zmogaus objektai
// sukurti objekta pagal tam tikra sablona


// Apibrezti konstruktoriaus funkcija - pagal kuria susikonstruoja objektas
// Tai nera objektas, tai yra objekto sablonas
function Zmogus(vardas, pavarde, asmensKodas) { // Konstruktoriaus funkcija prasideda is didziosios raides
    this.vardas = vardas;    // sukonstruota busimo objekto sablonas
    this.pavarde = pavarde;
    this.asmensKodas = asmensKodas;
}





const z1 = new Zmogus("Tomas", "Tomaitis", "3589455"); // new Zmogus, naudojamas konstruktorius, pagal kuri sukuria objekta
console.log(z1);

const z2 = new Zmogus("Petras", "Petraitis", "5412655")
console.log(z2);

const z3 = new Zmogus("Jonas", "Jonaitis", "1359943")
console.log(z3);

const z4 = new Zmogus("Antanas", "Antanaitis", "54582231")
console.log(z4);