import { TimelineEvent, calculateCourtRegistryDueDate, formatDateForDisplay } from '../TimelineRepository';
import Tooltip from '../../components/Tooltip';

interface EvictionComplaintSummonsEventProps {
  event: TimelineEvent;
}

export default function EvictionComplaintSummonsEvent({ event }: EvictionComplaintSummonsEventProps) {
  if (!event.evictionComplaintFields) return <span>—</span>;

  const { serviceMethod, rentAmountDemanded, caseNumber } = event.evictionComplaintFields;
  const courtRegistryDueDate = calculateCourtRegistryDueDate(event.date);

  return (
    <div className="notice-details">
      <div className="time-critical">
        <strong>⚠️ Court Registry Due:</strong> {formatDateForDisplay(courtRegistryDueDate)}
        <Tooltip content="CRITICAL: You must pay rent into court registry or file motion to determine rent by this date">
          <span className="help-icon">⚠️</span>
        </Tooltip>
      </div>
      {serviceMethod && (
        <div><strong>Service Method:</strong> {serviceMethod}</div>
      )}
      {rentAmountDemanded && (
        <div><strong>Rent Demanded:</strong> ${rentAmountDemanded}</div>
      )}
      {caseNumber && (
        <div><strong>Case #:</strong> {caseNumber}</div>
      )}
    </div>
  );
} 