let choiceStart = prompt(
    "Kategorie, z których możesz wybierać: owoce, warzywa, AGD, zabawki dla dzieci, narzędzia, piekarnia/cukiernia"
  );
  
  if (choiceStart == "owoce") {
    let choiceFruit = prompt(
      "możliwości: jabłko, gruszka, banan, pomarancza, truskawki, winogrona, sliwki, mango"
    );
    switch (choiceFruit) {
      case "jabłko":
        alert("kupiłeś jabłko");
        break;
      case "gruszka":
        alert("kupiłeś gruszkę");
        break;
      case "winogrona":
        alert("kupiłeś winogrona");
        break;
      case "banan":
        alert("kupiłeś banana");
        break;
      case "pomarańcza":
        alert("kupiłeś pomarańczę");
        break;
      case "truskawki":
        alert("kupiłeś truskawki");
        break;
      case "sliwki":
        alert("kupiłeś śliwki");
        break;
      case "mango":
        alert("kupiłeś mango");
        break;
      default:
        break;
    }
  } else if (choiceStart == "warzywa") {
    let choiceVegetable = prompt(
      "możliwości: brokuł, papryka, ogorek, pomidor, cukinia"
    );
    switch (choiceVegetable) {
      case "brokuł":
        alert("kupiłeś brokuł");
        break;
      case "papryka":
        let papryka = prompt(
          "Jaką paprykę chcesz kupić: czerwoną, zieloną czy żółtą?"
        );
        const paprykastatus = "Kupiłeś paprykę ";
        if (papryka == "czerwona" || papryka == "czerwoną") {
          alert(paprykastatus + "czerwoną");
        } else if (papryka == "zielona" || papryka == "zieloną") {
          alert(paprykastatus + "zieloną");
        } else if (papryka == "zolta" || papryka == "żółtą") {
          alert(paprykastatus + "żółtą");
        } else alert("nie można kupić takiej papryki");
        break;
      default:
        break;
    }
  } else if (choiceStart == "AGD") {
    let choice_AGD = prompt(
      "możliwości: telewizor, komputer, mikrofalówka, pralka, zmywarka, lampa"
    );
    switch (choice_AGD) {
      case "telewizor":
        alert("kupiłeś telewizor");
        break;
      case "komputer":
        let choiceComputer = prompt(
          "wybierz jaki komputer chcesz kupić: stacjonarny lub laptop"
        );
        if (choiceComputer == "laptop") {
          alert("kupiłeś laptop");
        } else if (choiceComputer == "komputer stacjonarny") {
          alert("kupiłeś komputer stacjonarny");
        } else alert("nie możesz kupić takiego typu komputera");
        break;
      case "mikrofalówka":
        alert("kupiłeś mikrofalówkę");
        break;
      case "pralka":
        alert("kupiłeś pralkę");
        break;
      case "zmywarka":
        alert("kupiłeś zmywarkę");
        break;
      case "lampa":
        alert("kupiłeś lampę");
        break;
      default:
        break;
    }
  } else if (choiceStart == "zabawki dla dzieci") {
    choiceToys = prompt(
      "możliwości: klocki, autko, figurka, miś pluszowy, lalka, puzzle"
    );
    switch (choiceToys) {
      case "klocki":
        alert("kupujesz klocki");
        break;
      case "autko":
        alert("kupujesz autko");
        break;
      case "figurka":
        alert("kupujesz figurkę");
      case "miś pluszowy":
        alert("kupujesz misia pluszowego");
        break;
      case "lalka":
        alert("kupujesz lalkę");
        break;
      case "puzzle":
        alert("kupujesz puzzle");
        break;
      default:
        break;
    }
  } else if (choiceStart == "narzędzia") {
    let choiceTools = prompt(
      "możliwości: młotek, siekiera, śrubokręt, wiertarka, kombinerki, walek malarski, szpachla"
    );
    switch (choiceTools) {
      case "młotek":
        alert("kupujesz młotek");
        break;
      case "siekiera":
        alert("kupujesz siekierę");
        break;
      case "śrubokręt":
        alert("kupujesz śrubokręt");
        break;
      case "wiertarka":
        alert("kupujesz wiertarkę");
        break;
      case "kombinerki":
        alert("kupujesz kombinerki");
        break;
      case "walek malarski":
        alert("kupujesz walek malarski");
        break;
      case "szpachla":
        alert("kupujesz szpachlę");
        break;
      default:
        break;
    }
  } else if (choiceStart == "piekarnia/cukiernia") {
    let choiceBakery = prompt("możliwości: bułka, chleb, drożdżówka, pączek");
    switch (choiceBakery) {
      case "bułka":
        alert("kupujesz bułkę");
      case "chleb":
        alert("kupujesz chleb");
      case "drożdżówka":
        alert("kupujesz drożdzówkę");
      case "pączek":
        alert("kupujesz pączka");
        break;
      default:
        break;
    }
  }
  
  let enoughRich = prompt("Zastanów się czy Cię na to stać");
  if (enoughRich == "tak") {
    enoughRich = true;
  } else if (enoughRich == "nie") {
    enoughRich = false;
  }
  alert(enoughRich ? "Potwierdziłeś zakup" : "Nie możesz tego kupić");