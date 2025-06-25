import { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import type { EventInput } from '@fullcalendar/core';
import EventFormModal from './EventFormModal/EventFormModal';

function Calendar() {
  const [events, setEvents] = useState<EventInput[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [newEventData, setNewEventData] = useState({
    title: '',
    startDate: '',
    startTime: '',
    endTime: '',
  });
  const [selectedRange, setSelectedRange] = useState<{ startStr: string; endStr: string } | null>(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/events')
      .then(res => res.json())
      .then(data => {
        const mappedEvents = data.map((event: any) => ({
          id: event._id,
          title: event.title,
          start: event.start,
          end: event.end,
          allDay: event.allDay,
        }));
        setEvents(mappedEvents);
      })
      .catch(err => console.error('Error cargando eventos:', err));
  }, []);

  function handleDateSelect(selectInfo: any) {
    setSelectedRange({ startStr: selectInfo.startStr, endStr: selectInfo.endStr });
    setNewEventData({
      title: '',
      startDate: selectInfo.startStr.slice(0, 10),
      startTime: '09:00',
      endTime: '10:00',
    });
    setShowForm(true);
  }

  function handleAddEvent(event: EventInput & { _id?: string }) {
    setEvents([...events, {
      id: event._id || String(Date.now()),
      title: event.title,
      start: event.start,
      end: event.end,
      allDay: event.allDay || false,
    }]);
    setShowForm(false);
  }

  function handleEventClick(clickInfo: any) {
    if (window.confirm(`¿Quieres eliminar el evento '${clickInfo.event.title}'?`)) {
      fetch(`http://localhost:5000/api/events/${clickInfo.event.id}`, {
        method: 'DELETE',
      })
        .then(res => {
          if (!res.ok) throw new Error('Error borrando evento');
          setEvents(events.filter(e => e.id !== clickInfo.event.id));
          clickInfo.event.remove();
        })
        .catch(err => alert(err.message));
    }
  }

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        selectable={true}
        select={handleDateSelect}
        events={events}
        eventClick={handleEventClick}
        editable={true}
      />

      {showForm && selectedRange && (
        <EventFormModal
          initialData={newEventData}
          onClose={() => setShowForm(false)}
          onSave={handleAddEvent}
        />
      )}
    </>
  );
}

export default Calendar;
