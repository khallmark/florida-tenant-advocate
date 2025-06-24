import React from 'react';
import TimelineEventFormRenderer from './TimelineEventFormRenderer';
import Tooltip from '../../components/Tooltip';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import { FormData, EVENT_TYPES, getTimezoneForDate } from './TimelineRepository';

interface TimelineEventFormProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  onSubmit: (e: React.FormEvent) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  buttonText: string;
  isModal: boolean;
}

export default function TimelineEventForm({
  formData,
  setFormData,
  onSubmit,
  onKeyDown,
  buttonText,
  isModal,
}: TimelineEventFormProps) {
  const handleChange = (field: keyof FormData, value: string) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const timezone = formData.date ? getTimezoneForDate(formData.date) : 'EST';

  return (
    <form 
      onSubmit={onSubmit} 
      className={`timeline-form ${isModal ? 'modal-form' : ''}`}
      onKeyDown={onKeyDown}
    >
      <div className="form-row">
        <div className="form-group">
          <label htmlFor={`${isModal ? 'modal-' : ''}date`}>
            <span className="required">*</span>{' '}
            Date{' '}
            <Tooltip content="Enter the date when this event occurred">
              <Icon type="info" className="help-icon" />
            </Tooltip>
          </label>
          <input
            id={`${isModal ? 'modal-' : ''}date`}
            type="date"
            value={formData.date}
            onChange={(e) => handleChange('date', e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor={`${isModal ? 'modal-' : ''}time`}>
            Time{' '}
            <Tooltip content={`Time when this event occurred (automatically set to ${timezone})`}>
              <Icon type="info" className="help-icon" />
            </Tooltip>
          </label>
          <div className="time-input-group">
            <input
              id={`${isModal ? 'modal-' : ''}time`}
              type="time"
              value={formData.time}
              onChange={(e) => handleChange('time', e.target.value)}
            />
            <span className="timezone-display">{timezone}</span>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor={`${isModal ? 'modal-' : ''}eventType`}>
            <span className="required">*</span>{' '}
            Event Type{' '}
            <Tooltip content="Select the type of event from the dropdown">
              <Icon type="info" className="help-icon" />
            </Tooltip>
          </label>
          <select
            id={`${isModal ? 'modal-' : ''}eventType`}
            value={formData.eventType}
            onChange={(e) => handleChange('eventType', e.target.value)}
            required
          >
            {EVENT_TYPES.map((type, index) => (
              <option key={index} value={type} disabled={type === ''}>
                {type === '' ? 'Select event type...' : type}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Event-specific forms */}
      <TimelineEventFormRenderer
        eventType={formData.eventType}
        date={formData.date}
        formData={formData}
        setFormData={setFormData}
        isModal={isModal}
      />

      <div className="form-group">
        <label htmlFor={`${isModal ? 'modal-' : ''}label`}>
          <span className="required">*</span>{' '}
          Label{' '}
          <Tooltip content="Brief title for this event (e.g., 'First 3-day notice', 'Rent payment', 'Court filing')">
            <Icon type="info" className="help-icon" />
          </Tooltip>
        </label>
        <input
          id={`${isModal ? 'modal-' : ''}label`}
          type="text"
          value={formData.label}
          onChange={(e) => handleChange('label', e.target.value)}
          placeholder="Brief description of the event"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor={`${isModal ? 'modal-' : ''}description`}>
          Description{' '}
          <Tooltip content="Additional details about this event (optional)">
            <Icon type="info" className="help-icon" />
          </Tooltip>
        </label>
        <textarea
          id={`${isModal ? 'modal-' : ''}description`}
          value={formData.description}
          onChange={(e) => handleChange('description', e.target.value)}
          placeholder="Additional details about this event"
          rows={3}
        />
      </div>

      <div className="form-actions">
        <Button type="submit" variant="primary">
          {buttonText}
        </Button>
        <p className="keyboard-hint">
          Press {navigator.platform.toUpperCase().indexOf('MAC') >= 0 ? 'Cmd' : 'Ctrl'}+Enter to submit
        </p>
      </div>
    </form>
  );
} 