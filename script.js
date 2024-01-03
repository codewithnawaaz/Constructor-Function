// jab hame lagta hai ki hame bhut sare obj ke jaroorat padegi or un obj m bhut similarty hai jaise example le ek music album ka usme singer , music lyrics alag hai usme key same hai lekin values alaga hai to aisi situation me hm use karte hai constructor function ..
// iski pehchan hai ise new key word se invoke kiya jata hai or dunction m anddar this ka use ho rha hoga .. pr ha constructor function me usally pehle letter capital hota hai

// new aate hi smjho apne brain me ek {} empty obj tyyar ho gya hai

const Person = function (name, age) {
  this.name = name;
  this.age = age;
};

const adil = new Person("adil", 31);
console.log(adil);
// print hoga Person { name: 'adil', age: 31 }

// new obj ban gaya
