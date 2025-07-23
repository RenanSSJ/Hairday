import { apiConfig } from "./api-config";

export async function scheduleNew({ name, when}) {
  try {
    //request schedule data
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, when }),
    })

    alert("Agendamento Realizado com Sucesso!")
    
  } catch (error) {
    console.log(error)
    alert("Nao foi possivel realizar agendamento. Tente novamente mais tarde.")
  }
}