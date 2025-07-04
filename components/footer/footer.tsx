import React from "react";
import Link from "next/link";
// import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Image from "next/image";


const Footer = () => {
  const customerServiceLinks = [
    { name: "Support", href: "/support" },
    { name: "Your account", href: "/account" },
    { name: "Order status", href: "/order-status" },
    { name: "FAQ", href: "/faq" },
    { name: "Shipping & delivery", href: "/shipping" },
    { name: "Returns & refund", href: "/returns" },
    { name: "Stronger Warranty Info", href: "/warranty" },
    { name: "Payment options", href: "/payment" },
    { name: "Terms & conditions of sale", href: "/terms" },
    { name: "Privacy & cookie policy", href: "/privacy" },
    { name: "Terms of use", href: "/terms-of-use" },
  ];

  const strongerWellnessLinks = [
    { name: "About us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact us", href: "/contact" },
    { name: "Blog & Fitness News", href: "/blog" },
    { name: "Download Catalogue", href: "/catalogue" },
  ];

  const contactLinks = [
    { name: "Google Business", href: "#" },
    { name: "Trustpilot", href: "#" },
  ];

  const socialMediaIcons = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/",
      src: "/icons/faceebook.svg",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/",
      src: "/icons/instagram.svg",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/",
      src: "/icons/youtube.svg",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/",
      src: "/icons/linkdin.svg",
    },
  ];

  const paymentMethods = [
    { bg: "bg-black", text: "Pay", textColor: "text-white" },
    { bg: "bg-white border", text: "G", textColor: "text-blue-600" },
    { bg: "bg-red-500", dot: true },
    { bg: "bg-blue-600", text: "P", textColor: "text-white font-bold" },
    {
      bg: "bg-white border",
      text: "V",
      textColor: "text-blue-800 font-bold italic",
    },
  ];

  return (
    <footer className="bg -gray-50 py-16 max-w-6xl mx-auto ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Customer Service */}
          <div>
           <h3 className="font-se mibold text-gray-900 mb-6 text-[17px] uppercase">
              Customer Service
            </h3>
            <ul className="space-y-3">
              {customerServiceLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stronger Wellness */}
          <div>
            <h3 className="font-se mibold text-gray-900 mb-6 text-[17px] uppercase">
              Stronger Wellness
            </h3>
            <ul className="space-y-3">
              {strongerWellnessLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
<h3 className="font-se mibold text-gray-900 mb-6 text-[17px] uppercase">
              Contact Us
            </h3>
            <div className="space-y-4 text-sm text-gray-600">
              <address className="not-italic">
                <p>Unit 2, 333 West Street</p>
                <p>Glasgow Scotland UK</p>
              </address>
              <div>
                <p>
                  Tel:{" "}
                  <Link
                    href="tel:+441414290505"
                    className="text-blue-600 hover:underline"
                  >
                    +44 141 429 0505
                  </Link>
                </p>
                <p>
                  Email:{" "}
                  <Link
                    href="mailto:support@trynmat.com"
                    className="text-blue-600 hover:underline"
                  >
                    support@trynmat.com
                  </Link>
                </p>
              </div>
              {contactLinks.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="text-blue-600 hover:underline text-sm block"
                >
                  {item.name}
                </Link>
              ))}

              {/* social icons  */}
              <div className="flex space-x-4 pt-2">
                {socialMediaIcons.map((item, i) => (
                  <Link key={i} href={item.href} target="_blank">
                    <Image
                      src={item.src}
                      alt={item.name}
                      width={20}
                      height={20}
                      className="opacity-60 hover:opacity-100 transition"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter */}
        
          <div>
            <h3 className="font-se mibold text-gray-900 mb-6 text-[17px] uppercase">
              Newsletter
            </h3>
            <div className="flex flex-col justify-between h-full">
  <div className="space-y-4">
    <p className="text-sm text-gray-600">
      We promise not to spam you. (By signing up, you agree to our{" "}
      <Link href="#" className="text-blue-600 hover:underline">
        privacy policy and terms of use
      </Link>
      )
    </p>
    <div className="space-y-3">
      <Input
        type="email"
        placeholder="Enter your email address"
        className="w-full"
      />
      <Button className=" bg-black hover:bg-gray-800 text-white ">
        SUBSCRIBE
      </Button>
    </div>
  </div>
<div className="mt-6 sm:mt- auto self-end">
  <Image
    src="/images/footer-logo.svg"
    alt="tryn logo footer"
    width={10}
    height={20}
    className="opacity -70 hover:opacit y-1 00 transit ion w-auto h- auto"
  />
</div>


</div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-sm text-gray-600">©TRYNMAT.COM</div>

            <div className="flex items-center space-x-8">
              <div className="flex space-x-2">
                {paymentMethods.map((item, i) => (
                  <div
                    key={i}
                    className={`w-10 h-6 rounded flex items-center justify-center ${item.bg}`}
                  >
                    {item.dot ? (
                      <div className="w-4 h-3 bg-white rounded-full opacity-80"></div>
                    ) : (
                      <span className={`text-xs ${item.textColor}`}>
                        {item.text}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
