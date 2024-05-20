var costPrice = 799;
var sellingPrice = 199;

var discount = (costPrice-sellingPrice)/costPrice*100;

//console.log(discount);

var roundDiscount = Math.round(discount);

console.log(roundDiscount);
console.log(typeof roundDiscount);