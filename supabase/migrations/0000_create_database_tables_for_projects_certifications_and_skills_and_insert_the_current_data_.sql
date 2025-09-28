-- Create the 'projects' table
CREATE TABLE public.projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  "videoSrc" TEXT,
  tech TEXT[],
  "githubUrl" TEXT,
  "liveDemoUrl" TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  display_order INT
);

-- Enable Row Level Security for the 'projects' table
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow public read access to projects
CREATE POLICY "Public read access for projects" ON public.projects
FOR SELECT USING (true);

-- Insert existing project data
INSERT INTO public.projects (title, description, "videoSrc", tech, "githubUrl", "liveDemoUrl", display_order) VALUES
('CleanCity - Waste Management', 'A web application for reporting and managing waste collection in urban areas. Features include real-time tracking, route optimization, and analytics dashboard.', '/videos/cleanCity.mp4', ARRAY['React', 'Node.js', 'MongoDB', 'Mapbox'], '#', '#', 1),
('Face Recognition Attendance', 'An automated attendance system using facial recognition. Includes real-time detection, attendance reports, and an admin dashboard.', '/videos/Coming.mp4', ARRAY['Python', 'OpenCV', 'Flask', 'SQLite'], '#', '#', 2),
('Task Management App', 'A collaborative task management application with features like task assignment, progress tracking, and team collaboration tools.', '/videos/Coming.mp4', ARRAY['React', 'Node.js', 'Express', 'MongoDB'], '#', '#', 3);

-- Create the 'certifications' table
CREATE TABLE public.certifications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  issuer TEXT,
  date TEXT,
  "imageUrl" TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  display_order INT
);

-- Enable Row Level Security for the 'certifications' table
ALTER TABLE public.certifications ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow public read access to certifications
CREATE POLICY "Public read access for certifications" ON public.certifications
FOR SELECT USING (true);

-- Insert existing certification data
INSERT INTO public.certifications (title, issuer, date, "imageUrl", display_order) VALUES
('Beginner to Master Python Programming', 'Udemy', 'April 2025', '/images/Udemy.png', 1),
('Full Stack Web Development', 'Udemy', 'In Progress', '/images/webdev.png', 2),
('More Certifications Coming Soon', 'Stay Tuned', '2025', '/images/webdev.png', 3);

-- Create the 'skills' table
CREATE TABLE public.skills (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  icon TEXT,
  "colorClass" TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  display_order INT
);

-- Enable Row Level Security for the 'skills' table
ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow public read access to skills
CREATE POLICY "Public read access for skills" ON public.skills
FOR SELECT USING (true);

-- Insert existing skills data
INSERT INTO public.skills (name, icon, "colorClass", display_order) VALUES
('HTML5', 'fab fa-html5', 'html-icon', 1),
('CSS3', 'fab fa-css3-alt', 'css-icon', 2),
('JavaScript', 'fab fa-js', 'js-icon', 3),
('React', 'fab fa-react', 'react-icon', 4),
('Bootstrap', 'fab fa-bootstrap', 'bootstrap-icon', 5),
('jQuery', 'fas fa-code', 'jquery-icon', 6),
('Python', 'fab fa-python', 'python-icon', 7),
('Node.js', 'fab fa-node-js', 'node-icon', 8),
('Django', 'fas fa-server', 'django-icon', 9),
('SQL', 'fas fa-database', 'sql-icon', 10),
('PostgreSQL', 'fas fa-database', 'postgres-icon', 11),
('Supabase', 'fas fa-bolt', 'supabase-icon', 12);