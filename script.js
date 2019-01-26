var pageBody = document.getElementsByTagName('body')[0];

if (pageBody.id == 'mainPg') {
    console.log("I'm on the main page now!");
}


if (pageBody.id == "contactPg") {
    console.log("I'm on the contact page now!");

    var newText1 = document.createTextNode('Images');
    var newText2 = document.createTextNode('Descriptions');

    var newTable = document.createElement('table');
    newTable.style.width       = "100%";
 /*   netTable.style.columnWidth = "40%";*/
    var newHeader1   = document.createElement('th');
    var newHeader2   = document.createElement('th');

/*    newHeader1.textContent = 'Image';
    newHeader2.textContent = 'Description'; */
    newHeader1.appendChild(newText1);
    newHeader2.appendChild(newText2);

    var newRow1   = document.createElement('tr');
 /*   newRow1.style.columnWidth = "40%"; */
    newRow1.appendChild(newHeader1);
    newRow1.appendChild(newHeader2);
    newTable.appendChild(newRow1);


    var imgArr   = ["Images/185489-unsplash-edit.jpg", "Images/465339-unsplash-edit.jpg", "Images/jason-zeis-328638-unsplash.jpg","Images/300912-unsplash-edit.jpg"];
    var desArr   = ['Turks and Caicos', 'Bahamas', 'Greece', 'Getaway'];
    var urlArr   = ['https://www.tripadvisor.ca/Tourism-g147395-Turks_and_Caicos-Vacations.html', 'https://www.bahamas.com/',
                    'http://www.visitgreece.gr/', 'https://www.westjet.com/en-ca/index'];

    for (let i = 0; i < imgArr.length; i++) {
        var newRow    = document.createElement('tr');
        var newData1  = document.createElement('td');
        var newData2  = document.createElement('td');

        var newImg    = document.createElement('img');
        newImg.src    = imgArr[i];

        newImg.addEventListener("click", function(event) {
            var temp_window = window.open(urlArr[i]);
            console.log(urlArr[i]);
            setTimeout(closeWindow, 5000);
            function closeWindow() {
                temp_window.close();
            }
        });
        newData1.appendChild(newImg);
        newData2.textContent = desArr[i];
        newRow.appendChild(newData1);
        newRow.appendChild(newData2);
        newTable.appendChild(newRow);
        
        function closeWindow() {
            temp_window.close();
        }
    }    
    var divElem = document.getElementsByTagName('div')[1];
    divElem.appendChild(newTable);
}

if (pageBody.id == 'regPg') {
    console.log("I'm on the registration page now!");
    //Set up variables for form validation code block
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

    //Code for validation of user information fields
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

    var regReset  = document.getElementById("myResetBtn");
    var regSubmit = document.getElementById("mySubmitBtn");
   
    regReset.addEventListener("click", function(event) {
        event.preventDefault();
        var cnfReset = confirm("Are you sure you want to reset?");
        if (cnfReset) {
            //Proceed with reset code.
            console.log("Proceed with reset code.");
            document.infoForm.reset();
        }
        else {
            alert("Default behaviour blocked");
            console.log("Default behaviour blocked"); 
        }
    });
    
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
                alert("Default behaviour blocked");
                console.log("Default behaviour blocked"); 
            }
        }
        else {
            alert("Default behaviour blocked");
            console.log("Default behaviour blocked"); 
        }
    });
    function checkForm () {
        if (!(document.infoForm.lastName)) {
            return false;
        }
        if (!(document.infoForm.firstName)) {
            return false;
        }
        if (!document.infoForm.streetAddress) {
            return false;
        }
        if (!document.infoForm.city) {
            return false;
        }
        if (!document.infoForm.province) {
            return false;
        }
        if (!document.infoForm.postalCode) {
            return false;
        }
        /*else if !(/^[A-Z]\d[A-Z]?\d[A-Z]\d$/.test(!document.infoForm.lastName.value)) {
            console.log('Postal code in wrong format');
            return false;
    }*/
        if (!document.infoForm.phoneNumber) {
            return false;
        }
        if (!document.infoForm.email) {
            return false;
        }
        if (!document.infoForm.depDate) {
            return false;
        }
        if (!document.infoForm.retDate) {
            return false;
        }
        return true;
    }
}