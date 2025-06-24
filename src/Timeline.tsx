import React, { useState, useEffect } from 'react';
import TimelineEventForm from './Timeline/TimelineEventForm';
import Tooltip from './components/Tooltip';
import Button from './components/Button';
import { 
  TimelineRepository, 
  TimelineEvent, 
  FormData, 
  formatDateForDisplay,
  formatTimeForDisplay
} from './Timeline/TimelineRepository';

export default function Timeline() {
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<TimelineEvent | null>(null);
  
  // Form data for main create form
  const [formData, setFormData] = useState<FormData>(TimelineRepository.createEmptyFormData());

  // Separate state for modal form
  const [modalFormData, setModalFormData] = useState<FormData>(TimelineRepository.createEmptyFormData());

  // Load events from localStorage on component mount
  useEffect(() => {
    const loadedEvents = TimelineRepository.loadEvents();
    setEvents(loadedEvents);
  }, []);

  // Save events to localStorage whenever events change
  useEffect(() => {
    TimelineRepository.saveEvents(events);
  }, [events]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.date || !formData.label) {
      alert('Please fill in required fields');
      return;
    }

    const newEvent = TimelineRepository.createEvent(formData);
    const updatedEvents = TimelineRepository.addEvent(events, newEvent);
    setEvents(updatedEvents);
    resetForm();
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!modalFormData.date || !modalFormData.label || !editingEvent) {
      alert('Please fill in required fields');
      return;
    }

    const updatedEvent = TimelineRepository.updateEvent(editingEvent, modalFormData);
    const updatedEvents = TimelineRepository.replaceEvent(events, updatedEvent);
    setEvents(updatedEvents);
    
    setIsModalOpen(false);
    setEditingEvent(null);
    resetModalForm();
  };

  const resetForm = () => {
    setFormData(TimelineRepository.createEmptyFormData());
  };

  const resetModalForm = () => {
    setModalFormData(TimelineRepository.createEmptyFormData());
  };

  const handleEdit = (event: TimelineEvent) => {
    setEditingEvent(event);
    setModalFormData(TimelineRepository.eventToFormData(event));
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    const updatedEvents = TimelineRepository.deleteEvent(events, id);
    setEvents(updatedEvents);
  };

  const exportData = () => {
    TimelineRepository.exportToJson(events);
  };

  const importData = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const importedEvents = await TimelineRepository.importFromJson(file);
      setEvents(importedEvents);
      alert('Timeline data imported successfully!');
    } catch (error) {
      alert(`Failed to import timeline data: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
    
    // Reset the file input
    e.target.value = '';
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      handleSubmit(e as any);
    }
  };

  const handleModalKeyDown = (e: React.KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      handleModalSubmit(e as any);
    }
  };

  const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

  return (
    <div className="timeline">
      <h1>Case Timeline Editor</h1>
      <p>
        Track important events in your case. Hover over the ⓘ info icon next to each field 
        for specific guidance. Use {isMac ? 'Cmd+Enter' : 'Ctrl+Enter'} to quickly submit forms.
      </p>

      {/* Main Create Form */}
      <TimelineEventForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        onKeyDown={handleKeyDown}
        buttonText="Add Event"
        isModal={false}
        isEditing={false}
      />

      {/* Import/Export */}
      <div className="import-export-section">
        <Button 
          type="button" 
          variant="secondary"
          onClick={exportData}
        >
          Export Timeline Data
        </Button>
        <label className="import-btn">
          <span className="btn btn-secondary">
            Import Timeline Data
          </span>
          <input
            type="file"
            accept=".json"
            onChange={importData}
            style={{ display: 'none' }}
          />
        </label>
      </div>

      {/* Events Table */}
      <div className="events-section">
        <h2>Timeline Events ({events.length})</h2>
        {events.length === 0 ? (
          <p>No events recorded yet. Add your first event above.</p>
        ) : (
          <div className="events-table-container">
            <table className="events-table">
              <thead>
                <tr>
                  <th>&nbsp;</th>
                  <th>Date & Time</th>
                  <th>Type</th>
                  <th>Label</th>
                  <th>Description</th>
                  <th>Notice Details</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr key={event.id}>
                    <td>
                      {event.noticeFields?.complianceNotes ? (
                        <Tooltip content={event.noticeFields.complianceNotes}>
                          <div className={`compliance-status ${event.noticeFields.isCompliant ? 'compliant' : 'non-compliant'}`}>
                            {event.noticeFields.isCompliant ? '✅' : '⚠️'}
                          </div>
                        </Tooltip>
                      ) : (
                        '—'
                      )}
                    </td>
                    <td>
                      <div className="datetime-cell">
                        <div className="date">{formatDateForDisplay(event.date)}</div>
                        <div className="time">
                          {formatTimeForDisplay(event.time || '12:00')} {event.timezone || 'EST'}
                        </div>
                      </div>
                    </td>
                    <td>{event.eventType}</td>
                    <td>{event.label}</td>
                    <td>{event.description}</td>
                    <td>
                      {event.noticeFields ? (
                        <div className="notice-details">
                          <div><strong>Notice Says Due:</strong> {formatDateForDisplay(event.noticeFields.requiredNoticeDate)}</div>
                          <div><strong>Should Have Said:</strong> {formatDateForDisplay(event.noticeFields.calculatedCorrectDate)}</div>
                        </div>
                      ) : (
                        '—'
                      )}
                    </td>
                    <td className="actions-cell">
                      <Button 
                        onClick={() => handleEdit(event)}
                        variant="ghost"
                        size="small"
                        icon="✏️"
                      >
                        Edit
                      </Button>
                      <Button 
                        onClick={() => handleDelete(event.id)}
                        variant="danger"
                        size="small"
                        icon="🗑️"
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Edit Modal */}
      {isModalOpen && editingEvent && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Edit Event</h2>
            <TimelineEventForm
              formData={modalFormData}
              setFormData={setModalFormData}
              onSubmit={handleModalSubmit}
              onKeyDown={handleModalKeyDown}
              buttonText="Update Event"
              isModal={true}
              isEditing={true}
            />
            <Button 
              type="button" 
              onClick={() => setIsModalOpen(false)}
              variant="secondary"
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}   