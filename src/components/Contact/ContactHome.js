// ContactHome.js
import React from 'react';
import ContactHeader from './ContactHeader';
import ContactInfoCard from './ContactInfoCard';
import ContactForm from './ContactForm';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ContactHome = () => (
    <section className="min-h-screen bg-white py-10">
        {/* Header Section */}
        <ContactHeader />

       

        {/* Unified Frame for Contact Form and Google Map */}
        <div className="max-w-7xl mx-auto p-8 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10">
                {/* Contact Form Section */}
                <div className="flex-1 p-6 bg-gradient-to-r from-blue-50 to-white rounded-lg">
                    <h2 className="text-2xl font-bold text-[#2E4168] text-center mb-4">
                        We’d Love to Hear from You
                    </h2>
                    <p className="text-[#2E4168] text-center mb-6">
                        Whether you have a question or need assistance, we’re here to help.
                    </p>
                    <ContactForm />
                </div>

                {/* Google Map Section */}
                <div className="flex-1 p-6 rounded-lg text-gray-700">
          <h2 className="text-xl font-semibold text-[#2E4168] mb-4">
            Our Location
          </h2>
          <hr className="border-t-2 w-12 border-[#2E4168] mb-6" />
          <iframe
            src="https://www.google.com/maps?q=54/F25+Sec+7+Rohini+Delhi+110085&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="EU XPONENCIAL PRIVATE LIMITED Google Map"
            className="rounded-lg shadow-md text-[#2E4168]"
          ></iframe>
          <div className="flex items-center space-x-4 mt-4">
            <i className="fas fa-map-marker-alt text-[#2E4168] text-lg"></i>
            <Link
              to="https://maps.google.com/?q=54/F25+Sec+7+Rohini+Delhi+110085"
              className="text-lg text-[#2E4168] underline hover:text-[#2E4168] transition-colors duration-300"
            >
              View on Google Maps
            </Link>
          </div>
        </div>
            </div>
        </div>
    </section>
);

export default ContactHome;

