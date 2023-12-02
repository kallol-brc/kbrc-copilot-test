/*
1. Write a function called 'validateForm'.
2. This function should take one parameter, 'form'.
3. This function should loop through all the inputs in the form and check if they are empty.
4. If any of the inputs are empty, the function should return false.
*/
function validateForm(form) {
  for (let i = 0; i < form.length; i++) {
    if (form[i].value === "") {
      return false;
    }
  }
  return true;
}

/*
1. Write a function to parse a JSON string into an object.
*/
function parseJSON(json) {
  return JSON.parse(json);
}
