import { TimelineEvent, calculateCureDate, formatDateForDisplay } from '../TimelineRepository';

interface SevenDayNoticeNonComplianceTerminateEventProps {
  event: TimelineEvent;
}

export default function SevenDayNoticeNonComplianceTerminateEvent({ event }: SevenDayNoticeNonComplianceTerminateEventProps) {
  if (!event.sevenDayNoticeToTerminateFields) return <span>—</span>;

  const { deliveryMethod, noncomplianceDescription } = event.sevenDayNoticeToTerminateFields;
  const landlordCureByDate = calculateCureDate(event.date);

  return (
    <div className="notice-details">
      <div><strong>Landlord Must Cure By:</strong> {formatDateForDisplay(landlordCureByDate)}</div>
      {deliveryMethod && (
        <div><strong>Delivery to Landlord:</strong> {deliveryMethod}</div>
      )}
      {noncomplianceDescription && (
        <div className="violation-summary">
          <strong>Landlord Violation:</strong> {noncomplianceDescription.length > 50 
            ? `${noncomplianceDescription.substring(0, 50)}...` 
            : noncomplianceDescription}
        </div>
      )}
    </div>
  );
} 