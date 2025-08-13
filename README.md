# NAZ Engineering Systems Website

A modern, professional website for NAZ Engineering Systems - a leading provider of comprehensive technology and infrastructure solutions.

## Features

- **Responsive Design**: Fully responsive design that works on all devices
- **Modern Tech Stack**: Built with Next.js 15, React 19, TypeScript, and Tailwind CSS
- **Professional UI**: Custom components using Radix UI and shadcn/ui
- **Contact Forms**: Interactive contact forms with validation
- **Animation Effects**: Smooth animations and hover effects
- **WhatsApp Integration**: Direct WhatsApp contact buttons
- **SEO Optimized**: Proper meta tags and semantic HTML

## Tech Stack

- **Framework**: Next.js 15.4.5
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4.1.9 + tw-animate-css
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Database**: Supabase (for contact forms and data)
- **Forms**: React Hook Form + Zod validation
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd naz-engineering-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Fill in your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Database Setup (Optional)

If you want to use the contact forms and database features:

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Run the SQL scripts in the `scripts/` directory:
   - `001_initial_schema.sql` - Creates the necessary tables
   - `002_sample_data.sql` - Adds sample data (optional)

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── actions/           # Server actions
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── contact-form.tsx  # Contact form component
│   ├── navigation.tsx    # Navigation component
│   └── ...
├── lib/                  # Utility functions and configurations
├── hooks/                # Custom React hooks
├── public/               # Static assets
└── scripts/              # Database scripts
```

## Key Pages

- **Home** (`/`) - Landing page with hero section, services overview, and company stats
- **About** (`/about`) - Company information, mission, vision, and values
- **Services** (`/services`) - Detailed breakdown of all services offered
- **Contact** (`/contact`) - Contact forms and company contact information

## Features Implemented

### ✅ Fixed Issues

1. **Updated Dependencies**: All packages updated to latest versions compatible with React 19
2. **Fixed TypeScript Errors**: Resolved type issues in chart components
3. **Removed Duplicate CSS**: Cleaned up duplicate globals.css files
4. **Added Configuration Files**: Created tailwind.config.ts and other missing configs
5. **Fixed Empty Divs**: Added proper call-to-action buttons where needed
6. **Updated Package Name**: Changed from generic name to project-specific name

### ✅ Working Features

- Responsive navigation with mobile menu
- Contact forms with validation
- WhatsApp integration
- Smooth animations and hover effects
- SEO-optimized pages
- Professional design system

## Deployment

### Vercel (Recommended)

1. Push your code to a Git repository
2. Import the project in Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The project can be deployed on any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Build and Test

```bash
# Build the project
npm run build

# Start production server
npm run start

# Run TypeScript checks
npx tsc --noEmit

# Run linting
npm run lint
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## Support

For support, email nazengineeringsystems@gmail.com or contact us through WhatsApp:
- Primary: +91 83770 87801
- Secondary: +91 92667 66742

## License

This project is proprietary software of NAZ Engineering Systems. All rights reserved.
