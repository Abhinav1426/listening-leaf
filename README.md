# Listening Leaf

**Listening Deeply. Leading Wisely.**

A modern, professional website for Listening Leaf Private Limited - a business consultancy and financial services company based in Hyderabad, India.

## Overview

Listening Leaf provides comprehensive accounting, auditing, business analytics, payroll, and compliance services for entrepreneurs and enterprises. This repository contains the source code for the company's official website.

## Tech Stack

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS 3
- **Build**: Static site export

## Project Structure

```
Code/
├── pages/              # Next.js page routes
│   ├── index.js        # Home page
│   ├── _app.js         # App wrapper
│   └── _document.js    # Custom HTML document
├── components/         # React components
│   ├── Header.js       # Navigation header
│   ├── Hero.js         # Hero section with animated counters
│   ├── Services.js     # Services showcase
│   ├── HowWeWork.js    # Workflow section
│   ├── About.js        # Company information
│   ├── Benefits.js     # Benefits section
│   ├── CTA.js          # Call-to-action
│   ├── Contact.js      # Contact form & info
│   ├── Footer.js       # Site footer
│   └── WhatsAppButton.js # Floating WhatsApp widget
├── styles/
│   └── globals.css     # Global styles & Tailwind
├── public/             # Static assets
└── out/                # Static export output
```

## Services Featured

**Accounting & Finance**
- Payroll Processing
- Receivables & Payables Management
- MIS Reporting
- Bookkeeping & more

**Compliance Services**
- GST Compliance
- Direct Tax & TDS
- PF & ESIC
- Company Secretarial Services

**Additional Services**
- ITR Filings
- Assessments & Appeals
- Loan Approvals
- International Taxation

## Getting Started

### Prerequisites

- Node.js 16 or higher
- npm or yarn

### Installation

```bash
# Navigate to the Code directory
cd Code

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Static Export

```bash
# Generate static HTML files
npm run export
```

Static files will be output to the `out/` directory.

## Features

- Responsive design (mobile, tablet, desktop)
- Animated counters and floating elements
- WhatsApp integration for instant contact
- Contact form with service selection
- Smooth scroll navigation
- SEO-friendly static export

## Contact

**Listening Leaf Private Limited**

- **Address**: H.No 7-1-632/28,29, Bapu Nagar, SR Nagar, Hyderabad - 500038
- **Phone**: +91 91332 13033 / +91 73861 11332
- **Email**: listeningleafpl@gmail.com
- **Website**: [www.listeningleaf.com](https://www.listeningleaf.com)

## License

All rights reserved. Copyright Listening Leaf Private Limited.
