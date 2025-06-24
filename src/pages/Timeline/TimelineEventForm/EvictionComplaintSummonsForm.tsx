import Tooltip from '../../../components/Tooltip';
import { FormData, formatDateForDisplay, calculateCourtRegistryDueDate } from '../TimelineRepository';

interface EvictionComplaintSummonsFormProps {
  eventType: string;
  date: string;
  noticeFields: FormData['evictionComplaintFields'];
  onNoticeFieldsChange: (noticeFields: FormData['evictionComplaintFields']) => void;
  isModal: boolean;
}

export default function EvictionComplaintSummonsForm({
  eventType,
  date,
  noticeFields,
  onNoticeFieldsChange,
  isModal
}: EvictionComplaintSummonsFormProps) {
  if (eventType !== 'Eviction Complaint and Summons') return null;

  const courtRegistryDueDate = date ? calculateCourtRegistryDueDate(date) : '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onNoticeFieldsChange({
      ...noticeFields,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="notice-fields">
      <h3 className="notice-fields-header">Eviction Complaint & Summons Details</h3>
      <p className="notice-help-text">
        Based on <a href="https://www.flsenate.gov/Laws/Statutes/2023/83.60" target="_blank" rel="noopener noreferrer">FL Stat § 83.60(2)</a>. 
        This is the official start of a lawsuit. The deadlines are extremely important.
      </p>

      <div className="notice-form-grid">
        <div className="form-group">
          <label htmlFor={`${isModal ? 'modal-' : ''}serviceMethod`}>
            <span className="required">*</span> Service Method
            <Tooltip content="How were the court papers delivered?">
              <span className="help-icon">ⓘ</span>
            </Tooltip>
          </label>
          <select
            id={`${isModal ? 'modal-' : ''}serviceMethod`}
            name="serviceMethod"
            value={noticeFields.serviceMethod || ''}
            onChange={handleChange}
            required
          >
            <option value="">Select Method</option>
            <option value="Personal Service">Personal Service</option>
            <option value="Posted on Door">Posted on Door</option>
          </select>
        </div>

        <div className="calculated-correct-date">
          <label>
            Court Registry Due Date:
            <Tooltip content="CRITICAL DEADLINE: You must pay rent into the court registry or file a motion to determine rent by this date (5 business days from service).">
              <span className="help-icon">⚠️</span>
            </Tooltip>
          </label>
          <div className="calculated-date-value time-critical">
            {courtRegistryDueDate ? formatDateForDisplay(courtRegistryDueDate) : 'Enter date served first'}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor={`${isModal ? 'modal-' : ''}rentAmountDemanded`}>
            Rent Amount Demanded ($)
            <Tooltip content="The amount of rent the complaint says you owe.">
              <span className="help-icon">ⓘ</span>
            </Tooltip>
          </label>
          <input
            type="number"
            id={`${isModal ? 'modal-' : ''}rentAmountDemanded`}
            name="rentAmountDemanded"
            value={noticeFields.rentAmountDemanded || ''}
            onChange={handleChange}
            placeholder="e.g., 1500.00"
          />
        </div>

        <div className="form-group">
          <label htmlFor={`${isModal ? 'modal-' : ''}caseNumber`}>
            Case Number
            <Tooltip content="The court case number listed on the complaint.">
              <span className="help-icon">ⓘ</span>
            </Tooltip>
          </label>
          <input
            type="text"
            id={`${isModal ? 'modal-' : ''}caseNumber`}
            name="caseNumber"
            value={noticeFields.caseNumber || ''}
            onChange={handleChange}
            placeholder="e.g., 2024-CC-012345-O"
          />
        </div>
      </div>
    </div>
  );
} 