const fromEuroToDollar = function(EuroToExchange) {
    let valueInDollar = EuroToExchange * 1.07;
    return valueInDollar;
}

const fromDollarToYen = function(DollarToExchange) {
    let valueDollarToEuro = (1/1.07);
    let valueDollarToYen = (valueDollarToEuro * 156.5); 
    let valueInYen = DollarToExchange * valueDollarToYen;
    return valueInYen; 
}
const fromYenToPound = function(PoundToExchange) {
    let valuePoundToEuro = (1/0.87);
    let valueEuroToYen = ((valuePoundToEuro)*156.5);
    let valuePoundToYen = (PoundToExchange * valueEuroToYen);
    return valuePoundToYen
}



const sum =(a,b) => {
    return a + b
}
console.log(sum(7,3))
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };