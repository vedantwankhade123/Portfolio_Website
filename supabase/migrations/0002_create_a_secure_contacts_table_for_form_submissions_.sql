-- Create the contacts table to store form submissions
CREATE TABLE public.contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add a comment for clarity
COMMENT ON TABLE public.contacts IS 'Stores contact form submissions from the portfolio website.';

-- Enable Row Level Security (RLS) on the table
-- This is a critical security measure.
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow anonymous users (i.e., website visitors) to submit the form.
CREATE POLICY "Allow anonymous inserts"
ON public.contacts
FOR INSERT
TO anon
WITH CHECK (true);

-- Create a policy to allow only authenticated users (i.e., you in the Supabase dashboard) to read messages.
CREATE POLICY "Allow authenticated users to read"
ON public.contacts
FOR SELECT
TO authenticated
USING (true);

-- As a best practice, also restrict update and delete operations to authenticated users.
CREATE POLICY "Allow authenticated users to update"
ON public.contacts
FOR UPDATE
TO authenticated
USING (true);

CREATE POLICY "Allow authenticated users to delete"
ON public.contacts
FOR DELETE
TO authenticated
USING (true);