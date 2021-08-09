// var age = 45;
// console.log(age);

// var today = moment();
// $("#currentDay").text(today.format("MMM Do, YYYY"));

var inputToDoEl = "ToDo";
console.log(inputToDoEl);

$("save-btn").on("click", function () {
  console.log("click");
});

function handleFormSubmit(event) {
  event.preventDefault();

  var calendarEvent = $("inputToDoEl");
  console.log("calendarEvent");
}

// localStorage.getItem;
//   inputToDoEl;
// inputToDoEl.textcontent = calendarEvent;
// // inputToDoEl.submit;
