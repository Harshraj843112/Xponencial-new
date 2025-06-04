import React from 'react';

const SarvodayaHospital = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-2">
      <h1 className="max-w-5xl mx-auto text-center text-[#2E4168] font-semibold leading-snug mb-8">
        <span className="block text-3xl sm:text-4xl md:text-5xl">
          Welcome to Sarvodaya Hospital
        </span>
        <span className="block mt-4 text-sm sm:text-base md:text-2xl text-[#4B5C7A] font-normal">
          Powered by <span className="font-medium text-[#2E4168]">Gud Medicare Solutions Private Limited</span>
        </span>
      </h1>

      <div className="max-w-5xl w-full bg-white shadow-lg border-t border-gray-200 rounded-xl overflow-hidden">

        <div className="p-8 sm:p-12 rounded-t-lg">
          {/* About Section */}
          <section className="mb-12">
           
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              At Sarvodaya Hospital, we are proud to be an integral part of Gud Medicare Solutions Private Limited, a pioneering force in healthcare innovation and patient-centric digital solutions. Our mission is to deliver compassionate, efficient, and technology-driven healthcare that meets the evolving needs of patients across all demographics.
            </p>
          </section>

          {/* Who We Are */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#2E4168] mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Sarvodaya Hospital is more than just a medical institution. As a part of Gud Medicare Solutions Pvt. Ltd., we are embedded within a larger ecosystem that brings cutting-edge digital tools, real-time care automation, and AI-powered healthcare services to the forefront. Our alignment with GudMed ensures that every patient receives the highest standard of care – enhanced by modern technology and supported by experienced medical professionals.
            </p>
          </section>

          {/* What Makes Us Unique */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#2E4168] mb-4">
              What Makes Us Unique
            </h2>
            <ul className="list-disc pl-6 text-gray-600 text-base sm:text-lg leading-relaxed">
              <li>Digital Prescriptions and Discharge Summaries – enabling faster, paperless, and more accurate documentation.</li>
              <li>Smart OPD and IPD Workflows – improving coordination between departments and reducing patient wait times.</li>
              <li>Automated Follow-Ups and Reminders – ensuring better patient compliance and long-term care continuity.</li>
              <li>Integrated Pharmacy & Lab Services – offering seamless test bookings and medication fulfillment.</li>
              <li>Real-Time Data Capture from ICU and Monitoring Devices – powering quicker decisions and enhanced critical care.</li>
            </ul>
          </section>

          {/* Our Commitment */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#2E4168] mb-4">
              Our Commitment
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              As part of Gud Medicare Solutions, Sarvodaya Hospital is committed to transforming traditional healthcare into an intelligent, responsive, and patient-friendly experience. Whether it’s outpatient services, inpatient care, diagnostics, or post-discharge support, we are driven by a vision of healthcare that is accessible, digital, and deeply human.
            </p>
          </section>

          {/* About Gud Medicare */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#2E4168] mb-4">
              About Gud Medicare Solutions Pvt. Ltd.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              GudMed is a trusted health-tech company driving hospital efficiency and patient engagement through AI, automation, and digitization. With its presence in leading hospitals across India, GudMed is redefining how hospitals operate and patients heal.
            </p>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#2E4168] mb-4">
              Experience the new age of healthcare-only at Sarvodaya Hospital, powered by GudMed.
            </h2>
            
           
          </section>
        </div>
      </div>
    </div>
  );
};

export default SarvodayaHospital;
