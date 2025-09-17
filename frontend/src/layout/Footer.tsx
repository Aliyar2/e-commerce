"use client";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-[#F2F0FF] pt-12">
      <Container>
        <div className="px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Logo + Subscribe */}
            <div>
              <h2 className="text-2xl font-bold text-[#151875] mb-4">Hekto</h2>
              <div className="flex mb-4">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="px-4 h-11 rounded-l border border-gray-300 focus:outline-none w-full text-sm"
                />
                <button className="bg-[#FB2E86] text-white text-nowrap px-5 h-11 rounded-r hover:bg-[#e12476] transition text-sm font-medium">
                  Sign Up
                </button>
              </div>
              <p className="text-[#8A8FB9] text-sm">
                Contact Info
                <br />
                17 Princess Road, London, Greater London NW1 8JR, UK
              </p>
            </div>

            {/* Categories */}
            <div>
              <h3 className="font-semibold text-[#151875] mb-4">Categories</h3>
              <ul className="space-y-2 text-[#8A8FB9] text-sm">
                <li>Laptops & Computers</li>
                <li>Cameras & Photography</li>
                <li>Smart Phones & Tablets</li>
                <li>Video Games & Consoles</li>
                <li>Waterproof Headphones</li>
              </ul>
            </div>

            {/* Customer Care */}
            <div>
              <h3 className="font-semibold text-[#151875] mb-4">
                Customer Care
              </h3>
              <ul className="space-y-2 text-[#8A8FB9] text-sm">
                <li>My Account</li>
                <li>Discount</li>
                <li>Returns</li>
                <li>Orders History</li>
                <li>Order Tracking</li>
              </ul>
            </div>

            {/* Pages */}
            <div>
              <h3 className="font-semibold text-[#151875] mb-4">Pages</h3>
              <ul className="space-y-2 text-[#8A8FB9] text-sm">
                <li>Blog</li>
                <li>Browse the Shop</li>
                <li>Category</li>
                <li>Pre-Built Pages</li>
                <li>Visual Composer Elements</li>
                <li>WooCommerce Pages</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 border-t border-[#E0D3F5] py-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#8A8FB9] text-sm">
              ©Webecy - All Rights Reserved
            </p>
            <div className="flex gap-4 text-[#151875] mt-4 md:mt-0">
              <a href="#" className="hover:text-[#FB2E86]">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-[#FB2E86]">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-[#FB2E86]">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
