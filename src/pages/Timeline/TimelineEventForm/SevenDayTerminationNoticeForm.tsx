import Tooltip from '../../../components/Tooltip';
import { FormData, calculateVacateDate, formatDateForDisplay } from '../TimelineRepository';

interface SevenDayTerminationNoticeFormProps {
  eventType: string;
  date: string;
  noticeFields: FormData['sevenDayTerminationFields'];
  onNoticeFieldsChange: (noticeFields: FormData['sevenDayTerminationFields']) => void;
  isModal: boolean;
}

export default function SevenDayTerminationNoticeForm({
  eventType,
  date,
  noticeFields,
  onNoticeFieldsChange,
  isModal
}: SevenDayTerminationNoticeFormProps) {
  if (eventType !== '7-Day Termination Notice (Non-Curable)') return null;
  
  const vacateByDate = date ? calculateVacateDate(date) : '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    onNoticeFieldsChange({
      ...noticeFields,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="notice-fields">
      <h3 className="notice-fields-header">7-Day Termination Notice Details</h3>
      <p className="notice-help-text">
        Based on <a href="https://www.flsenate.gov/Laws/Statutes/2023/83.56" target="_blank" rel="noopener noreferrer">FL Stat § 83.56(2)(a)</a>. 
        This is for serious violations where the landlord terminates the lease without a chance to cure.
      </p>

      <div className="notice-form-grid">
        <div className="form-group">
          <label htmlFor={`${isModal ? 'modal-' : ''}deliveryMethod`}>
            Delivery Method
            <Tooltip content="How was the notice delivered?">
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
            <option value="Left at Residence">Left at Residence</option>
          </select>
        </div>

        <div className="calculated-correct-date">
          <label>
            Calculated Vacate-By Date:
            <Tooltip content="The date you must leave the premises (7 days from delivery).">
              <span className="help-icon">ⓘ</span>
            </Tooltip>
          </label>
          <div className="calculated-date-value">
            {vacateByDate ? formatDateForDisplay(vacateByDate) : 'Enter event date first'}
          </div>
        </div>

        <div className="form-group full-width">
          <label htmlFor={`${isModal ? 'modal-' : ''}noncomplianceDescription`}>
            <span className="required">*</span> Description of Non-Compliance
            <Tooltip content="What serious violation did the landlord cite in the notice? (e.g., destruction of property)">
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