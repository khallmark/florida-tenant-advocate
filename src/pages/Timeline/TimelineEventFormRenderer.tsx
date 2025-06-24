import { FormData } from './TimelineRepository';
import ThreeDayNoticeForm from './TimelineEventForm/ThreeDayNoticeForm';
import SevenDayNoticeCureForm from './TimelineEventForm/SevenDayNoticeCureForm';
import SevenDayTerminationNoticeForm from './TimelineEventForm/SevenDayTerminationNoticeForm';
import SevenDayNoticeNonComplianceTerminateForm from './TimelineEventForm/SevenDayNoticeNonComplianceTerminateForm';
import SevenDayNoticeNonComplianceWithholdRentForm from './TimelineEventForm/SevenDayNoticeNonComplianceWithholdRentForm';
import ClaimOnSecurityDepositForm from './TimelineEventForm/ClaimOnSecurityDepositForm';
import LandlordNoticeOfEntryForm from './TimelineEventForm/LandlordNoticeOfEntryForm';
import EvictionComplaintSummonsForm from './TimelineEventForm/EvictionComplaintSummonsForm';

interface TimelineEventFormRendererProps {
  eventType: string;
  date: string;
  formData: FormData;
  setFormData: (formData: FormData) => void;
  isModal: boolean;
}

export default function TimelineEventFormRenderer({ 
  eventType, 
  date, 
  formData, 
  setFormData, 
  isModal 
}: TimelineEventFormRendererProps) {
  
  const handleNoticeFieldsChange = (noticeFields: FormData['noticeFields']) => {
    setFormData({ ...formData, noticeFields });
  };

  const handleSevenDayCureFieldsChange = (sevenDayCureFields: FormData['sevenDayCureFields']) => {
    setFormData({ ...formData, sevenDayCureFields });
  };

  const handleSevenDayTerminationFieldsChange = (sevenDayTerminationFields: FormData['sevenDayTerminationFields']) => {
    setFormData({ ...formData, sevenDayTerminationFields });
  };

  const handleSevenDayNoticeToTerminateFieldsChange = (sevenDayNoticeToTerminateFields: FormData['sevenDayNoticeToTerminateFields']) => {
    setFormData({ ...formData, sevenDayNoticeToTerminateFields });
  };

  const handleSevenDayNoticeToWithholdRentFieldsChange = (sevenDayNoticeToWithholdRentFields: FormData['sevenDayNoticeToWithholdRentFields']) => {
    setFormData({ ...formData, sevenDayNoticeToWithholdRentFields });
  };

  const handleClaimOnDepositFieldsChange = (claimOnDepositFields: FormData['claimOnDepositFields']) => {
    setFormData({ ...formData, claimOnDepositFields });
  };

  const handleLandlordNoticeOfEntryFieldsChange = (landlordNoticeOfEntryFields: FormData['landlordNoticeOfEntryFields']) => {
    setFormData({ ...formData, landlordNoticeOfEntryFields });
  };

  const handleEvictionComplaintFieldsChange = (evictionComplaintFields: FormData['evictionComplaintFields']) => {
    setFormData({ ...formData, evictionComplaintFields });
  };

  return (
    <>
      <ThreeDayNoticeForm
        eventType={eventType}
        date={date}
        noticeFields={formData.noticeFields}
        onNoticeFieldsChange={handleNoticeFieldsChange}
        isModal={isModal}
      />
      
      <SevenDayNoticeCureForm
        eventType={eventType}
        date={date}
        noticeFields={formData.sevenDayCureFields}
        onNoticeFieldsChange={handleSevenDayCureFieldsChange}
        isModal={isModal}
      />
      
      <SevenDayTerminationNoticeForm
        eventType={eventType}
        date={date}
        noticeFields={formData.sevenDayTerminationFields}
        onNoticeFieldsChange={handleSevenDayTerminationFieldsChange}
        isModal={isModal}
      />
      
      <SevenDayNoticeNonComplianceTerminateForm
        eventType={eventType}
        date={date}
        noticeFields={formData.sevenDayNoticeToTerminateFields}
        onNoticeFieldsChange={handleSevenDayNoticeToTerminateFieldsChange}
        isModal={isModal}
      />
      
      <SevenDayNoticeNonComplianceWithholdRentForm
        eventType={eventType}
        date={date}
        noticeFields={formData.sevenDayNoticeToWithholdRentFields}
        onNoticeFieldsChange={handleSevenDayNoticeToWithholdRentFieldsChange}
        isModal={isModal}
      />
      
      <ClaimOnSecurityDepositForm
        eventType={eventType}
        noticeFields={formData.claimOnDepositFields}
        onNoticeFieldsChange={handleClaimOnDepositFieldsChange}
        isModal={isModal}
      />
      
      <LandlordNoticeOfEntryForm
        eventType={eventType}
        noticeFields={formData.landlordNoticeOfEntryFields}
        onNoticeFieldsChange={handleLandlordNoticeOfEntryFieldsChange}
        isModal={isModal}
      />
      
      <EvictionComplaintSummonsForm
        eventType={eventType}
        date={date}
        noticeFields={formData.evictionComplaintFields}
        onNoticeFieldsChange={handleEvictionComplaintFieldsChange}
        isModal={isModal}
      />
    </>
  );
} 