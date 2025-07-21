import { hoursLoad } from "../form/hours-load"

const selectDate = document.getElementById("date")

export function scheduleDay() {
  //date
  const date = selectDate.value
  // available time
  hoursLoad({date})
}