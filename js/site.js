//Get the string 
//controlller function
function getSstring() {

    document.getElementById("alert").classList.add("invisible");
 
    let userString = document.getElementById("userInput").value;

    let reverse = reverseString(userString);//declared a function into a variable 

    displayString(reverse);
}
//Reverse the string 
//logic function
function reverseString(userString) {
    let reverse = [];   

    for (let index = userString.length - 1; index >= 0; index--) {
        reverse += userString[index];
    }
    return reverse;
}

//Display the reversed string to the user//view function
function displayString(reverse) {
    console.log(reverse);

    document.getElementById("msg").innerHTML = `Your string reversed is: ${reverse}`; //Template literals 
    document.getElementById("alert").classList.remove("invisible");
}