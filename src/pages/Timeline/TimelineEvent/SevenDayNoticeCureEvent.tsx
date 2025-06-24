import { TimelineEvent, calculateCureDate, formatDateForDisplay } from '../TimelineRepository';

interface SevenDayNoticeCureEventProps {
  event: TimelineEvent;
}

export default function SevenDayNoticeCureEvent({ event }: SevenDayNoticeCureEventProps) {
  if (!event.sevenDayCureFields) return <span>—</span>;

  const { deliveryMethod, noncomplianceDescription } = event.sevenDayCureFields;
  const cureByDate = calculateCureDate(event.date);

  return (
    <div className="notice-details">
      <div><strong>Cure By:</strong> {formatDateForDisplay(cureByDate)}</div>
      {deliveryMethod && (
        <div><strong>Delivery:</strong> {deliveryMethod}</div>
      )}
      {noncomplianceDescription && (
        <div className="violation-summary">
          <strong>Violation:</strong> {noncomplianceDescription.length > 50 
            ? `${noncomplianceDescription.substring(0, 50)}...` 
            : noncomplianceDescription}
        </div>
      )}
    </div>
  );
} 