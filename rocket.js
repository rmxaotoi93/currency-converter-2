let from = document.getElementById("from")
let to = document.getElementById("to")
let amount = document.getElementById("amountInput")
let result = document.getElementById("result");
let convertedAmount = 0;
let format = '';
let button = document.getElementById("convertButton")

function vndToUsd() {

    return amount.value / currencyRatio

}
function usdToVnd() {

    return amount.value * currencyRatio
}

function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
        currency: type,
        style: "currency"
    });
    return formatter.format(value);
}
function convert() {

    getConversionRate(from, to);
    result.innerHTML = `result is ${convertedAmount}`
}

const currencyRatio = {
    vnd: {
        usd: 0.000043,
        krw: 0.051,
        eur: 0.000039,
        vnd: 1
    },
    usd: {
        usd: 1,
        krw: 1193.27,
        eur: 0.9,
        vnd: 23235.5
    },
    krw: {
        usd: 0.00084,
        krw: 1,
        eur: 0.00075,
        vnd: 19.47
    },
    eur: {
        eur: 1,
        vnd: 25328.80,
        usd: 108607,
        krw: 1327.75,
    }
};


function getConversionRate(from, to) {
    // from vnd
    if (from.value.toLowerCase() === "vnd" && to.value.toLowerCase() === "vnd") {

        convertedAmount = amount.value * currencyRatio.vnd.vnd;
        return convertedAmount

    }
    else if (from.value.toLowerCase() === "vnd" && to.value.toLowerCase() === "usd") {

        convertedAmount = amount.value * currencyRatio.vnd.usd
        return convertedAmount

    }
    else if (from.value.toLowerCase() === "vnd" && to.value.toLowerCase() === "krw") {

        convertedAmount = amount.value * currencyRatio.vnd.krw
        return convertedAmount

    }
    else if (from.value.toLowerCase() === "vnd" && to.value.toLowerCase() === "eur") {

        convertedAmount = amount.value * currencyRatio.vnd.eur
        return convertedAmount

    }
    // from usd
    else if (from.value.toLowerCase() === "usd" && to.value.toLowerCase() === "usd") {

        convertedAmount = amount.value * currencyRatio.usd.usd
        return convertedAmount

    }
    else if (from.value.toLowerCase() === "usd" && to.value.toLowerCase() === "vnd") {

        convertedAmount = amount.value * currencyRatio.usd.vnd
        return convertedAmount

    }
    else if (from.value.toLowerCase() === "usd" && to.value.toLowerCase() === "krw") {

        convertedAmount = amount.value * currencyRatio.usd.krw
        return convertedAmount

    }
    else if (from.value.toLowerCase() === "usd" && to.value.toLowerCase() === "eur") {

        convertedAmount = amount.value * currencyRatio.usd.eur
        return convertedAmount

    }
    // from krw
    else if (from.value.toLowerCase() === "krw" && to.value.toLowerCase() === "krw") {

        convertedAmount = amount.value * currencyRatio.krw.krw
        return convertedAmount

    }
    else if (from.value.toLowerCase() === "krw" && to.value.toLowerCase() === "vnd") {
        convertedAmount = amount.value * currencyRatio.krw.vnd
        return convertedAmount

    }
    else if (from.value.toLowerCase() === "krw" && to.value.toLowerCase() === "usd") {
        convertedAmount = amount.value * currencyRatio.krw.usd
        return convertedAmount
    }
    else if (from.value.toLowerCase() === "krw" && to.value.toLowerCase() === "eur") {
        convertedAmount = amount.value * currencyRatio.krw.eur
        return convertedAmount
    }
    // from EUR
    else if (from.value.toLowerCase() === "eur" && to.value.toLowerCase() === "eur") {

        convertedAmount = amount.value * currencyRatio.eur.eur
        return convertedAmount

    }
    else if (from.value.toLowerCase() === "eur" && to.value.toLowerCase() === "vnd") {
        convertedAmount = amount.value * currencyRatio.eur.vnd
        return convertedAmount

    }
    else if (from.value.toLowerCase() === "eur" && to.value.toLowerCase() === "usd") {
        convertedAmount = amount.value * currencyRatio.eur.usd
        return convertedAmount
    }
    else if (from.value.toLowerCase() === "eur" && to.value.toLowerCase() === "krw") {
        convertedAmount = amount.value * currencyRatio.eur.krw
        return convertedAmount
    }
    else {
        alert("You type wrong currency")
        return;
    }

}

