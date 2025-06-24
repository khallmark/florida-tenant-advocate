// Types
export interface NoticeFields {
  noticeDateGiven?: string; // When notice was delivered
  requiredNoticeDate?: string; // What the notice says payment is due
  calculatedCorrectDate?: string; // What the notice should have said
  isCompliant?: boolean;
  complianceNotes?: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  time: string;
  timezone: string;
  eventType: string;
  label: string;
  description: string;
  noticeFields?: NoticeFields;
}

export interface FormData {
  date: string;
  time: string;
  eventType: string;
  label: string;
  description: string;
  noticeFields: {
    requiredNoticeDate: string;
  };
}

export interface ComplianceResult {
  isCompliant: boolean;
  notes: string;
  calculatedCorrectDate: string;
}

// Constants
export const EVENT_TYPES = [
  '',
  '3-Day Notice (Non-Payment)',
  '7-Day Notice (Cure)',
  '7-Day Notice (Unconditional Quit)',
  '30-Day Notice (Non-Renewal)',
  'Email',
  'Phone Call',
  'Court Filing',
  'Payment Made',
  'Property Inspection',
  'Repair Request',
  'Other'
];

// Florida Court Holidays (official schedule)
const FLORIDA_COURT_HOLIDAYS = [
  // 2024 (common holidays)
  '2024-01-01', // New Year's Day
  '2024-01-15', // Martin Luther King Jr. Day
  '2024-03-29', // Good Friday
  '2024-05-27', // Memorial Day
  '2024-07-04', // Independence Day
  '2024-09-02', // Labor Day
  '2024-10-03', // Rosh Hashanah
  '2024-10-12', // Yom Kippur
  '2024-11-11', // Veterans Day
  '2024-11-28', // Thanksgiving
  '2024-11-29', // Friday after Thanksgiving
  '2024-12-24', // Christmas Eve
  '2024-12-25', // Christmas Day
  '2024-12-26', // Day after Christmas

  // 2025 (official schedule)
  '2025-01-01', // New Year's Day - Wednesday, January 1, 2025
  '2025-01-20', // Martin Luther King Jr. Day - Monday, January 20, 2025
  '2025-04-18', // Good Friday - Friday, April 18, 2025
  '2025-05-26', // Memorial Day - Monday, May 26, 2025
  '2025-07-04', // Independence Day - Friday, July 4, 2025
  '2025-09-01', // Labor Day - Monday, September 1, 2025
  '2025-09-23', // Rosh Hashanah - Tuesday, September 23, 2025
  '2025-10-02', // Yom Kippur - Thursday, October 2, 2025
  '2025-11-11', // Veterans' Day - Tuesday, November 11, 2025
  '2025-11-27', // Thanksgiving Day - Thursday, November 27, 2025
  '2025-11-28', // Friday after Thanksgiving - Friday, November 28, 2025
  '2025-12-24', // Christmas Eve - Wednesday, December 24, 2025
  '2025-12-25', // Christmas Day - Thursday, December 25, 2025
  '2025-12-26', // Day After Christmas - Friday, December 26, 2025

  // 2026 (estimated common holidays)
  '2026-01-01', // New Year's Day
  '2026-01-19', // Martin Luther King Jr. Day
  '2026-04-03', // Good Friday (estimated)
  '2026-05-25', // Memorial Day
  '2026-07-03', // Independence Day observed (Friday)
  '2026-09-07', // Labor Day
  '2026-09-14', // Rosh Hashanah (estimated)
  '2026-09-23', // Yom Kippur (estimated)
  '2026-11-11', // Veterans Day
  '2026-11-26', // Thanksgiving
  '2026-11-27', // Friday after Thanksgiving
  '2026-12-24', // Christmas Eve
  '2026-12-25', // Christmas Day
  '2026-12-28', // Day after Christmas (observed Monday)
];

// Helper Functions
const isFloridaCourtHoliday = (date: Date): boolean => {
  const dateString = date.toISOString().split('T')[0];
  return FLORIDA_COURT_HOLIDAYS.includes(dateString);
};

const addBusinessDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  let addedDays = 0;
  
  while (addedDays < days) {
    result.setDate(result.getDate() + 1);
    // Skip weekends (0 = Sunday, 6 = Saturday) and court holidays
    if (result.getDay() !== 0 && result.getDay() !== 6 && !isFloridaCourtHoliday(result)) {
      addedDays++;
    }
  }
  
  return result;
};

const getBusinessDaysBetween = (startDate: Date, endDate: Date): number => {
  let count = 0;
  const current = new Date(startDate);
  current.setDate(current.getDate() + 1); // Start counting from day after delivery
  
  while (current < endDate) {
    if (current.getDay() !== 0 && current.getDay() !== 6 && !isFloridaCourtHoliday(current)) {
      count++;
    }
    current.setDate(current.getDate() + 1);
  }
  
  return count;
};

// Helper function to determine if date is in DST (EDT) or EST
const isDateInDST = (date: Date): boolean => {
  const year = date.getFullYear();
  // DST starts second Sunday in March, ends first Sunday in November
  const dstStart = new Date(year, 2, 14 - new Date(year, 2, 1).getDay());
  const dstEnd = new Date(year, 10, 7 - new Date(year, 10, 1).getDay());
  return date >= dstStart && date < dstEnd;
};

export const getTimezoneForDate = (dateString: string): string => {
  const date = new Date(dateString + 'T12:00:00');
  return isDateInDST(date) ? 'EDT' : 'EST';
};

export const formatDateForDisplay = (dateString: string | undefined): string => {
  if (!dateString) return '';
  // Create date without timezone issues by adding 'T12:00:00' to force local interpretation
  const date = new Date(dateString + 'T12:00:00');
  return date.toLocaleDateString();
};

export const formatTimeForDisplay = (timeString: string): string => {
  const [hours, minutes] = timeString.split(':');
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  return `${displayHour}:${minutes} ${ampm}`;
};

// Calculate what the correct notice date should be (3 business days after delivery)
export const calculateCorrectNoticeDate = (deliveryDate: string): string => {
  if (!deliveryDate) return '';
  
  const deliveredDate = new Date(deliveryDate + 'T12:00:00');
  const calculatedCorrect = addBusinessDays(deliveredDate, 3);
  
  return calculatedCorrect.toISOString().split('T')[0];
};

export const checkNoticeCompliance = (deliveryDate: string, noticeDueDate: string): ComplianceResult => {
  if (!deliveryDate || !noticeDueDate) {
    return { 
      isCompliant: false, 
      notes: 'Missing notice dates',
      calculatedCorrectDate: ''
    };
  }
  
  const deliveredDate = new Date(deliveryDate + 'T12:00:00');
  const noticeDue = new Date(noticeDueDate + 'T12:00:00');
  const calculatedCorrect = addBusinessDays(deliveredDate, 3);
  
  const isCompliant = calculatedCorrect <= noticeDue;
  
  const calculatedCorrectDateString = calculatedCorrect.toISOString().split('T')[0];
  
  if (isCompliant) {
    return { 
      isCompliant: true, 
      notes: '✅ Proper 3-day notice period provided (excludes weekends & FL court holidays)',
      calculatedCorrectDate: calculatedCorrectDateString
    };
  } else {
    const businessDays = getBusinessDaysBetween(deliveredDate, noticeDue);
    return { 
      isCompliant: false, 
      notes: `⚠️ Insufficient notice period. Only ${businessDays} business days provided. FL Stat § 83.56 requires 3 full business days (excluding weekends & court holidays).`,
      calculatedCorrectDate: calculatedCorrectDateString
    };
  }
};

export const createNoticeFields = (eventType: string, date: string, requiredNoticeDate: string): NoticeFields | undefined => {
  if (eventType === '3-Day Notice (Non-Payment)' && date && requiredNoticeDate) {
    const compliance = checkNoticeCompliance(date, requiredNoticeDate);
    return {
      noticeDateGiven: date,
      requiredNoticeDate,
      calculatedCorrectDate: compliance.calculatedCorrectDate,
      isCompliant: compliance.isCompliant,
      complianceNotes: compliance.notes
    };
  }
  return undefined;
};

// TimelineRepository Class
export class TimelineRepository {
  private static readonly STORAGE_KEY = 'timeline-events';

  // Load events from localStorage
  static loadEvents(): TimelineEvent[] {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved) {
      try {
        const events = JSON.parse(saved);
        return Array.isArray(events) ? events : [];
      } catch (e) {
        console.error('Failed to parse saved events:', e);
        return [];
      }
    }
    return [];
  }

  // Save events to localStorage
  static saveEvents(events: TimelineEvent[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(events));
  }

  // Sort events by date
  static sortEventsByDate(events: TimelineEvent[]): TimelineEvent[] {
    return [...events].sort((a, b) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }

  // Create a new event
  static createEvent(formData: FormData): TimelineEvent {
    const noticeFields = createNoticeFields(
      formData.eventType,
      formData.date,
      formData.noticeFields.requiredNoticeDate
    );

    return {
      id: Date.now().toString(),
      date: formData.date,
      time: formData.time,
      timezone: getTimezoneForDate(formData.date),
      eventType: formData.eventType,
      label: formData.label,
      description: formData.description,
      ...(noticeFields && { noticeFields })
    };
  }

  // Update an existing event
  static updateEvent(existingEvent: TimelineEvent, formData: FormData): TimelineEvent {
    const noticeFields = createNoticeFields(
      formData.eventType,
      formData.date,
      formData.noticeFields.requiredNoticeDate
    );

    return {
      id: existingEvent.id,
      date: formData.date,
      time: formData.time,
      timezone: getTimezoneForDate(formData.date),
      eventType: formData.eventType,
      label: formData.label,
      description: formData.description,
      ...(noticeFields && { noticeFields })
    };
  }

  // Add event to events array
  static addEvent(events: TimelineEvent[], newEvent: TimelineEvent): TimelineEvent[] {
    const updatedEvents = [...events, newEvent];
    return this.sortEventsByDate(updatedEvents);
  }

  // Update event in events array
  static replaceEvent(events: TimelineEvent[], updatedEvent: TimelineEvent): TimelineEvent[] {
    const updatedEvents = events.map(event => 
      event.id === updatedEvent.id ? updatedEvent : event
    );
    return this.sortEventsByDate(updatedEvents);
  }

  // Delete event from events array
  static deleteEvent(events: TimelineEvent[], eventId: string): TimelineEvent[] {
    return events.filter(event => event.id !== eventId);
  }

  // Export events to JSON
  static exportToJson(events: TimelineEvent[]): void {
    const dataStr = JSON.stringify(events, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'timeline-events.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  // Import events from JSON file
  static importFromJson(file: File): Promise<TimelineEvent[]> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const importedEvents = JSON.parse(event.target?.result as string);
          if (Array.isArray(importedEvents)) {
            resolve(this.sortEventsByDate(importedEvents));
          } else {
            reject(new Error('Invalid file format'));
          }
        } catch (error) {
          reject(new Error('Failed to parse JSON file'));
        }
      };
      reader.readAsText(file);
    });
  }

  // Create empty form data
  static createEmptyFormData(): FormData {
    return {
      date: '',
      time: '12:00',
      eventType: EVENT_TYPES[0],
      label: '',
      description: '',
      noticeFields: {
        requiredNoticeDate: ''
      }
    };
  }

  // Convert event to form data for editing
  static eventToFormData(event: TimelineEvent): FormData {
    return {
      date: event.date,
      time: event.time || '12:00',
      eventType: event.eventType,
      label: event.label,
      description: event.description,
      noticeFields: {
        requiredNoticeDate: event.noticeFields?.requiredNoticeDate || ''
      }
    };
  }
} 