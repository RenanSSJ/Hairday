export function hoursClick() {
  const hours = document.querySelectorAll(".hour-available")

  hours.forEach((available) => {
    available.addEventListener("click", (selected) => {
      // Remove 'hour-selected' class from all non-selected <li> elements
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected")
      })
      //add class to selected li
      selected.target.classList.add("hour-selected")
    })
  })
}