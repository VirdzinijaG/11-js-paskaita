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