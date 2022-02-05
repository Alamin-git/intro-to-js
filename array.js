// Array lekhar jonno 
var friendsName = ['Shoriful', 'Alal', 'Rajon', 'Parvez']
var friendsAge = [25, 28, 26, 28]
console.log(friendsName);


// Array element koto gula ase seta dekhar jonno 
var allFriends = friendsName.length;
console.log(allFriends);
console.log(friendsAge.length);


// Array index 0, 1, 2, 3, 4.......

// array value koto Number index position a ase ta jante
var friendsAges = friendsAge.indexOf(28);
console.log(friendsAges);


// index position onujayi kon velue ase ta jante 
var ages = friendsAge[2];
console.log(ages);
// index position dhore kono velue change korte 
friendsName[2] = 'Aziz';
console.log(friendsName);

// push(), unshift()
// jodi notun kew add hoi / now velue zukto hoi 
// new velue sob sese zukto hobe & 1 er odhik zuto kora jabe 

friendsName.push('Rakibul');
friendsName.push('Pavel', 'Sobuj');
console.log(friendsName);
// added fist 
friendsName.unshift('romio');
console.log(friendsName);


// pop(), shift()
// last theke velue remove korte 
friendsName.pop();
// etake veriable hisebe o deya jai .
var badPorche = friendsName.pop();
console.log(badPorche);
// fast remove 
friendsName.shift();
console.log(friendsName);
