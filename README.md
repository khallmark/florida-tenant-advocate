# 🏠 Orlando Tenant Advocate

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue.svg)](https://www.typescriptlang.org/)
[![Built with esbuild](https://img.shields.io/badge/Built%20with-esbuild-orange.svg)](https://esbuild.github.io/)

> **🚨 CRITICAL LEGAL DISCLAIMER 🚨**
> 
> **THIS IS NOT LEGAL ADVICE.** This educational tool does not constitute legal advice, create an attorney-client relationship, or replace qualified legal representation. **If you are facing eviction, contact a Florida-licensed attorney immediately.**
> ALL CONTENT IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. THE INFORMATION IS NOT INTENDED TO BE A SUBSTITUTE FOR LEGAL ADVICE. IT IS UNDER ACTIVE DEVELOPMENT AND MAY CONTAIN ERRORS. DO NOT RELY ON THIS TOOL FOR LEGAL ADVICE. THIS IS A BETA VERSION AND MAY CONTAIN ERRORS. I CANNOT GUARANTEE THE ACCURACY OF THE INFORMATION PROVIDED. I AM ACTIVELY WORKING TO HAVE LEGAL REVIEW OF THE CONTENT BUT UNTIL THEN YOU MUST NOT RELY ON THIS TOOL FOR LEGAL ADVICE.
> CONTENT ON THIS SITE HAS NOT YET BEEN REVIEWED BY A FLORIDA-LICENSED ATTORNEY. YOU MUST NOT RELY ON THIS TOOL FOR LEGAL ADVICE.

## 📋 Table of Contents

- [🎯 Mission & Goals](#-mission--goals)
- [⚖️ What This Tool Is & Isn't](#️-what-this-tool-is--isnt)
- [🚀 Features](#-features)
- [💻 Quick Start](#-quick-start)
- [🛠️ Technical Stack](#️-technical-stack)
- [📱 Usage Guide](#-usage-guide)
- [🆘 Emergency Resources](#-emergency-resources)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [🔄 Maintenance](#-maintenance)

## 🎯 Mission & Goals

The Florida Tenant Advocate empowers tenants facing eviction in Florida with critical legal education and organizational tools. Our mission is to bridge the knowledge gap between complex landlord-tenant law and real-world tenant needs.

### Core Objectives
- **🎓 Education**: Demystify Florida Statutes Chapter 83 in plain language
- **⏰ Urgency Awareness**: Highlight time-critical legal deadlines (5-day response window)
- **🛡️ Defense Strategy**: Guide tenants through potential legal defenses
- **📊 Organization**: Provide timeline tools for case documentation
- **🔗 Resource Connection**: Link to local legal aid and court resources
- **♿ Accessibility**: Ensure WCAG compliance for all users

## ⚖️ What This Tool Is & Isn't

### ✅ What We Provide
| Feature | Description | Benefit |
|---------|-------------|---------|
| **📚 Legal Education** | Plain-language explanations of FL Stat § 83 | Understand your rights without legal jargon |
| **⏱️ Critical Deadlines** | 5-day response tracker with countdown | Never miss court deadlines |
| **🛡️ Defense Catalog** | Comprehensive list of potential defenses | Know your options before court |
| **📋 Timeline Builder** | Document events with timestamps | Build your case chronologically |
| **📞 Resource Directory** | Local legal aid contacts | Get professional help immediately |
| **📄 Form Guidance** | Links to official court documents | File correctly the first time |

### 🚫 What We Are NOT
| ❌ **We Cannot** | ⚠️ **Risk** | ✅ **Solution** |
|------------------|-------------|----------------|
| Provide legal advice | Improper legal strategy | Contact FL-licensed attorney |
| Represent you in court | Unrepresented in proceedings | Seek legal representation |
| Guarantee outcomes | False expectations | Understand limits of self-help |
| File court documents | Missed deadlines/errors | Use professional services |
| Replace current law | Outdated information | Verify with current statutes |

## 🚀 Features

### 🎯 Interactive Legal Rubric
Transform complex landlord-tenant law into actionable guidance:

```
📊 Urgency-Based Organization
├── 🚨 URGENT: 5-Day Response Window
├── ⚠️ TIME-CRITICAL: Court Deadlines  
├── 🛡️ Defense Strategies
├── 📋 Procedural Requirements
├── 🤝 Tenant Organizing Rights
└── 📞 Emergency Contacts
```

**Key Capabilities:**
- **Collapsible Sections**: Navigate complex legal topics efficiently
- **Plain Language**: No legal jargon - real talk for real people
- **Statute References**: Direct links to FL Stat § 83 provisions
- **Visual Warnings**: ⚠️ Critical deadlines highlighted prominently
- **Union Formation Guide**: Step-by-step tenant organizing instructions
- **Mobile Responsive**: Access on any device, anywhere

### ⏰ Timeline Management System
Document your case with forensic precision:

**Core Functions:**
- 📝 **Event Logging**: Chronological case documentation
- 📧 **Communication Tracking**: Record all landlord interactions  
- 📅 **Deadline Monitoring**: Never miss critical court dates
- 📤 **Export Capability**: JSON/PDF export for legal consultations
- 💾 **Local Storage**: Your data stays private and secure

**Timeline Categories:**
- Notice Receipt & Delivery
- Rent Payments & Disputes  
- Property Condition Issues
- Court Filings & Responses
- Communication Records

### 🗺️ Local Resource Network
Direct connections to Orlando-area legal support:

**Emergency Legal Aid:**
- Community Legal Services of Mid-Florida: `(407) 841-7777`
- Legal Aid Society of Orange County: `(407) 841-8310`
- Florida Bar Lawyer Referral: `(800) 342-8011`

**Court Resources:**
- Orange County Clerk of Courts
- Ninth Judicial Circuit Forms
- Self-Help Legal Resources

## 💻 Quick Start

### ⚡ One-Command Setup
```bash
# Clone, install, and run in 30 seconds
git clone [repository-url] && cd orlando-tenant-advocate && pnpm install && pnpm run dev
```

### 🛠️ Technical Stack

**Modern Web Technologies:**
```
🏗️ Architecture: Client-side React SPA
⚛️ Framework: React 18 + TypeScript 5+
🏃‍♂️ Build Tool: esbuild (lightning fast)
📦 Package Manager: pnpm (efficient)
🎨 Styling: Vanilla CSS + BEM methodology
💾 Storage: localStorage (no server needed)
🚀 Deployment: Static hosting ready
```

**Performance Features:**
- ⚡ Sub-second build times with esbuild
- 📱 Mobile-first responsive design
- ♿ WCAG 2.1 AA accessibility compliance
- 🔒 Client-side only (privacy-focused)
- 📶 Works offline after initial load

### 🔧 Development Environment

**Prerequisites:**
- Node.js 18+ 
- pnpm 8+ (recommended) or npm

**Quick Commands:**
```bash
# Development with hot reload
pnpm run dev                    # → http://localhost:8000

# Production build
pnpm run build                  # → ./dist/

# Preview production build  
pnpm run preview               # → http://localhost:8000
```

### 📁 Project Architecture
```
orlando-tenant-advocate/
├── 📄 index.html                    # HTML shell
├── 📦 package.json                  # Dependencies & scripts
├── ⚙️ tsconfig.json                 # TypeScript config
└── 📂 src/
    ├── 🚀 index.tsx                 # App entry point
    ├── 🏠 App.tsx                   # Main router component
    ├── 🎨 style.css                 # Global styles (31KB)
    ├── 📂 components/               # Reusable UI components
    │   ├── Icon.tsx                 # Lucide React icons
    │   └── [other components]
    ├── 📂 pages/                    # Main page components
    │   ├── Rubric.tsx              # Legal guidance (main feature)
    │   └── Timeline.tsx            # Event tracking
    └── 📂 laws/                     # Legal content & statutes
        └── florida-statutes.md     # FL Chapter 83 reference
```

**Component Hierarchy:**
```
App.tsx (Router)
├── Rubric.tsx (Legal Guidance)
│   ├── CollapsibleSection
│   ├── CollapsibleSubsection  
│   └── Legal Content Blocks
└── Timeline.tsx (Case Tracking)
    ├── EventForm
    ├── EventList
    └── Export Functions
```

## 📱 Usage Guide

### 🚀 Getting Started (5 Minutes)
```
1. 🌐 Access → Open tool in any modern browser
2. ⚠️ Disclaimer → Read & understand legal limitations  
3. 🎯 Assess → Use urgency-based navigation
4. 📝 Document → Log events in timeline
5. 📞 Connect → Contact legal professionals
```

### 🎯 Navigation Strategy

**🚨 FACING EVICTION NOW?**
→ Go directly to "I've Been Sued - What Now?" section
→ You have **5 business days** to respond
→ Don't waste time - act immediately

**📋 Building Your Case?**
→ Start with "Timeline" tool
→ Document everything chronologically
→ Export data for attorney consultation

**🛡️ Exploring Defenses?**
→ Review "Defenses to Possession" section
→ Match your situation to available defenses
→ Understand procedural requirements

### 💡 Pro Tips
- **📱 Mobile Access**: Optimized for phones - use anywhere
- **🔖 Bookmark**: Save specific sections for quick reference  
- **📤 Export Data**: Share timeline with your attorney
- **🔄 Regular Updates**: Check back for law changes

## 🆘 Emergency Resources

### 🚨 IMMEDIATE LEGAL HELP
**Call NOW if you received court papers:**

| Organization | Phone | Hours | Services |
|-------------|-------|-------|----------|
| **Community Legal Services** | `(407) 841-7777` | M-F 9-5 | Free eviction defense |
| **Legal Aid Society** | `(407) 841-8310` | M-F 8:30-5 | Low-income legal aid |
| **FL Bar Referral** | `(800) 342-8011` | 24/7 | Attorney referrals |

### 🏛️ Court Resources
| Resource | Contact | Purpose |
|----------|---------|---------|
| **Orange County Clerk** | `(407) 836-2000` | File documents, get forms |
| **Ninth Judicial Circuit** | [9thcircuit.org](http://9thcircuit.org) | Self-help resources |
| **Orange County Bar** | `(407) 422-4551` | Attorney referrals |

### 🏠 Housing Assistance
- **Orange County Housing Division**: `(407) 836-5302`
- **Heart of Florida United Way**: `2-1-1` (dial 211)
- **Salvation Army**: `(407) 423-8581`

## 🤝 Contributing

We welcome contributions from legal professionals, developers, and advocates who want to improve tenant access to justice.

### 🎯 Contribution Priorities
| Priority | Type | Examples |
|----------|------|----------|
| **🚨 High** | Legal Content | Statute updates, new defenses, court rule changes |
| **⚡ Medium** | Accessibility | Screen reader support, keyboard navigation |
| **🔧 Low** | Features | UI improvements, new tools |

**Getting Started:**
```bash
# Fork the repository
git clone your-fork-url
cd orlando-tenant-advocate

# Create feature branch
git checkout -b feature/your-improvement

# Make changes and test
pnpm run dev

# Submit pull request with detailed description
```

### 🚨 Legal Content Disclaimer
All legal content contributors must include:
> "I am a Florida-licensed attorney and have reviewed this content for accuracy as of [DATE]."

## 📄 License

**MIT License** - Free for educational and non-commercial use.

Full license: [MIT](https://opensource.org/licenses/MIT)

---

## 🚨 FINAL REMINDER

**⏰ TIME IS CRITICAL IN EVICTION CASES**

If you received court papers:
1. **📞 Call an attorney TODAY**
2. **📝 Document everything**  
3. **⚖️ Respond within 5 business days**
4. **💰 Pay rent into court registry**

**This tool educates - attorneys advocate. Get both.**

---

*Built with ❤️ for Orlando tenants facing housing insecurity* 