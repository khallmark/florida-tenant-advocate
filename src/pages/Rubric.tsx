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
          <CollapsibleSubsection title="⚖️ Legal Aid & Free Legal Services" className="resource-category" defaultOpen={true}>
            <p><strong>What these organizations provide:</strong> Free or low-cost legal representation, advice, and assistance for qualifying low-income residents in housing, family law, consumer protection, and civil rights matters.</p>
            
            <CollapsibleSubsection title="Legal Aid Society of Orange County Bar Association" className="legal-org">
              <p><strong>Primary Contact:</strong> (407) 841-8310</p>
              <p><strong>Address:</strong> 100 E. Robinson St, Orlando, FL 32801</p>
              <p><strong>Services:</strong></p>
              <ul>
                <li><strong>Housing Law:</strong> Private tenant problems, foreclosure defense, eviction defense</li>
                <li><strong>Family Law:</strong> Divorce, custody, guardianships</li>
                <li><strong>Consumer Law:</strong> Bankruptcies, debt collection, wage garnishment defense</li>
                <li><strong>Immigration:</strong> Adjustment of status, citizenship, VAWA applications</li>
                <li><strong>Homeless Clinic:</strong> Walk-in clinic Mondays 1:30PM-3:00PM</li>
              </ul>
              <p><strong>Hours:</strong> Monday-Friday 8:30AM-5:00PM | Appointment calls: Mon-Thu 9:00AM-Noon & 1:30PM-3:00PM, Most Saturdays 9:00AM-Noon</p>
              <p><strong>Website:</strong> legalaidocba.org</p>
            </CollapsibleSubsection>

            <CollapsibleSubsection title="Community Legal Services of Mid-Florida" className="legal-org">
              <p><strong>Contact:</strong> Call their intake line for assistance</p>
              <p><strong>Service Area:</strong> Orange, Osceola, Seminole, Volusia, Lake, Marion, Sumter, Citrus, Hernando, and Putnam counties</p>
              <p><strong>Services:</strong> Housing law, family law, consumer protection, fair housing, disaster relief</p>
              <p><strong>Website:</strong> legalaccessforall.org</p>
              <p><strong>Special Programs:</strong> Online legal clinics, fair housing advocacy, small business assistance</p>
            </CollapsibleSubsection>

            <CollapsibleSubsection title="Florida Legal Services" className="legal-org">
              <p><strong>Eviction Prevention Helpline:</strong> 1-888-780-0443</p>
              <p><strong>Fair Housing Hotline:</strong> (407) 801-4224 (English) | (850) 680-1729 (Spanish)</p>
              <p><strong>Email:</strong> fairhousing@floridalegal.org</p>
              <p><strong>Services:</strong></p>
              <ul>
                <li><strong>Eviction Prevention:</strong> Legal representation, negotiation, court filings, tenant education</li>
                <li><strong>Fair Housing:</strong> Discrimination complaints, reasonable accommodations</li>
                <li><strong>Emergency Rental Assistance:</strong> Referrals to local programs</li>
                <li><strong>Free Answer Form Builder:</strong> Online tool to respond to eviction complaints</li>
              </ul>
              <p><strong>Website:</strong> floridalegal.org</p>
            </CollapsibleSubsection>

            <CollapsibleSubsection title="Florida Rural Legal Services" className="legal-org">
              <p><strong>Contact:</strong> (863) 688-7376</p>
              <p><strong>Service Focus:</strong> Migrant and seasonal farmworkers, rural communities</p>
              <p><strong>Services:</strong> Housing rights, labor law, civil rights, family law</p>
            </CollapsibleSubsection>
          </CollapsibleSubsection>

          <CollapsibleSubsection title="🏛️ Court Information & Self-Help" className="resource-category">
            <p><strong>What these services provide:</strong> Court forms, procedural guidance, self-help resources, and assistance with filing legal documents.</p>
            
            <CollapsibleSubsection title="Orange County Clerk of Court" className="court-service">
              <p><strong>Main Office:</strong> 425 N Orange Ave, Orlando, FL 32801</p>
              <p><strong>Phone:</strong> (407) 836-2000</p>
              <p><strong>Website:</strong> myorangeclerk.com</p>
              <p><strong>Services:</strong></p>
              <ul>
                <li><strong>Self-Help Center:</strong> Room 340, open 7:30AM-4:00PM</li>
                <li><strong>Forms and guidance:</strong> Eviction response forms, small claims assistance</li>
                <li><strong>Case lookup:</strong> Online access to court records</li>
                <li><strong>Filing assistance:</strong> Help with court document preparation</li>
              </ul>
            </CollapsibleSubsection>

            <CollapsibleSubsection title="Ninth Judicial Circuit Self-Help" className="court-service">
              <p><strong>Orange County Family Court Services:</strong> (407) 836-6054</p>
              <p><strong>Location:</strong> Orange County Courthouse, Suite 330</p>
              <p><strong>Services:</strong></p>
              <ul>
                <li><strong>Family law forms:</strong> Divorce, custody, domestic violence</li>
                <li><strong>Pro se assistance:</strong> Guidance for self-represented litigants</li>
                <li><strong>Eviction forms:</strong> Answer forms for residential eviction cases</li>
                <li><strong>Court procedure guidance:</strong> How to file, serve papers, appear in court</li>
              </ul>
              <p><strong>Website:</strong> ninthcircuit.org</p>
            </CollapsibleSubsection>

            <CollapsibleSubsection title="Orange County Bar Association Lawyer Referral" className="court-service">
              <p><strong>Phone:</strong> (407) 422-4537</p>
              <p><strong>Services:</strong></p>
              <ul>
                <li><strong>Free 30-minute consultations:</strong> With qualified attorneys</li>
                <li><strong>Lawyer matching:</strong> Based on your legal issue</li>
                <li><strong>Free mediation:</strong> For qualifying disputes</li>
                <li><strong>Hours:</strong> Monday-Friday 9:00AM-4:30PM</li>
              </ul>
              <p><strong>Website:</strong> orangecountybar.community.lawyer</p>
            </CollapsibleSubsection>
          </CollapsibleSubsection>

          <CollapsibleSubsection title="🏠 Housing Resources & Rental Assistance" className="resource-category">
            <p><strong>What these programs provide:</strong> Emergency rental assistance, housing vouchers, eviction prevention, housing counseling, and affordable housing options.</p>
            
            <CollapsibleSubsection title="Orange County Housing & Community Development" className="housing-org">
              <p><strong>Phone:</strong> (407) 836-5150</p>
              <p><strong>Address:</strong> 525 East South Street, Orlando, FL 32801</p>
              <p><strong>Email:</strong> housing@ocfl.net</p>
              <p><strong>Services:</strong></p>
              <ul>
                <li><strong>Section 8 Housing Choice Vouchers:</strong> Rental assistance for very low-income families</li>
                <li><strong>Tenant Based Rental Assistance (TBRA):</strong> Federal rental subsidies</li>
                <li><strong>Housing counseling:</strong> Budgeting, tenant rights education</li>
                <li><strong>Landlord relations:</strong> Property owner recruitment and support</li>
              </ul>
              <p><strong>Note:</strong> Housing Choice Voucher waiting list is currently closed</p>
            </CollapsibleSubsection>

            <CollapsibleSubsection title="Orlando Housing Authority" className="housing-org">
              <p><strong>Phone:</strong> (407) 895-3300</p>
              <p><strong>Address:</strong> 390 North Bumby Ave, Orlando, FL 32803</p>
              <p><strong>Services:</strong></p>
              <ul>
                <li><strong>Public Housing:</strong> Affordable rental units</li>
                <li><strong>Section 8 Vouchers:</strong> Approximately 4,600 vouchers administered</li>
                <li><strong>HUD-VASH Program:</strong> Housing assistance for veterans</li>
                <li><strong>Moving to Work (MTW):</strong> Flexible housing assistance programs</li>
              </ul>
              <p><strong>Website:</strong> orlandohousing.org</p>
              <p><strong>Hours:</strong> Monday-Friday 8:00AM-5:00PM</p>
            </CollapsibleSubsection>

            <CollapsibleSubsection title="Orange County Office of Tenant Services" className="housing-org">
              <p><strong>Phone:</strong> (407) 836-RENT or (407) 836-7368</p>
              <p><strong>Email:</strong> TenantServices@ocfl.net</p>
              <p><strong>Services:</strong></p>
              <ul>
                <li><strong>Tenant rights education:</strong> Information on Florida landlord-tenant law</li>
                <li><strong>Referrals:</strong> To legal aid, code enforcement, nonprofits</li>
                <li><strong>Mediation assistance:</strong> Help resolving landlord-tenant disputes</li>
                <li><strong>Resource clearinghouse:</strong> One-stop information center</li>
              </ul>
              <p><strong>Coverage Area:</strong> Unincorporated Orange County only</p>
              <p><strong>Hours:</strong> Monday-Friday 8:30AM-12:00PM, 1:00PM-4:30PM</p>
            </CollapsibleSubsection>

            <CollapsibleSubsection title="Eviction Prevention in the Community (EPIC)" className="housing-org">
              <p><strong>Phone:</strong> (407) 836-6514</p>
              <p><strong>Services:</strong></p>
              <ul>
                <li><strong>Emergency financial assistance:</strong> To stop eviction process</li>
                <li><strong>Case management:</strong> Budget counseling, resource referrals</li>
                <li><strong>Eligibility requirements:</strong> Families with minor children, court-filed eviction, Orange County residents</li>
                <li><strong>Once-in-a-lifetime assistance:</strong> One-time program participation per family</li>
              </ul>
              <p><strong>How to apply:</strong> Leave message with full name, phone, court case number</p>
            </CollapsibleSubsection>

            <CollapsibleSubsection title="Heart of Florida United Way (2-1-1)" className="housing-org">
              <p><strong>Phone:</strong> 2-1-1 (dial 211)</p>
              <p><strong>Services:</strong></p>
              <ul>
                <li><strong>Emergency assistance referrals:</strong> Rent, utilities, food</li>
                <li><strong>Social services navigation:</strong> Comprehensive resource database</li>
                <li><strong>Crisis support:</strong> 24/7 helpline</li>
                <li><strong>Multilingual assistance:</strong> Available in multiple languages</li>
              </ul>
            </CollapsibleSubsection>

            <CollapsibleSubsection title="Additional Housing Assistance Organizations" className="housing-org">
              <ul>
                <li><strong>Salvation Army Central Florida:</strong> Emergency rental assistance, case management</li>
                <li><strong>Catholic Charities of Central Florida:</strong> Rental assistance programs, housing counseling</li>
                <li><strong>Homeless Services Network:</strong> (407) 893-0133 - Emergency housing, homeless prevention</li>
                <li><strong>Coalition for the Homeless of Central Florida:</strong> Emergency shelter, transitional housing</li>
                <li><strong>Orange County Social Services:</strong> (407) 836-7200 - Emergency assistance programs</li>
              </ul>
            </CollapsibleSubsection>
          </CollapsibleSubsection>

          <CollapsibleSubsection title="🔧 Code Enforcement & Housing Standards" className="resource-category">
            <p><strong>What code enforcement does:</strong> Investigate habitability complaints, issue citations for violations, require landlords to make repairs, and document unsafe living conditions.</p>
            
            <CollapsibleSubsection title="City of Orlando Code Enforcement" className="code-service">
              <p><strong>Phone:</strong> (407) 246-2280</p>
              <p><strong>Services:</strong></p>
              <ul>
                <li><strong>Habitability complaints:</strong> Plumbing, electrical, structural issues</li>
                <li><strong>Property inspections:</strong> Document poor living conditions</li>
                <li><strong>Violation enforcement:</strong> Citations and fines for non-compliance</li>
                <li><strong>Tenant support:</strong> Evidence gathering for court cases</li>
              </ul>
              <p><strong>Coverage:</strong> City of Orlando limits only</p>
            </CollapsibleSubsection>

            <CollapsibleSubsection title="Orange County Code Enforcement" className="code-service">
              <p><strong>Phone:</strong> (407) 836-6200</p>
              <p><strong>Services:</strong></p>
              <ul>
                <li><strong>Housing code violations:</strong> Health and safety standards enforcement</li>
                <li><strong>Complaint investigations:</strong> Anonymous reporting available</li>
                <li><strong>Repair orders:</strong> Legal requirements for landlord compliance</li>
                <li><strong>Court testimony:</strong> Officials can testify about violations</li>
              </ul>
              <p><strong>Coverage:</strong> Unincorporated Orange County</p>
            </CollapsibleSubsection>

            <p><strong>Important Note:</strong> Code enforcement violations can serve as evidence of uninhabitable conditions in eviction defense cases under FL Stat § 83.51.</p>
          </CollapsibleSubsection>

          <CollapsibleSubsection title="🆘 Emergency Resources & Crisis Support" className="resource-category">
            <p><strong>When to use these services:</strong> Immediate housing crisis, risk of homelessness, emergency financial assistance, or when you need shelter tonight.</p>
            
            <CollapsibleSubsection title="Immediate Emergency Assistance" className="emergency-service">
              <ul>
                <li><strong>Homeless Services Network:</strong> (407) 893-0133 - Coordinated entry for emergency shelter</li>
                <li><strong>Coalition for the Homeless:</strong> Emergency shelter placement, crisis intervention</li>
                <li><strong>Orange County Social Services:</strong> (407) 836-7200 - Emergency financial assistance</li>
                <li><strong>Heart of Florida United Way:</strong> 2-1-1 - Crisis resources, emergency referrals</li>
              </ul>
            </CollapsibleSubsection>

            <CollapsibleSubsection title="Emergency Rental Assistance Programs" className="emergency-service">
              <p><strong>Status Update:</strong> Florida's state ERAP program (OUR FLORIDA) is closed, but local programs may still be available.</p>
              <ul>
                <li><strong>Orange County ERAP:</strong> Check current availability at orangecountyfl.net</li>
                <li><strong>Orlando City ERAP:</strong> Check current availability through city website</li>
                <li><strong>EPIC Program:</strong> (407) 836-6514 - For families with children facing court eviction</li>
              </ul>
              <p><strong>For current ERAP availability:</strong> Call the Florida Legal Services Eviction Prevention Helpline at 1-888-780-0443</p>
            </CollapsibleSubsection>

            <CollapsibleSubsection title="Utility Assistance" className="emergency-service">
              <ul>
                <li><strong>LIHEAP (Low Income Home Energy Assistance):</strong> Through local community action agencies</li>
                <li><strong>Salvation Army:</strong> Emergency utility assistance</li>
                <li><strong>Catholic Charities:</strong> Utility bill payment assistance</li>
                <li><strong>Project Hope:</strong> Through Heart of Florida United Way</li>
              </ul>
            </CollapsibleSubsection>
          </CollapsibleSubsection>

          <CollapsibleSubsection title="📞 Quick Reference - Critical Numbers" className="resource-category emergency-numbers">
            <p><strong>Save these numbers in your phone:</strong></p>
            <ul>
              <li><strong>🆘 Emergency Shelter:</strong> (407) 893-0133 (Homeless Services Network)</li>
              <li><strong>⚖️ Legal Emergency:</strong> (407) 841-8310 (Legal Aid Society)</li>
              <li><strong>🏠 Eviction Help:</strong> 1-888-780-0443 (FL Legal Services Eviction Prevention)</li>
              <li><strong>📋 Court Forms:</strong> (407) 836-2000 (Orange County Clerk)</li>
              <li><strong>🏛️ Code Enforcement:</strong> (407) 246-2280 (Orlando) | (407) 836-6200 (Orange County)</li>
              <li><strong>💰 Crisis Assistance:</strong> 2-1-1 (Heart of Florida United Way)</li>
              <li><strong>👨‍⚖️ Lawyer Referral:</strong> (407) 422-4537 (Orange County Bar Association)</li>
            </ul>
          </CollapsibleSubsection>

          <CollapsibleSubsection title="⚠️ Important Reminders" className="resource-category">
            <ul className="important-notes-list">
              <li><strong>Act Quickly:</strong> Many programs have limited funding and waiting lists</li>
              <li><strong>Gather Documents:</strong> Bring eviction notices, lease agreements, income proof</li>
              <li><strong>Multiple Resources:</strong> Apply to several programs simultaneously</li>
              <li><strong>Free Services First:</strong> Start with free legal aid before paying attorneys</li>
              <li><strong>Document Everything:</strong> Keep records of all contacts and assistance requests</li>
              <li><strong>Know Your Address:</strong> Some services only cover specific jurisdictions</li>
              <li><strong>Language Services:</strong> Most organizations provide translation assistance</li>
            </ul>
          </CollapsibleSubsection>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="🤝 Tenant Organizing & Union Rights" defaultOpen={false}>
        <div className="organizing-rights">
          <CollapsibleSubsection title="Your Right to Organize" className="organize-category" defaultOpen={true}>
            <p><strong>Federal & State Protections:</strong> You have fundamental rights to organize with other tenants, protected by the First Amendment and Florida Constitution Article I, Sections 4 & 5.</p>
            
            <CollapsibleSubsection title="Protected Activities" className="protected-activities">
              <ul>
                <li><strong>Forming Tenant Associations:</strong> You can create or join tenant unions without landlord permission</li>
                <li><strong>Meeting in Common Areas:</strong> HUD properties must allow tenant meetings (24 C.F.R. §245.115)</li>
                <li><strong>Door-to-Door Organizing:</strong> Protected speech activity in public areas</li>
                <li><strong>Collective Bargaining:</strong> Groups of tenants can negotiate together with landlords</li>
                <li><strong>Rent Strikes:</strong> Legal if rent is paid into court registry or union escrow per FL Stat § 83.60</li>
              </ul>
            </CollapsibleSubsection>

            <CollapsibleSubsection title="Retaliation Protection" className="retaliation-shield">
              <p><strong>FL Stat § 83.64 Shield:</strong> It is illegal for landlords to retaliate against you for:</p>
              <ul>
                <li>Organizing or participating in a tenant organization</li>
                <li>Complaining to government agencies about code violations</li>
                <li>Exercising any legal right under the lease or law</li>
              </ul>
              <p className="warning-box">
                <strong>⚠️ Document Everything:</strong> Keep records of all organizing activities and any landlord responses. This creates evidence if you need to raise a retaliation defense.
              </p>
            </CollapsibleSubsection>

            <CollapsibleSubsection title="Forming a Tenant Union" className="union-formation">
              <p><strong>Basic Steps:</strong></p>
              <ol>
                <li><strong>Connect with Neighbors:</strong> Start with informal conversations about shared concerns</li>
                <li><strong>Hold Initial Meeting:</strong> Gather interested tenants to discuss goals</li>
                <li><strong>Elect Leadership:</strong> Choose representatives democratically</li>
                <li><strong>Document Membership:</strong> Keep secure records of who's participating</li>
                <li><strong>Establish Communication:</strong> Set up secure channels (Signal, encrypted email)</li>
              </ol>
              <p><strong>Legal Structure Options:</strong></p>
              <ul>
                <li><strong>Unincorporated Association:</strong> Simplest form, no filing required</li>
                <li><strong>Florida Not-for-Profit Corporation:</strong> More formal, provides liability protection</li>
                <li><strong>501(c)(4) Status:</strong> Allows lobbying and collective action</li>
              </ul>
            </CollapsibleSubsection>

            <CollapsibleSubsection title="Collective Action Tools" className="action-tools">
              <h4>Legal Rent Withholding Process:</h4>
              <ol>
                <li>Document habitability violations with photos/video</li>
                <li>Send 7-day notice to landlord per FL Stat § 83.60(1)(b)</li>
                <li>If not fixed, deposit rent into:</li>
                <ul>
                  <li>Court registry (individual action)</li>
                  <li>Union escrow account (collective action)</li>
                </ul>
                <li>Continue documenting conditions</li>
                <li>Negotiate repairs or rent reduction</li>
              </ol>
              
              <h4>Mass Eviction Defense:</h4>
              <ul>
                <li><strong>Court Watch:</strong> Pack courtrooms for member hearings</li>
                <li><strong>Rapid Response:</strong> Emergency assistance for lock-outs</li>
                <li><strong>Resource Sharing:</strong> Pool funds for court deposits</li>
                <li><strong>Attorney Coordination:</strong> Bulk representation agreements</li>
              </ul>
            </CollapsibleSubsection>

            <CollapsibleSubsection title="Know Your Limits" className="legal-limits">
              <p><strong>Avoid These Pitfalls:</strong></p>
              <ul>
                <li><strong>Unauthorized Practice of Law:</strong> Non-lawyers cannot give specific legal advice</li>
                <li><strong>Trespassing:</strong> Respect property boundaries during organizing</li>
                <li><strong>Defamation:</strong> Stick to verifiable facts about landlords</li>
                <li><strong>Obstruction:</strong> Don't block entrances or interfere with lawful evictions</li>
              </ul>
              <p className="info-box">
                <strong>💡 Pro Tip:</strong> Always have a designated legal liaison who can quickly connect members with attorneys when needed.
              </p>
            </CollapsibleSubsection>

            <CollapsibleSubsection title="Resources for Organizers" className="organizer-resources">
              <ul>
                <li><strong>Florida Tenants Union Guide:</strong> Comprehensive organizing manual (see /florida-tenants/)</li>
                <li><strong>HUD Tenant Participation Funds:</strong> Grants for organizing in HUD properties</li>
                <li><strong>National Tenant Union Network:</strong> Connect with unions statewide</li>
                <li><strong>Legal Observer Training:</strong> Document police/landlord actions safely</li>
              </ul>
              <p><strong>Emergency Organizer Hotline:</strong> [To be established by local union]</p>
            </CollapsibleSubsection>
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
