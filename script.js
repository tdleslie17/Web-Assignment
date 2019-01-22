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