import { TimelineEvent } from '../TimelineRepository';
import Tooltip from '../../components/Tooltip';

interface ThreeDayNoticeEventProps {
  event: TimelineEvent;
}

export default function ThreeDayNoticeEvent({ event }: ThreeDayNoticeEventProps) {
  if (!event.noticeFields) return <span>—</span>;

  const { requiredNoticeDate, calculatedCorrectDate, isCompliant, complianceNotes } = event.noticeFields;

  return (
    <div className="notice-details">
      {requiredNoticeDate && (
        <div><strong>Notice Says Due:</strong> {new Date(requiredNoticeDate + 'T12:00:00').toDateString()}</div>
      )}
      {calculatedCorrectDate && (
        <div><strong>Should Have Said:</strong> {new Date(calculatedCorrectDate + 'T12:00:00').toDateString()}</div>
      )}
      {complianceNotes && (
        <div className={`compliance-summary ${isCompliant ? 'compliant' : 'non-compliant'}`}>
          <Tooltip content={complianceNotes}>
            <span>{isCompliant ? '✅ Compliant' : '⚠️ Non-Compliant'}</span>
          </Tooltip>
        </div>
      )}
    </div>
  );
} 