//code below will not show any output
//this is because when you return in a function then call it
//you need to console.log to see an output
function practice(num) {
  return num + 2;
}
practice(2);
// console.log(practice(2));

//however if you console.log directly from the function
//after calling it, output will show
function practice(num) {
  console.log(num + 2);
}
practice(2);
