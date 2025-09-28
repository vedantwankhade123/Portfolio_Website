-- Create the 'personal_info' table to hold site-wide data
CREATE TABLE public.personal_info (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT,
  taglines TEXT[],
  profile_image_url TEXT,
  about_p1 TEXT,
  about_p2 TEXT,
  degree TEXT,
  role TEXT,
  location TEXT,
  resume_pdf_url TEXT,
  resume_png_url TEXT,
  github_url TEXT,
  linkedin_url TEXT,
  instagram_url TEXT,
  email TEXT
);

-- Enable Row Level Security for 'personal_info'
ALTER TABLE public.personal_info ENABLE ROW LEVEL SECURITY;

-- Allow public read access for the personal info
CREATE POLICY "Public read access for personal_info" ON public.personal_info
FOR SELECT USING (true);

-- Insert your current personal information (we'll use placeholders for file URLs for now)
INSERT INTO public.personal_info (name, taglines, profile_image_url, about_p1, about_p2, degree, role, location, resume_pdf_url, resume_png_url, github_url, linkedin_url, instagram_url, email) VALUES
(
  'Vedant Wankhade',
  ARRAY['Full Stack Developer', 'Python Programmer', 'Digital Craftsman'],
  '/images/profile.jpg', -- This will be updated with a Supabase Storage URL
  'I''m a developer driven by a passion for building elegant and effective digital solutions. My journey into technology began with a fascination for Python, which quickly expanded into the dynamic world of full-stack web development. I thrive on the challenge of turning complex problems into clean, user-friendly applications.',
  'As a Computer Science student at <strong>G.H.Raisoni University, Amravati</strong>, I''m constantly merging academic knowledge with hands-on project experience to craft experiences that are intuitive, efficient, and impactful.',
  'B.Tech in CSE',
  'Full Stack Developer',
  'Amravati, India',
  '/resume.pdf', -- This will be updated with a Supabase Storage URL
  '/resume.png', -- This will be updated with a Supabase Storage URL
  'https://github.com/vedantwankhade123',
  'https://linkedin.com/in/vedant-wankhade123',
  'https://instagram.com/_vedantkwankhade_',
  'vedantwankhade47@gmail.com'
);

-- Create the 'education' table
CREATE TABLE public.education (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  icon TEXT,
  title TEXT,
  subtitle TEXT,
  date TEXT,
  description TEXT,
  grade TEXT,
  display_order INT
);

-- Enable Row Level Security for 'education'
ALTER TABLE public.education ENABLE ROW LEVEL SECURITY;

-- Allow public read access for education data
CREATE POLICY "Public read access for education" ON public.education
FOR SELECT USING (true);

-- Insert your current education history
INSERT INTO public.education (icon, title, subtitle, date, description, grade, display_order) VALUES
('fa-university', 'B.Tech CSE', 'G.H.Raisoni University, Amravati', '2023 - Present (2nd Year)', 'Currently pursuing my Bachelor''s degree in Computer Science with focus on web development and programming.', NULL, 1),
('fa-school', 'Higher Secondary (12th)', 'P.R.Pote Patil Junior College, Amravati', '2021 - 2023', 'Completed Higher Secondary with focus on Science and Mathematics (Computer Science).', '61 %', 2),
('fa-book', 'Secondary School (10th)', 'Prabodhan Mahavidyalaya, Daryapur', '2020 - 2021', 'Completed Secondary School education with distinction.', '97 %', 3);