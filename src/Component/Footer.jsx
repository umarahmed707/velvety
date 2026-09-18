import { Link } from "lucide";
import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f4f8f1] text-[#29402d] border-t border-[#d5dfd0]">

      {/* Main Footer */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

        {/* ================= BRAND ================= */}
        <div className="px-8 md:px-10 lg:px-12 py-10 lg:py-12 text-center lg:text-left border-b sm:border-r lg:border-b-0 border-[#d5dfd0]">

          <h1 className="font-serif text-[30px] tracking-wide text-[#263d2a]">
            VELVETY
          </h1>

          <p className="font-serif italic text-[14px] -mt-1">
            Facial & skincare
          </p>

          <div className="mt-12">
            <p className="text-[#91a28c] text-[16px]">
              Opening hours
            </p>

            <p className="text-[17px] leading-6 mt-1">
              Monday to Saturday:
              <br />
              10:30 a.m. to 7 p.m.
            </p>
          </div>

          {/* Social Icons */}
      <div className="flex justify-center lg:justify-start gap-5 mt-24">

  <Link
    to="#"
    className="w-5 h-5 border border-[#29402d] rounded-md flex items-center justify-center text-[#29402d] hover:bg-[#29402d] hover:text-white transition"
  >
    <FaInstagram size={12} />
  </Link>

  <Link
    to="#"
    className="w-5 h-5 border border-[#29402d] rounded-md flex items-center justify-center text-[#29402d] hover:bg-[#29402d] hover:text-white transition"
  >
    <FaTwitter size={12} />
  </Link>

  <Link
    to="#"
    className="w-5 h-5 border border-[#29402d] rounded-md flex items-center justify-center text-[#29402d] hover:bg-[#29402d] hover:text-white transition"
  >
    <FaFacebookF size={11} />
  </Link>

</div>
        </div>


        {/* ================= SHOP ================= */}
        <div className="px-8 md:px-10 lg:px-12 py-10 lg:py-12 text-center border-b sm:border-b-0 lg:border-r border-[#d5dfd0]">

          <h2 className="text-[#91a28c] text-[21px] font-light mb-5">
            Shop
          </h2>

          <ul className="space-y-3 text-[17px]">
            <li className="hover:text-[#91a28c] cursor-pointer">
              Skincare
            </li>

            <li className="hover:text-[#91a28c] cursor-pointer">
              Facial
            </li>

            <li className="hover:text-[#91a28c] cursor-pointer">
              Soap
            </li>

            <li className="hover:text-[#91a28c] cursor-pointer">
              Candles
            </li>

            <li className="hover:text-[#91a28c] cursor-pointer">
              Auto Fragrances
            </li>

            <li className="hover:text-[#91a28c] cursor-pointer">
              Gifts
            </li>
          </ul>
        </div>


        {/* ================= HELP DESK ================= */}
        <div className="px-8 md:px-10 lg:px-12 py-10 lg:py-12 text-center border-b sm:border-r lg:border-b-0 border-[#d5dfd0]">

          <h2 className="text-[#91a28c] text-[21px] font-light mb-5">
            Help Desk
          </h2>

          <ul className="space-y-3 text-[17px]">
            <li className="hover:text-[#91a28c] cursor-pointer">
              Chat
            </li>

            <li className="hover:text-[#91a28c] cursor-pointer">
              FAQ
            </li>

            <li className="hover:text-[#91a28c] cursor-pointer">
              Shipping & Returns
            </li>

            <li className="hover:text-[#91a28c] cursor-pointer">
              Contact
            </li>

            <li className="hover:text-[#91a28c] cursor-pointer">
              Policies
            </li>

            <li className="hover:text-[#91a28c] cursor-pointer">
              Accessibility
            </li>

            <li className="hover:text-[#91a28c] cursor-pointer">
              My Account
            </li>
          </ul>
        </div>


        {/* ================= STORES ================= */}
        <div className="px-8 md:px-10 lg:px-12 py-10 lg:py-12 text-center">

          <h2 className="text-[#91a28c] text-[21px] font-light mb-5">
            Stores
          </h2>

          <ul className="space-y-3 text-[17px]">
            <li className="hover:text-[#91a28c] cursor-pointer">
              Manhattan
            </li>

            <li className="hover:text-[#91a28c] cursor-pointer">
              Brooklyn
            </li>

            <li className="hover:text-[#91a28c] cursor-pointer">
              Tokyo
            </li>

            <li className="hover:text-[#91a28c] cursor-pointer">
              Jakarta
            </li>

            <li className="hover:text-[#91a28c] cursor-pointer">
              Paris
            </li>

            <li className="hover:text-[#91a28c] cursor-pointer">
              Buenos Aires
            </li>
          </ul>
        </div>

      </div>


      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-[#d5dfd0]">

        <div className="max-w-[1440px] mx-auto px-8 md:px-10 lg:px-16 py-4 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Copyright */}
          <p className="text-[14px] text-[#647a66] text-center md:text-left">
            © Designed by{" "}
            <span className="font-semibold text-[#29402d]">
              DhuhaCreative
            </span>
            . Powered by{" "}
            <span className="font-semibold text-[#29402d]">
              UI8
            </span>
            .
          </p>

          {/* Links */}
          <div className="flex items-center gap-8 text-[14px]">
            <Link href="#" className="hover:text-[#91a28c]">
              Licenses
            </Link>

            <Link href="#" className="hover:text-[#91a28c]">
              Privacy
            </Link>

            <Link href="#" className="hover:text-[#91a28c]">
              Terms
            </Link>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;