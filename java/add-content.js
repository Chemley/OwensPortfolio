function myHue () {
  var myColor = "blue"
    // Get the text of the input field with id="shades"
    document.getElementById("shades");

    // If x is Not a Number or less than one or greater than 10
    if (myColor === 'blue') {
        text = "Blue is my favroite color too!";
    } else {
        text = myColor + " is not my favroite color. Mine is blue."
    }
    document.getElementById("demo").innerHTML = text;
}
