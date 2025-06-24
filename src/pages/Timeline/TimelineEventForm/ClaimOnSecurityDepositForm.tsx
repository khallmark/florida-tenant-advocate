import { useEffect, useState } from 'react';
import Tooltip from '../../../components/Tooltip';
import { FormData, formatDateForDisplay, calculateDateDifference, calculateObjectionDueDate } from '../TimelineRepository';

interface ClaimOnSecurityDepositFormProps {
  eventType: string;
  noticeFields: FormData['claimOnDepositFields'];
  onNoticeFieldsChange: (noticeFields: FormData['claimOnDepositFields']) => void;
  isModal: boolean;
}

export default function ClaimOnSecurityDepositForm({
  eventType,
  noticeFields,
  onNoticeFieldsChange,
  isModal
}: ClaimOnSecurityDepositFormProps) {
  if (eventType !== 'Notice of Claim on Security Deposit') return null;

  const [complianceNotes, setComplianceNotes] = useState('');

  const objectionDueDate = noticeFields.noticeReceivedDate ? calculateObjectionDueDate(noticeFields.noticeReceivedDate) : '';

  useEffect(() => {
    if (noticeFields.moveOutDate && noticeFields.noticeReceivedDate) {
      const days = calculateDateDifference(noticeFields.noticeReceivedDate, noticeFields.moveOutDate);
      if (days > 30) {
        setComplianceNotes(`Landlord sent notice ${days} days after move-out. This is non-compliant with the 30-day requirement.`);
      } else {
        setComplianceNotes(`Landlord sent notice ${days} days after move-out. This is compliant.`);
      }
    } else {
      setComplianceNotes('');
    }
  }, [noticeFields.moveOutDate, noticeFields.noticeReceivedDate]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onNoticeFieldsChange({
      ...noticeFields,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="notice-fields">
      <h3 className="notice-fields-header">Notice of Claim on Security Deposit Details</h3>
      <p className="notice-help-text">
        Based on <a href="https://www.flsenate.gov/Laws/Statutes/2023/83.49" target="_blank" rel="noopener noreferrer">FL Stat § 83.49(3)(a)</a>. 
        A landlord must send this by certified mail within 30 days of you moving out if they intend to keep your deposit.
      </p>

      <div className="notice-form-grid">
        <div className="form-group">
          <label htmlFor={`${isModal ? 'modal-' : ''}moveOutDate`}>
            <span className="required">*</span> Move-Out Date
          </label>
          <input type="date" id={`${isModal ? 'modal-' : ''}moveOutDate`} name="moveOutDate" value={noticeFields.moveOutDate || ''} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor={`${isModal ? 'modal-' : ''}noticeReceivedDate`}>
            <span className="required">*</span> Notice Received Date
          </label>
          <input type="date" id={`${isModal ? 'modal-' : ''}noticeReceivedDate`} name="noticeReceivedDate" value={noticeFields.noticeReceivedDate || ''} onChange={handleChange} required />
        </div>

        {complianceNotes && (
          <div className="compliance-analysis full-width">
            <div className={`compliance-status ${complianceNotes.includes('non-compliant') ? 'non-compliant' : 'compliant'}`}>
              {complianceNotes}
            </div>
          </div>
        )}

        <div className="form-group">
          <label htmlFor={`${isModal ? 'modal-' : ''}claimAmount`}>
            <span className="required">*</span> Claim Amount ($)
          </label>
          <input type="number" id={`${isModal ? 'modal-' : ''}claimAmount`} name="claimAmount" value={noticeFields.claimAmount || ''} onChange={handleChange} required placeholder="e.g., 250.00" />
        </div>

        <div className="calculated-correct-date">
          <label>
            Objection Due Date:
            <Tooltip content="Deadline to object in writing (15 days from when you received the notice).">
              <span className="help-icon">ⓘ</span>
            </Tooltip>
          </label>
          <div className="calculated-date-value">
            {objectionDueDate ? formatDateForDisplay(objectionDueDate) : 'Enter received date'}
          </div>
        </div>

        <div className="form-group full-width">
          <label htmlFor={`${isModal ? 'modal-' : ''}claimReason`}>
            <span className="required">*</span> Reason for Claim
          </label>
          <textarea id={`${isModal ? 'modal-' : ''}claimReason`} name="claimReason" value={noticeFields.claimReason || ''} onChange={handleChange} required rows={3} />
        </div>
      </div>
    </div>
  );
} 