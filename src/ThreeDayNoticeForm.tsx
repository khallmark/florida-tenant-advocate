import Tooltip from './components/Tooltip';
import { checkNoticeCompliance, calculateCorrectNoticeDate, formatDateForDisplay, FormData } from './TimelineRepository';

interface ThreeDayNoticeFormProps {
  eventType: string;
  date: string;
  noticeFields: FormData['noticeFields'];
  onNoticeFieldsChange: (noticeFields: FormData['noticeFields']) => void;
  isModal: boolean;
}

export default function ThreeDayNoticeForm({
  eventType,
  date,
  noticeFields,
  onNoticeFieldsChange,
  isModal
}: ThreeDayNoticeFormProps) {
  const is3DayNotice = eventType === '3-Day Notice (Non-Payment)';
  
  if (!is3DayNotice) return null;

  // Calculate correct date as soon as we have the main event date
  const calculatedCorrectDate = date ? calculateCorrectNoticeDate(date) : '';
  
  // Check compliance only when both dates are available
  const compliance = date && noticeFields.requiredNoticeDate 
    ? checkNoticeCompliance(date, noticeFields.requiredNoticeDate)
    : null;

  const handleRequiredDateChange = (requiredNoticeDate: string) => {
    onNoticeFieldsChange({
      requiredNoticeDate
    });
  };

  return (
    <div className="notice-fields">
      <h3 className="notice-fields-header">3-Day Notice Analysis</h3>
      
      <div className="notice-form-grid">
        {/* Row 1: Date Input */}
        <div className="notice-date-row">
          <div className="form-group">
            <label htmlFor={`${isModal ? 'modal-' : ''}requiredNoticeDate`}>
              <span className="required">*</span> Date Notice Says Payment Due{' '}
              <Tooltip content="Enter the date that appears on the 3-day notice for when payment is due">
                <span className="help-icon">ⓘ</span>
              </Tooltip>
            </label>
            <input
              id={`${isModal ? 'modal-' : ''}requiredNoticeDate`}
              type="date"
              value={noticeFields.requiredNoticeDate}
              onChange={(e) => handleRequiredDateChange(e.target.value)}
              required
            />
          </div>
          
          {/* Always show calculated correct date field */}
          <div className="calculated-correct-date">
            <label>
              Calculated Correct Date:{' '}
              <Tooltip content="This is the earliest date the notice could legally require payment (3 business days after delivery, excluding weekends and FL court holidays)">
                <span className="help-icon">ⓘ</span>
              </Tooltip>
            </label>
            <div className="calculated-date-value">
              {calculatedCorrectDate 
                ? formatDateForDisplay(calculatedCorrectDate)
                : 'Enter event date first'
              }
            </div>
          </div>
        </div>

        {/* Row 2: Compliance Status - No gap from fields above */}
        {date && noticeFields.requiredNoticeDate && compliance && (
          <div className="compliance-analysis">
            <div className={`compliance-status ${compliance.isCompliant ? 'compliant' : 'non-compliant'}`}>
              {compliance.notes}
            </div>
          </div>
        )}
      </div>
      
      <div className="notice-help-text">
        <strong>Florida Law:</strong> A 3-day notice must provide at least 3 full business days (excluding weekends and court holidays) 
        before payment is due per FL Stat § 83.56. Court holidays include New Year's Day, Martin Luther King Jr. Day, Good Friday, 
        Memorial Day, Independence Day, Labor Day, Rosh Hashanah, Yom Kippur, Veterans Day, Thanksgiving, and Christmas holidays.
      </div>
    </div>
  );
} 