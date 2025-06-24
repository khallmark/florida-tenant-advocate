import { TimelineEvent } from '../TimelineRepository';
import Tooltip from '../../components/Tooltip';

interface LandlordNoticeOfEntryEventProps {
  event: TimelineEvent;
}

export default function LandlordNoticeOfEntryEvent({ event }: LandlordNoticeOfEntryEventProps) {
  if (!event.landlordNoticeOfEntryFields) return <span>—</span>;

  const { noticeGivenDateTime, proposedEntryDateTime, purposeOfEntry } = event.landlordNoticeOfEntryFields;
  
  let complianceStatus = null;
  if (noticeGivenDateTime && proposedEntryDateTime) {
    const noticeTime = new Date(noticeGivenDateTime).getTime();
    const entryTime = new Date(proposedEntryDateTime).getTime();
    const hoursDifference = (entryTime - noticeTime) / (1000 * 60 * 60);
    const entryHour = new Date(proposedEntryDateTime).getHours();
    
    const sufficientNotice = purposeOfEntry === 'Repair' ? hoursDifference >= 24 : true;
    const reasonableTime = entryHour >= 7.5 && entryHour < 20;
    const isCompliant = sufficientNotice && reasonableTime;
    
    complianceStatus = {
      isCompliant,
      message: isCompliant ? 'Proper notice & time' : 'Improper notice or time'
    };
  }

  return (
    <div className="notice-details">
      {proposedEntryDateTime && (
        <div><strong>Entry Time:</strong> {new Date(proposedEntryDateTime).toLocaleString()}</div>
      )}
      {purposeOfEntry && (
        <div><strong>Purpose:</strong> {purposeOfEntry}</div>
      )}
      {complianceStatus && (
        <div className={`compliance-summary ${complianceStatus.isCompliant ? 'compliant' : 'non-compliant'}`}>
          <Tooltip content="Entry must be at reasonable time (7:30am-8:00pm) with proper notice">
            <span>{complianceStatus.isCompliant ? '✅' : '⚠️'} {complianceStatus.message}</span>
          </Tooltip>
        </div>
      )}
    </div>
  );
} 