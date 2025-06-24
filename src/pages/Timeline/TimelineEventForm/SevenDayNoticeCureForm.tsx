import Tooltip from '../../../components/Tooltip';
import { FormData, calculateCureDate, formatDateForDisplay } from '../TimelineRepository';

interface SevenDayNoticeCureFormProps {
  eventType: string;
  date: string;
  noticeFields: FormData['sevenDayCureFields'];
  onNoticeFieldsChange: (noticeFields: FormData['sevenDayCureFields']) => void;
  isModal: boolean;
}

export default function SevenDayNoticeCureForm({
  eventType,
  date,
  noticeFields,
  onNoticeFieldsChange,
  isModal
}: SevenDayNoticeCureFormProps) {
  if (eventType !== '7-Day Notice to Cure (from Landlord)') return null;

  const cureByDate = date ? calculateCureDate(date) : '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    onNoticeFieldsChange({
      ...noticeFields,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="notice-fields">
      <h3 className="notice-fields-header">7-Day Notice to Cure Details</h3>
      <p className="notice-help-text">
        Based on <a href="https://www.flsenate.gov/Laws/Statutes/2023/83.56" target="_blank" rel="noopener noreferrer">FL Stat § 83.56(2)(b)</a>. 
        This is for violations the landlord claims can be fixed.
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
            Calculated Cure-By Date:
            <Tooltip content="The deadline to fix the issue (7 days from delivery, excluding day of service).">
              <span className="help-icon">ⓘ</span>
            </Tooltip>
          </label>
          <div className="calculated-date-value">
            {cureByDate ? formatDateForDisplay(cureByDate) : 'Enter event date first'}
          </div>
        </div>

        <div className="form-group full-width">
          <label htmlFor={`${isModal ? 'modal-' : ''}noncomplianceDescription`}>
            <span className="required">*</span> Description of Non-Compliance
            <Tooltip content="What violation did the landlord cite in the notice?">
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