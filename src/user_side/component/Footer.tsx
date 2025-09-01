import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">EcoBazar</h2>
          <p className="text-sm">
            Your trusted online grocery store with fresh products delivered to your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/shop" className="hover:text-white">Shop</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/faq" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/shipping" className="hover:text-white">Shipping & Returns</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white"><Twitter size={20} /></a>
            <a href="#" className="hover:text-white"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} M.Z All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
