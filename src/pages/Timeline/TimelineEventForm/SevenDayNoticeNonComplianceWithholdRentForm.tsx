import Tooltip from '../../../components/Tooltip';
import { FormData, calculateCureDate, formatDateForDisplay } from '../TimelineRepository';

interface SevenDayNoticeNonComplianceWithholdRentFormProps {
  eventType: string;
  date: string;
  noticeFields: FormData['sevenDayNoticeToWithholdRentFields'];
  onNoticeFieldsChange: (noticeFields: FormData['sevenDayNoticeToWithholdRentFields']) => void;
  isModal: boolean;
}

export default function SevenDayNoticeNonComplianceWithholdRentForm({
  eventType,
  date,
  noticeFields,
  onNoticeFieldsChange,
  isModal
}: SevenDayNoticeNonComplianceWithholdRentFormProps) {
  if (eventType !== '7-Day Notice of Noncompliance (to Withhold Rent)') return null;

  const landlordCureByDate = date ? calculateCureDate(date) : '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    onNoticeFieldsChange({
      ...noticeFields,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="notice-fields">
      <h3 className="notice-fields-header">Tenant's 7-Day Notice to Withhold Rent</h3>
      <p className="notice-help-text">
        Based on <a href="https://www.flsenate.gov/Laws/Statutes/2023/83.60" target="_blank" rel="noopener noreferrer">FL Stat § 83.60(1)(b)</a>.
        Use this to notify the landlord of a material failure and your intent to withhold rent if it's not fixed. This is a required step to raise this defense in court.
      </p>

      <div className="notice-form-grid">
        <div className="form-group">
          <label htmlFor={`${isModal ? 'modal-' : ''}deliveryMethod`}>
            Delivery Method
            <Tooltip content="How did you deliver the notice? It can be given to the landlord, manager, or rent collector.">
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
            <Tooltip content="The deadline for the landlord to make repairs (7 days).">
              <span className="help-icon">ⓘ</span>
            </Tooltip>
          </label>
          <div className="calculated-date-value">
            {landlordCureByDate ? formatDateForDisplay(landlordCureByDate) : 'Enter event date first'}
          </div>
        </div>

        <div className="form-group full-width">
          <label htmlFor={`${isModal ? 'modal-' : ''}noncomplianceDescription`}>
            <span className="required">*</span> Description of Landlord's Material Non-Compliance
            <Tooltip content="Describe the landlord's failure to maintain the property that justifies withholding rent.">
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