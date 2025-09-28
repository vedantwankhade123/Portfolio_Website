# AI Development Rules for Portfolio Website

This document provides guidelines for AI assistants making changes to this portfolio website. The goal is to maintain the project's simplicity, consistency, and performance.

## Tech Stack

This is a static, single-page portfolio website built with fundamental web technologies.

-   **Core Technologies**: The project is built using HTML5, CSS3, and vanilla JavaScript (ES6+).
-   **Styling**: All styling is handled by a custom stylesheet (`css/styles.css`). It uses CSS variables for easy theming (e.g., dark/light mode).
-   **JavaScript**: All interactivity is powered by vanilla JavaScript. There are no frontend frameworks like React, Vue, or jQuery.
-   **Icons**: The project uses [Font Awesome](https://fontawesome.com/) for all icons, included via a CDN.
-   **Fonts**: Typography is managed with [Google Fonts](https://fonts.google.com/), specifically the 'Poppins' font family.
-   **Animations**: Animations and transitions are created using a combination of native CSS transitions/keyframes and JavaScript for scroll-triggered effects.
-   **Contact Form**: The contact form is powered by [EmailJS](https://www.emailjs.com/) to send emails directly from the client-side.
-   **Deployment**: The project is configured for deployment on Netlify.

## Development Rules & Library Usage

Follow these rules to ensure consistency and maintainability.

-   **No Frontend Frameworks**: Do **not** introduce any JavaScript frameworks (React, Vue, Angular, etc.) or libraries like jQuery. All new functionality must be written in vanilla JavaScript.
-   **Styling**:
    -   All new CSS should be added to `css/styles.css`.
    -   Do **not** add any CSS frameworks like Tailwind CSS or Bootstrap.
    -   Utilize the existing CSS variables (e.g., `--primary-color`, `--card-bg`) defined in the `:root` selector for all colors, spacing, and fonts.
-   **Icons**:
    -   Continue to use Font Awesome for all icons.
    -   To add a new icon, find it on the Font Awesome website and use the appropriate HTML tag (e.g., `<i class="fas fa-icon-name"></i>`).
-   **JavaScript Logic**:
    -   Place all new JavaScript code in the `js/script.js` file.
    -   Write clean, modern ES6+ JavaScript.
-   **Dependencies**:
    -   Avoid adding new third-party libraries. The project is intentionally lightweight.
    -   If a new library is essential, prefer a CDN link in `index.html` over a local installation or package manager.
-   **File Structure**:
    -   Keep the existing file structure: `css/` for styles, `js/` for scripts, `images/` for images, and `videos/` for videos.
    -   Do not add build tools like Webpack or Vite. The project is intended to be run directly in the browser without a build step.