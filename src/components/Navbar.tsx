import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { schoolInfo, navItems } from '../data/schoolData';
import logo from '../assets/logo-new.png';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <header className="sticky top-0 z-50">
            {/* Top Bar - Logo and Enquire */}
            <div className="bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-24 items-center">
                        {/* Logo Section - Left on mobile, centered on desktop */}
                        <div className="flex items-center gap-3 md:absolute md:left-1/2 md:-translate-x-1/2">
                            <img src={logo} alt="Wee Care Logo" className="h-18 w-auto" />
                            <div className="text-center ">
                                <span className="text-3xl font-black text-teal-700 tracking-tight capitalize font-comic ">{schoolInfo.name}</span>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest -mt-1">{schoolInfo.tagline}</p>
                            </div>
                        </div>

                        {/* Empty spacer for desktop layout */}
                        <div className="hidden md:block"></div>

                        {/* Enquire Button - Right side */}
                        <div className="hidden md:block">
                            <a href={`tel:${schoolInfo.phone}`} className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-teal-200 hover:from-teal-700 hover:to-emerald-700 transition-all flex items-center gap-2">
                                <Phone size={16} /> Enquire Now
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600">
                                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Bar - Teal background */}
            <nav className="hidden md:block bg-gradient-to-r from-teal-600 to-teal-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center items-center h-12 space-x-10">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm font-semibold text-white/90 hover:text-white transition-colors relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-b border-slate-100 p-4 absolute w-full shadow-lg">
                    {navItems.map((item) => (
                        <a key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} className="block py-3 text-lg font-medium text-slate-700 border-b border-slate-50 last:border-0">
                            {item.name}
                        </a>
                    ))}
                    <div className="mt-4">
                        <a href={`tel:${schoolInfo.phone}`} className="flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-emerald-600 text-white w-full py-4 rounded-2xl font-bold">
                            <Phone size={20} /> Call Us Now
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
