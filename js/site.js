


//Get the value from the interface
//Starts or Controller function
function getValue() {
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //Parse into integers 
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //call generateNumbers function
        let numbers = generateNumbers(startValue, endValue);
        //we call display numbers to PUT  DISPLAY values on screen,
        // NOT every function should return anything. 
        displayNumbers(numbers)
    }
    else {
        alert("You must enter integers");
    }



}

//Generate numbers from startvalue to the endValue
//Logic function(s)
function generateNumbers(sValue, eValue) {
    let numbers = [];

    //Get all numbers from start to end
    for (let index = sValue; index <= eValue; index++) {
        //This will execute in a loop until index=eValue
        numbers.push(index);

    }
    return numbers;
}

//display the numbers and mark even numbers BOLD
//display or view function
function displayNumbers(numbers) {
    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {

        let number = numbers[index];
        let className = "even";

        if (number % 2 == 0) {
            className = "even";
        }
        else {
            className = "odd";
        }
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }
    document.getElementById("results").innerHTML = templateRows;

}