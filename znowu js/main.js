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

/* 
kolejny przykład

const guest = ["nauczyciel","programista","emeryt","sprzątaczka","sprzedawca"];

for (let i = 0; i < guest.length; i++){
    if(guest[i] === "nauczyciel"){
        console.log("nie ma już miejsca")
        }else if (guest[i] === "programista"){
            console.log("Ojej jaka szkoda nie ma już miejsca");
    }else {
        console.log("Witamy " + guest[i] + ", serdecznie zapraszamy")
    }
}

*/

// pętla for - of
//  (ES6) - nowy
// iteracja po wszystkich elementach
// i -> to konkretny element tablicy(za każdym razem wykonywany w petli )
// const za każdym razem jest czymś innym

// const colors = ["red", "green", "blue", "yellow"];

// for(const i of colors){
//     console.log(i);
// }


// kolejny przykład

// const colors = ["red", "green", "blue", "yellow"];

// for(const color of colors){
//     console.log("Mój ulubiony kolor to: " + color);
// }

////////////////////////////////////////////////// TABLICE /////////////////////////////////////////////////////
//  tablica to obiekt złożony, wbudowany - zatem ma właściwości i metody, uporzadkowany (kolejność jest ważna), ma indeks (liczony od zera)
// wystarczy wpisać [] i mamy tablicę
// tablicę przypisujemy do zmiennej, żeby nie znikła

// Przykład 1
// const nameList = ["Kasia", "Izabela", "Marek", "Dariusz"];
// 2. mozemy utworzyć pustą(nie koniecznie pustą) tablicę, a następnie podawać elementy przez odwołanie do ineksu
/*
const cityList = [];
cityList[0] = 'Gliwice';
cityList[1] = 'Warszawa';
*/

//  Tworzenie tablicy za pomocą kostruktora
// pamiętamy, że mamy: new String; new Number; new Boolean - tak możemy storzyć obiekt, odwzorowujący typ prosty - tworzenie pustej tablicy

// A. const items = []; // tworznie tablicy za pomoca literału pustej tablicy - Lepsze rozwiązanie
const items = [];
// B.
// const gameItems = new Array(); // Tworzenie za pomocą konstruktora pustej tablicy
// za pomocą słowa new tworzymy nowy obiekt i na nim wywołujemy funkcję konstruktora
// za pomocą konstruktora możemy podać argumenty
const colors = new Array("red", "blue");
colors[2] = "green"; // dodajemy trzeci element na drugim indeksie
// length - właściwość
// Powstała instancja tablicy o określonych właściwościach i metodach 
// instancja często określana jest mianem obiektu
// Sprawdzanie typu

console.log(typeof colors);

// Dlaczego zmienna const przy przypisaniu do tablica? // Ponieważ nie chcemy aby tablica została usunięta lub zniszczona
const myArrayConst = [];
let myArrayLet = [];

myArrayConst[0] = "pierwszy const";
myArrayLet[0] = "pierwszy let";

// myArrayConst = "coś innego"; //Błąd
myArrayLet = "cos innego"; // Brak błędu

// tablica może przechowywać praktycznie wszystko
const differentValues = ["string", {}, ["jeden", "dwa"], null];

// Odwołanie do elementów tablicy
// const nameList = ["Kasia", "Izabela", "Marek", "Dariusz"];

const popularName = nameList[2];

console.log(nameList[1]);
nameList[4] = "Tomasz";
console.log(nameList[2] === "Katarzyna"); // Sprawdzam, czy nameList o indexie 2 jest równe "Katarzyna" // jezeli byłoby równe to będzie true // ale jest false

// tworzenie nowych elementów i modyfikowanie istniejacych (w tablicy)
// Za pomocą indexu przypisujemy wartość
// A. Jeśli stworzymy index, który istnieje to nadpisujemy
// B. Jeśli nie to dodaję

nameList[15] = "Tom";
console.log(nameList)
// Stworzyliśmy 11 pustych elementów undefined...

// Usuwanie elementów z tablicy
//////////////////////////////////////////////////

const cars = ["volvo", "ford", "skoda", "nissan"];
// cars.splice(0,1)

cars.splice(3, 1, 'rover'); //usuń od trzeciego indexu i zastąp rover'em

cars.splice(0, 2, 'lamborghini', 'tesla'); // mogę usunąć kilka elementów

cars.splice(0, 0, 'audi', 'dacia'); 

// sort 
cars.sort()

// indexOf

nameList.indexOf("Kasia");
nameList.indexOf("Kasi"); // jeśl nie ma takiego stringa na indexie to pojawia się -1;

["jakiś człowiek", 18, null, 18].indexOf(18); // na indexie 1 znalazł ale nie sprawda dalej
["jakiś człowiek", 18, null, 18].lastIndexOf(18); // Tu szukam od końca
["jakiś człowiek", 18, null, 18].lastIndexOf(800); // pokazuje -1

// metoda includes
'Pawel'.includes('w'); // odpowiedź true

'Pawel'.includes('s'); // odpowiedź false

const nameList = ["Kasia", "Izabela", "Marek", "Dariusz"];
nameList.includes("Kasia"); // odpowiedź true;

[33, 44, 55, 66].includes(54); // odpowiedź false

// metoda join
// nic nie modyfikuje
const item = ['abcd', 'efgh', 'ijkl', 'mnop'];
item.join()
item.join("---");
item.join(" - za 7 minut przerwa");


// metoda reverse
// metoda destrukcyjna - zmienia tablice na której pracuję

const cities = ['Gliwice', 'Zabrze', 'Pyskowice', 'Paryż'];
['Gliwice', 'Zabrze', 'Pyskowice', 'Paryż'].reverse();
cities.reverse();

//  metoda split
const letters = "rioueioutouriu".split(""); // rozdziela na pojednycze litery

"rioueioutouriu".split( ' - ');
"rioueioutouriu".split(',', 3); 

//  funkcje