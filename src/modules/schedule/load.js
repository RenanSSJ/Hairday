import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day"
import { hoursLoad } from "../form/hours-load"
import { scheduleShow } from "./show"

const selectDate = document.getElementById("date")

export async function scheduleDay() {
  //date
  const date = selectDate.value

  //fetch schedules from API
  const dailySchedules = await scheduleFetchByDay({ date })
  
  //show schedules
  scheduleShow({ dailySchedules })

  // available time
  hoursLoad({ date, dailySchedules })
}