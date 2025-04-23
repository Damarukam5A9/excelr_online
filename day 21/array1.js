let arr1 = [10,20,30,40,50];
let squareArr = arr1.map((num, index,arr1) => num * num);
console.log(arr1, squareArr); // [100, 400, 900, 1600, 2500]

let arr2=['this','is','array','session'];
let arr3=arr2.map((e) => e.toUpperCase());
console.log(arr3); // ['THIS', 'IS', 'ARRAY', 'SESSION']