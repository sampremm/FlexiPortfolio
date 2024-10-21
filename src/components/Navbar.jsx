import React, { useState } from 'react';
import logo from '../assets/logonew.png';
import { NAVIGATION_LINKS } from '../constants';
import { FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [isMobileMenu, setIsMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenu((prevState) => !prevState);
    };

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offset = -85;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
            setIsMobileMenu(false); // Close the mobile menu after navigating
        }
    };

    const renderNavLinks = () => (
        NAVIGATION_LINKS.map((link, index) => (
            <li key={index}>
                <a
                    className="text-sm text-white hover:text-yellow-400"
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    aria-label={link.label}
                >
                    {link.label}
                </a>
            </li>
        ))
    );

    return (
        <nav className="fixed left-0 right-0 top-4 z-50">
            {/* Desktop Menu */}
            <div className="mx-auto hidden max-w-2xl items-center justify-between rounded-lg bg-black/20 py-3 backdrop-blur-lg lg:flex">
                <div className="flex items-center gap-6">
                    <a href="#" aria-label="Home">
                        <img src={logo} width={90} alt="Logo" />
                    </a>
                </div>
                <ul className="flex items-center gap-4">
                    {renderNavLinks()}
                </ul>
            </div>

            {/* Mobile Menu */}
            <div className="rounded-lg backdrop-blur-lg lg:hidden">
                <div className="flex items-center justify-between p-2">
                    <a href="#" aria-label="Home">
                        <img src={logo} width={90} alt="Logo" />
                    </a>
                    <button
                        className="focus:outline-none"
                        onClick={toggleMobileMenu}
                        aria-expanded={isMobileMenu}
                        aria-label={isMobileMenu ? 'Close menu' : 'Open menu'}
                    >
                        {isMobileMenu ? (
                            <FaTimes className="w-5 h-6 text-white" />
                        ) : (
                            <FaBars className="w-5 h-6 text-white" />
                        )}
                    </button>
                </div>
                {isMobileMenu && (
                    <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
                        {renderNavLinks()}
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default React.memo(Navbar);
