let homeAndGarden = ['grill turystyczny', 'szlifierka kątowa', 'kosiarka', 'przedłużacz 30m', 'fotel gamingowy', 'panele ścienne', 'drabina aluminiowa', 'Papier Ksero Polspeed A4 80g/M Karton 5 Ryz'];
let homeAndGardenPrices = ['45,00', '139,00', '364,00', '55,00', '379,00', '33,00', '399,00', '102.40'];
let electronics = ['kamera', 'smartfon', 'laptop', 'telewizor', 'słuchawki', 'konsola do gier', 'odtwarzacz Blu-ray', 'klawiatura mechaniczna'];
let electronicsPrices = ['6999,00', '5499,00', '6999,00', '6999,00', '1499,00', '2499,00', '1799,00', '1099,00'];
let automotive = ['Volkswagen Golf VIII', 'Motocykl Honda CB650R', 'czujniki parkowania', 'nawigacja samochodowa', 'olej silnikowy', 'kamizelka odblaskowa', 'opony zimowe', 'akumulator samochodowy'];
let automotivePrices = ['90000,00', '39900,00', '400,00', '1199,00', '200,00', '500,00', '60,00', '500,00']
let childProducts = ["Zabawka edukacyjna Fisher-Price", "Wózek dziecięcy Quinny Zapp", "Krzesło do karmienia Chicco Pocket Meal", "Konsola do gier Nintendo Switch", "Plecak szkolny Nike Classic Backpack", "Buty sportowe dla dzieci Adidas AltaRun", "Lalka Barbie Dreamhouse Adventures", "Klocki Lego Classic Creative Bricks"];
let childProductsPrices = ['129,99', '1399,99', '329,99', '1399,99', '149,99', '179,99', '119,99', '99,99'];
let sportProducts = ["Kurtka narciarska 4F", "Buty trekkingowe Salomon", "Rowerek stacjonarny Kettler Axos Cycle P-LA", "Zestaw do nordic walking Kettler", "Namiot turystyczny High Peak Talos", "Sprzęt do jazdy na rolkach K2 Kinetic 80 Pro", "Torba sportowa Nike Brasilia Duffel Bag", "Latarka turystyczna Fenix LD22"]
let sportProductsPrices = ["249,99", "599,99", "999,99", "199,99", "599,99", "449,99", "129,99", "199,99"]
let militaryProducts = ["Karabinek ASG CZ Scorpion EVO 3 A1 B.E.T.", "Łopatka składana Helikon-Tex", "Kamizelka taktyczna Condor Ronin Chest Rig", "Kask ochronny z osłoną twarzy VEGA", "Buty wojskowe Bates GX-8 Gore-Tex", "Plecak taktyczny Mil-Tec US Assault Pack", "Ostrzałka do noży Lansky Deluxe 5-Rod Turn Box", "Tarcza strzelecka Paper Target"]
let militaryProductsPrices = ["1999,99", "69,99", "499,99", "399,99", "999,99", "129,99", "149,99", "19,99"]
let haelthProducts = ["Masażer shiatsu do stóp Beurer FM 60", "Termometr bezdotykowy Microlife NC 200", "Elektryczna szczoteczka do zębów Oral-B PRO 2 2500N", "Inhalator Omron C801KD", "Nawilżacz powietrza Xiaomi Smartmi", "Pulsometr z pasem Polar H10", "Kompresor medyczny AirUno Mini", "Pakiet testów ciążowych Clearblue"];
let healthProductsPrices = ["349,99", "249,99", "199,99", "269,99", "399,99", "399,99", "199,99", "59,99"]
let cultureProducts = ["Harry Potter i Kamień Filozoficzny (książka)", "Sony Playstation 5", "Bezprzewodowe słuchawki z redukcją szumów Sony WH-1000XM4", "Gitara elektryczna Fender Stratocaster", "Gra planszowa Osadnicy z Catanu", "Płyta winylowa Pink Floyd - Dark Side of the Moon", "Streamingowy odtwarzacz multimedialny Amazon Fire TV Stick 4K", "Głośnik Bluetooth JBL PartyBox 300"]
let cultureProductsPrices = ["29,99", "499,99", "379,99", "999,99", "149,99", "34,99", "49,99", "699,99"]
let bikeProducts = ["Kask rowerowy Giro Fixture", "Zestaw oświetleniowy przedni i tylny", "Sakwa na bagażnik rowerowy", "Licznik rowerowy CatEye Velo Wireless+", "Pompka do roweru", "Klucz do pedałów rowerowych", "Klamki hamulcowe Shimano Deore XT", "Stojak serwisowy rowerowy"]
let bikeProductsPrices = ["179,99", "49,99", "69,99", "139,99", "29,99", "19,99", "299,99", "399,99"]
let officeProducts = ["Zeszyt A4 w kratkę", "Ołówek automatyczny z gumką", "Kalendarz biurkowy na 2023 rok", "Teczka ofertowa z gumką", "Długopis żelowy w kolorze czarnym", "Nożyczki biurowe", "Kopertowy breloczek z lampką LED", "Karteczki samoprzylepne"]
let officeProductsPrices = ["4,99", "9,99", "24,99", "7,99", "2,49", "12,99", "14,99", "3,99"]



for(i=0; i<8; ++i){
    let content = homeAndGarden[i];
    let nth = `pd${i+=1}`;
    i--
    let place = document.getElementById(nth);
    place.textContent = content;

    let priceContent = homeAndGardenPrices[i];
    let priceNth = `pdprice${i+=1}`;
    i--
    let pricePlace = document.getElementById(priceNth);
    pricePlace.textContent = priceContent + ' zł';
}

for(i=0; i<8; ++i){
    let content = electronics[i];
    let nth = `pe${i+=1}`;
    i--
    let place = document.getElementById(nth);
    place.textContent = content;

    let priceContent = electronicsPrices[i];
    let priceNth = `peprice${i+=1}`;
    i--
    let pricePlace = document.getElementById(priceNth);
    pricePlace.textContent = priceContent + ' zł';
}

for(i=0; i<8; ++i){
    let content = automotive[i];
    let nth = `pa${i+=1}`;
    i--
    let place = document.getElementById(nth);
    place.textContent = content;

    let priceContent = automotivePrices[i];
    let priceNth = `paprice${i+=1}`;
    i--
    let pricePlace = document.getElementById(priceNth);
    pricePlace.textContent = priceContent + ' zł';
}

for(i=0; i<8; ++i){
    let content = childProducts[i];
    let nth = `pc${i+=1}`;
    i--
    let place = document.getElementById(nth);
    place.textContent = content;

    let priceContent = childProductsPrices[i];
    let priceNth = `pcprice${i+=1}`;
    i--
    let pricePlace = document.getElementById(priceNth);
    pricePlace.textContent = priceContent + ' zł';
}

for(i=0; i<8; ++i){
    let content = sportProducts[i];
    let nth = `ps${i+=1}`;
    i--
    let place = document.getElementById(nth);
    place.textContent = content;

    let priceContent = sportProductsPrices[i];
    let priceNth = `psprice${i+=1}`;
    i--
    let pricePlace = document.getElementById(priceNth);
    pricePlace.textContent = priceContent + ' zł';
}

for(i=0; i<8; ++i){
    let content = militaryProducts[i];
    let nth = `pm${i+=1}`;
    i--
    let place = document.getElementById(nth);
    place.textContent = content;

    let priceContent = militaryProductsPrices[i];
    let priceNth = `pmprice${i+=1}`;
    i--
    let pricePlace = document.getElementById(priceNth);
    pricePlace.textContent = priceContent + ' zł';
}

for(i=0; i<8; ++i){
    let content = haelthProducts[i];
    let nth = `pz${i+=1}`;
    i--
    let place = document.getElementById(nth);
    place.textContent = content;

    let priceContent = healthProductsPrices[i];
    let priceNth = `pzprice${i+=1}`;
    i--
    let pricePlace = document.getElementById(priceNth);
    pricePlace.textContent = priceContent + ' zł';
}

for(i=0; i<8; ++i){
    let content = cultureProducts[i];
    let nth = `pk${i+=1}`;
    i--
    let place = document.getElementById(nth);
    place.textContent = content;

    let priceContent = cultureProductsPrices[i];
    let priceNth = `pkprice${i+=1}`;
    i--
    let pricePlace = document.getElementById(priceNth);
    pricePlace.textContent = priceContent + ' zł';
}

for(i=0; i<8; ++i){
    let content = bikeProducts[i];
    let nth = `pb${i+=1}`;
    i--
    let place = document.getElementById(nth);
    place.textContent = content;

    let priceContent = bikeProductsPrices[i];
    let priceNth = `pbprice${i+=1}`;
    i--
    let pricePlace = document.getElementById(priceNth);
    pricePlace.textContent = priceContent + ' zł';
}

for(i=0; i<8; ++i){
    let content = officeProducts[i];
    let nth = `po${i+=1}`;
    i--
    let place = document.getElementById(nth);
    place.textContent = content;

    let priceContent = officeProductsPrices[i];
    let priceNth = `poprice${i+=1}`;
    i--
    let pricePlace = document.getElementById(priceNth);
    pricePlace.textContent = priceContent + ' zł';
}