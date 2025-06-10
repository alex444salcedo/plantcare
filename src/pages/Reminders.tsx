import { useState } from 'react';
import { RemindersContainer, Title, ReminderItem, Button } from './Reminders.styles';

export default function Reminders() {
  const [reminders, setReminders] = useState([
    { id: 1, task: 'Regar Cactus', dueDate: '2025-06-01', completed: false },
    { id: 2, task: 'Fertilizar Helecho', dueDate: '2025-06-05', completed: true },
    { id: 3, task: 'Revisar plagas Orquídea', dueDate: '2025-06-10', completed: false },
  ]);

  return (
    <RemindersContainer>
      <Title>Recordatorios</Title>
      <ul>
        {reminders.map((reminder) => (
          <ReminderItem key={reminder.id}>
            <div>
              <h3>{reminder.task}</h3>
              <p>Fecha: {reminder.dueDate}</p>
            </div>
            <Button>{reminder.completed ? 'Completado' : 'Marcar como completado'}</Button>
          </ReminderItem>
        ))}
      </ul>
    </RemindersContainer>
  );
}
