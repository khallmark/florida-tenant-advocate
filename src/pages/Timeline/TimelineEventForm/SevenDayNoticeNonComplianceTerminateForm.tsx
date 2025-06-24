import Tooltip from '../../../components/Tooltip';
import { FormData, calculateCureDate, formatDateForDisplay } from '../TimelineRepository';

interface SevenDayNoticeNonComplianceTerminateFormProps {
  eventType: string;
  date: string;
  noticeFields: FormData['sevenDayNoticeToTerminateFields'];
  onNoticeFieldsChange: (noticeFields: FormData['sevenDayNoticeToTerminateFields']) => void;
  isModal: boolean;
}

export default function SevenDayNoticeNonComplianceTerminateForm({
  eventType,
  date,
  noticeFields,
  onNoticeFieldsChange,
  isModal
}: SevenDayNoticeNonComplianceTerminateFormProps) {
  if (eventType !== '7-Day Notice of Noncompliance (to Terminate)') return null;

  const landlordCureByDate = date ? calculateCureDate(date) : '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    onNoticeFieldsChange({
      ...noticeFields,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="notice-fields">
      <h3 className="notice-fields-header">Tenant's 7-Day Notice to Terminate Lease</h3>
      <p className="notice-help-text">
        Based on <a href="https://www.flsenate.gov/Laws/Statutes/2023/83.56" target="_blank" rel="noopener noreferrer">FL Stat § 83.56(1)</a>.
        Use this when you have notified the landlord of a material failure and intend to terminate the lease if it's not fixed.
      </p>

      <div className="notice-form-grid">
        <div className="form-group">
          <label htmlFor={`${isModal ? 'modal-' : ''}deliveryMethod`}>
            Delivery Method
            <Tooltip content="How did you deliver the notice to the landlord?">
              <span className="help-icon">ⓘ</span>
            </Tooltip>
          </label>
          <select
            id={`${isModal ? 'modal-' : ''}deliveryMethod`}
            name="deliveryMethod"
            value={noticeFields.deliveryMethod || ''}
            onChange={handleChange}
            required
          >
            <option value="">Select Method</option>
            <option value="Mailing">Mailing</option>
            <option value="Personal Delivery">Personal Delivery</option>
          </select>
        </div>

        <div className="calculated-correct-date">
          <label>
            Landlord's Cure-By Date:
            <Tooltip content="The deadline for the landlord to fix the issue (7 days from delivery).">
              <span className="help-icon">ⓘ</span>
            </Tooltip>
          </label>
          <div className="calculated-date-value">
            {landlordCureByDate ? formatDateForDisplay(landlordCureByDate) : 'Enter event date first'}
          </div>
        </div>

        <div className="form-group full-width">
          <label htmlFor={`${isModal ? 'modal-' : ''}noncomplianceDescription`}>
            <span className="required">*</span> Description of Landlord's Non-Compliance
            <Tooltip content="Describe the landlord's failure to maintain the property as required by FL Stat § 83.51(1).">
              <span className="help-icon">ⓘ</span>
            </Tooltip>
          </label>
          <textarea
            id={`${isModal ? 'modal-' : ''}noncomplianceDescription`}
            name="noncomplianceDescription"
            value={noticeFields.noncomplianceDescription || ''}
            onChange={handleChange}
            required
            rows={3}
          />
        </div>
      </div>
    </div>
  );
} 