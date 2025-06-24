import { useEffect, useState } from 'react';
import Tooltip from '../../components/Tooltip';
import { FormData } from '../TimelineRepository';

interface LandlordNoticeOfEntryFormProps {
  eventType: string;
  noticeFields: FormData['landlordNoticeOfEntryFields'];
  onNoticeFieldsChange: (noticeFields: FormData['landlordNoticeOfEntryFields']) => void;
  isModal: boolean;
}

export default function LandlordNoticeOfEntryForm({
  eventType,
  noticeFields,
  onNoticeFieldsChange,
  isModal
}: LandlordNoticeOfEntryFormProps) {
  if (eventType !== 'Landlord\'s Notice of Entry') return null;

  const [complianceNotes, setComplianceNotes] = useState('');

  useEffect(() => {
    if (noticeFields.noticeGivenDateTime && noticeFields.proposedEntryDateTime) {
        const noticeTime = new Date(noticeFields.noticeGivenDateTime).getTime();
        const entryTime = new Date(noticeFields.proposedEntryDateTime).getTime();
        const hoursDifference = (entryTime - noticeTime) / (1000 * 60 * 60);
        
        const entryHour = new Date(noticeFields.proposedEntryDateTime).getHours();
        
        let notes = [];
        if (noticeFields.purposeOfEntry === 'Repair' && hoursDifference < 24) {
            notes.push('Less than 24 hours notice given for repair.');
        } else if (noticeFields.purposeOfEntry === 'Repair') {
            notes.push('Sufficient notice provided for repair.');
        }

        if (entryHour < 7.5 || entryHour >= 20) {
            notes.push('Entry time is outside reasonable hours (7:30am - 8:00pm).');
        } else {
            notes.push('Entry time is within reasonable hours.');
        }
        setComplianceNotes(notes.join(' '));
    } else {
      setComplianceNotes('');
    }
  }, [noticeFields.noticeGivenDateTime, noticeFields.proposedEntryDateTime, noticeFields.purposeOfEntry]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onNoticeFieldsChange({
      ...noticeFields,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="notice-fields">
      <h3 className="notice-fields-header">Landlord's Notice of Entry Details</h3>
      <p className="notice-help-text">
        Based on <a href="https://www.flsenate.gov/Laws/Statutes/2023/83.53" target="_blank" rel="noopener noreferrer">FL Stat § 83.53(2)</a>. 
        "Reasonable notice" for repairs is at least 24 hours. Entry must be at a reasonable time (7:30am-8:00pm).
      </p>

      <div className="notice-form-grid">
        <div className="form-group">
          <label htmlFor={`${isModal ? 'modal-' : ''}noticeGivenDateTime`}>
            <span className="required">*</span> Notice Given Date & Time
            <Tooltip content="The date and time the landlord provided notice of entry.">
              <span className="help-icon">ⓘ</span>
            </Tooltip>
          </label>
          <input type="datetime-local" id={`${isModal ? 'modal-' : ''}noticeGivenDateTime`} name="noticeGivenDateTime" value={noticeFields.noticeGivenDateTime || ''} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor={`${isModal ? 'modal-' : ''}proposedEntryDateTime`}>
            <span className="required">*</span> Proposed Entry Date & Time
            <Tooltip content="The date and time the landlord intends to enter the property.">
              <span className="help-icon">ⓘ</span>
            </Tooltip>
          </label>
          <input type="datetime-local" id={`${isModal ? 'modal-' : ''}proposedEntryDateTime`} name="proposedEntryDateTime" value={noticeFields.proposedEntryDateTime || ''} onChange={handleChange} required />
        </div>

        <div className="form-group full-width">
          <label htmlFor={`${isModal ? 'modal-' : ''}purposeOfEntry`}>
            <span className="required">*</span> Purpose of Entry
            <Tooltip content="The reason given by the landlord for entering the property.">
              <span className="help-icon">ⓘ</span>
            </Tooltip>
          </label>
          <select id={`${isModal ? 'modal-' : ''}purposeOfEntry`} name="purposeOfEntry" value={noticeFields.purposeOfEntry || ''} onChange={handleChange} required>
            <option value="">Select Purpose</option>
            <option value="Repair">Repair</option>
            <option value="Inspection">Inspection</option>
            <option value="Showing Property">Showing Property</option>
            <option value="Emergency">Emergency</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {complianceNotes && (
          <div className="compliance-analysis full-width">
            <div className={`compliance-status ${complianceNotes.includes('Less than') || complianceNotes.includes('outside') ? 'non-compliant' : 'compliant'}`}>
              {complianceNotes}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 