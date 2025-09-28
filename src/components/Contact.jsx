import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    const promise = emailjs.send('service_portfolio', 'template_portfolio', templateParams);

    toast.promise(promise, {
      loading: 'Sending message...',
      success: () => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        return 'Message sent successfully!';
      },
      error: (err) => {
        console.log('FAILED...', err);
        return 'Failed to send message. Please try again.';
      },
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
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
              <button type="submit" className="btn primary-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;