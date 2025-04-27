// accessing element with getElementbyId()

let heading=document.getElementById('heading');
heading.style.color='red';
console.log(heading);


// accessing element with getElementsByClassName()
let heading2s=document.getElementsByClassName('heading2');
for(let e of heading2){
    e.style.color='green';
}
console.log(heading2);

// accessing element with getElementsByTagName()
let heading3=document.getElementsByTagName('h3');
for(let e of heading3){
    e.style.color='blue';
}

//accessing element with querySelector()
let p=document.querySelector('.p1');
p.style.color='red';
//accessing element with querySelectorAll()
let pList=document.queryAllSelector('.p1');
console.log(pList);

for(let e of pList){
    e.style.color='greeen';
}

// creation of element with createElement()

let pCreate=document.createElement('p');
pCreate.textcontent='this is a new paragraph created by using textContent property';

let container=document.querySelector('.container');
container.appendChild(pcreate);

