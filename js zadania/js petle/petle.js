while (true) {
  let dzialanie = parseInt(
    prompt(
      "Jakie działanie chcesz wykonać? \n Wybierz liczbę: \n 1 - mnożenie \n 2 - dzielenie \n 3 - dodawanie \n 4 - odejmowanie \n 5 - pierwiastkowanie \n 6 - potęgowanie \n 7 - logarytm \n 0 - nie chcę już nic obliczać"
    )
  );
  if (dzialanie == 0) {
    break;
  } else {
    let liczba1 = parseInt(prompt("podaj liczbę"));
    let liczba2 = parseInt(prompt("podaj drugą liczbę"));
    alert("Twoje liczby to " + liczba1 + " i " + liczba2);
    let mnozenie = liczba1 * liczba2;
    let dzielenie = liczba1 / liczba2;
    let dodawanie = liczba1 + liczba2;
    let odejmowanie = liczba1 - liczba2;
    let potegowanie = liczba1 ** liczba2;

    switch (dzialanie) {
      case 1: //"mnozenie"
        alert("Wynik: " + mnozenie);
        break;
      case 2: //"dzielenie"
        alert("Wynik: " + dzielenie);
        break;
      case 3: //"dodawanie"
        alert("Wynik: " + dodawanie);
        break;
      case 4: //"odejmowanie"
        alert("Wynik: " + odejmowanie);
        break;
      case 5: //"pierwiastkowanie"
        let pierwiastkowanie = parseInt(
          prompt(
            `Którą liczbę chcesz pierwiastkować? \n 1 - liczba 1 = ${liczba1} \n  2 - liczba 2 = ${liczba2}`
          )
        );
        if (pierwiastkowanie == 1) {
          pierwiastkowanie = liczba1;
        } else if (pierwiastkowanie == 2) {
          pierwiastkowanie = liczba2;
        }
        alert("Wynik w przybliżeniu: " + Math.sqrt(pierwiastkowanie));
        break;
      case 6: //"potegowanie"
        alert("Wynik: " + potegowanie);
        break;
      case 7: //"logarytm";
      default:
        break;
    }
  }
}
