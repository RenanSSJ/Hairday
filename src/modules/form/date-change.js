import { scheduleDay } from "../schedule/load.js"

//select date input
const selectedDate = document.getElementById("date")

//reload time list when select a different date
selectedDate.onchange = () => scheduleDay()