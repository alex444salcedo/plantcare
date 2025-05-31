import { useState } from 'react'

type Reminder = {
  id: number
  plantaNombre: string
  tarea: string
  fecha: string
  completada: boolean
}

const recordatoriosMock: Reminder[] = [
  { id: 1, plantaNombre: 'Cactus', tarea: 'Regar', fecha: '2025-06-01', completada: false },
  { id: 2, plantaNombre: 'Helecho', tarea: 'Fertilizar', fecha: '2025-06-03', completada: true },
  { id: 3, plantaNombre: 'Orquídea', tarea: 'Revisar plagas', fecha: '2025-06-05', completada: false },
]

export default function Reminders() {
  const [reminders, setReminders] = useState(recordatoriosMock)

  const toggleCompleted = (id: number) => {
    setReminders((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, completada: !r.completada } : r
      )
    )
  }

  return (
    <div className="container mt-4" style={{ maxWidth: 700 }}>
      <h2>Recordatorios de cuidado</h2>
      {reminders.length === 0 ? (
        <p>No hay recordatorios pendientes.</p>
      ) : (
        <ul className="list-group">
          {reminders.map((reminder) => (
            <li
              key={reminder.id}
              className={`list-group-item d-flex justify-content-between align-items-center ${
                reminder.completada ? 'list-group-item-success' : ''
              }`}
            >
              <div>
                <strong>{reminder.plantaNombre}</strong>: {reminder.tarea} —{' '}
                <small>{reminder.fecha}</small>
              </div>
              <button
                className={`btn btn-sm ${
                  reminder.completada ? 'btn-outline-success' : 'btn-success'
                }`}
                onClick={() => toggleCompleted(reminder.id)}
              >
                {reminder.completada ? 'Completado' : 'Marcar como hecho'}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
