import React from "react";
import ContactPage from "./Faq";
import ContactForm from "./Mail";
import Container from "./Container";

const ContactUs: React.FC = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-16">
      <Container>
        <div className=" grid md:grid-cols-2 gap-12">
          {/* Information About Us */}
          <div>
            <h2 className="text-xl font-semibold text-indigo-900 mb-4">
              Information About us
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
              tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
              vitae lobortis quis bibendum quam.
            </p>
            {/* Dots */}
            <div className="flex space-x-3">
              <span className="w-4 h-4 rounded-full bg-violet-700"></span>
              <span className="w-4 h-4 rounded-full bg-pink-500"></span>
              <span className="w-4 h-4 rounded-full bg-cyan-400"></span>
            </div>
          </div>

          {/* Contact Way */}
          <div>
            <h2 className="text-xl font-semibold text-indigo-900 mb-4">
              Contact Way
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Левый столбец */}
              <div className="space-y-4">
                {/* Phone & Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-5 h-5 mt-1 rounded-full bg-violet-700"></div>
                  <div className="text-sm text-gray-700">
                    <p>Tel: 877-67-88-99</p>
                    <p>E-Mail: shop@store.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-5 h-5 mt-1 rounded-full bg-orange-300"></div>
                  <div className="text-sm text-gray-700">
                    <p>20 Margaret st, London</p>
                    <p>Great britain, 3NM98-LK</p>
                  </div>
                </div>
              </div>

              {/* Правый столбец */}
              <div className="space-y-4">
                {/* Support Forum */}
                <div className="flex items-start space-x-4">
                  <div className="w-5 h-5 mt-1 rounded-full bg-pink-500"></div>
                  <div className="text-sm text-gray-700">
                    <p>Support Forum</p>
                    <p>For over 24hr</p>
                  </div>
                </div>

                {/* Free Shipping */}
                <div className="flex items-start space-x-4">
                  <div className="w-5 h-5 mt-1 rounded-full bg-green-400"></div>
                  <div className="text-sm text-gray-700">
                    <p>Free standard shipping</p>
                    <p>on all orders.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactForm />
      </Container>
    </div>
  );
};

export default ContactUs;
