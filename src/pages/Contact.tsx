import { useEffect, useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { IconMail, IconMapPin, IconPhone, IconSend } from '@tabler/icons-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Compact layout for very short viewports
  const [isShort, setIsShort] = useState(false);
  useEffect(() => {
    const check = () => setIsShort((window.innerHeight < 900 && window.innerWidth < 500));
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS send function
    emailjs
      .send(
        'service_qywxa86', // replace with your EmailJS service ID
        'template_klq3n4d', // replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        '-0OPTdwBwb7TARA80' // replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log('Email successfully sent!', result.text);
          setSuccessMessage('Thank you! Your message has been sent.');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('Failed to send email:', error);
          alert('An error occurred while sending your message.');
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div
      className={`w-full h-full flex items-center justify-center ${
        isShort ? "p-3" : "p-4 md:p-8"
      }`}
    >
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`text-center ${isShort ? "mb-6" : "mb-12"}`}
        >
          <h1
            className={`${
              isShort ? "text-3xl" : "text-4xl"
            } md:text-6xl font-bold text-[#7960cf] poppins-bold ${
              isShort ? "mb-2" : "mb-4"
            }`}
          >
            Let's Connect
          </h1>
        </motion.div>

        <div
          className={`grid grid-cols-1 ${
            isShort ? "gap-4" : "lg:grid-cols-5 gap-8"
          } items-start`}
        >
          {/* Contact Info Section */}
          {!isShort && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Profile Card */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-[#421fb8]/10">
                    <img
                      src="/profile.jpeg"
                      alt="Talha Ansari"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#334054] poppins-semibold">
                      Portfolio
                    </h3>
                    <p className="text-gray-600 poppins-regular">
                      demo sub text
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <div className="w-10 h-10 bg-[#421fb8]/10 rounded-full flex items-center justify-center">
                      <IconMail className="w-5 h-5 text-[#421fb8]" />
                    </div>
                    <span className="poppins-regular">example@gmail.com</span>
                  </div>

                  <div className="flex items-center space-x-3 text-gray-600">
                    <div className="w-10 h-10 bg-[#421fb8]/10 rounded-full flex items-center justify-center">
                      <IconMapPin className="w-5 h-5 text-[#421fb8]" />
                    </div>
                    <span className="poppins-regular">Delhi, India</span>
                  </div>

                  <div className="flex items-center space-x-3 text-gray-600">
                    <div className="w-10 h-10 bg-[#421fb8]/10 rounded-full flex items-center justify-center">
                      <IconPhone className="w-5 h-5 text-[#421fb8]" />
                    </div>
                    <span className="poppins-regular">Available for calls</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div
              className={`bg-white/70 backdrop-blur-sm rounded-2xl ${
                isShort ? "p-4" : "p-8"
              } shadow-lg border border-gray-100`}
            >
              <h3
                className={`${
                  isShort ? "text-xl" : "text-2xl"
                } font-semibold text-[#334054] poppins-semibold ${
                  isShort ? "mb-4" : "mb-6"
                }`}
              >
                Send us a message
              </h3>

              <form
                onSubmit={handleSubmit}
                className={`${isShort ? "space-y-4" : "space-y-6"}`}
              >
                <div
                  className={`grid grid-cols-1 ${
                    isShort ? "gap-3" : "md:grid-cols-2 gap-4"
                  }`}
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 poppins-medium mb-2">
                      Name *
                    </label>
                    <Input
                      required
                      placeholder="Your full name"
                      className={`bg-white/80 border-gray-200 text-[#334054] placeholder:text-gray-400 ${
                        isShort ? "h-10" : "h-12"
                      } rounded-xl focus:ring-2 focus:ring-[#421fb8]/20 focus:border-[#421fb8] transition-all font-poppins`}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 poppins-medium mb-2">
                      Email *
                    </label>
                    <Input
                      required
                      type="email"
                      placeholder="your.email@example.com"
                      className={`bg-white/80 border-gray-200 text-[#334054] placeholder:text-gray-400 ${
                        isShort ? "h-10" : "h-12"
                      } rounded-xl focus:ring-2 focus:ring-[#421fb8]/20 focus:border-[#421fb8] transition-all font-poppins`}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 poppins-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    required
                    placeholder="Tell me about your project, ideas, or just say hello..."
                    className={`bg-white/80 border-gray-200 text-[#334054] placeholder:text-gray-400 ${
                      isShort ? "min-h-[100px]" : "min-h-[140px]"
                    } resize-none rounded-xl focus:ring-2 focus:ring-[#421fb8]/20 focus:border-[#421fb8] transition-all font-poppins`}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <Button
                  type="submit"
                  className={`w-full bg-[#7960cf] hover:bg-[#3818a0] text-white font-semibold ${
                    isShort ? "h-10" : "h-12"
                  } rounded-xl transition-all duration-200 poppins-semibold flex items-center justify-center space-x-2`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span className="poppins-semibold">Sending...</span>
                    </>
                  ) : (
                    <>
                      <IconSend className="w-4 h-4" />
                      <span className="poppins-semibold">Send Message</span>
                    </>
                  )}
                </Button>

                {successMessage && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center space-x-3"
                  >
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-green-700 poppins-medium">
                      {successMessage}
                    </p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
