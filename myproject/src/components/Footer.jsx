import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-gray-300 py-10 mt-auto">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Column 1: About */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">MCD Portal</h3>
                    <p className="text-sm leading-relaxed">
                        The Municipal Corporation of Delhi (MCD) Complaint Portal is dedicated
                        to serving the citizens of Delhi by providing a transparent and
                        efficient mechanism for grievance redressal.
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link to="/" className="hover:text-sky-400 transition">
                                Home
                            </Link>
                        </li>
                        <li>
                            <button className="hover:text-sky-400 transition">
                                File a Complaint
                            </button>
                        </li>
                        <li>
                            <button className="hover:text-sky-400 transition">
                                Check Status
                            </button>
                        </li>
                        <li>
                            <button className="hover:text-sky-400 transition">
                                Admin Login
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Column 3: Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                            <span className="mr-2">📍</span>
                            <span>
                                Dr. S.P. Mukherjee Civic Centre,
                                <br />
                                Minto Road, New Delhi - 110002
                            </span>
                        </li>
                        <li className="flex items-center">
                            <span className="mr-2">📞</span>
                            <span>155305 (Toll Free)</span>
                        </li>
                        <li className="flex items-center">
                            <span className="mr-2">📧</span>
                            <span>support@mcd.gov.in</span>
                        </li>
                    </ul>
                </div>

                {/* Column 4: Legal & Social */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#" className="hover:text-sky-400 transition">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-sky-400 transition">
                                Terms of Service
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-sky-400 transition">
                                Disclaimer
                            </a>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <h4 className="text-white text-sm font-semibold mb-2">Connect</h4>
                        <div className="flex space-x-4">
                            {/* Social Placeholders */}
                            <a href="#" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-sky-600 transition">
                                🐦
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-600 transition">
                                📘
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-pink-600 transition">
                                📸
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
                <p>
                    &copy; {new Date().getFullYear()} Municipal Corporation of Delhi. All
                    rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
