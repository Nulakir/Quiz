"use strict";

var antwoordenLijst = [
    ["block", "inline-block", "inline", "none"],
    ["Cascading Style Sheet", "Cascading Sheet Style", "Cascading Slim Style", "Cascading Style Slim"],
    ["&ltDOCTYPE! html&gt", "&lthtml !DOCTYPE&gt", "&lt!DOCTYPE html&gt", "&lthtml DOCTYPE!&gt"],
    ["&ltol&gt", "&ltli&gt", "&ltul&gt", "&ltlo&gt"],
    ["&ltol>", "&ltli&gt", "&ltul&gt", "&ltlo&gt"],
    ["HyperTest Markup Language", "HyperTest Made Language", "HyperText Markup Language", "HyperText Markup League"],
    ["p", ".p", "#p", ":p"],
    ["Content", "Padding", "Border", "Margin"],
    ["Static", "Fixed", "Sticky", "Absolute"],
    ["jeBentGoedBezig", "JebentGoedbezig", "jebentgoedbezig", "JebentgoedbeziG"],
    ["x==y", "x===x", "x==x", "x===y"],
    ["Function () {", "Function name() {", "Name function() {", "Function"],
    ["HTML", "CSS", "Javascript", "Python"],
    ["var buttonAction", "var Buttonaction", "var' ButtonAction", "var-buttonAction"],
    [".id", "#id", "-id", "id"],
    [".id", "#id", "-id", "id"],
    ["nextQuestion.return;", "nextQuestion[];", "nextQuestion();", "return NextQuestion"],
    ["Application Programming Interface", "All Programming Information", "All Process Inside", "All Process Interface"],
    ["&ltscript aref= 'xxx.js'&gt", "&ltscript src= 'xxx.js'&gt", "&ltscript= 'xxx.js'&gt", "&ltscript href= 'xxx.js'&gt"],
    ["if i === 4", "if i = 4", "if(i===4)", "if i == 4"],
];

var vragen = [
    ["Welke functie moet ik gebruiken als ik een aantal block kolommen naast elkaar wil hebben?"],
    ["Waar staat CSS voor?"],
    ["Hoe start je een HTML document?"],
    ["Met welk element kan ik bolletjes naast een lijstje krijgen?"],
    ["Met welk element kan ik cijfers naast een lijstje krijgen?"],
    ["Waar staat HTML voor?"],
    ["Hoe selecteer je een elementnaam in CSS?"],
    ["Hoe heet de buitenste ring in het Box model?"],
    ["Welke Position moet ik gebruiken als ik een text in het beeld wil die in beeld blijft als ik scroll?"],
    ["Welke text is in de Lower Camel Case geschreven?"],
    ["Welke  van de onderstaande waarden is identiek?"],
    ["Hoe maak je een functie?"],
    ["Waar doe je de styling mee?"],
    ["Wat is de goede Javascript variable?"],
    ["Welke code is goed voor het noteren van een id in CSS?"],
    ["Welke code is goed voor het noteren van een class in CSS?"],
    ["Hoe call je een functie in lowerCamelCase in Javascript?"],
    ["Waar staat API voor?"],
    ["Welke code is correct on een externe script in te voeren"],
    ["Hoe schrijf je een if statement?"],
];

//goede antwoorden
var goedeAntwoorden = [1, 0, 2, 2, 0, 2, 0, 3, 2, 0, 1, 1, 1, 0, 1, 0, 2, 0, 1, 2];

//welke vraag ben ik
var welkeVraag = 0;

//aantal goede antwoorden
var aantalGoedeAntwoorden = 0;

var studentNummer = document.getElementById("studentnummer");
var studentNummerCheck = document.getElementById("inloggen");
var studentNummerZien = document.getElementById('studentNummerShow');

//button functies
function addButtonActions(){
    var startButton = document.getElementById('button-start');
    var questionsButton = document.getElementById('button-questions');

  
    
    startButton.addEventListener("click", function () {
        showStartPage();
    });
    questionsButton.addEventListener("click", function () {
        showQuestionsPage();
    });
    document.getElementById("a0").addEventListener("click", function () { check(0); });
    document.getElementById("a1").addEventListener("click", function () { check(1); });
    document.getElementById("a2").addEventListener("click", function () { check(2); });
    document.getElementById("a3").addEventListener("click", function () { check(3); });
    document.getElementById("Volgende").addEventListener("click", function () { nextVraag(); });

}

studentNummerCheck.addEventListener("click", function () {
    if (studentNummer.value) {
    checkStudent(studentNummer.value);
    }
    else {
        alert('Vul een geldig studentnummer in');
    }
});


//de antwoorden waar je uit kan kiezen
function showVragen() {
    document.getElementById('devraag').innerHTML = vragen[welkeVraag];
    document.getElementById('vraagCounter').innerHTML = welkeVraag + 1;
    var antwoord = antwoordenLijst[welkeVraag];

    document.getElementById("optie0").innerHTML = antwoord[0];
    document.getElementById("optie1").innerHTML = antwoord[1];
    document.getElementById("optie2").innerHTML = antwoord[2];
    document.getElementById("optie3").innerHTML = antwoord[3];
}


document.getElementById("Volgende").disabled = true;

//naar de volgende vraag gaan +1
function nextVraag() {
    document.getElementById("Volgende").disabled = true;
    
    if (welkeVraag != 19) {
        for (var i = 0; i < 4; i++) {
            document.getElementById("a" + i).disabled = false;
            document.getElementById("a" + i).style.backgroundColor = "rgb(80, 235, 132)";
        }
        welkeVraag++;
        showVragen();
    }
    else {
        showEindPage();
    }
}


//controleren en aantal goede antwoorden
function check(kies) {
    document.getElementById("a" + goedeAntwoorden[welkeVraag]).style.backgroundColor = "green";
    if (kies === goedeAntwoorden[welkeVraag]){
        aantalGoedeAntwoorden++;
        document.getElementById('vragenGoed').innerHTML = 'aantal antwoorden goed:' + aantalGoedeAntwoorden;
    } else {
        document.getElementById("a" + kies).style.backgroundColor = 'red';
    }
    for (var i = 0; i < 4; i++) {
        document.getElementById("a" + i).disabled = true;
        
    }
    document.getElementById("Volgende").disabled = false;
}


/**
 *
 */

/**
 * Add actions to page buttons 
 */


/**
 * Hide all pages
 */
function hideAllPages() {
    var startPage = document.getElementById('page-start');
    var questionsPage = document.getElementById('page-questions');
    var eindPage = document.getElementById('eindpage');
    var studentPage = document.getElementById('nummerPage');

    studentPage.style.display = 'none';
    startPage.style.display = 'none';
    questionsPage.style.display = 'none';
    eindPage.style.display = 'none';
}

/**
 * Show start page
 */

 function inlogPage() {
     var page = document.getElementById('nummerPage');
     hideAllPages();

     page.style.display = 'block';



 }


function showStartPage() {
    var page = document.getElementById('page-start');

    hideAllPages();

    page.style.display = 'block';

    console.info('Je bent nu op de startpagina');
}

/**
 * Show questions page
 */
function showQuestionsPage() {
    var page = document.getElementById('page-questions');

    hideAllPages();
    showVragen();

    page.style.display = 'block';

    studentNummerZien.innerHTML = "Studentnummer: " + studentNummer.value;

    /*
    knoppen();
    */

}

function showEindPage() {
    var page = document.getElementById("eindpage");
    var eindScore = document.getElementById("resultaat");
    eindScore.innerHTML = "Aantal antwoorden goed: " + aantalGoedeAntwoorden;


    hideAllPages();

    page.style.display = 'block';

}

/**
 * Check student number using the API
 */
function checkStudent(number) {
    var xHttp = new XMLHttpRequest();
    xHttp.onreadystatechange = function () {
        if (xHttp.readyState == XMLHttpRequest.DONE) {
            var response = JSON.parse(xHttp.response);
            if (xHttp.status == 200) {
                studentIdentificationSucces(response);
            } else {
                studentIdentificationFailed(response);
            }
        }
    };
    xHttp.onerror = function () {
        studentIdentificationFailed(xHttp.statusText);
    };
    xHttp.open("GET", "https://quiz.clow.nl/v1/student/" + number, true);
    xHttp.send();
}

/**
 * Student is successfully identified
 */
function studentIdentificationSucces(student) {
    console.info(student); // Een Javascript-object met studentnummer, voornaam en achternaam

hideAllPages();   

showStartPage();


}





/**
 * Student number is incorrect
 */
function studentIdentificationFailed(errorMessage) {
    console.error(errorMessage);
    
// Schrijf hier de code die uitgevoerd moet worden als het studentnummer NIET klopt
window.alert("vul een juist studentnummer in");

}



// Initialize
addButtonActions();
inlogPage();
