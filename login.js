function checkCreds(){
    console.log("checkCreds() started");
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNumb = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName;
    
    console.log("Full name is " + fullName)

    if(fullName.length > 20 || fullName.length < 2){
        document.getElementById("loginStatus").innerHTML = 
            "Invaled Full Name! Please submit a valid Full Name";
    }else if(badgeNumb > 999 || badgeNumb < 0){
        document.getElementById("loginStatus").innerHTML = 
            "Invalid Badege Number! Please submit a valid Badge Number";
    }else {
        alert("Welcome, " + fullName)
        location.replace("UATSpacePage.html")
    }
}