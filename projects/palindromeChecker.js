function palindrome(str) {
  let result = "";
  const myregex = /[^a-z0-9]/gi;
  let newResult = "";
  for (let i = str.length - 1; i >= 0; i--) {
    // console.log(i)
    // console.log(str[i])
    // console.log(result + "occupy") // I use occupy just to show what result is occupying at this point which an empty string
    result = result + str[i];
    // console.log(result)
  }

  if (result) {
    newResult = result.replace(myregex, newResult);
    return true;
  }
  return false;
}

console.log(palindrome("carrace9! fla09"));

// planning my regex
// const regexS = "any 1 4!"
// const regex = /[^a-z0-9]/gi
// let result = regexS.match(regex);
// console.log(result)
// let result = regexS.replace(regex, '')//means give me back the string after you eliminate the special characters
// let result = regexS.replace(regex, 't')//means whereever you find a special character replace it with t
// console.log(result)


// *******************************
//version 2
// *******************************

function palindrome(str) {
  let result = "";
  const myregex = /[^a-z0-9]/gi;
  let newResult = '';
  let newer;
  for (let i = str.length-1; i >= 0; i--){
    // console.log(i)
    // console.log(str[i])
    // console.log(result + "occupy") // I use occupy just to show what result is occupying at this point which an empty string
    result = result + str[i];
    // console.log(result)
  }
  if (str[0] === result.length -1 && str.length -1 === str[0]) {
    newer = result.replace(myregex, newResult);
  }
  return newer;
 
  // return false;
}

console.log(palindrome("eye"));

// planning my regex
// const regexS = "any 1 4!"
// const regex = /[^a-z0-9]/gi
// let result = regexS.match(regex);
// console.log(result)
// let result = regexS.replace(regex, '')//means give me back the string after you eliminate the special characters
// let result = regexS.replace(regex, 't')//means whereever you find a special character replace it with t
// console.log(result)


// *******************************
//final version that worked
// *******************************

// racecar -> racecar
// car -> rac
// if first letter is not at the end after reversing
// and the last letter is not at the beginning
// return false
// else return true

function palindrome(str) {
  let result = "";
  // let newResult;
  let myregex = /[^a-z0-9]/gi;
  for (let i = str.length -1; i >= 0; i--){
    result = result + str[i]
    
  }
  // console.log(`${result}`)
  let newResult = result.replace(myregex,'');
  let newStr = str.replace(myregex,'')
    // console.log(`${newResult} see`)
  if (newStr.toLowerCase() !== newResult.toLowerCase()){ 
    // console.log(`${newStr} inside ++`)
    // console.log(newResult + " inside")
    return false;
  }
  return true;
}

console.log(palindrome("A man, a plan, a canal. Panama"));

// *******************************
//Final Version without comments
// *******************************
function palindrome(str) {
  let result = "";
  //looping through the string
  for (let i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
  }
  //cleaning the string and result to discard special characters 
  let newResult = result.replace(/[^a-z0-9]/gi, "");
  let newStr = str.replace(/[^a-z0-9]/gi, "");
  if (newStr.toLowerCase() !== newResult.toLowerCase()) {
    return false;
  }
  return true;
}

palindrome("eye");

//solve it by separating each task in a function
// Inspired by ramon with my additionals
//turn string into uppper or lower
function toUpper(str){
  let upperString = str.toUpperCase();
  return upperString;
}
console.log(toUpper("please make me big"))
//clean the string 
function cleanString(str){
  let cleanStr = str.replace(/[^a-z0-9]/gi, '');
  return cleanStr;
}
console.log(cleanString("return clean !!1 pleas"))
//reverse the string
function reverseString(str){
  let result = "";
  for (let i = str.length -1; i >= 0; i--){
    // console.log(str)
    result = result + str[i];
    
  }
  return result;
}

console.log(reverseString("kimo"))
//check for palindrome if true else false
function palindrome(str2) {
  let palUpper = toUpper(str2);
  let palCleanStr = cleanString(palUpper);
  let palReverseStr = reverseString(palCleanStr);
  //usng if statement
// if (palReverseStr !== palCleanStr){
  //   return false
  // }
  // return true;
  // the below can be used to replace the if statement
return palReverseStr === palCleanStr;
  
}

console.log(palindrome(""));
