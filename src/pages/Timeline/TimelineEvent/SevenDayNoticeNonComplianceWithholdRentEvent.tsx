import { TimelineEvent, calculateCureDate, formatDateForDisplay } from '../TimelineRepository';

interface SevenDayNoticeNonComplianceWithholdRentEventProps {
  event: TimelineEvent;
}

export default function SevenDayNoticeNonComplianceWithholdRentEvent({ event }: SevenDayNoticeNonComplianceWithholdRentEventProps) {
  if (!event.sevenDayNoticeToWithholdRentFields) return <span>—</span>;

  const { deliveryMethod, noncomplianceDescription } = event.sevenDayNoticeToWithholdRentFields;
  const landlordCureByDate = calculateCureDate(event.date);

  return (
    <div className="notice-details">
      <div><strong>Landlord Must Cure By:</strong> {formatDateForDisplay(landlordCureByDate)}</div>
      {deliveryMethod && (
        <div><strong>Delivery to Landlord:</strong> {deliveryMethod}</div>
      )}
      {noncomplianceDescription && (
        <div className="violation-summary">
          <strong>Material Non-Compliance:</strong> {noncomplianceDescription.length > 50 
            ? `${noncomplianceDescription.substring(0, 50)}...` 
            : noncomplianceDescription}
        </div>
      )}
      <div className="rent-withhold-notice">🛡️ Basis for withholding rent</div>
    </div>
  );
} 