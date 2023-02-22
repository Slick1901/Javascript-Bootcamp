function printForecast(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `... ${arr[i]}ºC in ${i + 1} days `;
  }
  console.log(str);
}
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

printForecast(data1); // output: "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days "
printForecast(data2); // output: "... 12ºC in 1 days ... 5ºC in 2 days ... -5ºC in 3 days"
