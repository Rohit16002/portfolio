import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const socialMediaLinks = [
    { id: 1, name: 'Facebook', url: 'https://www.facebook.com', icon: <FaFacebook /> },
    { id: 2, name: 'Twitter', url: 'https://www.twitter.com', icon: <FaTwitter /> },
    { id: 3, name: 'Instagram', url: 'https://www.instagram.com', icon: <FaInstagram /> },
    { id: 4, name: 'LinkedIn', url: 'https://www.linkedin.com', icon: <FaLinkedin /> },
];

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white h-[25vh] flex items-center justify-center">
            <div className="container mx-auto flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
                <div className="flex space-x-4">
                    {socialMediaLinks.map((link) => (
                        <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-400">
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
