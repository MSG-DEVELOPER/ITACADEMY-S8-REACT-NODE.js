import { ModalBackground,ModalForm } from "./EventFormModal.style";
import { useState } from 'react';
import type { EventInput } from '@fullcalendar/core';


interface EventFormModalProps {
  initialData: {
    title: string;
    startDate: string;
    startTime: string;
    endTime: string;
  };
  onClose: () => void;
  onSave: (event: EventInput & { _id?: string }) => void;
}

export default function EventFormModal({ initialData, onClose, onSave }: EventFormModalProps) {
  const [formData, setFormData] = useState(initialData);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.title) {
      alert('El título es obligatorio');
      return;
    }

    const startISO = new Date(`${formData.startDate}T${formData.startTime}`).toISOString();
    const endISO = new Date(`${formData.startDate}T${formData.endTime}`).toISOString();

    const newEvent: EventInput = {
      title: formData.title,
      start: startISO,
      end: endISO,
      allDay: false,
    };

    fetch('http://localhost:5000/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newEvent),
    })
      .then(res => {
        if (!res.ok) throw new Error('Error guardando evento');
        return res.json();
      })
      .then(savedEvent => {
        onSave(savedEvent);
      })
      .catch(err => alert(err.message));
  }

  return (
    <ModalBackground>
      <ModalForm onSubmit={handleSubmit}>
        <h3>Nuevo evento</h3>
        <label>
          Título:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
            autoFocus
          />
        </label>
        <label>
          Fecha:
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Hora inicio:
          <input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Hora fin:
          <input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Guardar</button>
        <button type="button" onClick={onClose}>Cancelar</button>
      </ModalForm>
    </ModalBackground>
  );
}