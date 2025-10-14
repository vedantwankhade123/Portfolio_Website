import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const toastId = toast.loading('Sending your message...');

    // Simulate a network request
    setTimeout(() => {
      toast.success('Thank you! Your message has been received.', { id: toastId });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
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
              <button type="submit" className="btn primary-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;