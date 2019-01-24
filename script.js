var pageBody = document.getElementsByTagName('body')[0];

if (pageBody.id == 'mainPg') {
    console.log("I'm on the main page now!");
}


if (pageBody.id == "contactPg") {
    console.log("I'm on the contact page now!");

    var newPara  = document.createElement('p');
    var newText  = document.createTextNode('Here is some more text.');
    var newText1 = document.createTextNode('Image.');
    var newText2 = document.createTextNode('Description.');
    var newText3 = document.createTextNode('Here is some more text.');

    newPara.appendChild(newText);
    var newTable = document.createElement('table');
    var newHeader1   = document.createElement('th');
    var newHeader2   = document.createElement('th');
    var newData1     = document.createElement('td');
    var newData2     = document.createElement('td');
    newHeader1.textContent = 'Image';
    newHeader2.textContent = 'Description';
    var newRow1   = document.createElement('tr');
    newRow1.appendChild(newHeader1);
    newRow1.appendChild(newHeader2);
    newTable.appendChild(newRow1);
    newTable.style.columnWidth = '20%';

    var newImg1  = document.createElement('img');
    newImg1.src  ="Images/185489-unsplash-edit.jpg";
    var newImg2  = document.createElement('img');
    newImg2.src  ="Images/465339-unsplash-edit.jpg";
    var newImg3  = document.createElement('img');
    newImg3.src  ="Images/jason-zeis-328638-unsplash.jpg";
    var imgArr   = [newImg1, newImg2, newImg3];
    var desArr   = ['Turks and Caicos', 'Bahamas', 'Greece'];

    var newRow2   = document.createElement('tr');
    var newData3  = document.createElement('td');
    var newData4  = document.createElement('td');
    newData3.appendChild(newImg1);
    newData4.textContent = desArr[0];
    newRow2.appendChild(newData3);
    newRow2.appendChild(newData4);
    newTable.appendChild(newRow2);

    var newRow3   = document.createElement('tr');
    var newData4  = document.createElement('td');
    var newData5  = document.createElement('td');
    newData4.appendChild(newImg2);
    newData5.textContent = desArr[1];
    newRow3.appendChild(newData4);
    newRow3.appendChild(newData5);
    newTable.appendChild(newRow3);

    var newRow4   = document.createElement('tr');
    var newData6  = document.createElement('td');
    var newData7  = document.createElement('td');
    newData6.appendChild(newImg3);
    newData7.textContent = desArr[2];
    newRow4.appendChild(newData6);
    newRow4.appendChild(newData7);
    newTable.appendChild(newRow4);
   
    var divElem = document.getElementsByTagName('div')[0];
    divElem.appendChild(newTable);


}





if (pageBody.id == 'regPg') {

    console.log("I'm on the registration page now!");

    var regReset  = document.getElementById("myResetBtn");
    var regSubmit = document.getElementById("mySubmitBtn");

    
    regReset.addEventListener("click", function(event) {
        event.preventDefault();
        var cnfReset = confirm("Are you sure you want to reset?");
        if (cnfReset) {
            //Proceed with reset code.
            console.log("Proceed with reset code.");
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
            //Proceed with submit code.
            console.log("Proceed with submit code.");
        }
        else {
            alert("Default behaviour blocked");
            console.log("Default behaviour blocked"); 
        }
    });
}

