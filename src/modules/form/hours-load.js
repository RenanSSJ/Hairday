import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours"
import { hoursClick } from "./hours-click"

const hours = document.getElementById("hours")

export function hoursLoad( { date, dailySchedules }) {
  //clear time list
  hours.innerHTML = ""

  //check for unavaible time
  const unavailableHours = dailySchedules.map((schedule) => 
    dayjs(schedule.when).format("HH:mm"))
  

  const opening = openingHours.map((hour) => {
    //get hour
    const [scheduleHour] = hour.split(":")
    //add hour to date and verify if past 
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())

    //verify if time available
    const available = !unavailableHours.includes(hour) && !isHourPast

    return{
      hour,
      available: isHourPast,  
    }
  })
  
  //show time
  opening.forEach(({ hour, available}) => {
    const li = document.createElement("li")

    li.classList.add("hour")
    li.classList.add(available ? "hour-available" : "hour-unavailable")

    li.textContent = hour

    if(hour === "9:00") {
      hourHeaderAdd("Manhã")
    }else if (hour === "13:00") {
      hourHeaderAdd("Tarde")
    }else if (hour === "18:00"){
      hourHeaderAdd("Noite")
    }

    hours.append(li)
  })

  //add click event to available time
  hoursClick()
}

function hourHeaderAdd(title) {
  const header = document.createElement("li")
  header.classList.add("hour-period")
  header.textContent = title
  hours.append(header)
}