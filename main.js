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

//working on input. selecting element matches the css
const taskInPut = document.querySelector(".task-input");
// console.log(taskInPut);

//Button. working on adding toDo. use method to allow selecting the first element that matches the css selectors
const addtaskbtn = document.querySelector(".add-task-btn");
// console.log(addtaskbtn);

const toDos = [];

addtaskbtn.addEventListener("click", (e) => {
  if (taskInPut.value == "") {
    const divs = document.querySelectorAll(".task-list").length;
    document.querySelector(".number-of-task").innerHTML = divs + "Tasks";
    console.log(taskInPut);
  } else {
    return "empty";
  }
  //   toDos.push(taskInPut.value);
  console.log(taskInPut);
});

//filter
let filter = document.querySelectorAll(".task-menu-container");
//filter+btn
//Second parameter is the function we want to call when the event occurs. Third parameter optional.
// Filter.forEach((btn) => {
//   btn.addEventListener("click", () => {});
// });
