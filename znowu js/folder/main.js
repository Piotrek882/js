let liczba = parseInt(prompt("podaj liczbę"));
alert("Twoja liczba to " + liczba);
const potega = parseInt(prompt("Do której potęgi chcesz podnieść swoją liczbę"));
let wynik;
wynik = liczba ** potega;
alert("potęga twojej liczby to: " + wynik);
let x = 1;
let wynik2 = x ** 2;
while(wynik2 != liczba){
    x++
    wynik2 = x ** 2;
}