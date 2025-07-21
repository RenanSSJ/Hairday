import dayjs from "dayjs"
const form = document.querySelector("form")
const selectDate = document.getElementById("date")

// current date for input 
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// load current date
selectDate.value = inputToday
// block past dates
selectDate.min = inputToday


form.onsubmit = (event) => {
  // prevent form default behavior (reload page)
  event.preventDefault()

  console.log("enviado")
}

