import { scheduleDay } from "./load"
import { scheduleCancel } from "../../services/schedule-cancel"

const periods = document.querySelectorAll(".period")

//click event for list
periods.forEach((periods) => {
  periods.addEventListener("click", async (event) =>{
    if(event.target.classList.contains("cancel-icon")) {
      //obtain parent li from clicked element
      const item = event.target.closest("li")
      const { id } = item.dataset

      if(id) {
        const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")
      
        if(isConfirm) {
        await scheduleCancel({ id })
        scheduleDay()
        }
      }  
    }
  })
})