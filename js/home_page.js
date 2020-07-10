function myFunction() {
    var i = document.getElementById("myTopnav");
    if (i.className === "topNavBar") {
      i.className += " responsive";
    } else {
      i.className = "topNavBar";
    }
  }