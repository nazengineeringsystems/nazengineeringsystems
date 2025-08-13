-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    service_interest VARCHAR(100),
    budget_range VARCHAR(50),
    message TEXT NOT NULL,
    newsletter_signup BOOLEAN DEFAULT FALSE,
    status VARCHAR(20) DEFAULT 'new',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create service_inquiries table
CREATE TABLE IF NOT EXISTS service_inquiries (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    service_type VARCHAR(100) NOT NULL,
    client_email VARCHAR(255) NOT NULL,
    client_phone VARCHAR(20),
    inquiry_source VARCHAR(50) DEFAULT 'website',
    message TEXT,
    urgency_level VARCHAR(20) DEFAULT 'normal',
    status VARCHAR(20) DEFAULT 'new',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at);

CREATE INDEX IF NOT EXISTS idx_service_inquiries_service_type ON service_inquiries(service_type);
CREATE INDEX IF NOT EXISTS idx_service_inquiries_status ON service_inquiries(status);
CREATE INDEX IF NOT EXISTS idx_service_inquiries_created_at ON service_inquiries(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_inquiries ENABLE ROW LEVEL SECURITY;

-- Create policies for contact_submissions
CREATE POLICY "Enable insert for authenticated users" ON contact_submissions
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable read for service role" ON contact_submissions
    FOR SELECT USING (auth.role() = 'service_role');

-- Create policies for service_inquiries
CREATE POLICY "Enable insert for authenticated users" ON service_inquiries
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable read for service role" ON service_inquiries
    FOR SELECT USING (auth.role() = 'service_role');

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers to automatically update updated_at
CREATE TRIGGER update_contact_submissions_updated_at 
    BEFORE UPDATE ON contact_submissions 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_service_inquiries_updated_at 
    BEFORE UPDATE ON service_inquiries 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
