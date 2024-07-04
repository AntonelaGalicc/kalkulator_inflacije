function inflationCalculator() {
    let inflationRate = document.querySelector("#inflationRate");
    let money = document.querySelector("#money");
    let years = document.querySelector("#years");

    inflationRate = parseFloat(inflationRate.value);
    money = parseFloat(money.value);
    years = parseFloat(years.value);

    //formula za izracun inflacije u jednoj godini
    let result = money + (money * (inflationRate / 100));

    //formula za izračun svih godina
    for (let i = 1; i < years; i++) {
        result += result * (inflationRate / 100);
    }
     //fiksiranje na 2 decimale
    result= result.toFixed(2)

    let newElement = document.createElement("div");
    newElement.className = "new-value";
    newElement.innerText = "Danasnjih " + money + " € vrijedi isto kao " + result + " za " + years + " godina.";

    //potrebno upisati unutar funkcije
    document.querySelector(".container").appendChild(newElement);
}


