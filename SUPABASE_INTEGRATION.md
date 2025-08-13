# Supabase Form Integration

## Overview

Your NAZ Engineering website is now fully integrated with Supabase for form submissions. This document explains the current setup and how to use it.

## ✅ What's Already Set Up

### 1. Environment Configuration
- `.env.local` file with your Supabase credentials
- Client-side and server-side Supabase configurations

### 2. Database Tables
The following tables are used for form submissions:
- `contact_submissions` - Main contact form data
- `service_inquiries` - Service-specific inquiries

### 3. Form Components
- `ContactForm` - Full contact form with all fields
- `QuickContactForm` - Simplified contact form
- `EnhancedContactForm` - New form with React Hook Form + Zod validation

### 4. Server Actions
- `submitContactForm()` - Handles full contact form submissions
- `submitQuickContact()` - Handles quick contact form submissions

## 🚀 Getting Started

### Step 1: Set Up Database Tables

1. Go to your Supabase dashboard: https://supabase.com/dashboard
2. Navigate to your project: `pkraehxvjjxvmuorosya`
3. Go to the SQL Editor
4. Run the SQL script from `supabase-setup.sql`

### Step 2: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to your contact form page
3. Fill out and submit a form
4. Check your Supabase dashboard to see the submitted data

## 📊 Database Schema

### contact_submissions table
```sql
- id (UUID, Primary Key)
- first_name (VARCHAR, Required)
- last_name (VARCHAR, Required)
- email (VARCHAR, Required)
- phone (VARCHAR, Optional)
- service_interest (VARCHAR, Optional)
- budget_range (VARCHAR, Optional)
- message (TEXT, Required)
- newsletter_signup (BOOLEAN, Default: false)
- status (VARCHAR, Default: 'new')
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

### service_inquiries table
```sql
- id (UUID, Primary Key)
- service_type (VARCHAR, Required)
- client_email (VARCHAR, Required)
- client_phone (VARCHAR, Optional)
- inquiry_source (VARCHAR, Default: 'website')
- message (TEXT)
- urgency_level (VARCHAR, Default: 'normal')
- status (VARCHAR, Default: 'new')
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

## 🔧 Components Usage

### Basic Contact Form
```tsx
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return <ContactForm />
}
```

### Enhanced Contact Form (with validation)
```tsx
import { EnhancedContactForm } from "@/components/enhanced-contact-form"

export default function ContactPage() {
  return <EnhancedContactForm />
}
```

### Quick Contact Form
```tsx
import { QuickContactForm } from "@/components/quick-contact-form"

export default function SidebarContactForm() {
  return <QuickContactForm />
}
```

## 🔒 Security Features

- **Row Level Security (RLS)** enabled on both tables
- **Server-side validation** for all form inputs
- **Email format validation**
- **Required field validation**
- **Sanitized data insertion**

## 📝 Form Validation

The enhanced form includes:
- Client-side validation using Zod
- Real-time error messages
- Type-safe form handling
- Toast notifications for success/error states

## 🎯 Service Options

The forms support the following services:
- IT Infrastructure
- Networking Solutions
- CCTV & Security Systems
- Power Backup Solutions
- Solar Energy Systems
- Engineering Services
- General Consultation

## 💰 Budget Ranges

- Under ₹1 Lakh
- ₹1 - 5 Lakhs
- ₹5 - 10 Lakhs
- ₹10 - 25 Lakhs
- Above ₹25 Lakhs
- Need Consultation

## 🔄 Form Submission Flow

1. User fills out form
2. Client-side validation (if using EnhancedContactForm)
3. Data sent to server action
4. Server-side validation
5. Data inserted into Supabase
6. Success/error response returned
7. User notified via toast/inline message

## 📊 Monitoring & Analytics

You can monitor form submissions in your Supabase dashboard:
1. Go to Table Editor
2. View `contact_submissions` and `service_inquiries` tables
3. Filter by status, date, service type, etc.

## 🚨 Troubleshooting

### Common Issues:

1. **Forms not submitting**: Check environment variables in `.env.local`
2. **Database errors**: Ensure tables are created with the SQL script
3. **Permission errors**: Verify RLS policies are set up correctly

### Debugging:
- Check browser console for errors
- Check server logs in your deployment platform
- Verify Supabase project is active and accessible

## 🔄 Next Steps

Consider adding:
- Email notifications for form submissions
- Admin dashboard for managing inquiries
- Automated follow-up emails
- CRM integration
- Analytics tracking

## 📞 Support

If you encounter issues:
1. Check the Supabase documentation
2. Verify your environment variables
3. Test the connection in the Supabase dashboard
4. Check the browser console for errors
