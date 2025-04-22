let arr1=[10,20,30,40,50]


console.log(arr1);

let arr2=['hlo','world','this','is','array']
console.log(arr2);
console.log(arr2[0]);
console.log(arr2[1]);
console.log(arr2[2]);
console.log(arr1.length);

let arr3=new Array(10,20,30,40,50);
console.log(arr3);

let arr4=new Array(3);
console.log(arr4);
console.log(arr4.length);

let arr5=new Array(1);
arr5[0]=10;
console.log(arr5);

let arr6=Array.of('developer');
console.log(arr6);

let arr7=[10,20,30,40,50];
console.log(arr7);
arr7[1]=10000;
console.log(arr7[1]);
arr7[1]=20000;
console.log(arr7[1]);

let arr8=['this','is','array','session'];
console.log(arr8);
arr8[4]=1000;
arr8[9]=200;
console.log(arr8.length);
console.log(arr8[7]);

arr8.push('example');

console.log(arr8);

//removing values from array
arr8.pop();
console.log(arr8);


let arr9=[10,20,30,40,50];
console.log(arr9.at(0));
console.log(arr9.at(-1));
console.log(arr9.at(8));

let arr1=[10,20,30,40,50];
let squareArr=arr1.map(num=> num*num);
console.log(arr1,squareArr);

let arr2= ['this','is','array','session'];



