import { TimelineEvent, calculateVacateDate, formatDateForDisplay } from '../TimelineRepository';

interface SevenDayTerminationNoticeEventProps {
  event: TimelineEvent;
}

export default function SevenDayTerminationNoticeEvent({ event }: SevenDayTerminationNoticeEventProps) {
  if (!event.sevenDayTerminationFields) return <span>—</span>;

  const { deliveryMethod, noncomplianceDescription } = event.sevenDayTerminationFields;
  const vacateByDate = calculateVacateDate(event.date);

  return (
    <div className="notice-details">
      <div><strong>Vacate By:</strong> {formatDateForDisplay(vacateByDate)}</div>
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