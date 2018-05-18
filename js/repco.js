//$(document).ready(function () {
//
//    $("#classpresidentsstuff").hide();
//    $("#electionstuff").hide();
//    $("#membersstuff").hide();
//    $("#dormpresidentsstuff").hide();
//
//    $("#classpresidents").click(function () {
//        $("#classpresidentsstuff").toggle();
//    });
//
//    $("#election").click(function () {
//        $("#electionstuff").toggle();
//    });
//    $("#members").click(function () {
//        $("#membersstuff").toggle();
//    });
//    $("#dormpresidents").click(function () {
//        $("#dormpresidentsstuff").toggle();
//    });
//});

var classpresidents = document.getElementById("classpresidents")
var classpresidentsstuff = document.getElementById("classpresidentsstuff")

var elections = document.getElementById("elections")
var electionsstuff = document.getElementById("electionsstuff")

var members = document.getElementById("members")
var membersstuff = document.getElementById("membersstuff")

var dormpresidents = document.getElementById("dormpresidents")
var dormpresidentsstuff = document.getElementById("dormpresidentsstuff")

var songmistress = document.getElementById("songmistress")
var songmistressstuff = document.getElementById("songmistressstuff")

var other = document.getElementById("other")
var otherstuff = document.getElementById("otherstuff")


var classReset = 0;
classpresidents.addEventListener('click', function() {
    if (classReset == 0) { //not yet clicked
        classpresidentsstuff.style.display = "block";
        document.getElementsByClassName("down")[0].style.transform = "rotate(-135deg)";
         document.getElementsByClassName("down")[0].style.transition = "transform .5s linear";
        classReset = 1;
        

    } else {
        classpresidentsstuff.style.display = "none";
         document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        classReset = 0;
    }
});

var dormReset = 0;
dormpresidents.addEventListener('click', function() {
    if (dormReset == 0) { //not yet clicked
        dormpresidentsstuff.style.display = "block";
         document.getElementsByClassName("down")[1].style.transform = "rotate(-135deg)";
         document.getElementsByClassName("down")[1].style.transition = "transform .5s linear";
        dormReset = 1;
//
    } else {
        dormpresidentsstuff.style.display = "none";
         document.getElementsByClassName("down")[1].style.transform = "rotate(45deg)";
        dormReset = 0;
    }
});


var electionReset = 0;
elections.addEventListener('click', function() {
    if (electionReset == 0) { //not yet clicked
        electionsstuff.style.display = "block";
        document.getElementsByClassName("down")[2].style.transform = "rotate(-135deg)";
         document.getElementsByClassName("down")[2].style.transition = "transform .5s linear";
        electionReset = 1;
//
    } else {
        electionsstuff.style.display = "none";
         document.getElementsByClassName("down")[2].style.transform = "rotate(45deg)";
        electionReset = 0;
    }
});


var memberReset = 0;
members.addEventListener('click', function() {
    if (memberReset == 0) { //not yet clicked
        membersstuff.style.display = "block";
         document.getElementsByClassName("down")[3].style.transform = "rotate(-135deg)";
         document.getElementsByClassName("down")[3].style.transition = "transform .5s linear";
        memberReset = 1;
//
    } else {
        membersstuff.style.display = "none";
         document.getElementsByClassName("down")[3].style.transform = "rotate(45deg)";
        memberReset = 0;
    }
});





var songReset = 0;
songmistress.addEventListener('click', function() {
    if (songReset == 0) { //not yet clicked
        songmistressstuff.style.display = "block";
         document.getElementsByClassName("down")[4].style.transform = "rotate(-135deg)";
         document.getElementsByClassName("down")[4].style.transition = "transform .5s linear";
        songReset = 1;
//
    } else {
        songmistressstuff.style.display = "none";
         document.getElementsByClassName("down")[4].style.transform = "rotate(45deg)";
        songReset = 0;
    }
});


var otherReset = 0;
other.addEventListener('click', function() {
    if (otherReset == 0) { //not yet clicked
        otherstuff.style.display = "block";
         document.getElementsByClassName("down")[5].style.transform = "rotate(-135deg)";
         document.getElementsByClassName("down")[5].style.transition = "transform .5s linear";
        otherReset = 1;
//
    } else {
        otherstuff.style.display = "none";
         document.getElementsByClassName("down")[5].style.transform = "rotate(45deg)";
        otherReset = 0;
    }
});


