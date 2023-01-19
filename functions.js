/*1.Write a JavaScript function that receives a number as a parameter and logs whether it is even or odd. */
// take input from the user
const number = prompt("Enter a number: ");

//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}


/*2.Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.  
Example string: 'Web Development Tutorial' 
Expected Output: 'Development' */
function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Web Development Tutorial'));

/*3.Write a JavaScript function to get the last element of an array and the number of items in the array*/
let arry = [2, 4, 6, 8, 10, 12, 14, 16];
let lastElement = arry[arry.length - 1];


console.log(lastElement);
console.log(arry.length);

/*Write a JavaScript function that will insert the property “published_on” in the below object. The value of the property should be the current date generated using the Date object. */
 const Book={ 
    author: 'Suzanne Collins', 
    title:  'Mockingjay: The Final Book of The Hunger Games',  
    readingStatus: false 
} 
//console.log(now.getDate());
let now=new Date();
Book.published_on = new Date();
console.log(Book);
