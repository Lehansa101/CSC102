// functions are a nice way to organize our code and make our code reusable
// Use a descriptive function name - functions do something, so make it a verb/action
// () can hold function arguement - if you need to pass in  information to the function
function playDice(){
    // log that the function was called 
    console.log("playDice() function was called");

    // roll die 1 
    let roll1 = rollDice();

    // roll die 2 
    let roll2 = rollDice();

    console.log("roll1=" + roll1);
    console.log("roll2=" + roll2);

    // calculate the rolls 
    let sum = roll1 + roll2;

    // display roll 1 in the roll 1 div 
    document.getElementById("divRoll1").textContent = "Roll 1: " + roll1;

    // display roll 2 in the roll 2 div 
    document.getElementById("divRoll2").textContent = "Roll 2: " + roll2;

    // display sum in the sum div 
    document.getElementById("divSum").textContent = "Sum: " + sum;


    // variables to hold the result 
    let result = ""; 

    //see of the user lost - if they rolled sum of 7 or 11 
    // "|| means or"
    if (sum == 7 || sum == 11){
        console.log("you lost");
        result = "Sorry! You lost!"; 
    }

    // check if we rolled an even number 
    // modulus is when we perform division problem and we get the remainder as the result
    // Ex. 2/2 = 1 w/ no remainder = even number; 5/2 = 2 with remainder of 1 = odd number
    // this checks to see if our roll 1 is divided by 2 and getting an even number 
    // We also need to make sure that roll1 and roll 2 results in the same value  
    else if(roll1 % 2 == 0 && roll1 == roll2) {
        console.log("you won")
        result = "Congrats! You won!";
    }
    // the catch-all else statement if neither of the above statements evaluated to true, this else statement will run 
    else{
        console.log("you tied (pushed)");
        result = "You tied (you pushed)!";
    }

    //show the result in the result div 
    document.getElementById("divResult").textContent = result; 
    
}

// create a function to generate a randum number 
function rollDice(){
    // create a variable to hold a random number
    // Math.random() is a built in JavasScript function which generates a random number 
    let die = Math.random() * 6; //I want to replicate a 6 sided die

    // round the number and return the value 

    return Math.ceil(die);
}

/* this is the code to move the image around the home page*/ 

        //this variable will keep track of the current interval - so we can stop the interval
        let intervalID = 0;

        //this function will start the image moving around 
        function startMove(){
            // create a shortcut/nickname to the image in the HTML
            let image = document.getElementById("memeImage");

            // store the current interval id
            intervalID = setInterval(function(){
                // the code that runs repeatedly
                let xCord = getRandomNum();
                let yCord = getRandomNum();

                // change the x cord 
                image.style.left = xCord + "px"; 
                image.style.top = yCord + "px";

            }, 1000); // this code will run every second 

            // swap the buttons being enabled 
            document.getElementById("btnStart").disabled = true; // no click Start 
            document.getElementById("btnStop").disabled = false; // click Stop
        }

        // function to stop the image from moving 
        function stopMove(){
            // call clear interval and pass in the interval id
            clearInterval(intervalID);

            // swap the buttons being enabled 
            document.getElementById("btnStart").disabled = false; // click Start
            document.getElementById("btnStop").disabled = true; //no click Stop 
        }

        // function to randomly generate a number 
        function getRandomNum(){
            // get a random number between 0 and 799 
            return Math.floor(Math.random() * 800); 
        }


// palindrome code 
        // function to test for the palindrome 
        function testPalin(){
            // get the value that the user entered in the textbox
            let userInput = document.getElementById("txtInput").value.trim();

            console.log("userInput=" + userInput);

            // we need to move this into an if/else file

            //this statement implies == true, you could write it out 
            // isPalindrome(userInput) == true
        
            if (isPalindrome(userInput)){
                document.getElementById("divResult").textContent = "Yes, " + userInput + " is a palindrome."
            }
            else{
                document.getElementById("divResult").textContent = "No, " + userInput + " is not a palindrome."
            }
        }

        // function will test to see if a word is a palindrome
        function isPalindrome(wordToTest){
            // remove any spaces inside of the word(s)
            let cleanedWord = wordToTest.replace(/\s/g, "");

            // change any UPPER CASE letters to lower case 
            cleanedWord = cleanedWord.toLowerCase();

            console.log("cleanedWord=" + cleanedWord);

            // convert the cleaned string to an array 
            let arrCleaned = cleanedWord.split("");

            // reverse the array content 
            arrCleaned = arrCleaned.reverse();

            // take our reversed array and convert it back to a string 
            let reversedWord = arrCleaned.join(""); 

            console.log("reversedWord=" + reversedWord); 

            // compare if the cleaned and reversed words are the same 
            return cleanedWord == reversedWord; 
        }