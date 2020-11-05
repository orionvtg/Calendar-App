const currentDay = moment().format('MMMM Do YYYY');

$("#currentDay").textContent = currentDay

$("form").on("submit", function (e) {
  e.preventDefault()
  
})