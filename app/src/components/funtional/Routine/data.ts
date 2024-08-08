import { Schedule } from "./Routine";

const defaultSchedule: Schedule[] = [
  {
    time: "07:00",
    activity: "Despierta, haz ejercicio ligero, y desayuna",
    completed: false,
  },
  {
    time: "08:00",
    activity: "Prepárate para el día (ducha, vestimenta, etc.)",
    completed: false,
  },
  {
    time: "09:00",
    activity: "Revisa correos y planifica las tareas del día",
    completed: false,
  },
  {
    time: "09:30",
    activity: "Trabajo enfocado en tareas prioritarias",
    completed: false,
  },
  {
    time: "11:00",
    activity: "Descanso corto (estiramiento y agua)",
    completed: false,
  },
  {
    time: "11:15",
    activity: "Continuación del trabajo en tareas importantes",
    completed: false,
  },
  { time: "13:00", activity: "Almuerzo y desconexión", completed: false },
  {
    time: "14:00",
    activity: "Trabajo en tareas de seguimiento y reuniones",
    completed: false,
  },
  { time: "15:30", activity: "Descanso corto (café o té)", completed: false },
  {
    time: "15:45",
    activity: "Finaliza tareas pendientes y revisa correos",
    completed: false,
  },
  {
    time: "17:00",
    activity: "Planificación para el siguiente día y tareas ligeras",
    completed: false,
  },
  {
    time: "18:00",
    activity: "Relájate y realiza alguna actividad que disfrutes",
    completed: false,
  },
  { time: "19:00", activity: "Cena", completed: false },
  {
    time: "20:00",
    activity: "Tiempo libre para hobbies o familia",
    completed: false,
  },
  { time: "22:00", activity: "Hora de acostarte", completed: false },
];

export { defaultSchedule };
