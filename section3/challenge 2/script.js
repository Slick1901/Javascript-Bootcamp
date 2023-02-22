function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
console.log(calcTip(100)); // Output: 15
const bills = [125, 555, 44];
const tips = bills.map(bill => calcTip(bill));
console.log(tips); // Output: [18.75, 111, 8.8]
const totals = bills.map((bill, index) => bill + tips[index]);
console.log(totals); // Output: [143.75, 666, 52.8]
