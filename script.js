// Author:              Tim Leslie
// Date Last Modified:  January 27, 2019.
// Course:              CPRG 210 Web Application Development
// Assignment:          Final Assignment

var pageBody = document.getElementsByTagName('body')[0];

if (pageBody.id == 'mainPg') {
    // Code for the main page.
    // Diagnostic code line: console.log("I'm on the main page now!");

}

if (pageBody.id == "contactPg") {

    // Code for the contacts page.
    // Diagnostic consloe message: console.log("I'm on the contact page now!");

    // Create text elements for the table header elements.
    var newText1 = document.createTextNode('Images');
    var newText2 = document.createTextNode('Descriptions');

    // Create a table element ans style it.
    var newTable = document.createElement('table');
    newTable.style.width       = "100%";

    // Create table header elements and append text elements.
    var newHeader1   = document.createElement('th');
    var newHeader2   = document.createElement('th');
    newHeader1.appendChild(newText1);
    newHeader2.appendChild(newText2);

    // Create a table row element and append the table headers to it.
    var newRow1   = document.createElement('tr');
    newRow1.appendChild(newHeader1);
    newRow1.appendChild(newHeader2);
    newTable.appendChild(newRow1);

    // Declare and assign arrays for image files, image descriptions, and relevant web page links, respectively.
    var imgArr   = ["Images/185489-unsplash-edit.jpg", "Images/465339-unsplash-edit.jpg", "Images/jason-zeis-328638-unsplash.jpg","Images/300912-unsplash-edit.jpg"];
    var desArr   = ['Turks and Caicos', 'Bahamas', 'Greece', 'Getaway'];
    var urlArr   = ['https://www.tripadvisor.ca/Tourism-g147395-Turks_and_Caicos-Vacations.html', 'https://www.bahamas.com/',
                    'http://www.visitgreece.gr/', 'https://www.westjet.com/en-ca/index'];


    // Set up a loop to append row (data) elements to the table. the loop
    // will iterate through all elements of the input arrays and build the table
    // content elements successively. The sequence starts with data elements,
    // appends these to a table row element, and then finally appends the row element
    // to the table element.

    for (let i = 0; i < imgArr.length; i++) {
        var newRow    = document.createElement('tr');
        var newData1  = document.createElement('td');
        var newData2  = document.createElement('td');
        var newImg    = document.createElement('img');
        newImg.src    = imgArr[i];

        // Add an event listener to the table images.
        // If clicked, a relevant web page link is opened.
        newImg.addEventListener("click", function(event) {
            var temp_window = window.open(urlArr[i]);
            console.log(urlArr[i]);
            setTimeout(closeWindow, 5000); // Westjet page slow to open, so 5 seconds selected.
            function closeWindow() {
                temp_window.close();
            }
        });

        // Append image to a data element and append description to a data element.
        newData1.appendChild(newImg);
        newData2.textContent = desArr[i];

        // Append these data elements to a table row.
        newRow.appendChild(newData1);
        newRow.appendChild(newData2);

        // Append the table row to the table.
        newTable.appendChild(newRow);
        
        // Function to close the temporary web page windows.
        function closeWindow() {
            temp_window.close();
        }
    }    
    var divElem = document.getElementsByTagName('div')[1]; // Obtain the second div on the page.
    divElem.appendChild(newTable);

        // Code for airplane animation.
        var plane = document.getElementById('plane');
    
        // Initialize the plane orientation and movement.
        plane.style.transform = "scaleX(-1) rotate(30deg)";
        var flyForwards   = true;
        var flyDownwards = true;
    
        // Set interval timer to call planeFly function
        var planeTimer = setInterval(planeFly, 10);
    
        // This function handles the movement logic for the plane image.
        // Boolean variables, flyForwards and flyBackwards, track the current direction of motion.
        // The plane will 'reflect' off vertical boundaries, and change its pitch by using
        // the transform property.
    
        function planeFly() {
            if (plane.offsetLeft >= document.body.offsetWidth - plane.offsetWidth) {
                flyForwards = false;
            }
            if (plane.offsetLeft <= 20) {
                flyForwards = true;
            }
            if (flyForwards) {
                plane.style.left = plane.offsetLeft + 1 + "px";
            }
            else {
                plane.style.left = plane.offsetLeft - 1 + "px";
            }
            if (plane.offsetTop >= document.body.offsetHeight - plane.offsetHeight) {
                flyDownwards = false;
            }
            if (plane.offsetTop <= 0) {
                flyDownwards = true;
            }
            if (flyDownwards) {
                plane.style.top = plane.offsetTop + 1 + "px";
            }
            else {
                plane.style.top = plane.offsetTop - 1 + "px";
            }
            if ((!flyForwards) && (flyDownwards)) {
                plane.style.transform = "scaleX(-1) rotate(30deg)";
            }
            if (!(flyForwards) && (!(flyDownwards))) {
                plane.style.transform = "rotate(15deg) scaleX(-1)";
            }
            if ((flyForwards) && (flyDownwards)) {
                plane.style.transform = "scaleX(1) rotate(30deg)";
            }
            if ((flyForwards) && !(flyDownwards)) {
                plane.style.transform = "scaleX(1) rotate(-20deg)";
            }
        }
    }


if (pageBody.id == 'regPg') {

    // Code for the registration page.

    document.body.style.backgroundImage = "none";

    // Set up variables for the form validation code block.
    // Declare variables for each paragraph element identified by 'id'.
    // and set the display visibility to 'none'.
    var plastName = document.getElementById('p_lastName');
    plastName.style.display = "none";
    var pfirstName = document.getElementById('p_firstName');
    pfirstName.style.display = "none";
    var pstreetAddress = document.getElementById('p_streetAddress');
    pstreetAddress.style.display = "none";
    var pcity = document.getElementById('p_city');
    pcity.style.display = "none";
    var pprovince = document.getElementById('p_province');
    pprovince.style.display = "none";
    var ppostalCode = document.getElementById('p_postalCode');
    ppostalCode.style.display = "none";
    var pphoneNumber = document.getElementById('p_phoneNumber');
    pphoneNumber.style.display = "none";
    var pemail = document.getElementById('p_email');
    pemail.style.display = "none";
    var pdepDate = document.getElementById('p_depDate');
    pdepDate.style.display = "none";
    var pretDate = document.getElementById('p_retDate');
    pretDate.style.display = "none";

    // Code for validation of user information fields.
    // Set an event listener for focus on each of the input fields.
    // Once an input element has focus, display its corresponding paragraph message. 
    // When the input field is 'blur'd, hide the paragraph message.

    var l_lastName = document.getElementById("lastName");
    l_lastName.addEventListener("focus", function(event) {
        event.preventDefault();
        plastName.style.display = "inline";
    });
    l_lastName.addEventListener("blur", function(event) {
        event.preventDefault();
        plastName.style.display = "none";
    });

    var l_firstName = document.getElementById("firstName");
    l_firstName.addEventListener("focus", function(event) {
        event.preventDefault();
        pfirstName.style.display = "inline";
    });
    l_firstName.addEventListener("blur", function(event) {
        event.preventDefault();
        pfirstName.style.display = "none";
    });
    
    var l_streetAddress = document.getElementById("streetAddress");
    l_streetAddress.addEventListener("focus", function(event) {
        event.preventDefault();
        pstreetAddress.style.display = "inline";
    });
    l_streetAddress.addEventListener("blur", function(event) {
        event.preventDefault();
        pstreetAddress.style.display = "none";
    });
    
    var l_city = document.getElementById("city");
    l_city.addEventListener("focus", function(event) {
        event.preventDefault();
        pcity.style.display = "inline";
    });
    l_city.addEventListener("blur", function(event) {
        event.preventDefault();
        pcity.style.display = "none";
    });
    
    var l_province = document.getElementById("province");
    l_province.addEventListener("focus", function(event) {
        event.preventDefault();
        pprovince.style.display = "inline";
    });
    l_province.addEventListener("blur", function(event) {
        event.preventDefault();
        pprovince.style.display = "none";
    });
    
    var l_postalCode = document.getElementById("postalCode");
    l_postalCode.addEventListener("focus", function(event) {
        event.preventDefault();
        ppostalCode.style.display = "inline";
    });
    l_postalCode.addEventListener("blur", function(event) {
        event.preventDefault();
        ppostalCode.style.display = "none";
    });
    
    var l_phoneNumber = document.getElementById("phoneNumber");
    l_phoneNumber.addEventListener("focus", function(event) {
        event.preventDefault();
        pphoneNumber.style.display = "inline";
    });
    l_phoneNumber.addEventListener("blur", function(event) {
        event.preventDefault();
        pphoneNumber.style.display = "none";
    });
    
    var l_email = document.getElementById("email");
    l_email.addEventListener("focus", function(event) {
        event.preventDefault();
        pemail.style.display = "inline";
    });
    l_email.addEventListener("blur", function(event) {
        event.preventDefault();
        pemail.style.display = "none";
    });
    
    var l_depDate = document.getElementById("depDate");
    l_depDate.addEventListener("focus", function(event) {
        event.preventDefault();
        pdepDate.style.display = "inline";
    });
    l_depDate.addEventListener("blur", function(event) {
        event.preventDefault();
        pdepDate.style.display = "none";
    });

    var l_retDate = document.getElementById("retDate");
    l_retDate.addEventListener("focus", function(event) {
        event.preventDefault();
        pretDate.style.display = "inline";
    });
    l_retDate.addEventListener("blur", function(event) {
        event.preventDefault();
        pretDate.style.display = "none";
    });

    
    
    // Code to deal with the Reset and Submit buttons.

    // Declare variables to obtain the button elements.
    var regReset  = document.getElementById("myResetBtn");
    var regSubmit = document.getElementById("mySubmitBtn");
   
    // Add 'click' event listener to Reset button.
    regReset.addEventListener("click", function(event) {
        event.preventDefault();
        var cnfReset = confirm("Are you sure you want to reset?"); // Make sure user wants to reset.
        if (cnfReset) {
            // Proceed with reset code
            // Diagnostic message for testing: console.log("Proceed with reset code.");
            document.infoForm.reset();
        }
        else {
            alert("Will not reset the information fields.");
            console.log("Default behaviour blocked"); 
        }
    });

    // Add 'click' event listener to Submit button.
    regSubmit.addEventListener("click", function(event) {
        event.preventDefault();
        var cnfReset = confirm("Are you sure you want to submit?");
        if (cnfReset) {
            if (checkForm()) {
                //Proceed with submit code.
                console.log("Proceed with submit code.");
                document.infoForm.submit();
            }
            else {
                alert("Did not submit - all information fields must be filled out.");
                // Console diagnostic message: console.log("Default behaviour blocked");
                // Console diagnostic message: console.log("Some input fields missing."); 
            }
        }
        else {
            alert("Default behaviour blocked");
            console.log("Default behaviour blocked"); 
        }
        
    });

    // Function to check if each of the information fields has been filled out.
    // If not filled, function returns 'false'.
    // Also, function checks if postal code input is formatted correctly.
    // if not formatted properly, an alert message is sent to the user.
    function checkForm () {
        if (!(document.infoForm.lastName.value)) {
            console.log((document.infoForm.lastName));
            return false;
        }
        if (!(document.infoForm.firstName.value)) {
            return false;
        }
        if (!document.infoForm.streetAddress.value) {
            return false;
        }
        if (!document.infoForm.city.value) {
            return false;
        }
        if (!document.infoForm.province.value) {
            return false;
        }
        if (!document.infoForm.postalCode.value) {
            return false;
        }
        // Use a regular expression to check that postal code is in 'A1A 1A1' format.
        else if (!(/^[A-Z]\d[A-Z] ?\d[A-Z]\d$/.test(document.infoForm.postalCode.value))) {
            console.log('Postal code in wrong format');
            alert("Postal code should be in 'A1A 1A1' format");
            return false;
        }
        if (!document.infoForm.phoneNumber.value) {
            return false;
        }
        if (!document.infoForm.email.value) {
            return false;
        }
        if (!document.infoForm.depDate.value) {
            return false;
        }
        if (!document.infoForm.retDate.value) {
            return false;
        }
        return true;
    }
}