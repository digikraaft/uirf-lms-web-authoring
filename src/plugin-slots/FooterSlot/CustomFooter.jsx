import React from 'react';
import { Col, Container, Row } from '@openedx/paragon';

const FooterSlot = () => (
  <footer className="bg-primary px-4 xl:px-20 py-8 lg:px-10 xl:py-28">
    <div className="w-full flex flex-col justify-start lg:flex-row lg:items-start lg:justify-between space-x-10 text-white">
      <div className="w-full lg:w-auto flex justify-start lg:inline">
        <img src="https://ask4bg.org/asset/logov.png" alt="ASK4BG logo" className="md:scale-50 w-75 md:w-full mb-5 md:mb-0" />
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-4 font-roboto lg:w-2/3 xl:w-1/2">
        <div className="">
          <h3 className="text-base lg:text-xl font-semibold text-white">Company</h3>
          <div className="mt-4 xl:mt-8 space-y-6">
            <a href="https://ask4bg.org" className="block w-max text-white" target="_blank" rel="noreferrer">Home</a>
            <a href="https://ask4bg.org/about-us" className="block w-max text-white" target="_blank" rel="noreferrer">About Us</a>
          </div>
        </div>

        <div className="">
          <h3 className="text-base lg:text-xl font-semibold text-white">Support</h3>
          <div className="mt-4 xl:mt-8 space-y-2 lg:space-y-6">
            <a href="https://ask4bg.org#faqs" className="block w-max text-white" target="_blank" rel="noreferrer">FAQs</a>
            <a href="https://ask4bg.org/terms-of-use" className="block w-max text-white" target="_blank" rel="noreferrer">Terms & Conditions</a>
            <a href="https://ask4bg.org/privacy-policy" className="block w-max text-white" target="_blank" rel="noreferrer">Privacy</a>
          </div>
        </div>
        <div className="">
          <h3 className="text-base lg:text-xl font-semibold text-white">Social Media</h3>
          <div className="mt-4 xl:mt-8 space-y-2 lg:space-y-6">
            <a
              href="https://www.facebook.com/profile.php?id=61575779381167"
              target="_blank"
              className="block w-max text-white"
              rel="noreferrer"
            >Facebook
            </a>
            <a href="https://x.com/ask4bg" target="_blank" className="block w-max text-white" rel="noreferrer">Twitter</a>
            <a href="https://www.instagram.com/ask4bg" target="_blank" className="block w-max text-white" rel="noreferrer">Instagram</a>
            <a href="https://www.linkedin.com/company/ask4bg/" target="_blank" className="block w-max text-white">LinkedIn</a>
          </div>
        </div>
        <div className="">
          <h3 className="text-base lg:text-xl font-semibold text-white">Contact</h3>
          <div className="mt-4 xl:mt-8 space-y-2 lg:space-y-6">
            <a href="#" className="block w-max text-white">+0913-705-3875</a>
            <a href="mailto:info@ask4bg.com" className="block w-max text-white">info@ask4bg.com</a>
            <a href="https://ui.edu.ng" target="_blank" className="block w-max text-white" rel="noreferrer">UIRF</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterSlot;
