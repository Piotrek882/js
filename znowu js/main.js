//instrukcje warunkowe w js
// 1. zmienna + wartość
// 2. if (warunek){ciało warunku}

//////przykład 1

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
const nameList = ["Kasia", "Izabela", "Marek", "Dariusz"];
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

//  const nameList = ["Kasia", "Izabela", "Marek", "Dariusz"];
nameList.includes("Kasia"); // odpowiedź true;

[33, 44, 55, 66].includes(54); // odpowiedź false

// metoda join
// nic nie modyfikuje
const item = ['abcd', 'efgh', 'ijkl', 'mnop'];
item.join();
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
// są obiektami (jak tablice)
// funkcje można wywołać (jedyny obiekt, który można wywołać)
// to małe programy, które coś robią lub zwracają

// Funkcja może
// modyfikować program lub nie modyfikować programu, przetwarzać elementy i zwracać jakąś wartość (służy  do tego słowo RETURN)
// funkcje są wielokrotnego użytku
// można funkcje:
// a. przypisać do zmiennych,
// b. podać w innej funkcji,
// c. dać jako wartość zawracaną z funkcji

// Sposoby tworzenia funkcji:
// 1. - wyrażenie funkcyjne - funkcja bez nazwy (funkcja anonimowa - ma tylko słowo function - zmienna ma nazwę ale funkcja nie), do której odwołujemy się za pomocą zmiennej - zmienną tworzymy za pomocą const (choć można za pomocą let)
// szkielet funkcji - definicja
/*
const nazwaFunkcji = function(){};
*/
// przykład
// const showMessage = function(message){
//     console.log(message);
// }

// showMessage(); // brak argumentu // wywołanie funkcji przez jej nazwę, a dokładniej zmiennej, do której jest pzrypisana
// const showMessage = function(message){
//     console.log(message);
// }

// showMessage('Wywołałem funkcję showMessage'); // argument
/* 
const showMessage = function(message){
    console.log('Wywołałem funkcję showMessage');
}

showMessage();
*/
// 2. - deklaracja funkcji - najpierw function, następie nazwa funkcji
//szkielet

// function nazwaFunkcji(){};

// Przykład

// function addNumbers(number1, number2){
//     return number1 + number2;
// }

// addNumbers(2, 4);

function addNumbers(x, y){
    return x + y;
}

addNumbers('aaa', 'bbb');

// nieprawidłowości działania funkcji - uruchomienie przed deklaracją - działa (nie jest to zalecane)
showCourseName()
function showCourseName(){
    console.log("Moja funkcja");
}
// na początku powinna byc deklaracja dopiero potem wywołanie

// spróbujemy wywołać funkcje rpzed deklaracją przy pierwszym sposobie deklaracji
/*
showCourseName()
const showCourseName1 = function () {
    console.log("Moja funkcja wg pierwszeo sposobu");
}
*/
// w tym sposobie wywołanie funkcji przed deklaracją jest błędem

// 3. - konstruktor 
// skielet
/*
const nazwaFunkcjiCoRobi = new Function();
*/
// powyższa funkcja jest pusta // rzadko używana

// przykład 
const textAlert = new Function("text", "alert(text)");
// textAlert("działa");
// new Function() - funkcja konstruktora, funkcja ogólna
/*
developer korysta najczęściej z:
1. W duzych projektach uzywa pierwszego posobu tworznia funkcji(wyrażenia funkcyjnego)
2. W małych projektów uzywa 1 lub 2 sposobu
3. Omija trzeci sposób
*/
// 4. - funkcja strzałkowa - ES6
// skielet - definicja:
/*
const nazwaFunkcjiCoRobi = () => {}; 
*/
// jest zawsze anonimowa
// jest krótsza
// używa się jej do prostych zadań
// przykład:

// const showMeTextArrowFunction = (text) => {console.log(text)};
// showMeTextArrowFunction("hej");

// I jeśli dajemy jeden parametr to nie musimy dawać nawiasów () i {}
// II nawiasy muszą być jeśli: 
/** 
 * nie przyjmujemy żadnego prametru
 * przekazujemy więcej niż jeden parametr
 */
////////////////////////////////////////////////////////////////////
const showMeTextArrowFunction = text => console.log(text);
showMeTextArrowFunction("hej");
////////////////////////////////////////////////////////////////////
const showMeTextArrowFunction1 = () => {console.log()};
showMeTextArrowFunction("hej");
////////////////////////////////////////////////////////////////////

// przypisanie funkcji do innej zmiennej

const showNewCourse = showCourseName;
showNewCourse();

// zwracanie wartości z funkcji
// domyślnie funkcja po wykonaniu zadania jest undefined
// można to zmienić używając instrukcji return

// przykład

const divideBy2 = function(number){
    console.log(number/2);
}

const result2 = divideBy2(10);

// przykład 2

let number = 0;

const add = function () {
    number++;
    console.log(number);
}

add(number); // 1

// przykład 3

const divideBy3 = function (number) {
    return number/3;
}

const result3 = divideBy3(20);
console.log(result3);

// przykład 4
// lepszy sposób
/* 
const divideBy5 = function (number) {
    const result4 = number/5; // zmienna lokalna
    console.log(result4);    
    return result4;
}
*/
// gorszy sposób
const divideBy5 = function (number) {
    console.log(number / 5);    
}

// funkcja bez paramentrów
const showMyName = function(){
    console.log("Imię");
}

// funkcja z parametrem

const showUserName = function (userName){
    console.log("Witaj " + userName);
}

showUserName("user", 30);

// wartości domyślne funkcji
// const addTwoNumber = (x = 0, y = 0) => {
//     const result = x + y;
//     console.log(result);
//     return result;
// }

// addTwoNumber(4, 5);

// inny przykład

const addTwoNumber = (x = 0, y = 5) => {
    const result = x + y;
    console.log(result);
    return result;
}

addTwoNumber(4); // dodajemy do 5
// addTwoNumber(4, 7); // x + y = 11 // 5 liczy się tylko wtedy, gdy nie wpiszemy drugiej liczby

//callback
// funkcja przekazywana jako parametr do innej funkcji wyższego rzędu

function count(x, callback){
    return callback(x);
}

function addOne(item) {
    item++
    console.log(item);
    return item;
}

function substractOne(number){
    number--
    console.log(number);
    return number;
}

const result = count(6, addOne);
count(5, addOne);

// przykład 2
// addEventListener - metoda czekania na zdarzenie, może być ustawiana na różnych elementach html
document.body.addEventListener("click", function(){
    console.log("click")
})

// window.addEventListener("click", function(){
//     console.log("click");
// })

// metoda oczekuje dwóch rzeczy:
// na co ma czekać np. click
// co ma zrobić
function showClick(){
    console.log("click");
}
window.addEventListener("click", showClick);

// kolejny przykład
// setInterval - funkcja wbudowana, która sama wywołuje się co jakiś określony czas
// setInterval(() => console.log("minely 2 sekundy"), 2000);

// inny przyklad 
const showTime = () => {
    console.log("minely dwie sekundy");
}

setInterval(showTime, 2000);

// kolejny przykład
// jako argument przekazuje funkcje anonimowa strzałkową(najczęściej)
const userAge1 = [20, 30 , 69, 17, 90, 16, 72];
// userAge1.forEach(userAge1 => console.log(`Wiek uzytkowanika to ${userAge1}`));

// inny zapis
// userAge1.forEach(userAge1 => {console.log(`Wiek uzytkowanika to ${userAge1}`)});

userAge1.forEach((userAge1, x) => {console.log(`Wiek uzytkowanika to ${userAge1}`)});

//userAge2.frEach(function(userAge2){console.log("Wiek użytkownika to " + userAge2)});

// obiekt arguments
// podobny do tablicy
// można się do niego odwołać za pomocą []
// ma length
// nie ma metod tablicy
// zaweira nformację ile argumentów zostało przesłane
// obiekt tablicopodobny

// przykład

// const showArguments = function(){
//     console.log(arguments)
// }

// showArguments("1", null, {});

// const showArguments = function () {
//     console.log(arguments[0])
// }
// showArguments("12", null, {})

// const showArguments = function () {
//     console.log(arguments.length)
// }
// showArguments("12", null, {})

const showArguments = function () {
    console.log(Array.isArray(arguments))
}
showArguments("12", null, {})

const addAllNumbers = function (){
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result = arguments[i];
        
    }
    return result
}

function showInfoAboutUser (age, name, sex) {
    if(arguments.length === 0){
        console.log("nie ma żadnych informacji o użytkowniku");
    } else if (arguments.length === 1) {
        console.log("Użytkownik ma " + age + " lat");
    } else if (arguments.length === 2) {
        console.log(`Użytkownik ma ${age} lat i ma na imie ${name}`);
    } else {
        console.log(`Użytkownik ma ${age} lat i ma na imię ${name} i jest ${sex}`);
    }
}
showInfoAboutUser(2, 'GDFG', 'M' );

// operator rest
// umieszcza elementy w tablicy
// tworzy tablice z podanych elementów
// budowa: ...nazwa // (np. ...items)

// przykład
// function showAllArguments(...items){
//     console.log(items);
//     return items;
// }
// showAllArguments("1", null, true, 2, 'd');

function showAllArguments(...args){
    console.log(args[5]);
    console.log(arguments[5]); // porównanie z rest
    return args;
}
showAllArguments("1", null, true, 2, 'd');

// kolejny przykład

// function addAllWords(...words){
//     let text = ""; // pusty string
//     for (let i = 0; i < words.length; i++) {
//         text += `${words[i]}`;        
//     }
//     console.log(text);
// }

// addAllWords();

// function addAllWords(...words){
//     let text = "jakis tekst "; // pusty string
//     for (let i = 0; i < words.length; i++) {
//         text += `${words[i]}`;        
//     }
//     console.log(text);
// }

// addAllWords("ghdgjfhsdj", "yftyuysyftgdyugfy", 10, "hdhkghklhasdafh");


// function addAllWords(...words){
//     let text = ""; // pusty string
//     words.forEach(function(word){

//     });{
//         text += `${words[i]} - `;
//     }
//     console.log(text);
// }

// addAllWords(' slowo 1', ' slowo 2');

// kolejny przykład
function addWords(...words){
    let txt = "";
    words.forEach(word => txt += `${word}-`)
    console.log(txt);
}

console.log(addWords("slowo 1", 'slowo 2', 4));

function showUsers(owner, ...others) {
    console.log((`Na imprezie był ${owner} ${others.length ? "oraz " +  others + ". " : ". "} `));
}

showUsers('user1', 'user2', 'user3');

// showUsers('user1', 'user2', 'user3');

// co to jest zakres?
// zakres mówi gdzie dana zmienna jest widoczna bądź gdzie można z niej skorzystać
// 1. zakres globalny (jeden)
// 2. zakres loaklny (wiele):
//      tworzony przez funkcje
//      tworzony przez blok kodu(instrukcje warunkowe, pętle)
// zakre zależy od tego, gdzie dana zmienna się znajduje

// przykład 1
// var userID = 102;
// const colorID = 5;
// let userAge = 20;

// console.log(userID);
// console.log(colorID);
// console.log(userAge);

// reguła: szukam w zakresie, w którym jestem, jeśli znalazłem nie idę dalej
/*
var userID = 102;
const colorID = 5;

userID = 200;
colorID = 200;
console.log(userID);
console.log(colorID);
*/

// przyklad
// const userName = "Adam";
// function showName() {
//     //userName = "Jan"; // - nie może tak być
//     console.log(userName);
// }
// showName();
// do zakresu globalnego można się dostać z lokalnego
// zmienne można tak samo nazywać pod warunkiem, że znajdują się w róznych zakresach

// koleny przykład
// let userName = "Adam";
// function showName() {
//     userName = "Jan";
//     userName = "Marysia";
//     console.log(userName);
// }
// showName();

let userName = "Adam";
function showName() {
    let userName = "Jan";
    userName = "Marysia";
    console.log(userName);
}
showName();
console.log(userName);

// zakres lokalny, funkcja
// var - nie przestrzega zakresu lokalnego kodu choc przestrzega zakres lokalny funkcji

// var varFun = "a";
// let letFun = "b";
// const constFun = "c";
// // konsola wyswietla w zakresie globalnym

// function variableInFunction(){
//     var inFunction = "jestem";
//     let varFun = 4;
// }
// variableInFunction();


// var varFun = "a";
// let letFun = "b";
// const constFun = "c";

// function variableInFunction(){
//     var inFunction = "jestem";
//     varFun = 4;
//     console.log(inFunction);
// }
// variableInFunction();


var varFun = "a";
let letFun = "b";
const constFun = "c";

function variableInFunction(){
    var inFunction = "jestem";
    let varFun = 0;
    varFun = 4;
    console.log(varFun);
    console.log(inFunction);
}
variableInFunction();


// var varFun = "a";
// let letFun = "b";
// const constFun = "c";

// function variableInFunction(){
//     var inFunction = "jestem";
//     let varFun = 0;
//     const constFun = 5;
//     function showVariable() {
//         const constFun = "funkcja w funkcji";
//         varFun = "nadpisuję wartość zmiennej z wyższego zakresu";
//         console.log(varFun);
//         console.log(letFun);
//         console.log(constFun);
//     }
//     showVariable();
// }
// variableInFunction();

// var varFun = "a";
// let letFun = "b";
// const constFun = "c";

// function variableInFunction(){
//     var inFunction = "jestem";
//     let varFun = 0;

//     function showVariable() {
//         const constFun = "funkcja w funkcji";
//         varFun = "nadpisuję wartość zmiennej z wyższego zakresu";
//         console.log(varFun);
//         console.log(letFun);
//         console.log(constFun);
//     }
//     showVariable();
// }
// variableInFunction();

// przykład

// function calculate(a,b) {
//     let number1 = a;
//     let number2 = b;

//     function add() {
//         number2 = 10;
//         console.log(number1 + number2);
//     }
//     add();
// }
// calculate(2,3);

// function calculate(a,b) {
//     let number1 = a;
//     let number2 = b;

//     function add(x, y) {
//         let x = 10;
//         console.log(x + y);
//     }
//     add(number1, number2);
// }
// calculate(2,3);

// function calculate(a,b) {
//     let number1 = a;
//     let number2 = b;

//     function add(x, y) {
//         x = 10;
//         console.log(x + y);
//     }
//     add(number1, number2);
// }
// const firstNumber = 8;
// calculate(firstNumber, 3);

// zakres lokalny jako blok kodu, czyli instrukcje warunkowe i pętle, obiekty

// przykład
/*
let var1 = 1;
const var2 = 2;
var var2 = 3;

{
    let var1 = "wewnętrzny 1";
    const var2 = "wewnętrzny 2";
    var var3 = "wewnętrzny 3";
    console.log(var1);
    console.log(var2);
    console.log(var3);
    var1 = "wewnętrzny 1";
    var2 = "wewnętrzny 2";
    var3 = "wewnętrzny 3";
}
console.log(var1);
console.log(var3);
console.log(var2);
*/

// kolejny przyład
const a = "A w zakresie globalnym";
let b = "B w zakresie globalnym";
var c = "C w zakresie globalnym";

// if(true) {
//     const a = "kasia w bloku kodu xd";
//     console.log("a w bloku kodu to " + a);
// }
if(true){
    var c = "Ania w bloku kodu";
}
console.log(c);

//DOM - document object model
// nie jest częścią js'a ale js umozliwia pracę z DOM
// 1. pobieranie elementu
// 2. modyfikowanie
// 3. tworzenie, dodawanie, usuwanie
// 4. nasłuchiwanie

// document.body.h1 - tak nie robić
// HTMLColection - obiekt tablicopodobny
// metody zrobienia tablicy na obiekcie tablicopodobnym
// 1.
const imgs = Array.from(document.images);
// 2.
const imgs2 = [...document.images];

// dwie metody pobierające:
// 1. 
document.querySelector("li:nth-child(3)");
// 2.
const firstElement = document.getElementById("first");
document.getElementsByClassName("even");
// to samo ale za pomocą wczesniejszej metody
document.querySelector("#first");
// metosy pobierajae wszystkie elementy:
document.querySelectorAll("ul>li");
// zwraca NodeList - obiekt tablicopodobny
// document.querySelector("*ul>li");
// * - oznacza dowolny element, który jest przed
document.getElementsByTagName("li");
document.getElementsByTagName("ul li"); // nie ma sensu
document.getElementsByClassName("even");
document.querySelector(".even");
/* 
HTMLcolection jest to lista elementów HTML o określonym tagu pobrana z mtody DOM takiej jak getElementsByTagName()

NodeList to lista wszystkich węzłów (node) w drzewie dom pobranych z metod takich jak querySelectorAll

Głowna róznica między HTML Colection a NodeList polega na tym, że HTML Colection zawiera tylko elementy HTML, podczas gdy nodeList zawiera różne rodzje węzłów dom takie jak elementy atrybuty komentarze itp.

HTML Colection jest żywą kolekcją co oznacza że odzwierciedla ona aktulny stan drzewa DOM podczas gdy nodeList jest statyczna kolekcją, która nie zmienia się nawet jeśli drzewo DOM jest modyfikowane.

HTML Colection ma również kilka specyficznych metod takich jak NameItem, które pozwalaja na łatwe wyszukiwanie i dostęp do elementów po nazwie podczas gdy NodeList nie ma specjalnych metod.
*/
const liList1 = document.getElementsByClassName('li');
// nie pobrało bo zamiest klasy mam podany tag
const liList2 = document.getElementsByTagName('li');
// teraz pobrało
const liList3 = document.querySelectorAll('li');
const liArray = [...liList2];
const liArray2 = Array.from(liList2);
// pobieranie atrybutów z elementów
const h2 = document.querySelector('h2');
console.log(h2.getAttribute('class'));
console.log(h2.getAttribute('data-color'));
console.log(h2.getAttribute('id'));

h2.classList.contains("title");
// modyfikowanie elementów
// textContent
const firstLi = document.querySelector("li:first-child");
firstLi.textContent = "JS lepszy od PHP !!!!!!!!!!!"
firstLi.innerHTML = "<strong>JS jest lepszy od PHP !!!!!!!!!!!</strong>"
firstLi.style.fontSize = "3rem";
// JS nie pozwala nadpisywać w CCS font-size, zatem używa notacji wielbłądziej, jeśli potrzebuje np. fontSize;
firstLi.style.backgroundColor = "rgb(255,0,0)";
document.body.style.backgroundColor = "#666";
// class;
// dodawanie(add);
// odejmowanie(remove);
// przełączanie(toggle) Klas;

// 1. metoda toggle - przełącznik - jesli dana klasa jest to ją zabierz/ wyłącz, jeśli nie to dodaj
firstLi.classList.toggle("space");
// 2. metoda add(); - jesli klasa istnieje to nic nie rób, jeśli nie ma to dodaj 
firstLi.classList.add("space");
// 3.metoda remove(); - jesli dane coś istniej to to usuń, jeśli nie ma czegoś takiego to nic nie rób 
firstLi.classList.remove("space");

// nadpisywanie atrybutów - nie uzywa się słowa class, bo jest zarezerwowane ale zamiast niego nazwa właściwości brzmi className
firstLi.className = "one two"; // ta właściwość w odróżnieniu od classList nadpisuje zawrtość, nie ważne czy była już jakoaś klasa przypisana czy nie
firstLi.id = ""; // ???
// przy pobieraniu mieliśmy getAttribute - przy modyfikowaniu mamy setAttribute
firstLi.setAttribute('obiektówka w Pythonie');