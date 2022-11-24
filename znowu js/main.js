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

////////////////////////////////////// pętle //////////////////////////////////////////////
// Pętla opiera się na sprawdzeniu warunku - wykonujemy blok kodu tyle razy ile warunek jest warunek (jest albo prawdziwy, albo nie)
// Może się ona wykonywać: i w nieskończoność, aleteż wcale
// Może być wykonywana wielokrotnie
// Można ja wykonywa na tablicy, czyli obiekcie

// I. Pętla for
/* 

definicja: for (inicjalizacja ieratora; warunek; zwiększenie iteratora){
    blok kodu - konkatenacja;
}
// inicjalizacja iteratora - następuje w całym procesie tylko raz

*/

// Przykład

// for (let i = 0; i <=2; i++){
//     console.log("wyświetlenie " + i);
// }

// przykład 2

// for (let i = 0; "a"; i++){
//     console.log("wyświetlenie " + i);
// }

// pętla nieskończona - warunek cały czas prawdziwy

// wykonanie kodu - blok kodu. Przy fałszywym warunku program wychodzi z pętli

// for (let i = 0; i > 10; i++){
//     console.log("wyświetlenie " + i);
// }

// iterator - ...

// druga metoda zapisu for

// let i = 0;

// for (; i < 10;){
//     console.log("wyświetlenie " + i);
//     i++;
// }

// zapis przypomina while, ale trzeba dać dwa średniki

// for (let i = 0; i < 10; i+=2 ) {
//   console.log("wyświetlenie " + i);
// }

// II. Pętla while
//  szablon 
/*

while (warunek) {
    blok kodu    
}

a)

while (true) {
    console.log("działa")
}

pętla jest nieskończona ^

b)

while (false) {
    console.log("działa")
}

pętla nie wykona się ani razu ^


c)

while (let i = 0; i < 10; i+= 2) {
    console.log("wyswietlanie" + i);
}

pętla wykona się określoną ilość razy ^

let number = 0;

while ( number < 10) {
    number++;
    console.log(number);
}

pętla wykona się określoną ilość razy ^

let money = 2200;

while (money >= 1849) {

    console.log("Mam aż " + money + " złotych. Kupię PlayStation 5 Digital !!!");
    money -= 50;

}


let money = 2200;

while (money >= 1849) {

    console.log("Mam aż " + money + " złotych. Kupię PlayStation 5 Digital !!!");
    money -= 50;
    
}
alert(`za ${money} złotych, już PlayStation Digital nie kupię :(`);

*/

// Kolejny przykład
/*

let gasoline = 6;
let km = 0;

while (gasoline--) {
    km += 18;
    console.log("Przejechaliśmy " + km + " kilometrów. Zostało nam jeszcze " + gasoline + "litrów paliwa.")
    if (gasoline == 0) {
    console.log("Nie masz juz bęzyny. Koniec drogi.")
}
}

*/

// III. Pętla  do while
// Gdyby warunek by prawdziwy to petla byłaby nieskończona
// let study = "nie jestem chory";

// do {
//     console.log("Idę do szkoły");
// } while (study === true);

// pętla w pętli
// for (let i = 0; i < 3; i++){
//     for (let j = 0; j < 10; j++){
//         console.log(`zmienna i czyli ${i} pomnożona przez zmienną j czyli ${j} daje wynik ${i * j}`)
//     }
// }

// for (let i = 0; i < 3; i++){
//     for (let j = 0; j > 10; j++){ // nie wykona sie ani razu, warunek nie został spełniony
//         console.log(`zmienna i czyli ${i} pomnożona przez zmienną j czyli ${j} daje wynik ${i * j}`)
//     }
// }

// IV. Pętla na tablicy 

// const userAge = [19, 18, 15, 45, 34, 33, 25]

// for (let i = 0; i < userAge.length; i++){
//     console.log(`użytkownik o indeksie ${i} jest w wieku ${userAge[i]}`)
// }

// inny sposób:
// console.log('użytkownik o indexie' + i + 'jest w wieku' + userAge[i]);

// zaczynam index od 1 dodając i+1  >>>>>

// const userAge = [19, 18, 15, 45, 34, 33, 25]

// for (let i = 0; i < userAge.length; i++){
//     console.log(`użytkownik o indeksie ${i + 1} jest w wieku ${userAge[i]}`)
// }

// kolejny przykład

// const userDateBirth = [2000, 1999, 2007, 2010, 2015];
// const currentYear = 2022;

// for (let i = 0; i < userDateBirth.length; i++){
//     const userAge = currentYear - userDateBirth[i];
//     console.log(userAge);
// }

// inny sposób
// console.log(`wiek użytkownika numer ${i +1} to {userAge}`)

// z imionami