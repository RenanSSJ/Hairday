import dayjs from "dayjs";

//select sections (morning, afternoon, night)
const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export function scheduleShow({ dailySchedules }) {
  try {
    periodMorning.innerHTML = ""
    periodAfternoon.innerHTML = ""
    periodNight.innerHTML = ""

    dailySchedules.array.forEach((schedule) =>{
      const item = document.createElement("li")
      const time = document.createElement("strong")
      const name = document.createElement("span")

      //add schedule id
      item.setAttribute("data-id", schedule.id)

      time.textContent = dayjs(schedule.when).format("HH:mm")
      name.textContent = schedule.name

      //create cancel icon
      const cancelIcon = document.createElement("img")
      cancelIcon.classList.add("cancel-icon")
      cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
      cancelIcon.setAttribute("alt", "Cancelar")
        
      //add time and name and icon to item
      item.append(time, name, cancelIcon)

      const hour = dayjs(schedule.when).hour()

      if(hour <= 12) {
        periodMorning.appendChild(item)
      }else if (hour > 12 && hour <= 18){
        periodAfternoon.appendChild(item)
      }else {
        periodNight.appendChild(item)
      }
    })
  
  } catch (error) {
    alert("Nao foi possivel exibir agendamentos.")
    console.log(error)
  }
}