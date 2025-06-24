import { TimelineEvent } from '../TimelineRepository';

interface GenericEventProps {
  event: TimelineEvent;
}

export default function GenericEvent({ event }: GenericEventProps) {
  // For basic events without special notice fields, just show a dash
  return <span>—</span>;
} 