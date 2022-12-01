let liczba = parseInt(prompt("podaj liczbę"));
alert("Twoja liczba to " + liczba);
const potega = parseInt(prompt("Do której potęgi chcesz podnieść swoją liczbę"));
let wynik;
wynik = liczba ** potega;
alert("potęga twojej liczby to: " + wynik);
let x = 1;
let wynik2 = x ** 2;
let wynik3 = x ** 3;
alert("Twoja liczba to " + liczba);
let decyzja1 = parseInt(prompt("Co chcesz zrobić ze swoją liczbą? 1 - pierwiastek pierwszego stopnia, 2 - pierwiastek trzeciego stopnia"))
if(decycja1 == 1){
    while(wynik2 != liczba){
        x++
        wynik2 = x ** 2;
    }

    alert("Pierwiastek drugiego stopnia z twojej liczby to " + x);
} else if (decyzja1 == 2) {
    
    while (wynik3 != liczba) {
        x++
        wynik3 = x ** 3;
    }
    
    alert("Pierwiastek trzeciego stopnia z twojej liczby to " + x);
}