import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  const slideUp = useSpring({
    from: { transform: 'translateY(20px)', opacity: 0 },
    to: { transform: 'translateY(0)', opacity: 1 },
    delay: 200,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Implement actual form submission logic
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-accent opacity-90" />
        <div className="container mx-auto px-4 relative z-10">
          <animated.div style={fadeIn} className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200">
              Get in touch with our team for any inquiries or support.
            </p>
          </animated.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <animated.div style={slideUp}>
            <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="input"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitStatus === 'success' && (
                <div className="text-green-500 text-center">
                  Message sent successfully!
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="text-red-500 text-center">
                  Failed to send message. Please try again.
                </div>
              )}
            </form>
          </animated.div>

          {/* Contact Information */}
          <animated.div style={slideUp} className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Feel free to reach out to us through any of the following channels.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'Address',
                  content: '123 Business Street, Suite 100, New York, NY 10001',
                  icon: '📍',
                },
                {
                  title: 'Phone',
                  content: '+1 (555) 123-4567',
                  icon: '📞',
                },
                {
                  title: 'Email',
                  content: 'info@mkings.com',
                  icon: '✉️',
                },
                {
                  title: 'Business Hours',
                  content: 'Monday - Friday: 9:00 AM - 6:00 PM',
                  icon: '⏰',
                },
              ].map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <span className="text-2xl">{info.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {info.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {[
                  { name: 'Twitter', icon: '🐦', url: '#' },
                  { name: 'LinkedIn', icon: '💼', url: '#' },
                  { name: 'Facebook', icon: '👍', url: '#' },
                  { name: 'Instagram', icon: '📷', url: '#' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="text-2xl hover:text-accent transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </animated.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-4">
        <animated.div style={slideUp} className="card p-0 overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425892426418!3d40.74076987932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1623257356780!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Office Location"
          />
        </animated.div>
      </section>
    </div>
  );
};

export default Contact; 