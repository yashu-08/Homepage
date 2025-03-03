import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="bg-[#2C2A6B] text-white py-10">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-lg font-bold mb-2">[EduTech Solution]</h2>
                        <p className="mb-4">Build and realize your dreams together with EduTech Solution</p>
                        <div className="mt-6 md:mt-0 bg-yellow-400 text-black px-4 py-2 rounded-md flex justify-between items-center">
                            <div className="flex flex-col">
                                <h4 className="font-semibold">Email</h4>
                                <p>contact@website.com</p>
                            </div>
                            <div className="flex flex-col ml-4">
                                <h4 className="font-semibold">Telephone</h4>
                                <p>+6288 999 222 333</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6 md:mb-0">
                        <h3 className="font-semibold">Social Media</h3>
                        <ul className="mt-2">
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>

                    <div className="mb-6 md:mb-0">
                        <h3 className="font-semibold">Program</h3>
                        <ul className="mt-2">
                            <li>Freedom to Learn</li>
                            <li>Entrepreneur</li>
                        </ul>
                    </div>

                    <div className="mb-6 md:mb-0">
                        <h3 className="font-semibold">Support</h3>
                        <ul className="mt-2">
                            <li>About Us</li>
                            <li>Provisions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
            </footer>

            {/* Bottom Section */}
            <div className="text-left py-4 text-black flex justify-between items-center">
                <p>© Copyright EduTech 2024 – 2025</p>
                <ul className="flex space-x-4">
                    <li className="hover:underline"><a href="#home">Home</a></li>
                    <li className="hover:underline"><a href="#about-us">About Us</a></li>
                    <li className="hover:underline"><a href="#course">Course</a></li>
                    <li className="hover:underline"><a href="#faq">FAQ</a></li>
                    <li className="hover:underline"><a href="#blog">Blog</a></li>
                </ul>
            </div>
        </>
    );
};

export default Footer;