const currentTime = moment().format('MMMM Do YYYY')

  document.querySelector("#currentTime").textContent = currentTime
  
  // $("form").on("submit", function (e) {
  //   e.preventDefault()
  //   console.log(e.target.querySelector("input").getAttribute("id"))
  //   console.log(e.target.querySelector("input").value)
  // })