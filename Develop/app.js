$(document).ready(function () {
  const currentTime = moment().format('MMMM Do YYYY')
  $("#currentTime").text(currentTime)

  const times = [21, 22, 23]

  times.forEach(time => {
    const timeCheck = window.localStorage.getItem(time)
    const currentHour = moment().hour()
    console.log(timeCheck)

    // console.log(currentHour)
      // console.log(time)

      if(currentHour > time) {
        $(`#${time}`).addClass("bg-danger text-light")
        $(`#${time}`).attr("disabled", true)
      } else if(currentHour === time) {
        $(`#${time}`).addClass("bg-secondary text-light")
      } else {
        $(`#${time}`).addClass("bg-success text-light")

      }

      if (timeCheck === null) {
        window.localStorage.setItem(time, "")
      } else if (timeCheck.length > 0) {
        $(`#${time}`).attr("value", window.localStorage.getItem(time))
      }
  })
    
  $("form").on("submit", function (e) {
    e.preventDefault()
    var time = e.target.querySelector("input").getAttribute("id")
    var toDo = e.target.querySelector("input").value
    window.localStorage.setItem(time, toDo)
  //   console.log(e.target.querySelector("input").getAttribute("id"))
  //   console.log(e.target.querySelector("input").value)
  })
})