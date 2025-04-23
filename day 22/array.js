let arr1=[1,2,3,4,5,6,'hello'];
console.log(arr1);

arr1.splice(4);
console.log(arr1);//[]
arr1.splice(4,2);
console.log(arr1);//[1,2,3,4,5,6,'hello']
arr1.splice(2,0,'bye','hi')//adds 2 elements at index 2
console.log(arr1);
arr1.splice(2,2,'bye','hi')
console.log(arr1);


//some()

let arr=[1,2,3,4,5,6,'hello'];
let output=arr1.some(
    (e)=>e%2==0
)
/*
find index() method
//the fundindex() method returns the index of the
//  first element in the array that satisfies the
//  provided testing function. if no values satisfy the testing function,-1 is returned.
syntax:
array.findIndex(callback(currentValue[, index[, array]])[, thisArg])
*/
let arr2=[1,2,3,4,5,6,'hello'];
let output1=arr2.findIndex(
    (e)=>e%2==0
)
console.log(output1);//1 

/**
 * reverse() method
 * The reverse() method reverses the elements in an array.
 *     -it reverse the original array
 *     -returns the reference to the same array,now modified.
 * 
 */

let arr3=[1,2,3,4,5,6,'hello'];
console.log(arr3);//['hello',6,5,4,3,2,1]
let output3=arr3.reverse();
console.log(output3);//['hello',6,5,4,3,2,1]
console.log(arr3);//['hello',6,5,4,3,2,1]

/**
 * tostring() method
 *       * The toString() method returns a string representing the
 *  specified array and its elements.
 *       * The toString() method does not change the original array.
 *      *return string with comma seperated values.
 */

let arr4=[10,20,30];
let output4=arr4.toString();
console.log(arr4);//[10,20,30]
console.log(output4);//10,20,30
console.log(typeof output4);//string

let arr5=['hello','world','hi'];
let output5=arr5.toString();
console.log(arr5);//['hello','world','hi']
console.log(output5);//hello,world,hi

/** 
 * join() method
 * the join() method creates and returns a new string by
 *     concatenating all of the elements in an array (or an array-like object),
 * *     separated by commas or a specified separator string.
 * *     * The join() method does not change the original array.
 * *     * The join() method returns a string.
 */

let arr6=[10,20,30];
let output6=arr6.join('-😊');
console.log(output6);

/**
 * slice() method
 * * The slice() method returns a shallow copy of a
 *  portion of an array into a new array object selected
 *  from start to end (end not included) where start and
 *  end represent the index of items in that array.
 * * * The original array will not be modified.
 * syntax:
 * array.slice(start, end)
 * start: it is used to specify the starting index 
 *        of the slice.
 */

let arr7=[10,20,30,40,50,60];
let output7=arr7.slice(2,4);
console.log(output7);//[30,40]
console.log(arr7.slice(3));//[ 40, 50, 60 ]

/**
 * forEach() method
 * * The forEach() method executes a provided function once
 *      for each array element.
 *     -it works like looping through the array elements.
 * * * The forEach() method does not return a value.
 * syntax:
 *        array.forEach
 *              (currentValue, index, array) => {
 *                       //code block
 *              }
 */

let arr8=[10,20,30,40,50,60];
arr8.forEach(
    (element,index,array)=>{
        console.log(`element:${element} `);
        console.log('square of element:',element*element);
    }
)

/**
 * for of loop
 *      -The for...of statement creates a loop iterating over 
 *       iterable objects,including: typed sets, arrays, strings, etc.
 *  syntax:
 *    for(let element of array){
 *        //code block
 * }
 * 
 */
let arr9=[10,20,30,40,50,60];
         for(let element of arr9){
            console.log(element);
        }

        for(let index in arr9){
            console.log(index,'->',arr9[index]);

        }

/**
 * indexOf() method
 *      -The indexOf() method returns the first index at
 *       which a given element can be found in the array,
 *       or -1 if it is not present.
 * syntax:
 *       array.indexOf(searchElement[, fromIndex])
 * * searchElement: the value to search for.
 * * * fromIndex: the index at which to begin the search.(default is 0)(optional)
 */

let arr10=[10,20,30,40,50,60];
let output10=arr10.indexOf(20);
console.log(arr10.indexOf(100));//-1
console.log(arr10.indexOf(100,0));//-1

/**
 * delete
 * * The delete operator removes a property from an object/array.
 */
let arr11=[10,20,30,40,50,60];
delete arr11[1];
console.log(arr11);//[ 10, <1 empty item>, 30, 40, 50, 60 ]

/**
 * fill()
 *     -the fill() method changes all  elements in an array 
 *           to a static value,and returns the modified array.
 *     -it changes the original array.
 *     -it returns the modified array.
 * syntax:
 *       array.fill(value, start, end)
 * value: the value to fill the array with.
 * start: The starting index.(default is 0)(optional)
 * end: the ending index.(default is the length of the array)(optional)
 *     (exclusive)
 */
let arr12=[10,20,30,40,50,60];
arr12.fill(100,4);
console.log(arr12);
arr12.fill(100,5);
arr12.fill(200,3,5);

/**
 * padstart()
 * *     -The padStart() method pads the current string 
 * *       with another string (multiple times) until it reaches the
 *         specified length.
 *       -it does not change the original string.
 *       -it returns the padded string.
 */




