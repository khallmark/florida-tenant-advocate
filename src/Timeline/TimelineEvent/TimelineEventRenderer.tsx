import { TimelineEvent } from '../TimelineRepository';
import ThreeDayNoticeEvent from './ThreeDayNoticeEvent';
import SevenDayNoticeCureEvent from './SevenDayNoticeCureEvent';
import SevenDayTerminationNoticeEvent from './SevenDayTerminationNoticeEvent';
import SevenDayNoticeNonComplianceTerminateEvent from './SevenDayNoticeNonComplianceTerminateEvent';
import SevenDayNoticeNonComplianceWithholdRentEvent from './SevenDayNoticeNonComplianceWithholdRentEvent';
import ClaimOnSecurityDepositEvent from './ClaimOnSecurityDepositEvent';
import LandlordNoticeOfEntryEvent from './LandlordNoticeOfEntryEvent';
import EvictionComplaintSummonsEvent from './EvictionComplaintSummonsEvent';
import GenericEvent from './GenericEvent';

interface TimelineEventRendererProps {
  event: TimelineEvent;
}

export default function TimelineEventRenderer({ event }: TimelineEventRendererProps) {
  switch (event.eventType) {
    case '3-Day Notice (Non-Payment)':
      return <ThreeDayNoticeEvent event={event} />;
    
    case '7-Day Notice to Cure (from Landlord)':
      return <SevenDayNoticeCureEvent event={event} />;
    
    case '7-Day Termination Notice (Non-Curable)':
      return <SevenDayTerminationNoticeEvent event={event} />;
    
    case '7-Day Notice of Noncompliance (to Terminate)':
      return <SevenDayNoticeNonComplianceTerminateEvent event={event} />;
    
    case '7-Day Notice of Noncompliance (to Withhold Rent)':
      return <SevenDayNoticeNonComplianceWithholdRentEvent event={event} />;
    
    case 'Notice of Claim on Security Deposit':
      return <ClaimOnSecurityDepositEvent event={event} />;
    
    case 'Landlord\'s Notice of Entry':
      return <LandlordNoticeOfEntryEvent event={event} />;
    
    case 'Eviction Complaint and Summons':
      return <EvictionComplaintSummonsEvent event={event} />;
    
    // Generic events (Rent Payment, Communication with Landlord, Maintenance Request, Other)
    default:
      return <GenericEvent event={event} />;
  }
} 