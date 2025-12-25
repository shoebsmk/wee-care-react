import { useState } from 'react';
import { School, Phone, Menu, X } from 'lucide-react';
import { schoolInfo, navItems } from '../data/schoolData';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex items-center gap-2">
                        <div className="bg-orange-500 p-2 rounded-xl">
                            <School className="text-white" size={24} />
                        </div>
                        <div>
                            <span className="text-2xl font-black text-orange-600 tracking-tight uppercase">{schoolInfo.name}</span>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest -mt-1">{schoolInfo.tagline}</p>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a key={item.name} href={item.href} className="text-sm font-semibold text-slate-600 hover:text-orange-600 transition-colors">
                                {item.name}
                            </a>
                        ))}
                        <a href={`tel:${schoolInfo.phone}`} className="bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-orange-200 hover:bg-orange-700 transition-all flex items-center gap-2">
                            <Phone size={16} /> Enquire Now
                        </a>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600">
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-white border-b border-slate-100 p-4 absolute w-full shadow-lg">
                    {navItems.map((item) => (
                        <a key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} className="block py-3 text-lg font-medium text-slate-700 border-b border-slate-50 last:border-0">
                            {item.name}
                        </a>
                    ))}
                    <div className="mt-4">
                        <a href={`tel:${schoolInfo.phone}`} className="flex items-center justify-center gap-2 bg-orange-600 text-white w-full py-4 rounded-2xl font-bold">
                            <Phone size={20} /> Call Us Now
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
