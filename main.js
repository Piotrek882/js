/*
~~ WSTĘP ~~
Gdy mamy do czynienia z kilkoma plikami js'a podłączonymi do jednego HTML'a, są one traktowane jak jeden skrypt. Oznacza to więc, że możemy z jednego pliku js odwoływać się do zmiennych, funkcji czy innych części naszego kodu. Jednak czasami może to sprawiać problemy. Przecież nie możemy na przykład dwa razy zadeklarować tej samej zmiennej, a w konsoli zobaczymy wtedy błąd. Dlatego używamy modułów, dzięki którym każdy skrypt jest traktowany jako osobne środowisko, z którego nic samo z siebie nie wychodzi na zewnątrz. Możemy wtedy deklarować zmienne o dowolnych nazwach bez obawy, że zostanie nadpisana przez inne skrypty. Kontrolujemy rzeczy, które chcemy by były dostępne poza tym plikiem.
~~~~~~~~~~
*/

// !!!! Pamiętajmy, że żeby nasz plik main.js był osobnym środowiskiem (modułem) musimy dopisać przy jego podłączaniu type="module"

//? (index.html):   <script src="main.js" type="module"></script>

//* W tym kodzie skupię się na typie modułów z ES6, ponieważ jest to uniwersalny typ i nie wymaga instalowania dodatkowych paczek

// Zacznijmy od zwykłej funkcji

function big(txt) {
    console.log(txt.toUpperCase());
}

//! jak widać gdy użujemy funkcji big w pliku secondfile.js w konsoli wyskakuje błąd ponieważ, w pliku secondfile.js użyliśmy tej funkcji, a nie została ona tam zadeklarowana. Gdyby nasze pliki nie były modułami normalnie zobaczylibyśmy w konsoli: IZABELA

// teraz stwórzmy jakąś funkcję i wyeksportujmy ją do secondfile.js:
function smallText(txt){
    console.log(txt.toLowerCase());
}

const _smallText = smallText;
export { _smallText as smallText };
// teraz w konsoli widzimy "nasz tekst", ponieważ wyeksportowaliśmy z tego pliku funkcję smallText, a w pliku secondfile.js importujemy ją

// Istnieją oczywiście inne typy modułów takie jak Common JS. Common JS to typ modułów stosowanych po stronie serwera czyli w Node.js.

// ------------------  NODE.JS  -------------------

// Do czego służy node.js ??

// Node.js to środowisko, które pozwala nam odpalać Javascript poza przeglądarką - bezpośrednio z terminala.
// Wraz z node.js dostajemy też npm, czyli Node Package Manager, dzięki któremu możemy instalować i zarządzać funkcjonalnościami.
// Są one zgrupowane we wspólnym rejestrze pakietów dostępnych na stronie https://www.npmjs.com/. 


//* instalacja node.js
// Na windowsie nie powinno być problemu z zainstalowaniem node.js (Wchodzimy na stronę https://nodejs.org/en/ i dokonujemy instalacji). 

// Systemy Linux/Osx są bardziej restrykcyjne jeżeli chodzi o uprawnienia, i w wielu sytuacjach tradycyjna instalacja Node może później przynieść problemy z brakiem dostępu przy próbie instalacji globalnych pakietów.

// Dla linuxowych systemów zalecana jest instalacja za pomocą Node Version Manager.

// Dla Osx możemy skorzystać z homebrew lub nvm.

/*  Bundlery
Bundlery to dodatkowe narzędzia, których główną funkcjonalnością jest... bundlowanie.
Narzędzia takie czytają wskazany przez nas plik JavaScript, a następnie wykonuje na nim odpowiednie czynności. Jeżeli dla przykładu znajdzie w kodzie importowanie innego pliku JavaScript, dołączy go generując tym samym jeden wspólny wynikowy plik JS. Gdy natrafi importowanie pliku CSS, SCSS czy IMG, także dołączy je do pliku wynikowego przy okazji konwertując ich kod na prawidłowy zapis Javascript. Dodatkowo mogą optymalizować kod, odświeżać stronę, generować automatycznie klasy itp. Takie wrzucanie wszystkiego w jeden wynikowy plik JavaScript bardzo przypomina generowanie klasycznych programów, gdzie bardzo często cały kod i zasoby lądują w jednym wspólnym pliku. Jednym z najpopularniejszych jest Webpack. Bundlując kod musisz mieć na uwadze, że każdy rodzaj pliku, który użyjesz w kodzie musi być przez ciebie opisany w konfiguracji. Gdy dla przykładu zaimportujesz do Javascriptu plik CSS, w którym używasz jako tła pliku jpg, svg i podobnego, dla odpowiednich formatów powinieneś dodać odpowiednie loadery.
*/
// --- Instalowanie webpacka ---
/*
Żeby zainstalować Webpacka, wpisujemy w terminalu:
npm i webpack webpack-cli -D
Webpack wymaga czegoś takiego jak plik konfiguracyjny nazwany: webpack.config.js
*/