import React, { useState, useEffect, useRef } from 'react';

interface NoticeFields {
  noticeDateGiven?: string; // When notice was delivered
  requiredNoticeDate?: string; // What the notice says payment is due
  calculatedCorrectDate?: string; // What the notice should have said
  isCompliant?: boolean;
  complianceNotes?: string;
}

interface TimelineEvent {
  id: string;
  date: string;
  eventType: string;
  label: string;
  description: string;
  noticeFields?: NoticeFields;
}

const EVENT_TYPES = [
  '3-Day Notice (Non-Payment)',
  '7-Day Notice (Cure)',
  '7-Day Notice (Unconditional Quit)',
  '30-Day Notice (Non-Renewal)',
  'Email',
  'Phone Call',
  'Court Filing',
  'Payment Made',
  'Property Inspection',
  'Repair Request',
  'Other'
];

// Florida Court Holidays (official schedule)
const FLORIDA_COURT_HOLIDAYS = [
  // 2024 (common holidays)
  '2024-01-01', // New Year's Day
  '2024-01-15', // Martin Luther King Jr. Day
  '2024-03-29', // Good Friday
  '2024-05-27', // Memorial Day
  '2024-07-04', // Independence Day
  '2024-09-02', // Labor Day
  '2024-10-03', // Rosh Hashanah
  '2024-10-12', // Yom Kippur
  '2024-11-11', // Veterans Day
  '2024-11-28', // Thanksgiving
  '2024-11-29', // Friday after Thanksgiving
  '2024-12-24', // Christmas Eve
  '2024-12-25', // Christmas Day
  '2024-12-26', // Day after Christmas

  // 2025 (official schedule)
  '2025-01-01', // New Year's Day - Wednesday, January 1, 2025
  '2025-01-20', // Martin Luther King Jr. Day - Monday, January 20, 2025
  '2025-04-18', // Good Friday - Friday, April 18, 2025
  '2025-05-26', // Memorial Day - Monday, May 26, 2025
  '2025-07-04', // Independence Day - Friday, July 4, 2025
  '2025-09-01', // Labor Day - Monday, September 1, 2025
  '2025-09-23', // Rosh Hashanah - Tuesday, September 23, 2025
  '2025-10-02', // Yom Kippur - Thursday, October 2, 2025
  '2025-11-11', // Veterans' Day - Tuesday, November 11, 2025
  '2025-11-27', // Thanksgiving Day - Thursday, November 27, 2025
  '2025-11-28', // Friday after Thanksgiving - Friday, November 28, 2025
  '2025-12-24', // Christmas Eve - Wednesday, December 24, 2025
  '2025-12-25', // Christmas Day - Thursday, December 25, 2025
  '2025-12-26', // Day After Christmas - Friday, December 26, 2025

  // 2026 (estimated common holidays)
  '2026-01-01', // New Year's Day
  '2026-01-19', // Martin Luther King Jr. Day
  '2026-04-03', // Good Friday (estimated)
  '2026-05-25', // Memorial Day
  '2026-07-03', // Independence Day observed (Friday)
  '2026-09-07', // Labor Day
  '2026-09-14', // Rosh Hashanah (estimated)
  '2026-09-23', // Yom Kippur (estimated)
  '2026-11-11', // Veterans Day
  '2026-11-26', // Thanksgiving
  '2026-11-27', // Friday after Thanksgiving
  '2026-12-24', // Christmas Eve
  '2026-12-25', // Christmas Day
  '2026-12-28', // Day after Christmas (observed Monday)
];

// Helper function to check if date is a Florida court holiday
const isFloridaCourtHoliday = (date: Date): boolean => {
  const dateString = date.toISOString().split('T')[0];
  return FLORIDA_COURT_HOLIDAYS.includes(dateString);
};

// Helper function to add business days (excluding weekends and Florida court holidays)
const addBusinessDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  let addedDays = 0;
  
  while (addedDays < days) {
    result.setDate(result.getDate() + 1);
    // Skip weekends (0 = Sunday, 6 = Saturday) and court holidays
    if (result.getDay() !== 0 && result.getDay() !== 6 && !isFloridaCourtHoliday(result)) {
      addedDays++;
    }
  }
  
  return result;
};

// Helper function to format date for display (fixes timezone issue)
const formatDateForDisplay = (dateString: string): string => {
  // Create date without timezone issues by adding 'T12:00:00' to force local interpretation
  const date = new Date(dateString + 'T12:00:00');
  return date.toLocaleDateString();
};

// Helper function to check notice compliance
const checkNoticeCompliance = (deliveryDate: string, noticeDueDate: string): { 
  isCompliant: boolean; 
  notes: string;
  calculatedCorrectDate: string;
} => {
  if (!deliveryDate || !noticeDueDate) {
    return { 
      isCompliant: false, 
      notes: 'Missing notice dates',
      calculatedCorrectDate: ''
    };
  }
  
  const deliveredDate = new Date(deliveryDate + 'T12:00:00');
  const noticeDue = new Date(noticeDueDate + 'T12:00:00');
  const calculatedCorrect = addBusinessDays(deliveredDate, 3);
  
  const isCompliant = calculatedCorrect <= noticeDue;
  
  const calculatedCorrectDateString = calculatedCorrect.toISOString().split('T')[0];
  
  if (isCompliant) {
    return { 
      isCompliant: true, 
      notes: '✅ Proper 3-day notice period provided (excludes weekends & FL court holidays)',
      calculatedCorrectDate: calculatedCorrectDateString
    };
  } else {
    const businessDays = getBusinessDaysBetween(deliveredDate, noticeDue);
    return { 
      isCompliant: false, 
      notes: `⚠️ Insufficient notice period. Only ${businessDays} business days provided. FL Stat § 83.56 requires 3 full business days (excluding weekends & court holidays).`,
      calculatedCorrectDate: calculatedCorrectDateString
    };
  }
};

// Helper function to count business days between two dates
const getBusinessDaysBetween = (startDate: Date, endDate: Date): number => {
  let count = 0;
  const current = new Date(startDate);
  current.setDate(current.getDate() + 1); // Start counting from day after delivery
  
  while (current < endDate) {
    if (current.getDay() !== 0 && current.getDay() !== 6 && !isFloridaCourtHoliday(current)) {
      count++;
    }
    current.setDate(current.getDate() + 1);
  }
  
  return count;
};

export default function Timeline() {
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<TimelineEvent | null>(null);
  const [formData, setFormData] = useState({
    date: '',
    eventType: EVENT_TYPES[0],
    label: '',
    description: '',
    noticeFields: {
      requiredNoticeDate: ''
    }
  });

  // Separate state for modal form
  const [modalFormData, setModalFormData] = useState({
    date: '',
    eventType: EVENT_TYPES[0],
    label: '',
    description: '',
    noticeFields: {
      requiredNoticeDate: ''
    }
  });

  const dateRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLInputElement>(null);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('timeline-events');
    if (saved) {
      try {
        setEvents(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved events:', e);
      }
    }
  }, []);

  // Save to localStorage whenever events change
  useEffect(() => {
    localStorage.setItem('timeline-events', JSON.stringify(events));
  }, [events]);

  // Focus date field when component mounts
  useEffect(() => {
    if (dateRef.current) {
      dateRef.current.focus();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.date || !formData.label) {
      alert('Date and Label are required');
      return;
    }

    let noticeFields: NoticeFields | undefined;
    
    // Handle 3-Day Notice specific fields
    if (formData.eventType === '3-Day Notice (Non-Payment)') {
      if (formData.date && formData.noticeFields.requiredNoticeDate) {
        const compliance = checkNoticeCompliance(
          formData.date, // delivery date
          formData.noticeFields.requiredNoticeDate
        );
        
        noticeFields = {
          noticeDateGiven: formData.date, // delivery date
          requiredNoticeDate: formData.noticeFields.requiredNoticeDate,
          calculatedCorrectDate: compliance.calculatedCorrectDate,
          isCompliant: compliance.isCompliant,
          complianceNotes: compliance.notes
        };
      }
    }

    const newEvent: TimelineEvent = {
      id: Date.now().toString(),
      date: formData.date,
      eventType: formData.eventType,
      label: formData.label,
      description: formData.description,
      ...(noticeFields && { noticeFields })
    };

    setEvents(prev => [...prev, newEvent].sort((a, b) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    ));

    resetForm();
    if (dateRef.current) {
      dateRef.current.focus();
    }
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!modalFormData.date || !modalFormData.label || !editingEvent) {
      alert('Date and Label are required');
      return;
    }

    let noticeFields: NoticeFields | undefined;
    
    // Handle 3-Day Notice specific fields
    if (modalFormData.eventType === '3-Day Notice (Non-Payment)') {
      if (modalFormData.date && modalFormData.noticeFields.requiredNoticeDate) {
        const compliance = checkNoticeCompliance(
          modalFormData.date, // delivery date
          modalFormData.noticeFields.requiredNoticeDate
        );
        
        noticeFields = {
          noticeDateGiven: modalFormData.date, // delivery date
          requiredNoticeDate: modalFormData.noticeFields.requiredNoticeDate,
          calculatedCorrectDate: compliance.calculatedCorrectDate,
          isCompliant: compliance.isCompliant,
          complianceNotes: compliance.notes
        };
      }
    }

    const updatedEvent: TimelineEvent = {
      id: editingEvent.id,
      date: modalFormData.date,
      eventType: modalFormData.eventType,
      label: modalFormData.label,
      description: modalFormData.description,
      ...(noticeFields && { noticeFields })
    };

    setEvents(prev => prev.map(event => 
      event.id === editingEvent.id ? updatedEvent : event
    ).sort((a, b) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    ));

    resetModalForm();
  };

  const resetForm = () => {
    setFormData({
      date: '',
      eventType: EVENT_TYPES[0],
      label: '',
      description: '',
      noticeFields: {
        requiredNoticeDate: ''
      }
    });
  };

  const resetModalForm = () => {
    setModalFormData({
      date: '',
      eventType: EVENT_TYPES[0],
      label: '',
      description: '',
      noticeFields: {
        requiredNoticeDate: ''
      }
    });
    setEditingEvent(null);
    setIsModalOpen(false);
  };

  const handleEdit = (event: TimelineEvent) => {
    setEditingEvent(event);
    setModalFormData({
      date: event.date,
      eventType: event.eventType,
      label: event.label,
      description: event.description,
      noticeFields: {
        requiredNoticeDate: event.noticeFields?.requiredNoticeDate || ''
      }
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this event?')) {
      setEvents(prev => prev.filter(event => event.id !== id));
    }
  };

  const exportData = () => {
    const dataStr = JSON.stringify(events, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'timeline-events.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const importData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const importedEvents = JSON.parse(event.target?.result as string);
        if (Array.isArray(importedEvents)) {
          setEvents(importedEvents.sort((a, b) => 
            new Date(a.date).getTime() - new Date(b.date).getTime()
          ));
        } else {
          alert('Invalid file format');
        }
      } catch (error) {
        alert('Failed to parse JSON file');
      }
    };
    reader.readAsText(file);
    e.target.value = ''; // Reset file input
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      handleSubmit(e as any);
    } else if (e.key === 'Escape') {
      resetForm();
    }
  };

  const handleModalKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      handleModalSubmit(e as any);
    } else if (e.key === 'Escape') {
      resetModalForm();
    }
  };

  const is3DayNotice = formData.eventType === '3-Day Notice (Non-Payment)';
  const isModal3DayNotice = modalFormData.eventType === '3-Day Notice (Non-Payment)';

  // Detect Mac for keyboard shortcut hint
  const isMac = typeof navigator !== 'undefined' && navigator.platform.toUpperCase().indexOf('MAC') >= 0;
  const shortcutKey = isMac ? 'Cmd' : 'Ctrl';

  return (
    <div className="timeline-container">
      <header>
        <h1>Timeline Editor</h1>
        <p className="subtitle">Track important events in your eviction case</p>
      </header>

      <div className="timeline-controls">
        <button onClick={exportData} className="btn-secondary">
          Export JSON
        </button>
        <label className="btn-secondary file-input-label">
          Import JSON
          <input
            type="file"
            accept=".json"
            onChange={importData}
            style={{ display: 'none' }}
          />
        </label>
      </div>

      <form onSubmit={handleSubmit} className="timeline-form" onKeyDown={handleKeyDown}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">
              {is3DayNotice ? 'Date Notice Delivered *' : 'Date *'}
            </label>
            <input
              ref={dateRef}
              id="date"
              type="date"
              value={formData.date}
              onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="eventType">Event Type</label>
            <select
              id="eventType"
              value={formData.eventType}
              onChange={(e) => setFormData(prev => ({ 
                ...prev, 
                eventType: e.target.value,
                // Reset notice fields when changing event type
                noticeFields: {
                  requiredNoticeDate: ''
                }
              }))}
            >
              {EVENT_TYPES.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="label">Label *</label>
            <input
              ref={labelRef}
              id="label"
              type="text"
              value={formData.label}
              onChange={(e) => setFormData(prev => ({ ...prev, label: e.target.value }))}
              placeholder="Brief description"
              required
            />
          </div>
        </div>

        {/* Conditional 3-Day Notice Fields */}
        {is3DayNotice && (
          <div className="notice-fields">
            <h4 className="notice-fields-header">3-Day Notice Analysis</h4>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="requiredNoticeDate">Date Notice Says Payment Due</label>
                <input
                  id="requiredNoticeDate"
                  type="date"
                  value={formData.noticeFields.requiredNoticeDate}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    noticeFields: { 
                      ...prev.noticeFields, 
                      requiredNoticeDate: e.target.value 
                    } 
                  }))}
                />
              </div>
              
              {formData.date && formData.noticeFields.requiredNoticeDate && (
                <div className="form-group">
                  <label>Calculated Correct Date</label>
                  <div className="calculated-date-display">
                    {(() => {
                      const compliance = checkNoticeCompliance(
                        formData.date, 
                        formData.noticeFields.requiredNoticeDate
                      );
                      return formatDateForDisplay(compliance.calculatedCorrectDate);
                    })()}
                  </div>
                  <small className="calculated-date-help">
                    3 business days after delivery (excluding weekends & FL court holidays)
                  </small>
                </div>
              )}
            </div>
            
            {formData.date && formData.noticeFields.requiredNoticeDate && (
              <div className="compliance-check">
                {(() => {
                  const compliance = checkNoticeCompliance(
                    formData.date, 
                    formData.noticeFields.requiredNoticeDate
                  );
                  return (
                    <div className={`compliance-status ${compliance.isCompliant ? 'compliant' : 'non-compliant'}`}>
                      {compliance.notes}
                    </div>
                  );
                })()}
              </div>
            )}
            
            <p className="notice-help-text">
              <strong>Florida Law:</strong> A 3-day notice must provide at least 3 full business days (excluding weekends and court holidays) 
              before payment is due per FL Stat § 83.56. Court holidays include New Year's Day, Martin Luther King Jr. Day, Good Friday, 
              Memorial Day, Independence Day, Labor Day, Rosh Hashanah, Yom Kippur, Veterans Day, Thanksgiving, and Christmas holidays.
            </p>
          </div>
        )}

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            placeholder="Detailed notes..."
            rows={3}
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-primary">
            Add Event
          </button>
        </div>
        <p className="form-hint">Press {shortcutKey}+Enter to submit, Esc to cancel</p>
      </form>

      <div className="events-table-container">
        <table className="events-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Event Type</th>
              <th>Label</th>
              <th>Description</th>
              <th>Notice Details</th>
              <th>Compliance</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.length === 0 ? (
              <tr>
                <td colSpan={7} className="no-events">
                  No events yet. Add your first event above.
                </td>
              </tr>
            ) : (
              events.map(event => (
                <tr key={event.id}>
                  <td>{formatDateForDisplay(event.date)}</td>
                  <td>{event.eventType}</td>
                  <td>{event.label}</td>
                  <td className="description-cell">{event.description}</td>
                  <td className="notice-details-cell">
                    {event.noticeFields ? (
                      <div className="notice-details">
                        <div><strong>Due:</strong> {formatDateForDisplay(event.noticeFields.requiredNoticeDate || '')}</div>
                        <div><strong>Should have been:</strong> {formatDateForDisplay(event.noticeFields.calculatedCorrectDate || '')}</div>
                      </div>
                    ) : (
                      '-'
                    )}
                  </td>
                  <td className="compliance-cell">
                    {event.noticeFields?.complianceNotes ? (
                      <span className={`compliance-indicator ${event.noticeFields.isCompliant ? 'compliant' : 'non-compliant'}`}>
                        {event.noticeFields.isCompliant ? '✅' : '⚠️'}
                      </span>
                    ) : (
                      '-'
                    )}
                  </td>
                  <td className="actions-cell">
                    <button 
                      onClick={() => handleEdit(event)}
                      className="btn-small btn-primary"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(event.id)}
                      className="btn-small btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal for editing */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Edit Event</h3>
            <form onSubmit={handleModalSubmit} onKeyDown={handleModalKeyDown}>
              <div className="form-group">
                <label htmlFor="modal-date">
                  {isModal3DayNotice ? 'Date Notice Delivered *' : 'Date *'}
                </label>
                <input
                  id="modal-date"
                  type="date"
                  value={modalFormData.date}
                  onChange={(e) => setModalFormData(prev => ({ ...prev, date: e.target.value }))}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="modal-eventType">Event Type</label>
                <select
                  id="modal-eventType"
                  value={modalFormData.eventType}
                  onChange={(e) => setModalFormData(prev => ({ 
                    ...prev, 
                    eventType: e.target.value,
                    noticeFields: {
                      requiredNoticeDate: ''
                    }
                  }))}
                >
                  {EVENT_TYPES.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="modal-label">Label *</label>
                <input
                  id="modal-label"
                  type="text"
                  value={modalFormData.label}
                  onChange={(e) => setModalFormData(prev => ({ ...prev, label: e.target.value }))}
                  required
                />
              </div>

              {/* Conditional 3-Day Notice Fields in Modal */}
              {isModal3DayNotice && (
                <div className="notice-fields">
                  <h4 className="notice-fields-header">3-Day Notice Analysis</h4>
                  <div className="form-group">
                    <label htmlFor="modal-requiredNoticeDate">Date Notice Says Payment Due</label>
                    <input
                      id="modal-requiredNoticeDate"
                      type="date"
                      value={modalFormData.noticeFields.requiredNoticeDate}
                      onChange={(e) => setModalFormData(prev => ({ 
                        ...prev, 
                        noticeFields: { 
                          ...prev.noticeFields, 
                          requiredNoticeDate: e.target.value 
                        } 
                      }))}
                    />
                  </div>
                  
                  {modalFormData.date && modalFormData.noticeFields.requiredNoticeDate && (
                    <>
                      <div className="form-group">
                        <label>Calculated Correct Date</label>
                        <div className="calculated-date-display">
                          {(() => {
                            const compliance = checkNoticeCompliance(
                              modalFormData.date, 
                              modalFormData.noticeFields.requiredNoticeDate
                            );
                            return formatDateForDisplay(compliance.calculatedCorrectDate);
                          })()}
                        </div>
                        <small className="calculated-date-help">
                          3 business days after delivery (excluding weekends & FL court holidays)
                        </small>
                      </div>
                      
                      <div className="compliance-check">
                        {(() => {
                          const compliance = checkNoticeCompliance(
                            modalFormData.date, 
                            modalFormData.noticeFields.requiredNoticeDate
                          );
                          return (
                            <div className={`compliance-status ${compliance.isCompliant ? 'compliant' : 'non-compliant'}`}>
                              {compliance.notes}
                            </div>
                          );
                        })()}
                      </div>
                    </>
                  )}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="modal-description">Description</label>
                <textarea
                  id="modal-description"
                  value={modalFormData.description}
                  onChange={(e) => setModalFormData(prev => ({ ...prev, description: e.target.value }))}
                  rows={4}
                />
              </div>

              <div className="modal-actions">
                <button type="submit" className="btn-primary">Update Event</button>
                <button type="button" onClick={() => resetModalForm()} className="btn-secondary">
                  Cancel
                </button>
              </div>
              <p className="form-hint">Press {shortcutKey}+Enter to submit, Esc to cancel</p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}   