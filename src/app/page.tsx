/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Modal from "./Modal";


export default function LandingPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  type Feature = {
    title: string;
    text: string;
    image: string;
  };
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  const faqItems = [
    {
      question: "What is Eiflow?",
      answer:
        "Eiflow is a comprehensive business management software developed by Eivolv to help African businesses manage operations, finance, customer relationships, inventory, and more all in one AI-powered platform.",
    },
    {
      question: "Who can use Eiflow?",
      answer:
        "Eiflow is designed for businesses of all sizes, from startups and SMEs to large enterprises across various industries including retail, agriculture, logistics, and healthcare.",
    },
    {
      question: "How do I join the waitlist?",
      answer:
        "Scroll down to the contact section and fill in your name and email. We’ll notify you as soon as our MVP is available for testing.",
    },
    {
      question: "Is Eiflow available in my country?",
      answer:
        "We are currently focused on launching in Nigeria but plan to expand to other African countries as we grow.",
    },
  ];

  const featuresData = [
    {
      title: "Get a Business Website",
      text: "Run online sales, add products easily, launch discounts, handle shipping, and integrate ads and analytics tools.",
      image: "/svg-website.png",
    },
    {
      title: "Invoices and Sales Recording",
      text: "Create invoices, send receipts, and record transactions securely on the Eiflow app.",
      image: "/svg-invoice.png",
    },
    {
      title: "Powerful Analytics",
      text: "Track profits, customer trends, best selling products, site visits and more to make better decisions.",
      image: "/svg-analytics.png",
    },
    {
      title: "Accept Local & Global Payments",
      text: "Get paid in Naira or USD with multiple payment options, alerts for staff, and real-time inventory updates.",
      image: "/svg-payments.png",
    }
  ]

  return (
    <div className="bg-white text-black font-sans overflow-x-hidden">
      {/* Navbar */}
      <header className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 shadow-md bg-white sticky top-0 z-10 w-full">
        <div className="flex items-center space-x-3">
          <Image src="/logo_eivolv.jpg" alt="Eivolv Logo" width={40} height={40} />
          <h1 className="text-2xl font-bold text-[#FF890A]">Eivolv</h1>
        </div>
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4 sm:mt-0 text-sm sm:text-base">
          <a href="#about" className="hover:text-[#FF890A]">About</a>
          <a href="#features" className="hover:text-[#FF890A]">Features</a>
          <a href="#vision" className="hover:text-[#FF890A]">Vision</a>
          <a href="#faq" className="hover:text-[#FF890A]">FAQ</a>
          <a href="#contact" className="hover:text-[#FF890A]">Contact</a>
        </nav>
      </header>
      <br />
      <br />

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-black"
        >
          Smart Business Management for Africa
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-lg md:text-xl max-w-xl text-gray-700"
        >
          Eiflow – Your all-in-one AI-powered platform for CRM, inventory, finance, logistics and more.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 space-x-4"
        >
          <a href="#contact" className="bg-[#FF890A] text-white px-6 py-3 rounded-full hover:opacity-90 transition">Join Waitlist</a>
          <a href="#features" className="border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition">Explore Features</a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-10"
        >
          <Image
            src="/dashboard home (1).png"
            alt="Hero dashboard preview"
            width={900}
            height={500}
            className="mx-auto rounded-xl shadow-lg"
          />
        </motion.div>
      </section>


     {/* About Us */}
     <section id="about" className="py-20 px-6 bg-[#F4F4F4] text-center">
        <h3 className="text-3xl font-semibold mb-6 text-black">About Eivolv</h3>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          Eivolv is a technology-driven company focused on revolutionizing business operations across Africa, starting with Nigeria. Our mission is to empower businesses of all sizes with digital tools that enhance efficiency, streamline operations, and drive sustainable growth. Eiflow, our flagship software, is built specifically to address the unique needs of African businesses with a smart, AI-powered, and scalable management platform.
        </p>
      </section>

      {/* Eiflow Dedicated Section */}
      <section id="eiflow" className="py-20 px-4 sm:px-6 bg-[#fff7f2] text-center">
        <h3 className="text-4xl font-extrabold text-[#FF890A] mb-4">Introducing Eiflow</h3>
        <p className="max-w-3xl mx-auto text-lg text-gray-800 mb-12">
          Eiflow is Eivolv's flagship platform designed to centralize and automate business operations using advanced AI and sector-specific tools. Whether you're managing inventory, running customer campaigns, processing payments, or making strategic decisions, Eiflow brings it all together in one smooth ecosystem.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <Image src="/dashboard home (1).png" alt="Dashboard Screenshot 1" width={500} height={300} className="rounded w-full h-auto" />
            <p className="mt-4 text-gray-600">Eiflow dashboard overview: Get a complete snapshot of your business activities in real-time.</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <Image src="/CRM Dashboard _ Vendors.png" alt="Dashboard Screenshot 2" width={500} height={300} className="rounded w-full h-auto" />
            <p className="mt-4 text-gray-600\">Comprehensive CRM dashboard: Manage leads, customer communication, campaigns, and engagement efficiently all in one place.</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <Image src="/ORDERS OVERVIEW.png" alt="Dashboard Screenshot 3" width={500} height={300} className="rounded w-full h-auto" />
            <p className="mt-4 text-gray-600">Industry-specific modules that adapt to your business needs, whether in retail, agriculture, healthcare or services.</p>
          </div>
        </div>
      </section>

     {/* Features Section */}
     <section id="features" className="py-20 px-6 bg-white text-center">
        <h3 className="text-4xl font-extrabold text-[#FF890A] mb-12">What You Can Do with Eiflow</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-[#fff7f2] p-6 rounded-2xl shadow-lg text-left flex flex-col items-start"
            >
              <Image src={feature.image} alt={feature.title} width={400} height={250} className="rounded mb-4 w-full h-auto" />
              <h4 className="text-xl font-semibold text-[#FF890A] mb-2">{feature.title}</h4>
              <p className="text-gray-800 leading-relaxed">{feature.text}</p>
              <button
                onClick={() => setSelectedFeature(feature)}
                className="mt-4 text-sm font-medium text-[#FF890A] hover:underline"
              >
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {selectedFeature && (
        <Modal onClose={() => setSelectedFeature(null)}>
          <h2 className="text-2xl font-bold text-[#FF890A] mb-4">{selectedFeature.title}</h2>
          <p className="text-gray-800">{selectedFeature.text}</p>
        </Modal>
      )}


      {/* Features */}
      <section id="features" className="bg-white py-20 px-6 text-center">
        <h3 className="text-3xl font-semibold text-black mb-10">Key Features of Eiflow</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            ["Wallet System", "💳", "Facilitates secure digital transactions, enabling smooth payments and better financial control for businesses operating in a cashless economy."],
            ["CRM Tools", "📇", "Helps manage customer interactions, track engagement, and build long-term loyalty, resulting in stronger customer relationships and repeat business."],
            ["Inventory Management", "📦", "Monitors stock levels, supplier orders, and supply chain activities, reducing wastage and improving efficiency in stock handling."],
            ["Industry-Specific Tools", "🛠️", "Offers tailored solutions for agriculture, retail, healthcare, and other sectors, ensuring businesses have the right tools for their unique needs."],
            ["POS & Logistics", "🚚", "Supports retail operations with integrated Point of Sale systems and logistics coordination, allowing seamless sales and delivery tracking."],
            ["AI Automation", "🤖", "Automates repetitive tasks and delivers smart business insights, improving decision-making and allowing businesses to scale intelligently."]
          ].map(([label, icon, desc]) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#F4F4F4] p-6 rounded-xl shadow-md text-left"
              key={label}
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h4 className="text-xl font-semibold text-[#FF890A]">{label}</h4>
              <p className="mt-2 text-gray-700">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

       {/* Vision + Mission */}
      <section id="vision" className="py-20 px-6 bg-gradient-to-b from-white via-[#fff7f2] to-[#fce9dd] text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-extrabold mb-6 text-[#FF890A]">Our Vision</h3>
          <p className="text-lg text-gray-800">
            We are building Africa’s leading all-in-one business management platform empowering small to enterprise businesses with integrated tools for every operation.
          </p>
          <p className="mt-4 italic text-[#FF890A]">
            "We’re not just building tools, we’re shaping the future of business in Africa."
          </p>

          <div className="mt-16">
            <h3 className="text-4xl font-extrabold mb-6 text-[#FF890A]">Our Mission</h3>
            <p className="text-lg text-gray-800">
              We want to make it easier for African entrepreneurs to grow and run their businesses with smart tools — helping them succeed locally and globally.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-[#F4F4F4] py-20 px-6 text-center">
        <h3 className="text-3xl font-semibold text-black mb-10">Frequently Asked Questions</h3>
        <div className="max-w-3xl mx-auto grid gap-6 text-left">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h4 className="text-xl font-semibold text-[#FF890A] mb-2">{item.question}</h4>
              <p className="text-gray-700 leading-relaxed">{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* Contact + Waitlist */}
      <section id="contact" className="bg-white py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-semibold text-center text-black mb-10">Contact Us / Join Waitlist</h3>

          {!formSubmitted ? (
            <form
              action="https://formspree.io/f/xanbejna"
              method="POST"
              onSubmit={(e) => {
                setTimeout(() => setFormSubmitted(true), 500); // allow time for redirect
              }}
              className="space-y-6"
            >
              <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 border border-gray-300 rounded" />
              <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 border border-gray-300 rounded" />
              <textarea name="message" placeholder="Message or Business Type (optional)" rows={4} className="w-full p-3 border border-gray-300 rounded"></textarea>
              <input type="hidden" name="_redirect" value="https://eivolv-website-one.vercel.app/thank-you-page" />
              <button type="submit" className="bg-[#FF890A] text-white px-6 py-3 rounded-full hover:opacity-90 transition">Submit</button>
            </form>
          ) : (
            <div className="text-center text-green-600 font-semibold text-lg">
              ✅ Thank you! We’ll be in touch soon.
            </div>
          )}
        </div>
      </section>


        {/* App Download Section */}
      <section id="download" className="py-20 px-6 bg-gradient-to-br from-[#fff7f2] via-white to-[#fce9dd] text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-4xl font-extrabold text-[#FF890A] mb-6">Download Our Mobile App</h3>
          <p className="text-lg text-gray-700 mb-8">Coming soon to Android and iOS – manage your business on the go with the Eiflow mobile app.</p>
          <div className="flex justify-center gap-6 flex-wrap">
            <div className="    transition">
              <img src="/google_play.png" alt="Coming to Play Store" className="w-44 h-auto" />
            </div>
            <div className=" transition">
              <br /><img src="/app_store.png" alt="Coming to App Store" className="w-44 h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Image src="/logo_eivolv.jpg" alt="Eivolv Logo" width={40} height={40} />
            <h4 className="text-xl font-bold mt-4 text-[#FF890A]">Eivolv</h4>
            <p className="text-sm mt-2 text-black">Empowering African businesses with smart, AI-powered tools.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-black">
              <li><a href="#about" className="hover:text-[#FF890A]">About</a></li>
              <li><a href="#features" className="hover:text-[#FF890A]">Features</a></li>
              <li><a href="#vision" className="hover:text-[#FF890A]">Vision</a></li>
              <li><a href="#faq" className="hover:text-[#FF890A]">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-black">
              <li><a href="#contact" className="hover:text-[#FF890A]">Contact</a></li>
              <li><a href="#download" className="hover:text-[#FF890A]">App Download</a></li>
              <li><a href="#" className="hover:text-[#FF890A]">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#FF890A]">Terms of Use</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-black font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4 text-black text-xl">
              <a href="https://www.instagram.com/eivolv/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF890A]">
                <FaInstagram />
              </a>
              <a href="https://x.com/ei_volv" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF890A]">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/company/eivolv/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF890A]">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Eivolv Limited. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
