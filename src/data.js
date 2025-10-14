export const personalInfo = {
  name: "Vedant Wankhade",
  role: "Full Stack Developer",
  taglines: ["Full Stack Developer", "Python Programmer", "Creative Coder"],
  profile_image_url: "/images/vedant-profile.png",
  about_p1: "I am a passionate and dedicated Full Stack Developer with a strong foundation in creating modern, responsive, and user-friendly web applications. My journey in programming began with Python, where I honed my problem-solving skills and developed a love for clean, efficient code.",
  about_p2: "I thrive on turning complex ideas into beautiful, functional digital experiences. I'm always eager to learn new technologies and take on challenging projects that push the boundaries of what's possible on the web.",
  degree: "B.Tech, Computer Science",
  location: "Nagpur, India",
  email: "vedantwankhade@example.com",
  github_url: "https://github.com",
  linkedin_url: "https://linkedin.com",
  instagram_url: "https://instagram.com",
  resume_pdf_url: "/VedantWankhade_Resume.pdf",
  resume_png_url: "/images/VedantWankhade_Resume.png",
};

export const educationData = [
  {
    id: 1,
    icon: "fa-university",
    title: "Bachelor of Technology, CSE",
    subtitle: "G.H. Raisoni College of Engineering",
    date: "2021 - 2025",
    description: "Pursuing my undergraduate degree with a focus on web development, algorithms, and database management.",
    grade: "8.5 CGPA",
  },
  {
    id: 2,
    icon: "fa-school",
    title: "Higher Secondary Certificate (HSC)",
    subtitle: "St. Paul's Junior College",
    date: "2019 - 2021",
    description: "Completed my higher secondary education with a focus on Physics, Chemistry, and Mathematics.",
    grade: "90%",
  },
];

export const skills = [
    { name: 'HTML5', icon: 'fab fa-html5', colorClass: 'html-icon' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', colorClass: 'css-icon' },
    { name: 'JavaScript', icon: 'fab fa-js-square', colorClass: 'js-icon' },
    { name: 'React', icon: 'fab fa-react', colorClass: 'react-icon' },
    { name: 'Node.js', icon: 'fab fa-node-js', colorClass: 'node-icon' },
    { name: 'Python', icon: 'fab fa-python', colorClass: 'python-icon' },
    { name: 'Django', icon: 'fab fa-django', colorClass: 'django-icon' },
    { name: 'PostgreSQL', icon: 'fas fa-database', colorClass: 'postgres-icon' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap', colorClass: 'bootstrap-icon' },
];

export const certifications = [
  {
    title: "The Complete Web Development Bootcamp",
    issuer: "Udemy",
    date: "Issued 2023",
    imageUrl: "/images/webdev.png",
  },
  {
    title: "Python for Everybody Specialization",
    issuer: "Coursera",
    date: "Issued 2022",
    imageUrl: "/images/Udemy.png",
  },
];

export const projects = [
  {
    title: "CleanCity Initiative",
    videoSrc: "/videos/Coming.mp4",
    description: "A full-stack web application designed to report and manage local cleanliness issues. Features user authentication, geolocation for reporting, and an admin dashboard for managing complaints. Built with React, Node.js, and Mapbox.",
    tech: ["React", "Node.js", "MongoDB", "Mapbox"],
    githubUrl: "https://github.com",
    liveDemoUrl: "#!",
    display_order: 1,
  },
  {
    title: "AI Object Detection",
    videoSrc: "/videos/Coming.mp4",
    description: "A Python-based application that uses OpenCV and pre-trained models to detect objects in real-time video streams. The backend is powered by Flask to serve the video feed to a simple web interface.",
    tech: ["Python", "OpenCV", "Flask"],
    githubUrl: "https://github.com",
    liveDemoUrl: "#!",
    display_order: 2,
  },
  {
    title: "Portfolio Website",
    videoSrc: "/videos/Coming.mp4",
    description: "My personal portfolio website (the one you're looking at!) built with React and Vite. Features a responsive design, dark mode, and interactive animations to showcase my projects and skills.",
    tech: ["React", "Three.js", "Vite"],
    githubUrl: "https://github.com",
    liveDemoUrl: "#!",
    display_order: 3,
  },
];