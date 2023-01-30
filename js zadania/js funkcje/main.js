let dzialanie;
let skladnik = 0;
let skladnik1 = 0;
let skladnik2 = 0;
let wynik;

function addZero(){
    document.getElementById("pole").innerHTML += 0;
    skladnik1 = document.getElementById("pole").innerHTML;
}
function addOne(){
    document.getElementById("pole").innerHTML += 1;
    skladnik1 = document.getElementById("pole").innerHTML;
}
function addTwo(){
    document.getElementById("pole").innerHTML += 2;
    skladnik1 = document.getElementById("pole").innerHTML;
}
function addThree(){
    document.getElementById("pole").innerHTML += 3;
    skladnik1 = document.getElementById("pole").innerHTML;
}
function addFour(){
    document.getElementById("pole").innerHTML += 4;
    skladnik1 = document.getElementById("pole").innerHTML;
}
function addFive(){
    document.getElementById("pole").innerHTML += 5;
    skladnik1 = document.getElementById("pole").innerHTML;
}
function addSix(){
    document.getElementById("pole").innerHTML += 6;
    skladnik1 = document.getElementById("pole").innerHTML;
}
function addSeven(){
    document.getElementById("pole").innerHTML += 7;
    skladnik1 = document.getElementById("pole").innerHTML;
}
function addEight(){
    document.getElementById("pole").innerHTML += 8;
    skladnik1 = document.getElementById("pole").innerHTML;
}
function addNine(){
    document.getElementById("pole").innerHTML += 9;
    skladnik1 = document.getElementById("pole").innerHTML;
}

// function toNumber(){
//     skladnik1 = Number(skladnik1);
// }

// let intervalChanger = 1;
// setInterval(toNumber, intervalChanger);

function cReset(){
    document.getElementById("pole").innerHTML = "&#8203;";
    skladnik1 = 0;
}

function backspace(){
    skladnik1 = skladnik1.slice(0, -1);
    document.getElementById("pole").innerHTML = skladnik1; 
}
function poleCheck(){
    if(skladnik1 == '' || 0){
        cReset();
    }
}
setInterval(poleCheck, 1);

function changeSymbol(){
    skladnik1 = Number(skladnik1);
    skladnik1 = -skladnik1;
    skladnik1 = String(skladnik1);
    document.getElementById("pole").innerHTML = skladnik1;  
}

function nwspaceDelete(){
    if (String(skladnik1).charAt(0) == '​' ) {
    skladnik1 = skladnik1.slice(1, skladnik1.length)
    document.getElementById("pole").innerHTML = skladnik1; 
    }
}
setInterval(nwspaceDelete, 1);
function coma() {
    document.getElementById("pole").innerHTML += '.';
}
function dodawanie(){
    skladnik = skladnik1;
    cReset();
    dzialanie = 'dodawanie';
}
function odejmowanie(){
    skladnik = skladnik1;
    cReset();
    dzialanie = 'odejmowanie';
}
function dzielenie(){
    skladnik = skladnik1;
    cReset();
    dzialanie = 'dzielenie';
}
function mnozenie(){
    skladnik = skladnik1;
    cReset();
    dzialanie = 'mnozenie';
}
function pierwiastkowanie(){
    wynik = Math.sqrt(skladnik1);
    document.getElementById("pole").innerHTML = wynik;
    skladnik1 = document.getElementById("pole").innerHTML;
}
function potegowanie() {
    wynik = skladnik1 ** 2;
    document.getElementById("pole").innerHTML = wynik;
    skladnik1 = document.getElementById("pole").innerHTML;
}

function answer(){
    skladnik2 = skladnik1;
    if(dzialanie == 'dodawanie' ){
        wynik = Number(skladnik) + Number(skladnik2);
    } else if(dzialanie == 'odejmowanie' ){
        wynik = Number(skladnik) - Number(skladnik2);
    } else if(dzialanie == 'dzielenie' ){
        wynik = Number(skladnik) / Number(skladnik2);
    } else if(dzialanie == 'mnozenie' ){
        wynik = Number(skladnik) * Number(skladnik2);
    }
    document.getElementById("pole").innerHTML = wynik;
}