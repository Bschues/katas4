const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor", "Gondor", "Rohan", "Beleriand", "Mirkwood", "Dead Marshes", "Rhun", "Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";
//k1
let gotCities = gotCitiesCSV.split(',', 7);
let katas1 = document.createElement("div");
let k1cont = document.createTextNode(gotCities);
katas1.appendChild(k1cont);
document.getElementById("k1");
k1.appendChild(katas1);


//k2
let bestThingarray = bestThing.split()
let katas2 = document.createElement("div");
let k2cont = document.createTextNode(bestThingarray);
katas2.appendChild(k2cont);
document.getElementById("k2");
k2.appendChild(katas2);


//k3
let semicolon = ';';
let gotCities2 = gotCitiesCSV.split(",");
const gotCities22 = gotCities2.join('; ');
let katas3 = document.createElement("div");
let k3cont = document.createTextNode(JSON.stringify(gotCities22));
katas3.appendChild(k3cont);
document.getElementById("k3");
k3.appendChild(katas3);


//k4 
const lotrCitiesArray2 = lotrCitiesArray.join();
let katas4 = document.createElement("div");
let k4cont = document.createTextNode(JSON.stringify(lotrCitiesArray2));
katas4.appendChild(k4cont);
document.getElementById("k4");
k4.appendChild(katas4);


//k5
const firstfivelotr = lotrCitiesArray.slice(0, 5);
let katas5 = document.createElement("div");
let k5cont = document.createTextNode(JSON.stringify(firstfivelotr));
katas5.appendChild(k5cont);
document.getElementById("k5");
k5.appendChild(katas5);


//k6
const lastfivelotr = lotrCitiesArray.slice(3, 8);
let katas6 = document.createElement("div");
let k6cont = document.createTextNode(JSON.stringify(lastfivelotr));
katas6.appendChild(k6cont);
document.getElementById("k6");
k6.appendChild(katas6);

//k7
const threetofive = lotrCitiesArray.slice(2, 5);
let katas7 = document.createElement("div");
let k7cont = document.createTextNode(JSON.stringify(threetofive));
katas7.appendChild(k7cont);
document.getElementById("k7");
k7.appendChild(katas7);

//k8
const remrohan = lotrCitiesArray.splice(2, 1);
let katas8 = document.createElement("div");
let k8cont = document.createTextNode(JSON.stringify(lotrCitiesArray));
katas8.appendChild(k8cont);
document.getElementById("k8");
k8.appendChild(katas8);

//k9
const remafterDeadMarshes = lotrCitiesArray.splice(5, 2);
let katas9 = document.createElement("div");
let k9cont = document.createTextNode(JSON.stringify(lotrCitiesArray));
katas9.appendChild(k9cont);
document.getElementById("k9");
k9.appendChild(katas9);

//k10
const addrohan = lotrCitiesArray.splice(2, 0, 'Rohan');
let katas10 = document.createElement("div");
let k10cont = document.createTextNode(JSON.stringify(lotrCitiesArray));
katas10.appendChild(k10cont);
document.getElementById("k10");
k10.appendChild(katas10);

//k11
const renameDM = lotrCitiesArray.splice(5, 1, "Deadest Marshes");
let katas11 = document.createElement("div");
let k11cont = document.createTextNode(JSON.stringify(lotrCitiesArray));
katas11.appendChild(k11cont);
document.getElementById("k11");
k11.appendChild(katas11);

//k12
const bestThingFirstFifteen = bestThing.slice(0, 15);
let katas12 = document.createElement("div");
let k12cont = document.createTextNode(JSON.stringify(bestThingFirstFifteen));
katas12.appendChild(k12cont);
document.getElementById("k12");
k12.appendChild(katas12);

//k13
const bestThingLastTwelve = bestThing.slice(-13);
let katas13 = document.createElement("div");
let k13cont = document.createTextNode(JSON.stringify(bestThingLastTwelve));
katas13.appendChild(k13cont);
document.getElementById("k13");
k13.appendChild(katas13);

//k14 
const bestThingbetween = bestThing.slice(23, 38);
let katas14 = document.createElement("div");
let k14cont = document.createTextNode(JSON.stringify(bestThingbetween));
katas14.appendChild(k14cont);
document.getElementById("k14");
k14.appendChild(katas14);

//k15
const bestThingSubstring = bestThing.substring(bestThing.length - 13);
let katas15 = document.createElement("div");
let k15cont = document.createTextNode(JSON.stringify(bestThingSubstring));
katas15.appendChild(k15cont);
document.getElementById("k15");
k15.appendChild(katas15);

//k16
const bestThingSubstr = bestThing.substr(23, 15);
let katas16 = document.createElement("div");
let k16cont = document.createTextNode(JSON.stringify(bestThingSubstr));
katas16.appendChild(k16cont);
document.getElementById("k16");
k16.appendChild(katas16);

//k17
const bestThingOnlyIndx = bestThing.indexOf("only");
let katas17 = document.createElement("div");
let k17cont = document.createTextNode(JSON.stringify(bestThingOnlyIndx));
katas17.appendChild(k17cont);
document.getElementById("k17");
k17.appendChild(katas17);

//k18
const bestThingLastIndx = bestThing.lastIndexOf("bit");
let katas18 = document.createElement("div");
let k18cont = document.createTextNode(JSON.stringify(bestThingLastIndx));
katas18.appendChild(k18cont);
document.getElementById("k18");
k18.appendChild(katas18);

//k19
const doubvowel = ["ee", "aa"];
let citiesArray = gotCitiesCSV.split(',');
for (let item in citiesArray) {
    for (let vowel in doubvowel) {
        if (citiesArray[item].includes(doubvowel[vowel]) === true) {
            const cAI = (citiesArray[item]);
            let katas19 = document.createElement("div");
            let k19cont = document.createTextNode(JSON.stringify(cAI));
            katas19.appendChild(k19cont);
            document.getElementById("k19");
            k19.appendChild(katas19);
        }
    }
}

//k20
for (let i = 0; i < lotrCitiesArray.length; i++) {
    if (lotrCitiesArray[i].endsWith("or")) {
        let sort = lotrCitiesArray[i];
        let katas20 = document.createElement("div");
        let k20cont = document.createTextNode(JSON.stringify(sort));
        katas20.appendChild(k20cont);
        document.getElementById("k20");
        k20.appendChild(katas20);

    }
}

//k21
let bestThingsplit = bestThing.split(" ");
for (let i = 0; i < bestThingsplit.length; i++) {
    if (bestThingsplit[i].startsWith("b")) {
        let katas21 = document.createElement("div");
        let k21cont = document.createTextNode(JSON.stringify(bestThingsplit[i]));
        katas21.appendChild(k21cont);
        document.getElementById("k21");
        k21.appendChild(katas21);
    }
}

//k22
if (lotrCitiesArray.includes("Mirkwood")) {
    let katas22 = document.createElement("div");
    let k22cont = document.createTextNode(JSON.stringify("Yes"));
    katas22.appendChild(k22cont);
    document.getElementById("k22");
    k22.appendChild(katas22);
}

//K23
if (lotrCitiesArray.includes("Hollywood")) {
    let katas23 = document.createElement("div");
    let k23cont = document.createTextNode(JSON.stringify("Yes"));
    katas23.appendChild(k23cont);
    document.getElementById("k23");
    k23.appendChild(katas23);
} else {
    let k23cont = document.createTextNode(JSON.stringify("No"));
    let katas23 = document.createElement("div");
    katas23.appendChild(k23cont);
    document.getElementById("k23");
    k23.appendChild(katas23)
}

//K24
let k24cont = document.createTextNode(JSON.stringify(lotrCitiesArray.indexOf("Mirkwood")));
let katas24 = document.createElement("div");
katas24.appendChild(k24cont);
document.getElementById("k24");
k24.appendChild(katas24);

//K25
//Find and display the first city in lotrCitiesArray that has more than one word
for (city in lotrCitiesArray); {
    if (lotrCitiesArray[city].includes(" ")) {
        let k25cont = document.createTextNode(JSON.stringify(lotrCitiesArray[city]));
        let katas25 = document.createElement("div");
        katas25.appendChild(k25cont);
        document.getElementById("k25");
        k25.appendChild(katas25);
    }
}

//K26
//Reverse the order in lotrCitiesArray
let k26cont = document.createTextNode(JSON.stringify(lotrCitiesArray.reverse()));
let katas26 = document.createElement("div");
katas26.appendChild(k26cont);
document.getElementById("k26");
k26.appendChild(katas26);

//K27
//Sort lotrCitiesArray alphabetically
let k27cont = document.createTextNode(JSON.stringify(lotrCitiesArray.sort()));
let katas27 = document.createElement("div");
katas27.appendChild(k27cont);
document.getElementById("k27");
k27.appendChild(katas27);
//K28
//Sort lotrCitiesArray by the number of characters in each city (i.e., shortest city names go first)
let k28cont = document.createTextNode(JSON.stringify(lotrCitiesArray.sort()));
let katas28 = document.createElement("div");
katas28.appendChild(k28cont);
document.getElementById("k28");
k28.appendChild(katas28);
//K29
//Using pop, remove the last city from lotrCitiesArray
let k29cont = document.createTextNode(JSON.stringify(lotrCitiesArray.pop()));
let katas29 = document.createElement("div");
katas29.appendChild(k29cont);
document.getElementById("k29");
k29.appendChild(katas29);
//K30
//Using push, add back the city from lotrCitiesArray that was removed in #29 to the back of the array
lotrCitiesArray.push("Rohan");
let k30cont = document.createTextNode(JSON.stringify(lotrCitiesArray));
let katas30 = document.createElement("div");
katas30.appendChild(k30cont);
document.getElementById("k30");
k30.appendChild(katas30);
//K31
//Using shift, remove the first city from lotrCitiesArray
let shifted = lotrCitiesArray.shift();
let k31cont = document.createTextNode(JSON.stringify(lotrCitiesArray));
let katas31 = document.createElement("div");
katas31.appendChild(k31cont);
document.getElementById("k31");
k31.appendChild(katas31);
//K32
//Using unshift, add back the city from lotrCitiesArray that was removed in #31 to the front of the array
let unshifted = lotrCitiesArray.unshift("Beleriand");
let k32cont = document.createTextNode(JSON.stringify(lotrCitiesArray));
let katas32 = document.createElement("div");
katas32.appendChild(k32cont);
document.getElementById("k32");
k32.appendChild(katas32);