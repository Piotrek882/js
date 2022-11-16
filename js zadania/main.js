console.log('Kategorie, z których możesz wybierać: owoce, warzywa, AGD, zabawki dla dzieci, narzędzia, piekarnia/cukiernia');

const choiceStart = 'AGD';
const choiceFruit = 'winogrona';
const choiceVegetable = 'papryka';
const papryka = 'fioletowa';
const choice_AGD = 'komputer';
const choiceComputer = 'laptop';
const enoughRich = true;

if(choiceStart == 'owoce'){
        console.log('możliwości: jabłko, gruszka, banan, pomarancza, truskawki, winogrona, sliwki, mango');
        switch(choiceFruit){
            case 'jabłko':
                console.log('kupiłeś jabłko');
                break;
            case 'gruszka':
                console.log('kupiłeś gruszkę');
                break;
            case 'winogrona':
                console.log('kupiłeś winogrona');
                break;
            case 'banan':
                console.log('kupiłeś banana');
                break;
            case 'pomarańcza':
                console.log('kupiłeś pomarańczę');
                break;
            case 'truskawki':
                console.log('kupiłeś truskawki');
                break;
            case 'sliwki':
                console.log('kupiłeś śliwki');
                break;
            case 'mango':
                console.log('kupiłeś mango');
                break;
                default:
                break;
        }
        
        }else if (choiceStart == 'warzywa'){
            console.log('możliwości: brokul, papryka, ogorek, pomidor, cukinia');
        switch(choiceVegetable){
            case 'brokul':
                console.log('kupiłeś brokul');
                break;
            case 'papryka':
            console.log('kupiłeś paprykę ');            
            if(papryka == 'czerwona'){
                console.log('czerwoną');
            }else if(papryka == 'zielona'){
                console.log('zieloną');
            }else if(papryka == 'zolta'){
                console.log('żółtą');
            }else console.log('nie można kupić takiej papryki');
            break;
            default:
            break;
        }
        
        }else if(choiceStart == 'AGD'){
        console.log('możliwości: telewizor, komputer, mikrofalówka, pralka, zmywarka, lampa');
        switch(choice_AGD){
            case 'telewizor':
                console.log('kupiłeś telewizor');
                break;
            case 'komputer':
                console.log('wybierz jaki komputer chcesz kupić: stacjonarny lub laptop');
                if(choiceComputer == 'laptop'){
                    console.log('kupiłeś laptop');
                }else if(choiceComputer == 'komputer stacjonarny'){
                    console.log('kupiłeś komputer stacjonarny');
                }else console.log('nie możesz kupić takiego komputera');
                break;
            case 'mikrofalówka':
                console.log('kupiłeś mikrofalówkę');
                break;
            case 'pralka':
                console.log('kupiłeś pralkę');
                break;
            case 'zmywarka':
                console.log('kupiłeś zmywarkę');
                break;
            case 'lampa':
                console.log('kupiłeś lampę');
                break;
                default:
                break;
        }
        }else if (choiceStart == 'zabawki dla dzieci'){console.log('możliwości: klocki, autko, figurka, miś pluszowy, lalka, puzzle');
        switch($choiceToys){
            case 'klocki':
                console.log('kupujesz klocki');
                break;
            case 'autko':
                console.log('kupujesz autko');
                break;
            case 'figurka':
                console.log('kupujesz figurkę');
            case 'miś pluszowy':
                console.log('kupujesz misia pluszowego');
                break;
            case 'lalka':
                console.log('kupujesz lalkę');
                break;
            case 'puzzle':
                console.log('kupujesz puzzle');
                break;
                default:
                break;
        }
        
        }else if($choiceStart == 'narzędzia'){
        console.log('możliwości: mlotek, siekiera, srubokret, wiertarka, kombinerki, walek malarski, szpachla');
        switch($choiceTools){
            case 'mlotek':
                console.log('kupujesz młotek');
                break;
            case 'siekiera':
                console.log('kupujesz siekierę');
                break;
            case 'srubokret':
                console.log('kupujesz śrubokręt');
                break;
            case 'wiertarka':
                console.log('kupujesz wiertarkę');
                break;
            case 'kombinerki':
                console.log('kupujesz kombinerki');
                break;
            case 'walek malarski':
                console.log('kupujesz walek malarski');
                break;
            case 'szpachla':
                console.log('kupujesz szpachlę');
                break;
                default:
                break;
            }
             
            }else if(choiceStart == 'piekarnia/cukiernia'){
            console.log('możliwości: bulka, chleb, drozdzowka, pączek');
        switch(choiceBakery){
            case 'bulka':
                console.log('kupujesz bułkę');
            case 'chleb':
                console.log('kupujesz chleb');
            case 'drozdzowka':
                console.log('kupujesz drożdzówkę');
            case 'pączek':
                console.log('kupujesz pączka');
            break;
            default:
            break;
        }
        }

console.log('Zastanów się czy Cię na to stać');
console.log((enoughRich) ? 'Stać Cię' : 'Nie stać Cię');