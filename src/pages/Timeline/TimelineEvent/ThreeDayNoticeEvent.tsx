import { TimelineEvent } from '../TimelineRepository';

interface ThreeDayNoticeEventProps {
  event: TimelineEvent;
}

export default function ThreeDayNoticeEvent({ event }: ThreeDayNoticeEventProps) {
  if (!event.noticeFields) return <span>—</span>;

  const { requiredNoticeDate, calculatedCorrectDate } = event.noticeFields;

  return (
    <div className="notice-details">
      {requiredNoticeDate && (
        <div><strong>Notice Says Due:</strong> {new Date(requiredNoticeDate + 'T12:00:00').toDateString()}</div>
      )}
      {calculatedCorrectDate && (
        <div><strong>Should Have Said:</strong> {new Date(calculatedCorrectDate + 'T12:00:00').toDateString()}</div>
      )}
    </div>
  );
} 