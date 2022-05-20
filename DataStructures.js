// 1. Get 10 random 3 digits number and print 2nd largest and 2nd smallest of them

let numArray = new Array(10);
for (let i = 0; i < numArray.length; i++) {
    numArray[i] = Math.floor(Math.random() * 900) + 100;
}
console.log(numArray);