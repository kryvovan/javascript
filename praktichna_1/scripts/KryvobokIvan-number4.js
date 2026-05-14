let income_1 = 100000, income_2 = 200000, income_3 = 300000, income_4 = 150000;
let euro = 51.2;
let dollar = 43.7;

let income = income_1 + income_2 + income_3 + income_4;
let poopie_1 = income - 18000 - (0.05 * income);
let tax = (0.05 * income)
let zhyvym = poopie_1 * 0.1;
let dity = poopie_1 * 0.05;
let poopie_2 = poopie_1 - zhyvym - dity;
let poopie_3 = poopie_2 - 100000;

let euro_vid = 2500 * euro;
let dollar_vid = 3000 * dollar;

let poopie_4 = poopie_3 - euro_vid - dollar_vid;
let sum = euro_vid + dollar_vid;

console.log(`За рік Максим заробив — ${income}. Єдиний податок 5% складає ${tax}. Відрахування у фонди «Повернись живим» та «Діти Героїв» складає ${zhyvym} та ${dity} відповідно. На валютну карту сумарно відкладено ще ${sum}. Залишок на рахунку Максима складає ${poopie_4}.`)