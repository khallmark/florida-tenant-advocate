import React, { useState } from 'react';
import Icon from '../components/Icon';
import { CollapsibleSection, CollapsibleSubsection } from '../components/Collapsible';

const Rubric: React.FC = () => {
  return (
    <div>
      <div className="disclaimer">
        <p><strong>Disclaimer:</strong> This tool provides general information about tenant rights and procedures in Orlando, Florida. It is not a substitute for legal advice from a qualified attorney. Every eviction case is unique. You should consult with an attorney to understand your specific rights and options. This tool is designed to help you organize your case and communicate effectively with legal counsel.</p>
      </div>

      <CollapsibleSection title="🚨 Orlando & Orange County Resources (Get Help Here)" defaultOpen={true}>
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

      <CollapsibleSection title="1. I Received a Notice - What Kind Is It?" defaultOpen={true}>
        <div className="notice-types">
          <CollapsibleSubsection title="3-Day Notice (Non-Payment)" className="notice-type" defaultOpen={true}>
            <p><strong>What it is:</strong> A demand for rent or possession of the property, governed by <a href="https://www.flsenate.gov/Laws/Statutes/2023/83.56" target="_blank" rel="noopener noreferrer">FL Stat § 83.56(3)</a>.</p>
            <p><strong>Key points:</strong></p>
            <ul>
              <li>You have 3 business days (excluding weekends and court holidays) to pay or move out.</li>
              <li>The notice must be in writing and contain specific language from the statute.</li>
              <li>The amount demanded must be accurate. It cannot include late fees or other charges not defined as "rent" in your lease.</li>
              <li><strong>Action:</strong> Use the Timeline Tool to check if the deadline on your notice is compliant.</li>
            </ul>
          </CollapsibleSubsection>

          <CollapsibleSubsection title="7-Day Notice to Cure (from Landlord)" className="notice-type">
            <p><strong>What it is:</strong> A notice that you have violated the lease in a way that can be fixed ("cured"), per <a href="https://www.flsenate.gov/Laws/Statutes/2023/83.56" target="_blank" rel="noopener noreferrer">FL Stat § 83.56(2)(b)</a>.</p>
            <p><strong>Key points:</strong></p>
            <ul>
              <li>Examples: Unauthorized pet, parking violations, or failing to keep the unit clean.</li>
              <li>You have 7 days to fix the problem.</li>
              <li>If you fix the issue, the landlord cannot evict you on this notice. If you don't, they can terminate the lease.</li>
            </ul>
          </CollapsibleSubsection>

          <CollapsibleSubsection title="7-Day Termination Notice (Non-Curable)" className="notice-type">
            <p><strong>What it is:</strong> A notice to vacate for a serious lease violation that you are not given a chance to fix, per <a href="https://www.flsenate.gov/Laws/Statutes/2023/83.56" target="_blank" rel="noopener noreferrer">FL Stat § 83.56(2)(a)</a>.</p>
            <p><strong>Key points:</strong></p>
            <ul>
              <li>Examples: Intentional destruction of property or creating an extreme disturbance.</li>
              <li>You must move out within 7 days. There is no option to "cure" the violation.</li>
            </ul>
          </CollapsibleSubsection>
          
          <CollapsibleSubsection title="Notice to Terminate Tenancy (No-Fault)" className="notice-type">
            <p><strong>What it is:</strong> Your landlord is ending your tenancy without a specific reason, per <a href="https://www.flsenate.gov/Laws/Statutes/2023/83.57" target="_blank" rel="noopener noreferrer">FL Stat § 83.57</a>.</p>
            <p><strong>Key points:</strong></p>
            <ul>
              <li><strong>Month-to-Month:</strong> Requires at least 30 days' written notice before the end of the monthly period.</li>
              <li><strong>Week-to-Week:</strong> Requires at least 7 days' written notice.</li>
            </ul>
          </CollapsibleSubsection>

          <CollapsibleSubsection title="Notice of Claim on Security Deposit" className="notice-type">
            <p><strong>What it is:</strong> After you move out, the landlord sends this notice if they intend to keep some or all of your security deposit, per <a href="https://www.flsenate.gov/Laws/Statutes/2023/83.49" target="_blank" rel="noopener noreferrer">FL Stat § 83.49</a>.</p>
            <p><strong>Key points:</strong></p>
            <ul>
              <li>Landlord must send it within 30 days of you moving out.</li>
              <li><strong>You have 15 days</strong> to object in writing. If you don't, the landlord can keep the amount claimed.</li>
            </ul>
          </CollapsibleSubsection>

          <CollapsibleSubsection title="Landlord's Notice of Entry" className="notice-type">
            <p><strong>What it is:</strong> Notice that the landlord intends to enter your home, per <a href="https://www.flsenate.gov/Laws/Statutes/2023/83.53" target="_blank" rel="noopener noreferrer">FL Stat § 83.53</a>.</p>
            <p><strong>Key points:</strong></p>
            <ul>
              <li>Requires "reasonable notice," which is defined as at least 24 hours.</li>
              <li>Entry must be at a "reasonable time" (7:30 AM to 8:00 PM).</li>
              <li>Consent is not required in an emergency.</li>
            </ul>
          </CollapsibleSubsection>
        </div>
      </CollapsibleSection>
      
      <CollapsibleSection title="2. I've Been Sued - What Now? (URGENT)">
        <div className="urgent-actions">
          <CollapsibleSubsection title="TIME-CRITICAL ACTIONS (You have 5 business days)" className="time-critical" defaultOpen={true}>
            <p>Once you receive an Eviction Complaint and Summons, you have <strong>only 5 business days</strong> (excluding weekends/holidays) to respond to the court.</p>
            <ol>
              <li><strong>File an Answer:</strong> You must file a written response with the Clerk of Court.</li>
              <li><strong>Pay Rent into Court Registry:</strong> If the lawsuit is for non-payment of rent, you MUST deposit the rent owed into the court registry at the time you file your answer, or file a Motion to Determine Rent. <strong>FAILURE TO DO THIS RESULTS IN AN AUTOMATIC DEFAULT EVICTION.</strong> See <a href="https://www.flsenate.gov/Laws/Statutes/2023/83.60" target="_blank" rel="noopener noreferrer">FL Stat § 83.60(2)</a>.</li>
              <li><strong>Serve the Landlord:</strong> Provide a copy of your filed documents to the landlord or their attorney.</li>
            </ol>
          </CollapsibleSubsection>

          <CollapsibleSubsection title="Common Mistakes to Avoid" className="answer-help">
            <ul>
              <li><strong>Missing the 5-Day Deadline:</strong> This is the most common mistake and results in an automatic loss.</li>
              <li><strong>Not Paying Rent into the Registry:</strong> Per <a href="https://www.flsenate.gov/Laws/Statutes/2023/83.60" target="_blank" rel="noopener noreferrer">FL Stat § 83.60(2)</a>, if you are raising any defense other than "I paid the rent," you must deposit the allegedly owed rent with the court.</li>
              <li><strong>Not Filing a Motion to Determine Rent:</strong> If you disagree with the amount of rent the landlord claims you owe, you must file a specific motion asking the judge to determine the correct amount. You can't just write it in your answer.</li>
              <li><strong>Ignoring the Lawsuit:</strong> Many tenants lose by default because they do nothing. You must participate in the court process.</li>
            </ul>
          </CollapsibleSubsection>

          <CollapsibleSubsection title="How to Write Your Reply (The 'Answer')" className="what-to-include">
            <ul>
              <li>Use the forms available from the Orange County Clerk of Court.</li>
              <li>Go through the landlord's complaint paragraph by paragraph. For each one, write whether you "Admit," "Deny," or are "Without Knowledge" of the statement.</li>
              <li>List your "Affirmative Defenses." These are the reasons you believe you should not be evicted. Use the "Defenses to Possession" section below for help.</li>
              <li>File any "Counterclaims" if the landlord owes you money (e.g., for breaching the lease).</li>
              <li>Sign your documents and make copies for yourself and the landlord.</li>
            </ul>
          </CollapsibleSubsection>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="3. Defenses to Possession">
        <div className="defenses">
          <CollapsibleSubsection title="Procedural Defenses (The Landlord Didn't Follow the Rules)" className="defense-category" defaultOpen={true}>
            <p>These defenses argue the landlord filed the case incorrectly. If successful, the case is usually dismissed, but the landlord can often refile it correctly.</p>
            <ul>
              <li><strong>Defective Notice:</strong> The eviction notice (e.g., 3-day notice) did not meet the strict requirements of <a href="https://www.flsenate.gov/Laws/Statutes/2023/83.56" target="_blank" rel="noopener noreferrer">FL Stat § 83.56</a>. (e.g., wrong amount of rent, incorrect deadline). <strong>Relief:</strong> Dismissal of eviction lawsuit.</li>
              <li><strong>Improper Service:</strong> The notice or the lawsuit papers were not delivered to you correctly per the statutes. <strong>Relief:</strong> Dismissal of eviction lawsuit.</li>
              <li><strong>Waiver / Acceptance of Rent:</strong> The landlord accepted rent after serving the notice, which can waive their right to evict on that notice (<a href="https://www.flsenate.gov/Laws/Statutes/2023/83.56" target="_blank" rel="noopener noreferrer">FL Stat § 83.56(5)</a>). <strong>Relief:</strong> Dismissal of eviction lawsuit.</li>
            </ul>
          </CollapsibleSubsection>
          
          <CollapsibleSubsection title="Substantive Defenses (The Landlord is at Fault)" className="defense-category">
            <p>These defenses address the core issues of the case.</p>
            <ul>
              <li><strong>Failure to Maintain Premises (Habitability):</strong> The landlord failed to maintain the property as required by <a href="https://www.flsenate.gov/Laws/Statutes/2023/83.51" target="_blank" rel="noopener noreferrer">FL Stat § 83.51</a>. To use this, you must have given the landlord a proper 7-day written notice to make repairs before withholding rent. <strong>Relief:</strong> This can be a complete defense to an eviction for non-payment of rent. A judge can reduce the rent you owe for the time the property was in disrepair.</li>
              <li><strong>Retaliatory Eviction:</strong> The landlord is evicting you primarily because you exercised a legal right, such as complaining to code enforcement or organizing with other tenants (<a href="https://www.flsenate.gov/Laws/Statutes/2023/83.64" target="_blank" rel="noopener noreferrer">FL Stat § 83.64</a>). <strong>Relief:</strong> The court can deny the eviction.</li>
               <li><strong>Prohibited Practices:</strong> The landlord engaged in illegal actions like shutting off your utilities or locking you out (<a href="https://www.flsenate.gov/Laws/Statutes/2023/83.67" target="_blank" rel="noopener noreferrer">FL Stat § 83.67</a>). <strong>Relief:</strong> You may be entitled to damages of 3 months' rent or your actual damages, whichever is greater.</li>
            </ul>
          </CollapsibleSubsection>

          <CollapsibleSubsection title="Other Defenses" className="defense-category">
            <ul>
              <li><strong>Rent Was Paid:</strong> You have proof that you paid the rent the landlord is suing for. <strong>Relief:</strong> Eviction is denied.</li>
              <li><strong>Discrimination:</strong> The eviction is based on your race, religion, sex, disability, familial status, or other protected class under the Fair Housing Act. <strong>Relief:</strong> Eviction is denied, and you may have claims for damages.</li>
              <li><strong>Improper Security Deposit Claim:</strong> If the eviction is about charges related to a security deposit, you can defend if the landlord did not follow the strict notice rules in <a href="https://www.flsenate.gov/Laws/Statutes/2023/83.49" target="_blank" rel="noopener noreferrer">FL Stat § 83.49</a>. <strong>Relief:</strong> Landlord may lose the right to claim the deposit.</li>
            </ul>
          </CollapsibleSubsection>

          <CollapsibleSubsection title="⚠️ Important Reminders" className="defense-category">
            <ul className="important-notes-list">
              <li><strong>Keep Records:</strong> Save all notices, communications, and payments.</li>
              <li><strong>Take Photos:</strong> Document any property conditions.</li>
              <li><strong>Get Everything in Writing:</strong> Verbal agreements aren't enforceable.</li>
              <li><strong>Act Quickly:</strong> Court deadlines are strict and unforgiving.</li>
              <li><strong>Seek Help Early:</strong> Don't wait until the last minute.</li>
            </ul>
          </CollapsibleSubsection>
        </div>
      </CollapsibleSection>
    </div>
  );
};

export default Rubric;
