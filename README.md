# Portfolio Website

A beautiful, responsive portfolio website with dark mode functionality, animations, and transitions. This portfolio is designed for a student with experience in Python programming and full-stack web development.

## Features

- **Dark/Light Mode Toggle**: Switch between dark and light themes with a persistent preference saved in local storage.
- **Responsive Design**: Fully responsive layout that works on all devices.
- **Smooth Animations**: Page transitions, scroll animations, and interactive elements.
- **Modern UI**: Clean, professional design with attention to detail.
- **Contact Form**: Interactive contact form with validation.
- **Project Showcase**: Dedicated section to highlight your projects.
- **Skills Visualization**: Visual representation of your technical skills.

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic knowledge of HTML, CSS, and JavaScript for customization

### Installation

1. Clone or download this repository to your local machine.
2. Open the `index.html` file in your web browser to view the website locally.

### Customization

#### Personal Information

Edit the `index.html` file to update:

- Your name in the hero section
- About Me content
- Contact information
- Social media links

#### Profile Picture

1. Replace the file at `images/profile.jpg` with your own profile picture.
2. Make sure the image is square for best results.

#### Projects

1. Update the project information in the Projects section of `index.html`.
2. Replace project images in the `images/` folder.
3. Update project links to point to your actual projects.

#### Skills

Modify the skills section in `index.html` to reflect your actual skill levels.

#### Colors and Styling

To change the color scheme:

1. Open `css/styles.css`
2. Modify the CSS variables in the `:root` selector at the top of the file:
   ```css
   :root {
       --primary-color: #4a6cf7; /* Change this to your preferred primary color */
       --secondary-color: #6c757d; /* Change this to your preferred secondary color */
       /* Other variables */
   }
   ```

## File Structure

```
Portfolio/
│
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   └── script.js       # JavaScript functionality
├── images/             # Directory for all images
│   ├── profile.jpg     # Your profile picture
│   ├── cleancity.jpg   # Project image
│   ├── project2.jpg    # Project image
│   └── project3.jpg    # Project image
└── README.md           # This file
```

## Adding New Sections

To add a new section to your portfolio:

1. Create a new section in `index.html` following the pattern of existing sections.
2. Add corresponding styles in `css/styles.css`.
3. If needed, add JavaScript functionality in `js/script.js`.

## Browser Compatibility

This website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Deployment

To deploy this website to a live server:

1. Upload all files to your web hosting service.
2. Ensure the file structure remains the same.
3. Point your domain to the directory containing these files.

## License

Feel free to use and modify this template for your personal portfolio.

## Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Unsplash for placeholder images (if used)
