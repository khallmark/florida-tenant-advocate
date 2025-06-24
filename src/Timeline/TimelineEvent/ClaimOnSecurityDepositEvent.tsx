import { TimelineEvent, calculateObjectionDueDate, formatDateForDisplay, calculateDateDifference } from '../TimelineRepository';
import Tooltip from '../../components/Tooltip';

interface ClaimOnSecurityDepositEventProps {
  event: TimelineEvent;
}

export default function ClaimOnSecurityDepositEvent({ event }: ClaimOnSecurityDepositEventProps) {
  if (!event.claimOnDepositFields) return <span>—</span>;

  const { moveOutDate, noticeReceivedDate, claimAmount, claimReason } = event.claimOnDepositFields;
  
  const objectionDueDate = noticeReceivedDate ? calculateObjectionDueDate(noticeReceivedDate) : null;
  const isCompliant = moveOutDate && noticeReceivedDate 
    ? calculateDateDifference(noticeReceivedDate, moveOutDate) <= 30
    : null;

  return (
    <div className="notice-details">
      {objectionDueDate && (
        <div><strong>Objection Due By:</strong> {formatDateForDisplay(objectionDueDate)}</div>
      )}
      {claimAmount && (
        <div><strong>Claim Amount:</strong> ${claimAmount}</div>
      )}
      {isCompliant !== null && (
        <div className={`compliance-summary ${isCompliant ? 'compliant' : 'non-compliant'}`}>
          <Tooltip content={isCompliant ? 'Sent within 30 days of move-out' : 'Sent more than 30 days after move-out'}>
            <span>{isCompliant ? '✅ Timely' : '⚠️ Late Notice'}</span>
          </Tooltip>
        </div>
      )}
      {claimReason && (
        <div className="claim-reason">
          <strong>Reason:</strong> {claimReason.length > 40 
            ? `${claimReason.substring(0, 40)}...` 
            : claimReason}
        </div>
      )}
    </div>
  );
} 