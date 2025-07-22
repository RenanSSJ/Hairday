import dayjs from "dayjs"

import { scheduleNew } from "../../services/schedule-new.js"
import { scheduleDay } from "../schedule/load.js"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectDate = document.getElementById("date")

// current date for input 
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// load current date
selectDate.value = inputToday
// block past dates
selectDate.min = inputToday


form.onsubmit = async (event) => {
  // prevent form default behavior (reload page)
  event.preventDefault()

 try {
  //get client name
  const name = clientName.value.trim()
  
  if(!name) {
    return alert("Informe nome do cliente!")
  }

  const hourSelected = document.querySelector(".hour-selected")
  
  if (!hourSelected) {
    return aler ("Selecione hora!")
  }

  //get only hour
  const [hour] = hourSelected.innerText.split(":")

  //insert time in the date
  const when = dayjs(selectDate.value).add(hour, "hour")

  //generate ID
  const id = new Date().getTime()
  
  await scheduleNew({
    id,
    name,
    when,
  })

  await scheduleDay()
 } catch (error) {
  alert("Nao foi possivel realizar o agendamento")
  console.log(error)
 }
}

