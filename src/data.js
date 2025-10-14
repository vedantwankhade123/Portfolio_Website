export const personalInfo = {
  name: "Vedant Wankhade",
  role: "Full Stack Developer",
  taglines: ["Full Stack Developer", "Python Programmer", "Creative Coder"],
  profile_image_url: "/images/vedant-profile.png",
  about_p1: "I am a passionate Full Stack Developer with a strong foundation in Python programming and Web Development. Currently a B.TEch CSE student at G.H.Raisoni University, Amravati, I've been completing comprehensive courses in full-stack development and built several real-world projects.",
  about_p2: "I enjoy solving complex problems and creating clean, efficient, and user-friendly applications. My goal is to leverage technology to create meaningful solutions that make a positive impact.",
  degree: "B.Tech, Computer Science (Present)",
  location: "Amravati, India",
  email: "vedantwankhade@example.com",
  github_url: "https://github.com",
  linkedin_url: "https://linkedin.com",
  instagram_url: "https://instagram.com",
  resume_pdf_url: "/VedantWankhade_Resume.pdf",
  resume_png_url: "/images/Vedant Wankhade (RESUME).jpg",
};

export const educationData = [
  {
    id: 1,
    icon: "fa-university",
    title: "Bachelor of Technology, CSE",
    subtitle: "G.H. Raisoni College of Engineering",
    date: "2021 - Present",
    description: "Pursuing my undergraduate degree with a focus on web development, AI, DS, and database management.",
    grade: "8.5 CGPA",
  },
  {
    id: 2,
    icon: "fa-school",
    title: "Higher Secondary Education",
    subtitle: "P.R.Pote Patil Junior College, Amravati",
    date: "2022 - 2023",
    description: "Completed my higher secondary education with a focus on Physics, Chemistry, and Mathematics.",
    grade: "61%",
  },
  {
    id: 3,
    icon: "fa-school",
    title: "Secondary School Certificate (SSC)",
    subtitle: "Prabodhan Vidyalaya, Daryapur",
    date: "2020 - 2021",
    description: "Completed my secondary school education, achieving a strong academic foundation.",
    grade: "97%",
  },
];

export const skills = [
    { name: 'HTML5', icon: 'fab fa-html5', colorClass: 'html-icon' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', colorClass: 'css-icon' },
    { name: 'JavaScript', icon: 'fab fa-js-square', colorClass: 'js-icon' },
    { name: 'React', icon: 'fab fa-react', colorClass: 'react-icon' },
    { name: 'Node.js', icon: 'fab fa-node-js', colorClass: 'node-icon' },
    { name: 'Python', icon: 'fab fa-python', colorClass: 'python-icon' },
    { name: 'PostgreSQL', icon: 'fas fa-database', colorClass: 'postgres-icon' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap', colorClass: 'bootstrap-icon' },
];

export const certifications = [
  {
    title: "Python for Everybody Specialization",
    issuer: "Udemy",
    date: "Issued 2022",
    imageUrl: "/images/Python Certificate.png",
  },
  {
    title: "Journey to Cloud: Envisioning Your Solution",
    issuer: "IBM",
    date: "Issued 2023",
    imageUrl: "/images/JTC Certificate.jpg",
  },
  {
    title: "Getting Started with Artificial Intelligence",
    issuer: "IBM",
    date: "Issued 2023",
    imageUrl: "/images/GSWA Certificate.jpg",
  },
];

export const projects = [
  {
    title: "Waste Management Platform",
    videoSrc: "/videos/Cleancity.mp4",
    description: "A full-stack web application designed to report and manage local cleanliness issues. Features user authentication, geolocation for reporting, and an admin dashboard for managing complaints. Built with React, Node.js, and Mapbox.",
    tech: ["React", "Node.js", "MongoDB", "Mapbox"],
    githubUrl: "https://github.com",
    liveDemoUrl: "#!",
    display_order: 1,
  },
  {
    title: "All-in-One AI Platform",
    videoSrc: "/videos/manibau-studios-demo.mp4",
    description: "An integrated AI platform featuring tools for image and video generation, sketch-to-image conversion, text-to-code, a manual canvas-based website builder, and an interactive AI chat assistant.",
    tech: ["React", "Node.js", "AI/ML APIs", "Vite"],
    githubUrl: "https://github.com",
    liveDemoUrl: "https://manibau-studios.netlify.app/",
    display_order: 2,
  },
];