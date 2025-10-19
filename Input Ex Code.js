 // this function will validate the user's input 
            function validateForm(){
                let fullname = "";

                // get the value the user entered in for their first name
                // we will remove any spaces at the beginning or end with trim 
                let FirstName = document.getElementById("txtFirstName").value.trim();
                // get the user's last name 
                let LastName = document.getElementById("txtLastName").value.trim();
                // get the user's zipcode 
                let ZipCode = document.getElementById("txtZipCode").value.trim();

                console.log("FirstName=" + FirstName);
                console.log("LastName=" + LastName); 
                console.log("ZipCode=" + ZipCode); 

                // validation - we need to make sure that the first name + " " + last name is less than 20 characters 
                // zip code needs to be exactly 5 digits 

                //variable to store the message that we will display to the user 
                let message = ""; 

                // concatenate (add) first name + " " + last name 

                fullname = FirstName + " " + LastName

                console.log("fullname" + fullname)

                // verify the number of characters in the full name variable
                if (fullname.length > 20 || fullname.length == 1){
                    // an invalid name has been entered 
                    message = "Invalid name, please try again.";
                    console.log("invalid name"); 
                }
                else if (ZipCode.length != 5){
                    message = "Invalid zip code, please try again."; 
                    console.log("invalid zip code")
                }
                else{
                    // create a message of success - display a secret word and/or welcome
                    message = "Welcome, " + FirstName + ". The secret word is ducks."; 
                }
                
                // display message to the user on the div in the HTML section 
                document.getElementById("divMessage").textContent = message;

            }