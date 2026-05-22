let numbers = [3, 7, 5, 8, 1, 6, 2, 25];

let media = numbers.reduce((acc,n)=> acc+n)/numbers.length;
let menomedia = numbers.filter ( (number)=> number <= media);


console.log(media);
console.log(menomedia);
console.log(menomedia.length);
