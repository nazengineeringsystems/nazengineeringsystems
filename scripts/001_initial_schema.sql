-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  service_interest VARCHAR(100),
  budget_range VARCHAR(50),
  message TEXT NOT NULL,
  newsletter_signup BOOLEAN DEFAULT false,
  status VARCHAR(20) DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  client_name VARCHAR(100) NOT NULL,
  company_name VARCHAR(100),
  position VARCHAR(100),
  testimonial TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  project_type VARCHAR(100),
  is_featured BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  description TEXT,
  client_name VARCHAR(100),
  project_type VARCHAR(100) NOT NULL,
  technologies TEXT[], -- Array of technologies used
  duration_months INTEGER,
  budget_range VARCHAR(50),
  completion_date DATE,
  image_url TEXT,
  is_featured BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create service_inquiries table for tracking service-specific inquiries
CREATE TABLE IF NOT EXISTS service_inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  service_type VARCHAR(100) NOT NULL,
  client_email VARCHAR(255) NOT NULL,
  client_phone VARCHAR(20),
  inquiry_source VARCHAR(50) DEFAULT 'website', -- website, whatsapp, phone, etc.
  message TEXT,
  urgency_level VARCHAR(20) DEFAULT 'normal', -- low, normal, high, urgent
  status VARCHAR(20) DEFAULT 'new', -- new, contacted, in_progress, completed, closed
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_testimonials_featured ON testimonials(is_featured, is_published);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(is_featured, is_published);
CREATE INDEX IF NOT EXISTS idx_service_inquiries_service_type ON service_inquiries(service_type);
CREATE INDEX IF NOT EXISTS idx_service_inquiries_status ON service_inquiries(status);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_contact_submissions_updated_at BEFORE UPDATE ON contact_submissions FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_testimonials_updated_at BEFORE UPDATE ON testimonials FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_service_inquiries_updated_at BEFORE UPDATE ON service_inquiries FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
