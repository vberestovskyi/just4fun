let first = [1, 2, 3, 4, 5];
let second = first;
first.push(10);
console.log(first); //[ 1, 2, 3, 4, 5, 10 ]
console.log(second); //[ 1, 2, 3, 4, 5, 10 ]

let third = [1, 2, 3, 4, 5];
let forth = third;
third = [11, 12];
console.log(third); //[ 11, 12 ]
console.log(forth); //[ 1, 2, 3, 4, 5 ]