import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours"
export function hoursLoad( { date }) {
  const opening = openingHours.map((hour) => {
  //get hour
    const [scheduleHour] = hour.split(":")
    //add hour to date and verify if past 
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())
    //verify if time available

    return{
      hour,
      available: isHourPast,  
    }
  })
}