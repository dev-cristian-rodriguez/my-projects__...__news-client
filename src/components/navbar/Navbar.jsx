import Popup from 'reactjs-popup';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BiNews } from 'react-icons/bi';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";

import { useTheme } from '@/context/ThemeContext.jsx';

export function Navbar() {
    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);
    const { isDark, toggleTheme } = useTheme();

    const onClickShowMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleMenuClose = () => {
        setTimeout(() => {
            setShowMenu(false);
        }, 300);
    };

    const navLinkClass = ({ isActive }) =>
        `px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
            isActive
                ? 'text-primary bg-primary/10 font-semibold'
                : 'text-slate-700 dark:text-slate-300 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800'
        }`;

    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-700 shadow-sm transition-colors duration-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <div onClick={() => navigate('/')} className="flex items-center gap-3">
                        <BiNews size={32} className="text-primary md:hidden" />
                        <BiNews size={40} className="text-primary hidden md:block" />
                        <span className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white hidden sm:inline">
                            BBC News
                        </span>
                    </div>

                    {/* Right-side controls */}
                    <div className="flex items-center gap-2">
                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-2">
                            <NavLink className={navLinkClass} to="/">
                                Inicio
                            </NavLink>
                            <NavLink className={navLinkClass} to="/news">
                                Noticias
                            </NavLink>
                        </nav>

                        {/* Dark Mode Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary dark:hover:text-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-slate-900"
                            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                        >
                            {isDark ? <BsSun size={22} /> : <BsMoon size={22} />}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={onClickShowMenu}
                            className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-slate-900"
                            aria-label="Toggle menu"
                        >
                            <AiOutlineMenu size={28} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Popup */}
            <Popup
                modal
                nested
                lockScroll
                open={showMenu}
                onClose={() => setShowMenu(false)}
                overlayStyle={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    backdropFilter: 'blur(4px)',
                }}
                position="center center"
                contentStyle={{
                    width: '90%',
                    maxWidth: '400px',
                    borderRadius: '12px',
                    padding: '0',
                    border: 'none',
                    background: 'transparent',
                }}
            >
                <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl p-6">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                            <BiNews size={32} className="text-primary" />
                            <span className="text-xl font-bold text-slate-900 dark:text-white">BBC News</span>
                        </div>
                        <button
                            onClick={() => setShowMenu(false)}
                            className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
                            aria-label="Close menu"
                        >
                            <AiOutlineClose size={24} />
                        </button>
                    </div>
                    <nav className="flex flex-col gap-2">
                        <NavLink
                            onClick={handleMenuClose}
                            className={({ isActive }) =>
                                `px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                                    isActive
                                        ? 'text-primary bg-primary/10 font-semibold'
                                        : 'text-slate-700 dark:text-slate-300 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800'
                                }`
                            }
                            to="/"
                        >
                            Inicio
                        </NavLink>
                        <NavLink
                            onClick={handleMenuClose}
                            className={({ isActive }) =>
                                `px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                                    isActive
                                        ? 'text-primary bg-primary/10 font-semibold'
                                        : 'text-slate-700 dark:text-slate-300 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800'
                                }`
                            }
                            to="/news"
                        >
                            Noticias
                        </NavLink>
                    </nav>
                </div>
            </Popup>
        </header>
    );
}
