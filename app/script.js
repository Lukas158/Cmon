function aFunction() {
    var elmnt = document.getElementById("pricing");
    elmnt.scrollIntoView({behavior: "smooth", block: "start", });
}
function bFunction() {
    var elmnt = document.getElementById("features");
    elmnt.scrollIntoView({behavior: "smooth", block: "start", });
}
function cFunction() {
    var elmnt = document.getElementById("about");
    elmnt.scrollIntoView({behavior: "smooth", block: "center", alignTo: "true", });
}
function dFunction() {
    var elmnt = document.getElementById("reviews");
    elmnt.scrollIntoView({behavior: "smooth", block: "start", });
}
function eFunction() {
    var elmnt = document.getElementById("contact");
    elmnt.scrollIntoView({behavior: "smooth", block: "start", });
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }




