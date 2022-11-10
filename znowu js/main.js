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