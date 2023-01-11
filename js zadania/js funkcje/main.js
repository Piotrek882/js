let wynik = 0;
function addZero(){
    document.getElementById("pole").innerHTML += 0;
    wynik = document.getElementById("pole").innerHTML;
}
function addOne(){
    document.getElementById("pole").innerHTML += 1;
    wynik = document.getElementById("pole").textContent;
}
function addTwo(){
    document.getElementById("pole").innerHTML += 2;
    wynik = document.getElementById("pole").innerHTML;
}
function addThree(){
    document.getElementById("pole").innerHTML += 3;
    wynik = document.getElementById("pole").innerHTML;
}
function addFour(){
    document.getElementById("pole").innerHTML += 4;
    wynik = document.getElementById("pole").innerHTML;
}
function addFive(){
    document.getElementById("pole").innerHTML += 5;
    wynik = document.getElementById("pole").innerHTML;
}
function addSix(){
    document.getElementById("pole").innerHTML += 6;
    wynik = document.getElementById("pole").innerHTML;
}
function addSeven(){
    document.getElementById("pole").innerHTML += 7;
    wynik = document.getElementById("pole").innerHTML;
}
function addEight(){
    document.getElementById("pole").innerHTML += 8;
    wynik = document.getElementById("pole").innerHTML;
}
function addNine(){
    document.getElementById("pole").innerHTML += 9;
    wynik = document.getElementById("pole").innerHTML;
}

// function toNumber(){
//     wynik = Number(wynik);
// }

// let intervalChanger = 1;
// setInterval(toNumber, intervalChanger);

function cReset(){
    document.getElementById("pole").innerHTML = "&#8203;";
}

function backspace(){
    wynik = wynik.slice(0, -1);
    document.getElementById("pole").innerHTML = wynik; 
}
function poleCheck(){
    if(wynik == '' || 0){
        cReset();
    }
}
setInterval(poleCheck, 1);

function minus(){
    document.getElementById("pole").innerHTML += "-";
}

function changeSymbol(){
    wynik = Number(wynik);
    wynik = -wynik;
    wynik = String(wynik);
    document.getElementById("pole").innerHTML = wynik;  
}

function answer(){

}