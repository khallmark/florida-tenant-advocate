import React, { useState } from 'react';
import Icon from '../components/Icon';

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ 
  title, 
  children, 
  defaultOpen = false 
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="section">
      <button 
        className="section-header" 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`section-${title.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <span className="section-icon">
          {isOpen ? <Icon type="chevron-down" size={20} /> : <Icon type="chevron-right" size={20} />}
        </span>
        <span className="section-title">{title}</span>
      </button>
      {isOpen && (
        <div 
          className="section-content"
          id={`section-${title.replace(/\s+/g, '-').toLowerCase()}`}
          role="region"
          aria-labelledby={`section-${title.replace(/\s+/g, '-').toLowerCase()}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

interface CollapsibleSubsectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

const CollapsibleSubsection: React.FC<CollapsibleSubsectionProps> = ({ 
  title, 
  children, 
  defaultOpen = false,
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={className}>
      <button 
        className="subsection-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`subsection-${title.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <span className="subsection-icon">
          {isOpen ? <Icon type="chevron-down" size={16} /> : <Icon type="chevron-right" size={16} />}
        </span>
        <span className="subsection-title">{title}</span>
      </button>
      {isOpen && (
        <div 
          className="subsection-content"
          id={`subsection-${title.replace(/\s+/g, '-').toLowerCase()}`}
          role="region"
          aria-labelledby={`subsection-${title.replace(/\s+/g, '-').toLowerCase()}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

const Rubric: React.FC = () => {
  return (
    <div>
      <CollapsibleSection title="1. I Received a Notice - What Kind Is It?" defaultOpen={true}>
        <div className="notice-types">
          <CollapsibleSubsection title="3-Day Notice to Pay Rent or Quit" className="notice-type" defaultOpen={true}>
            <p><strong>What it means:</strong> You have 3 business days to pay rent or move out.</p>
            <p><strong>Your options:</strong></p>
            <ul>
              <li>Pay the full amount demanded (if correct)</li>
              <li>Challenge if amount is wrong or notice is defective</li>
              <li>Check if notice follows FL Stat § 83.56 requirements</li>
            </ul>
          </CollapsibleSubsection>

          <CollapsibleSubsection title="7-Day Notice to Cure or Quit" className="notice-type">
            <p><strong>What it means:</strong> You have 7 days to fix a lease violation or move out.</p>
            <p><strong>Your options:</strong></p>
            <ul>
              <li>Fix the violation within 7 days</li>
              <li>Challenge if the violation is false or notice is defective</li>
              <li>Review FL Stat § 83.56(2)(a)</li>
            </ul>
          </CollapsibleSubsection>

          <CollapsibleSubsection title="7-Day Unconditional Quit Notice" className="notice-type">
            <p><strong>What it means:</strong> You must move out in 7 days (for serious violations).</p>
            <p><strong>Your options:</strong></p>
            <ul>
              <li>Challenge the underlying violation</li>
              <li>Verify the violation actually occurred</li>
              <li>Check if notice meets FL Stat § 83.56(2)(b) requirements</li>
            </ul>
          </CollapsibleSubsection>

          <CollapsibleSubsection title="15/30-Day Notice (Month-to-Month)" className="notice-type">
            <p><strong>What it means:</strong> Landlord is ending your month-to-month tenancy.</p>
            <p><strong>Your options:</strong></p>
            <ul>
              <li>Move out by the date specified</li>
              <li>Challenge if notice period is insufficient</li>
              <li>Check FL Stat § 83.57 for proper notice requirements</li>
            </ul>
          </CollapsibleSubsection>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="2. What Are My Defenses?">
        <div className="defenses">
          <CollapsibleSubsection title="Procedural Defenses (FL Stat § 83.60)" className="defense-category" defaultOpen={true}>
            <ul>
              <li><strong>Defective Notice:</strong> Notice doesn't comply with statutory requirements</li>
              <li><strong>Improper Service:</strong> Notice not properly delivered per FL Stat § 83.56(4)</li>
              <li><strong>Wrong Amount:</strong> Rent demand includes illegal fees or incorrect calculations</li>
              <li><strong>Acceptance of Rent:</strong> Landlord accepted rent after serving notice</li>
            </ul>
          </CollapsibleSubsection>

          <CollapsibleSubsection title="Habitability Defenses (FL Stat § 83.51)" className="defense-category">
            <ul>
              <li><strong>Material Noncompliance:</strong> Landlord failed to maintain premises</li>
              <li><strong>Constructive Eviction:</strong> Conditions make unit uninhabitable</li>
              <li><strong>Warranty of Habitability:</strong> Landlord breached implied warranty</li>
              <li><strong>Code Violations:</strong> Property violates housing/building codes</li>
            </ul>
          </CollapsibleSubsection>

          <CollapsibleSubsection title="Discrimination Defenses" className="defense-category">
            <ul>
              <li><strong>Fair Housing Violations:</strong> Eviction based on protected class</li>
              <li><strong>Retaliation (FL Stat § 83.64):</strong> Eviction for exercising legal rights</li>
              <li><strong>Domestic Violence (FL Stat § 83.682):</strong> Special protections for DV survivors</li>
            </ul>
          </CollapsibleSubsection>

          <CollapsibleSubsection title="Payment/Rent Defenses" className="defense-category">
            <ul>
              <li><strong>Rent Already Paid:</strong> You have proof of payment</li>
              <li><strong>Rent Withholding:</strong> Properly withheld rent per FL Stat § 83.60</li>
              <li><strong>Security Deposit:</strong> Landlord owes you money that offsets rent</li>
            </ul>
          </CollapsibleSubsection>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="3. I've Been Sued - What Now? (URGENT)">
        <div className="urgent-actions">
          <CollapsibleSubsection title="TIME-CRITICAL ACTIONS (You have 5 business days to respond)" className="time-critical" defaultOpen={true}>
            <ol>
              <li><strong>File an Answer:</strong> Respond to the complaint in writing</li>
              <li><strong>Raise All Defenses:</strong> List every defense you have</li>
              <li><strong>Request Jury Trial:</strong> If you want one (FL Rule 1.430)</li>
              <li><strong>File Counterclaims:</strong> If landlord owes you money</li>
            </ol>
          </CollapsibleSubsection>

          <CollapsibleSubsection title="How to File an Answer" className="answer-help">
            <ul>
              <li>Go to Orange County Clerk of Court (425 N Orange Ave, Orlando)</li>
              <li>Use form available at clerk's office or online</li>
              <li>Pay filing fee (request fee waiver if you qualify)</li>
              <li>Serve copy on landlord's attorney</li>
            </ul>
          </CollapsibleSubsection>

          <CollapsibleSubsection title="What to Include in Your Answer" className="what-to-include">
            <ul>
              <li>Admit or deny each paragraph of the complaint</li>
              <li>Raise all affirmative defenses</li>
              <li>Include any counterclaims</li>
              <li>Request damages if applicable</li>
            </ul>
          </CollapsibleSubsection>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="4. Know Your General Rights (FL Stat Chapter 83)">
        <div className="general-rights">
          <CollapsibleSubsection title="Right to Habitability (FL Stat § 83.51)" className="rights-category" defaultOpen={true}>
            <ul>
              <li>Working plumbing, heating, and electrical systems</li>
              <li>Structural integrity and weatherproofing</li>
              <li>Freedom from health and safety hazards</li>
              <li>Compliance with applicable building codes</li>
            </ul>
          </CollapsibleSubsection>

          <CollapsibleSubsection title="Right to Peaceful Enjoyment (FL Stat § 83.53)" className="rights-category">
            <ul>
              <li>Freedom from landlord harassment</li>
              <li>24-hour notice before entry (except emergencies)</li>
              <li>Right to change locks (with landlord key)</li>
              <li>Protection from illegal lockouts</li>
            </ul>
          </CollapsibleSubsection>

          <CollapsibleSubsection title="Security Deposit Rights (FL Stat § 83.49)" className="rights-category">
            <ul>
              <li>Return within 15-30 days after move-out</li>
              <li>Written notice of any deductions</li>
              <li>Right to dispute deductions</li>
              <li>Interest on deposits (if required by local law)</li>
            </ul>
          </CollapsibleSubsection>

          <CollapsibleSubsection title="Protection from Retaliation (FL Stat § 83.64)" className="rights-category">
            <ul>
              <li>Can't be evicted for complaints to authorities</li>
              <li>Can't be evicted for organizing tenant groups</li>
              <li>Can't be evicted for exercising legal rights</li>
              <li>90-day protection period after protected activity</li>
            </ul>
          </CollapsibleSubsection>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="5. Orlando & Orange County Resources">
        <div className="resources">
          <CollapsibleSubsection title="Legal Aid & Free Legal Help" className="resource-category" defaultOpen={true}>
            <ul>
              <li><strong>Legal Aid Society of Orange County:</strong> (407) 841-7777</li>
              <li><strong>Florida Rural Legal Services:</strong> (863) 688-7376</li>
              <li><strong>Orange County Bar Association:</strong> Lawyer referral service</li>
              <li><strong>Ninth Judicial Circuit Self-Help:</strong> Forms and guidance</li>
            </ul>
          </CollapsibleSubsection>

          <CollapsibleSubsection title="Court Information" className="resource-category">
            <ul>
              <li><strong>Orange County Clerk of Court:</strong> 425 N Orange Ave, Orlando</li>
              <li><strong>Phone:</strong> (407) 836-2000</li>
              <li><strong>Website:</strong> myorangeclerk.com</li>
              <li><strong>Self-Help Center:</strong> Available for forms and basic guidance</li>
            </ul>
          </CollapsibleSubsection>

          <CollapsibleSubsection title="Housing Resources" className="resource-category">
            <ul>
              <li><strong>Orange County Housing & Community Development:</strong> (407) 836-5200</li>
              <li><strong>Heart of Florida United Way:</strong> 2-1-1 (dial 211)</li>
              <li><strong>Salvation Army:</strong> Emergency assistance</li>
              <li><strong>Catholic Charities:</strong> Rental assistance programs</li>
            </ul>
          </CollapsibleSubsection>

          <CollapsibleSubsection title="Code Enforcement" className="resource-category">
            <ul>
              <li><strong>City of Orlando Code Enforcement:</strong> (407) 246-2280</li>
              <li><strong>Orange County Code Enforcement:</strong> (407) 836-6200</li>
              <li><strong>File Complaints:</strong> For habitability issues</li>
              <li><strong>Request Inspections:</strong> Document poor conditions</li>
            </ul>
          </CollapsibleSubsection>

          <CollapsibleSubsection title="Emergency Resources" className="resource-category">
            <ul>
              <li><strong>Homeless Services Network:</strong> (407) 893-0133</li>
              <li><strong>Coalition for the Homeless:</strong> Emergency shelter</li>
              <li><strong>Orange County Social Services:</strong> (407) 836-7200</li>
              <li><strong>Emergency Rental Assistance:</strong> Check current programs</li>
            </ul>
          </CollapsibleSubsection>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="6. Using the Timeline Tool">
        <div className="feature-explanation">
          <p>
            The <strong>Timeline Tool</strong> is designed to help you create a detailed, chronological record of all events related to your tenancy and eviction case. Proper documentation is critical for defending your rights.
          </p>
          <h4>Key Features:</h4>
          <ul>
            <li><strong>Event Tracking:</strong> Log every interaction, notice, payment, and communication. The tool automatically calculates critical deadlines based on the dates you provide.</li>
            <li><strong>Notice Analysis:</strong> When you enter a notice from your landlord (like a 3-Day Notice for rent), the tool analyzes it for compliance with Florida law, such as checking if the deadline is calculated correctly.</li>
            <li><strong>Data Management:</strong> Your timeline is saved securely in your browser's local storage. You can also export it to a JSON file for your records or to share with an attorney, and import it on another device.</li>
          </ul>
          <h4>How to Use the Timeline:</h4>
          <ol>
            <li>Navigate to the "Timeline" page.</li>
            <li>Click "Add New Event" to open the form.</li>
            <li>Select the `Event Type` that best matches your situation. Different forms will appear for specific legal notices.</li>
            <li>Fill in all required fields. The more detail you provide, the stronger your record will be.</li>
            <li>The tool will display analysis and calculated dates (e.g., "Objection Due Date") directly on the timeline event.</li>
          </ol>
          <p>
            Use this tool to build a comprehensive history. If you end up in court, this timeline will be an invaluable resource for you and your legal representative.
          </p>
        </div>
      </CollapsibleSection>

      <div className="important-notes">
        <h2>📋 Important Notes</h2>
        <ul>
          <li><strong>Keep Records:</strong> Save all notices, communications, and payments</li>
          <li><strong>Take Photos:</strong> Document any property conditions</li>
          <li><strong>Get Everything in Writing:</strong> Verbal agreements aren't enforceable</li>
          <li><strong>Act Quickly:</strong> Court deadlines are strict and unforgiving</li>
          <li><strong>Seek Help Early:</strong> Don't wait until the last minute</li>
        </ul>
      </div>

      <div className="disclaimer">
        <strong>Remember:</strong> This information is general guidance only. Every situation is unique. 
        Consult with a qualified attorney for advice specific to your circumstances.
      </div>
    </div>
  );
};

export default Rubric;
