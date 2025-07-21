import dayjs from "dayjs"
import { apiConfig } from "./api-config"

export async function scheduleFetchByDay({ date}) {
  try {
    //request
    const response = await fetch(`${apiConfig.baseURL}/schedules`)
    //convert to json
    const data = await response.json()
    //filter schedule by selected date
    const dailySchedules = data.filter(( schedule ) => dayjs(date).isSame(schedule.when, "day"))

    return dailySchedules

  } catch (error) {
    console.log(error)
    alert("Nao foi possivel encontrar agendamentos do dia selecionado")
  }
}