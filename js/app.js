'use strict'
const houers = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']
let parent = document.getElementById('parent');

////////////////////seattle\\\\\\\\\\\\\\\\\\\\\\
let seattle = {
    name: 'seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    cusPerHour: [], //[55, 48, 51, 35, 47, 32, 49, 44, 36, 45, 62, 52, 41, 62, 25]
    cookiesPerHour: [],

    generateRandom: function (min, max) {
        for (let i = 0; i < houers.length; i++) {
            let custEachHour = Math.floor((Math.random)() * (max - min + 1) + min);
            this.cusPerHour.push(custEachHour);
        }
    },

    calculateAvg: function (avg) {
        for (let i = 0; i < this.cusPerHour.length; i++) {
            let mul = Math.floor(avg * this.cusPerHour[i])
            this.cookiesPerHour.push(mul)
        }
    }
}

seattle.generateRandom(23, 65)
seattle.calculateAvg(6.3)
console.log(seattle.cookiesPerHour);

// first div "parrent"
let child = document.createElement('div');
console.log(child);
parent.appendChild(child)

//second div "child"
let h3 = document.createElement('h3');
h3.textContent = 'Seattle'
child.appendChild(h3)

let unorderedlist = document.createElement('ul');
child.appendChild(unorderedlist);

let total = 0;

for (let i = 0; i < houers.length; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = `${houers[i]}: ${seattle.cookiesPerHour[i]} cookies` //[170, 170, 239, 151, 289, 270, 245, 296, 277, 258, 195, 182, 245, 409, 264]
    total = total + seattle.cookiesPerHour[i]
    unorderedlist.appendChild(listItem)
}

let listItemT = document.createElement('li');
listItemT.textContent = `Total: ${total} cookies`
unorderedlist.appendChild(listItemT)




////////////////////Tokyo\\\\\\\\\\\\\\\\\\\\\\
let Tokyo = {
    name: 'Tokyo',
    min: 3,
    max: 24,
    avg: 1.2,
    cusPerHour: [],
    cookiesPerHour: [],

    generateRandom: function (min, max) {
        for (let i = 0; i < houers.length; i++) {
            let custEachHour = Math.floor((Math.random)() * (max - min + 1) + min);
            this.cusPerHour.push(custEachHour);
        }
    },

    calculateAvg: function (avg) {
        for (let i = 0; i < this.cusPerHour.length; i++) {
            let mul = Math.floor(avg * this.cusPerHour[i])
            this.cookiesPerHour.push(mul)
        }
    }
}

Tokyo.generateRandom(3, 24)
Tokyo.calculateAvg(1.2)
console.log(Tokyo.cookiesPerHour);

// first div "parrent"
let child2 = document.createElement('div');
console.log(child2);
parent.appendChild(child2)

//second div "child2"
let h32 = document.createElement('h3');
h32.textContent = 'Tokyo'
child2.appendChild(h32)

let unorderedlist2 = document.createElement('ul');
child2.appendChild(unorderedlist2);

let total2 = 0;

for (let i = 0; i < houers.length; i++) {
    let listItem2 = document.createElement('li');
    listItem2.textContent = `${houers[i]}: ${Tokyo.cookiesPerHour[i]} cookies`
    total2 = total2 + Tokyo.cookiesPerHour[i]
    unorderedlist2.appendChild(listItem2)
}

let listItemT2 = document.createElement('li');
listItemT2.textContent = `Total: ${total2} cookies`
unorderedlist2.appendChild(listItemT2)



////////////////////Dubai\\\\\\\\\\\\\\\\\\\\\\
let Dubai = {
    name: 'Dubai',
    min: 11,
    max: 38,
    avg: 3.7,
    cusPerHour: [],
    cookiesPerHour: [],

    generateRandom: function (min, max) {
        for (let i = 0; i < houers.length; i++) {
            let custEachHour = Math.floor((Math.random)() * (max - min + 1) + min);
            this.cusPerHour.push(custEachHour);
        }
    },

    calculateAvg: function (avg) {
        for (let i = 0; i < this.cusPerHour.length; i++) {
            let mul = Math.floor(avg * this.cusPerHour[i])
            this.cookiesPerHour.push(mul)
        }
    }
}

Dubai.generateRandom(11, 38)
Dubai.calculateAvg(3.7)
console.log(Dubai.cookiesPerHour);

// first div "parrent"
let child3 = document.createElement('div');
console.log(child3);
parent.appendChild(child3)

//second div "child3"
let h33 = document.createElement('h3');
h33.textContent = 'Dubai'
child3.appendChild(h33)

let unorderedlist3 = document.createElement('ul');
child3.appendChild(unorderedlist3);

let total3 = 0;

for (let i = 0; i < houers.length; i++) {
    let listItem3 = document.createElement('li');
    listItem3.textContent = `${houers[i]}: ${Dubai.cookiesPerHour[i]} cookies`
    total3 = total3 + Dubai.cookiesPerHour[i]
    unorderedlist3.appendChild(listItem3)
}

let listItemT3 = document.createElement('li');
listItemT3.textContent = `Total: ${total3} cookies`
unorderedlist3.appendChild(listItemT3)




////////////////////Paris\\\\\\\\\\\\\\\\\\\\\\
let Paris = {
    name: 'Paris',
    min: 20,
    max: 38,
    avg: 2.3,
    cusPerHour: [],
    cookiesPerHour: [],

    generateRandom: function (min, max) {
        for (let i = 0; i < houers.length; i++) {
            let custEachHour = Math.floor((Math.random)() * (max - min + 1) + min);
            this.cusPerHour.push(custEachHour);
        }
    },

    calculateAvg: function (avg) {
        for (let i = 0; i < this.cusPerHour.length; i++) {
            let mul = Math.floor(avg * this.cusPerHour[i])
            this.cookiesPerHour.push(mul)
        }
    }
}

Paris.generateRandom(20, 38)
Paris.calculateAvg(2.3)
console.log(Paris.cookiesPerHour);

// first div "parrent"
let child4 = document.createElement('div');
console.log(child4);
parent.appendChild(child4)

//second div "child4"
let h34 = document.createElement('h3');
h34.textContent = 'Paris'
child4.appendChild(h34)

let unorderedlist4 = document.createElement('ul');
child4.appendChild(unorderedlist4);

let total4 = 0;

for (let i = 0; i < houers.length; i++) {
    let listItem4 = document.createElement('li');
    listItem4.textContent = `${houers[i]}: ${Paris.cookiesPerHour[i]} cookies`
    total4 = total4 + Paris.cookiesPerHour[i]
    unorderedlist4.appendChild(listItem4)
}

let listItemT4 = document.createElement('li');
listItemT4.textContent = `Total: ${total4} cookies`
unorderedlist4.appendChild(listItemT4)





////////////////////Lima\\\\\\\\\\\\\\\\\\\\\\
let Lima = {
    name: 'Lima',
    min: 2,
    max: 16,
    avg: 4.6,
    cusPerHour: [],
    cookiesPerHour: [],

    generateRandom: function (min, max) {
        for (let i = 0; i < houers.length; i++) {
            let custEachHour = Math.floor((Math.random)() * (max - min + 1) + min);
            this.cusPerHour.push(custEachHour);
        }
    },

    calculateAvg: function (avg) {
        for (let i = 0; i < this.cusPerHour.length; i++) {
            let mul = Math.floor(avg * this.cusPerHour[i])
            this.cookiesPerHour.push(mul)
        }
    }
}

Lima.generateRandom(2, 16)
Lima.calculateAvg(4.6)
console.log(Lima.cookiesPerHour);

// first div "parrent"
let child5 = document.createElement('div');
console.log(child5);
parent.appendChild(child5)

//second div "child5"
let h35 = document.createElement('h3');
h35.textContent = 'Lima'
child5.appendChild(h35)

let unorderedlist5 = document.createElement('ul');
child5.appendChild(unorderedlist5);

let total5 = 0;

for (let i = 0; i < houers.length; i++) {
    let listItem4 = document.createElement('li');
    listItem4.textContent = `${houers[i]}: ${Lima.cookiesPerHour[i]} cookies`
    total5 = total5 + Lima.cookiesPerHour[i]
    unorderedlist5.appendChild(listItem4)
}

let listItemT5 = document.createElement('li');
listItemT5.textContent = `Total: ${total5} cookies`
unorderedlist5.appendChild(listItemT5)


















