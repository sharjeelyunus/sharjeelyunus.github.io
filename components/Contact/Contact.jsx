import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp, BsArrowRight } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_j1zm44l',
        'template_i48o40m',
        form.current,
        'CZwkFLKuHbIimw81N'
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="py-20 bg-[#111827] relative overflow-hidden" id='Contact'>
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `linear-gradient(-45deg, #1a2234 25%, transparent 25%, transparent 75%, #1a2234 75%, #1a2234)`,
          backgroundSize: '20px 20px',
        }}
      />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Get in <span className="text-[#4F46E5]">Touch</span>
          </h2>
          <p className="text-[#8B8B8B] max-w-2xl mx-auto text-sm md:text-base">
            Have a project in mind or want to collaborate? Feel free to reach out through any of these channels.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Options */}
          <div className="lg:col-span-2 space-y-4">
            {/* Email Option */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#1a1f2e] rounded-2xl p-6 transition-all duration-300 hover:bg-[#232936] group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#4F46E5]/10 flex items-center justify-center shrink-0">
                  <MdOutlineEmail className="w-6 h-6 text-[#4F46E5]" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Email</h3>
                  <p className="text-[#8B8B8B] text-sm mb-3">sharjeel924@gmail.com</p>
                  <a
                    href="mailto:sharjeel924@gmail.com"
                    className="inline-flex items-center gap-2 text-[#4F46E5] text-sm hover:gap-3 transition-all duration-300"
                  >
                    Write me an email <BsArrowRight />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* WhatsApp Option */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#1a1f2e] rounded-2xl p-6 transition-all duration-300 hover:bg-[#232936] group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#4F46E5]/10 flex items-center justify-center shrink-0">
                  <BsWhatsapp className="w-6 h-6 text-[#4F46E5]" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">WhatsApp</h3>
                  <p className="text-[#8B8B8B] text-sm mb-3">+92 308 7574574</p>
                  <a
                    href="https://wa.me/+923087574574"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[#4F46E5] text-sm hover:gap-3 transition-all duration-300"
                  >
                    Send a message <BsArrowRight />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 bg-[#1a1f2e] rounded-2xl p-8"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  required
                  className="w-full bg-[#232936] rounded-xl px-4 py-3 text-white placeholder:text-[#8B8B8B] border border-[#4F46E5]/10 focus:border-[#4F46E5]/50 focus:ring-1 focus:ring-[#4F46E5]/50 outline-none transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  required
                  className="w-full bg-[#232936] rounded-xl px-4 py-3 text-white placeholder:text-[#8B8B8B] border border-[#4F46E5]/10 focus:border-[#4F46E5]/50 focus:ring-1 focus:ring-[#4F46E5]/50 outline-none transition-all duration-300"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Your Message"
                  required
                  className="w-full bg-[#232936] rounded-xl px-4 py-3 text-white placeholder:text-[#8B8B8B] border border-[#4F46E5]/10 focus:border-[#4F46E5]/50 focus:ring-1 focus:ring-[#4F46E5]/50 outline-none transition-all duration-300 resize-none"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-[#4F46E5] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#4F46E5]/90 transition-all duration-300 flex items-center gap-2 group"
                >
                  Send Message
                  <BsArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
