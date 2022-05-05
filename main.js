// document.getElementById("demo").innerHTML = "hola";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const languages = navigator.language;
// console.log(languages);
const date = new Date();
// console.log(date);
let month = months[date.getMonth()];
// console.log(month);
let dayNumber = date.getDate();
// console.log(dayNumber);
let nameDay = date.toLocaleString(languages, { weekday: "long" });
// console.log(nameDay);

document.querySelector(".month").innerHTML = month;
document.querySelector(".date").innerHTML = nameDay + ", " + dayNumber;
