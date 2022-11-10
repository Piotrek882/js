//instrukcje warunkowe w js
// 1. zmienna + wartość
// 2. if (warunek){ciało warunku}

//////prykład 1

// const condition = 2;

// if (condition){
//     console.log(condition)
// }

//////prykład 2

// const condition = 0;

// if (condition){
//     console.log(condition)
// }
// //nic się nie wyświetla

//////prykład 3

// const condition = 0;

// if (!condition){
//     console.log(condition)
// }
//warunek spełniony

//////przykład 4 z funkcją alert
// const condition = 2;

// if (condition){
//     console.log("warunek został spełniony")
//     alert("uruchomione")
// }

//////przykład 5 z funkcją alert: print(cnsole.log) nie zostanie wyświetlony
// const condition = 2;

// if (condition){
//     alert("uruchomione")
//     console.log("warunek został spełniony")
// }

//////przykład 6
// const userName = "Izabela";

// if(userName){
//     console.log("Witaj " + userName + "!")
// }

//////przykład 7

// const userName = "";

// if(userName){
//     console.log("Witaj " + userName + "!")
// }

//////przykład 8 nieprawda, że pusty string
// const userName = "Izabela";

// if(userName !== "") {
//     console.log("Witaj " + userName + "!");
// }

////// przykła 9 nieprawda, że pusty string
// const userName = "";

// if(userName !== "") {
//     console.log("Witaj " + userName + "!");
// }

////// if else
// //przykład 10
// const hasTicket = true;
// const moreThan15Years = true;

// if (hasTicket && moreThan15Years){
//     console.log("wchodzisz na dyskotekę")
// }else{
//     console.log("nie wchodzisz");
// }

// //przykład 11
// const hasTicket = 0; //false
// const moreThan15Years = true;

// if (hasTicket && moreThan15Years){
//     console.log("wchodzisz na dyskotekę")
// }else{
//     console.log("nie wchodzisz");
// }

//przykład 12
// const hasTicket = 0; //false
// const moreThan15Years = true;
// const myFamily = false;

// if (hasTicket && moreThan15Years || myFamily){
//     console.log("wchodzisz na dyskotekę")
// }else{
//     console.log("nie wchodzisz");
// }

//przykład 13
// const hasTicket = 0; //false
// const moreThan15Years = true;
// const myFamily = false;

// if (hasTicket || moreThan15Years && myFamily){
//     console.log("wchodzisz na dyskotekę")
// }else{
//     console.log("nie wchodzisz");
// }

//za pomocą samych ifów przykład 13 - jak nie należy robić
// const age = 20;

// if(age <=9){
//     console.log("jesteś dieckiem")
// }
// if(age >9 && age <= 18){
//     console.log("jesteś nastolatkiem")
// }
// if(age > 18 && age <= 70){
//     console.log("jesteś dorosłym")
// }
// if(age>70){
//     console.log("jesteś doświadczony życiowo")
// }

//przykład 14
// const age = 20;

// if(age <=9 && age >=0 ){
//     console.log("jesteś dieckiem");
// }else if(age >9 && age <= 18){
//     console.log("jesteś nastolatkiem");
// }else if(age > 18 && age <= 70){
//     console.log("jesteś dorosłym");
// }else if(age>70){
//     console.log("jesteś doświadczony życiowo");
// }else {console.log("nie możesz mieć takiego wieku")}

//przykład 15
// const age = 20;

// if(age <=9 && typeof age === "number" ){
//     console.log("jesteś dieckiem");
// }else if( age <= 18 && age === "number"){
//     console.log("jesteś nastolatkiem");
// }else if(age <= 70 && age === "number"){
//     console.log("jesteś dorosłym");
// }else if(age>70 && age === "number"){
//     console.log("jesteś doświadczony życiowo");
// }else {console.log("nie możesz mieć takiego wieku")}

//przykład 16
// const guestName = "Izabela";
// const guestAge = 15;

// if(guestName) {
//     if(guestAge >= 16){
//     console.log("Witaj w klubie " + guestName)
// } else {
//     console.log("No niestety " + guestName + " nie wejdziesz")
// }} else {
//     console.log("nie wiem, jak masz na imię i nie wejdzesz!")
// }
/////////////////////////
// const guestName = "";
// const guestAge = 26;

// if(guestName =="") {
//     if(guestAge >= 16){
//     console.log("Witaj w klubie " + guestName)
// } else {
//     console.log("No niestety " + guestName + " nie wejdziesz")
// }} else {
//     console.log("nie wiem, jak masz na imię i nie wejdzesz!")
// }

//przykład 17

// const dayOfTheWeek = "środa";
// switch(dayOfTheWeek) {
//     case "poniedziałek":
//         console.log("dziś jest poniediałek");
//         break;
//     case "wtorek":
//         console.log("dziś jest wtorek")
//         break;
//     case "środa":
//         console.log("dziś jest środek")
//         break;
//     default:
//         console.log("nie mam pojęcia jaki jest dziś dzień")
//         break;
// }

// const dayOfTheWeek = "czwartek";
// switch(dayOfTheWeek) {
//     case "poniedziałek":
//         console.log("dziś jest poniediałek");
//         break;
//     case "wtorek":
//         console.log("dziś jest wtorek")
//         break;
//     case "środa":
//         console.log("dziś jest środek")
//         break;
//     default:
//         console.log("nie mam pojęcia jaki jest dziś dzień")
//         break;
// }

////// przykład 18 operator warunkowy (potrójny/trójkoway)

//a ? b : c;

//czyli warunek ? wykonaj mnie, jeśli warunek true : wykonaj mnie, jeśli warunek false 

// const score = 100;
// 20 == "20" && score ? console.log("wykonaj się, bo prawda") : console.log("wykonaj się, jesli warunek nie jest prawdziwy")

// false || true ? console.log ("prawda") : console.log ("fałsz");

// const score = 100
// score > 120 ? console.log ("prawda") : console.log ("fałsz");

// 0 || 1 ? console.log ("prawda") : console.log ("fałsz");

// console.log(1 > 10 ? 1 : 0);

////// przykład 19

// let gameResult = 0;
// let killedMonsters = 11;

// console.log(gameResult += killedMonsters > 10 ? 1 : 0;)

//////// przykład 20
// const playerName = "Warrior";
// console.log(` Witaj ${playerName ? playerName : "wojowniku"}`);