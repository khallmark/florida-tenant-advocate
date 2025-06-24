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
            <p><strong>What it is:</strong> A demand for rent or possession of the property, governed by FL Stat § 83.56(3).</p>
            <p><strong>Key points:</strong></p>
            <ul>
              <li>You have 3 business days (excluding weekends and court holidays) to pay or move out.</li>
              <li>The notice must be in writing and contain specific language from the statute.</li>
              <li>The amount demanded must be accurate. It cannot include late fees or other charges not defined as "rent" in your lease.</li>
              <li><strong>Action:</strong> Use the Timeline Tool to check if the deadline on your notice is compliant.</li>
            </ul>
          </CollapsibleSubsection>

          <CollapsibleSubsection title="7-Day Notice to Cure (from Landlord)" className="notice-type">
            <p><strong>What it is:</strong> A notice that you have violated the lease in a way that can be fixed ("cured"), per FL Stat § 83.56(2)(b).</p>
            <p><strong>Key points:</strong></p>
            <ul>
              <li>Examples: Unauthorized pet, parking violations, or failing to keep the unit clean.</li>
              <li>You have 7 days to fix the problem.</li>
              <li>If you fix the issue, the landlord cannot evict you on this notice. If you don't, they can terminate the lease.</li>
            </ul>
          </CollapsibleSubsection>

          <CollapsibleSubsection title="7-Day Termination Notice (Non-Curable)" className="notice-type">
            <p><strong>What it is:</strong> A notice to vacate for a serious lease violation that you are not given a chance to fix, per FL Stat § 83.56(2)(a).</p>
            <p><strong>Key points:</strong></p>
            <ul>
              <li>Examples: Intentional destruction of property or creating an extreme disturbance.</li>
              <li>You must move out within 7 days. There is no option to "cure" the violation.</li>
            </ul>
          </CollapsibleSubsection>
          
          <CollapsibleSubsection title="Notice to Terminate Tenancy (No-Fault)" className="notice-type">
            <p><strong>What it is:</strong> Your landlord is ending your tenancy without a specific reason, per FL Stat § 83.57.</p>
            <p><strong>Key points:</strong></p>
            <ul>
              <li><strong>Month-to-Month:</strong> Requires at least 30 days' written notice before the end of the monthly period.</li>
              <li><strong>Week-to-Week:</strong> Requires at least 7 days' written notice.</li>
            </ul>
          </CollapsibleSubsection>

          <CollapsibleSubsection title="Notice of Claim on Security Deposit" className="notice-type">
            <p><strong>What it is:</strong> After you move out, the landlord sends this notice if they intend to keep some or all of your security deposit, per FL Stat § 83.49.</p>
            <p><strong>Key points:</strong></p>
            <ul>
              <li>Landlord must send it within 30 days of you moving out.</li>
              <li><strong>You have 15 days</strong> to object in writing. If you don't, the landlord can keep the amount claimed.</li>
            </ul>
          </CollapsibleSubsection>

          <CollapsibleSubsection title="Landlord's Notice of Entry" className="notice-type">
            <p><strong>What it is:</strong> Notice that the landlord intends to enter your home, per FL Stat § 83.53.</p>
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
            <p>Once you receive an Eviction Complaint and Summons, you have <strong>only 5 business days</strong> (excluding weekends/holidays) to respond to the court. This is not a suggestion; it is a hard deadline.</p>
            <ol>
              <li><strong>File an Answer:</strong> You must file a written response with the Clerk of Court. This is your only chance to tell your side of the story.</li>
              <li>
                <strong>Pay Rent into Court Registry:</strong> This is the most important and most unforgiving rule. If the lawsuit is for non-payment of rent, you MUST deposit the rent the landlord claims you owe into the court registry when you file your answer. 
                <div className="warning-box">
                  <strong>No Money = No Play = Get Evicted.</strong> Failure to pay rent into the registry is an <strong>absolute waiver</strong> of all your defenses (other than "I paid it"). The landlord can get an <strong>instant default judgment</strong> to evict you, often without any further hearing. They don't have to wait for other deadlines. Even paying a few hundred dollars and filing a motion to explain why the rest isn't due keeps you in the game. Paying nothing gets you removed from your home.
                </div>
                See FL Stat § 83.60(2).
              </li>
              <li><strong>Serve the Landlord:</strong> Provide a copy of your filed documents to the landlord or their attorney.</li>
            </ol>
          </CollapsibleSubsection>

          <CollapsibleSubsection title="Common & Costly Mistakes to Avoid" className="answer-help" defaultOpen={true}>
            <ul>
              <li><strong>Doing Nothing:</strong> If you do nothing, you lose. Automatically. The landlord will get a default judgment and a writ of possession, and the sheriff will remove you.</li>
              <li><strong>Not Paying Rent into the Registry:</strong> It bears repeating. <em>This is the #1 way tenants get evicted faster.</em> If you have defenses but don't deposit the rent money with the court, your defenses will not be heard.</li>
              <li><strong>Filing a Defective Motion to Determine Rent:</strong> If you dispute the amount of rent owed, you must file a motion to have the judge determine the correct amount. You can't just say "the amount is wrong." You must attach documents or explain *why* it's wrong (e.g., "Landlord failed to credit my $500 payment on 5/15, see attached receipt").</li>
              <li><strong>Missing the 5-Day Deadline:</strong> There are no extensions. If you file on day 6, it's too late.</li>
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
          <CollapsibleSubsection title="Defense: Landlord Used a Defective Notice (FL Stat § 83.56)" defaultOpen={true}>
            <p><strong>What it is:</strong> The eviction notice the landlord gave you is legally flawed. Florida law has very strict requirements for what notices must say and how they must be delivered.</p>
            <p><strong>What to look for:</strong></p>
            <ul>
              <li><strong>3-Day Notice Errors:</strong> Does it demand charges other than rent (like late fees)? Is the deadline calculated incorrectly (it must exclude the day of delivery, weekends, and court holidays)? Does it lack the specific required language from the statute?</li>
              <li><strong>7-Day Notice Errors:</strong> Does it fail to specify the exact lease violation? Is the delivery method wrong?</li>
            </ul>
            <p><strong>What you must do:</strong> Raise this as an "affirmative defense" in your Answer. You should state exactly what was wrong with the notice.</p>
            <p><strong>Potential Relief:</strong> The court will dismiss the eviction lawsuit. However, the landlord can usually just give you a new, correct notice and start the process over.</p>
          </CollapsibleSubsection>

          <CollapsibleSubsection title="Defense: Landlord Accepted Rent After Notice (Waiver) (FL Stat § 83.56(5))">
            <p><strong>What it is:</strong> The landlord may have waived the right to evict you on a specific notice because they accepted rent from you *after* giving you the notice.</p>
            <p><strong>What you must have done:</strong> You must have a record of paying rent (full or partial) *after* the date on the termination notice. Keep bank statements, receipts, or canceled checks.</p>
            <p><strong>Important Exception:</strong> If the landlord accepted *partial* rent, they can still proceed IF they gave you a receipt stating the new balance due, posted a new 3-day notice for the remaining amount, or deposited the partial rent into the court registry when they filed the eviction.</p>
            <p><strong>What you must do:</strong> Raise this as an "affirmative defense" in your Answer, stating the date and amount of rent paid and accepted by the landlord.</p>
            <p><strong>Potential Relief:</strong> Dismissal of the eviction lawsuit for that specific notice.</p>
          </CollapsibleSubsection>

          <CollapsibleSubsection title="Defense: Failure to Maintain Premises / Uninhabitable Conditions (FL Stat § 83.51 & 83.60)">
            <p><strong>What it is:</strong> The landlord has failed to maintain the property as required by law, and the conditions are bad enough to affect your ability to live there. This is one of the most powerful but procedurally difficult defenses.</p>
            <p><strong>What you must have done (THIS IS CRITICAL):</strong></p>
            <ol>
              <li>You must have sent a <strong>7-day written notice</strong> to your landlord, preferably by certified mail.</li>
              <li>This notice must describe the specific problems (e.g., "the roof leaks in the bedroom," "there is no hot water").</li>
              <li>The notice must state your intention to withhold rent if the repairs are not made within 7 days.</li>
              <li>The landlord must have failed to make the repairs within those 7 days.</li>
            </ol>
            <p><strong>How to use it:</strong> Raise this as an "affirmative defense" in your Answer. Remember, you MUST pay the rent you withheld into the court registry. The judge will then decide how much your rent should be reduced because of the bad conditions.</p>
            <p><strong>Potential Relief:</strong> This can be a complete defense to an eviction for non-payment. The court can reduce the rent you owe or find that you owe nothing.</p>
          </CollapsibleSubsection>

          <CollapsibleSubsection title="Defense: Retaliatory Eviction (FL Stat § 83.64)">
            <p><strong>What it is:</strong> The landlord is trying to evict you not for a legitimate reason, but because you exercised a legal right.</p>
            <p><strong>What you must have done:</strong> You must have acted in good faith when you did one of the following:
              <ul>
                <li>Complained to a government agency (like code enforcement) about a violation.</li>
                <li>Organized or participated in a tenants' union.</li>
                <li>Complained to the landlord about their failure to maintain the property (e.g., you sent the 7-day notice described above).</li>
              </ul>
            </p>
            <p><strong>What you must do:</strong> Raise this as an "affirmative defense." You will need to show a connection between your protected action and the landlord's decision to evict you.</p>
            <p><strong>Potential Relief:</strong> The court can deny the eviction.</p>
          </CollapsibleSubsection>

          <CollapsibleSubsection title="Defense: Prohibited Practices (FL Stat § 83.67)">
            <p><strong>What it is:</strong> The landlord has engaged in illegal "self-help" eviction tactics.</p>
            <p><strong>What the landlord cannot do:</strong></p>
            <ul>
              <li>Shut off your utilities (water, electricity, etc.).</li>
              <li>Change the locks or prevent you from accessing your home.</li>
              <li>Remove your personal property from the unit.</li>
              <li>Remove the doors or windows.</li>
            </ul>
            <p><strong>What you must do:</strong> This is both a defense to eviction and a basis for your own lawsuit (a "counterclaim"). You should document these actions thoroughly with photos, videos, and police reports if applicable.</p>
            <p><strong>Potential Relief:</strong> The court can deny the eviction and award you damages of 3 months' rent or your actual damages, whichever is greater, plus attorney's fees.</p>
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

      <CollapsibleSection title="4. Florida Statutes Reference">
        <p>
          The full text of the Florida Residential Landlord & Tenant Act (Florida Statutes, Chapter 83, Part II) is available for your reference. 
          While this tool summarizes key parts, you can read the specific laws to understand them in detail.
        </p>
        <p>
          <a href="/statutes">View Full Statutes</a>
        </p>
      </CollapsibleSection>
    </div>
  );
};

export default Rubric;
