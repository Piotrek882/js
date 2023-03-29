let dzialanie;
let skladnik = 0;
let skladnik1 = 0;
let skladnik2 = 0;
let wynik;

document.getElementById("potegowanie").addEventListener("click", potegowanie);
document.getElementById("cReset").addEventListener("click", cReset);
document.getElementById("backspace").addEventListener("click", backspace);
document.getElementById("addOne").addEventListener("click", addOne);
document.getElementById("addTwo").addEventListener("click", addTwo);
document.getElementById("addThree").addEventListener("click", addThree);
document.getElementById("dzielenie").addEventListener("click", dzielenie);
document.getElementById("addFour").addEventListener("click", addFour);
document.getElementById("addFive").addEventListener("click", addFive);
document.getElementById("addSix").addEventListener("click", addSix);
document.getElementById("mnozenie").addEventListener("click", mnozenie);
document.getElementById("addSeven").addEventListener("click", addSeven);
document.getElementById("addEight").addEventListener("click", addEight);
document.getElementById("addNine").addEventListener("click", addNine);
document.getElementById("minus").addEventListener("click", odejmowanie);
document.getElementById("dodawanie").addEventListener("click", dodawanie);
document.getElementById("coma").addEventListener("click", coma);
document.getElementById("addZero").addEventListener("click", addZero);
document.getElementById("changeSymbol").addEventListener("click", changeSymbol);
document.getElementById("pierwiastkowanie").addEventListener("click", pierwiastkowanie);
document.getElementById("answer").addEventListener("click", answer);

window.addEventListener("keydown", (event)=>{
    switch(event.code){
        case "Digit1":
            addOne();
            break;
        case "Digit2":
            addTwo();
            break;
        case "Digit3":
            addThree();
            break;
        case "Digit4":
            addFour();
            break;
        case "Digit5":
            addFive();
            break;
        case "Digit6":
            addSix();
            break;
        case "Digit7":
            addSeven();
            break;
        case "Digit8":
            addEight();
            break;
        case "Digit9":
            addNine();
            break;
        case "Digit0":
            addZero();
            break;
        case "Slash":
            dzielenie();
            break;
        case "Minus":
            odejmowanie();
            break;
    }
});
window.addEventListener("keydown", (event)=>{
    switch(event.key){
        case "=":
            answer();
            break;
        case "+":
            dodawanie();
            break;
        case "Enter":
            answer();
            break;
        case ",":
            coma();
            break;
        case "c":
            cReset();
            break;
    }
})


function addZero(){
    document.getElementById("pole").textContent += 0;
    skladnik1 = document.getElementById("pole").textContent;
}
function addOne(){
    document.getElementById("pole").textContent += 1;
    skladnik1 = document.getElementById("pole").textContent;
}
function addTwo(){
    document.getElementById("pole").textContent += 2;
    skladnik1 = document.getElementById("pole").textContent;
}
function addThree(){
    document.getElementById("pole").textContent += 3;
    skladnik1 = document.getElementById("pole").textContent;
}
function addFour(){
    document.getElementById("pole").textContent += 4;
    skladnik1 = document.getElementById("pole").textContent;
}
function addFive(){
    document.getElementById("pole").textContent += 5;
    skladnik1 = document.getElementById("pole").textContent;
}
function addSix(){
    document.getElementById("pole").textContent += 6;
    skladnik1 = document.getElementById("pole").textContent;
}
function addSeven(){
    document.getElementById("pole").textContent += 7;
    skladnik1 = document.getElementById("pole").textContent;
}
function addEight(){
    document.getElementById("pole").textContent += 8;
    skladnik1 = document.getElementById("pole").textContent;
}
function addNine(){
    document.getElementById("pole").textContent += 9;
    skladnik1 = document.getElementById("pole").textContent;
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
    document.getElementById("pole").textContent = skladnik1; 
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
    document.getElementById("pole").textContent = skladnik1;  
}

function nwspaceDelete(){
    if (String(skladnik1).charAt(0) == '​' ) {
    skladnik1 = skladnik1.slice(1, skladnik1.length)
    document.getElementById("pole").textContent = skladnik1; 
    }
}
setInterval(nwspaceDelete, 1);
function coma() {
    document.getElementById("pole").textContent += '.';
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
    document.getElementById("pole").textContent = wynik;
    skladnik1 = document.getElementById("pole").textContent;
}
function potegowanie() {
    wynik = skladnik1 ** 2;
    document.getElementById("pole").textContent = wynik;
    skladnik1 = document.getElementById("pole").textContent;
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
    document.getElementById("pole").textContent = wynik;
}
