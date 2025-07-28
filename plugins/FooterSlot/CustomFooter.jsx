// import React from 'react';
import { Col, Container, Row } from '@openedx/paragon';

const FooterSlot = () => (
    <footer className="bg-primary px-4 xl:px-20 py-8 lg:px-10 xl:py-28 text-white">
      <div className="w-full flex flex-col justify-start lg:flex-row lg:items-start lg:justify-between space-x-10 text-white">
        <div className="w-full lg:w-auto flex justify-start lg:inline">
          <img src="https://ask4bg.org/asset/logov.png" alt="ASK4BG logo" className="scale-50" />
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-4 font-roboto lg:w-2/3 xl:w-1/2">
          <div className="">
            <h3 className="text-base lg:text-xl font-semibold text-white">Company</h3>
            <div className="mt-4 xl:mt-8 space-y-6">
              <a href="https://ask4bg.org" className="block w-max text-white text-white">Home</a>
              <a href="https://ask4bg.org/about-us" className="block w-max text-white">About Us</a>
              <a href="https://uirf.foundation" target="_blank" className="block w-max text-white">UIRF</a>
            </div>
          </div>

          <div className="">
            <h3 className="text-base lg:text-xl font-semibold text-white">Support</h3>
            <div className="mt-4 xl:mt-8 space-y-2 lg:space-y-6">
              <a href="#faqs" className="block w-max text-white">FAQ</a>
              <a href="https://ask4bg.org/terms-of-use" className="block w-max text-white">Terms & Conditions</a>
              <a href="https://ask4bg.org/privacy-policy" className="block w-max text-white">Privacy</a>
            </div>
          </div>
          <div className="">
            <h3 className="text-base lg:text-xl font-semibold text-white">Social Media</h3>
            <div className="mt-4 xl:mt-8 space-y-2 lg:space-y-6">
              <a href="https://www.facebook.com/profile.php?id=61575779381167" target="_blank" className="block w-max text-white">Facebook</a>
              <a href="https://x.com/ask4bg" target="_blank" className="block w-max text-white">Twitter</a>
              <a href="https://www.instagram.com/ask4bg" target="_blank" className="block w-max text-white">Instagram</a>
            </div>
          </div>
          <div className="">
            <h3 className="text-base lg:text-xl font-semibold text-white">Contact</h3>
            <div className="mt-4 xl:mt-8 space-y-2 lg:space-y-6">
              <a href="tel:+2347035793097" className="block w-max text-white">+234 703 579 3097</a>
              <a href="mailto:uirf@ask4bg.org" className="block w-max text-white">uirf@ask4bg.org</a>
              <p className="text-white">
                Uduimo Itsueli Foundation Building, Olajuwon Olayide Extension, Ajibode Road, Ibadan, Nigeria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
);

export default FooterSlot;
