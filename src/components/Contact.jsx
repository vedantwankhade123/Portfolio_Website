import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    // NOTE: You may need to create an EmailJS account and get your own Service ID and Template ID
    emailjs.send('service_portfolio', 'template_portfolio', templateParams)
      .then((response) => {
         console.log('SUCCESS!', response.status, response.text);
         setStatus('Message sent successfully!');
         setFormData({ name: '', email: '', subject: '', message: '' });
         setTimeout(() => setStatus(''), 3000);
      }, (err) => {
         console.log('FAILED...', err);
         setStatus('Failed to send message. Please try again.');
         setTimeout(() => setStatus(''), 3000);
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>vedanwankhade47@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <h3>Phone</h3>
                <p>+91 9175988560</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Location</h3>
                <p>Amravati, Maharashtra, India</p>
              </div>
            </div>
            <div className="social-links">
              <a href="https://github.com/vedantwankhade123" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub Profile"><i className="fab fa-github"></i></a>
              <a href="https://linkedin.com/in/vedant-wankhade123" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://instagram.com/_vedantkwankhade_" target="_blank" rel="noopener noreferrer" className="social-icon" title="Instagram Profile"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="contact-form">
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" id="name" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <input type="email" id="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
              </div>
              <div className="form-group">
                <input type="text" id="subject" name="subject" placeholder="Subject" required value={formData.subject} onChange={handleChange} />
              </div>
              <div className="form-group">
                <textarea id="message" name="message" placeholder="Your Message" required value={formData.message} onChange={handleChange}></textarea>
              </div>
              <button type="submit" className="btn primary-btn">{status || 'Send Message'}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;