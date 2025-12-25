import { Phone, MapPin, Clock } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';
import logo from '../assets/logo-new.png';

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="bg-slate-50 pt-24 pb-12 border-t">
            <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-3 gap-16">
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <img src={logo} alt="Wee Care Logo" className="h-14 w-auto" />
                        <span className="text-2xl font-black tracking-tight uppercase">WEE CARE</span>
                    </div>
                    <p className="text-slate-500 leading-relaxed font-medium">A loving, caring, and secure pre-primary school in Hyderabad providing quality activity-based learning since 2023.</p>
                    <div className="flex gap-4">
                        <a href={`tel:${schoolInfo.phone}`} className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-slate-200 text-teal-600 shadow-sm hover:bg-gradient-to-r hover:from-teal-600 hover:to-emerald-600 hover:text-white hover:border-transparent transition-all">
                            <Phone size={24} />
                        </a>
                        <a href="https://www.google.com/maps/place/9F4H%2B43Q+Hyderabad,+Telangana,+India" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-slate-200 text-teal-600 shadow-sm hover:bg-gradient-to-r hover:from-teal-600 hover:to-emerald-600 hover:text-white hover:border-transparent transition-all" aria-label="View on Google Maps">
                            <MapPin size={24} />
                        </a>
                    </div>
                </div>
                <div className="space-y-6">
                    <h4 className="text-lg font-black text-slate-400 uppercase tracking-widest">Location</h4>
                    <div className="space-y-4">
                        <a href="https://www.google.com/maps/place/9F4H%2B43Q+Hyderabad,+Telangana,+India" target="_blank" rel="noopener noreferrer" className="flex gap-4 hover:text-teal-600 transition-colors">
                            <MapPin className="text-teal-600 shrink-0" size={24} />
                            <span className="text-slate-600 font-bold italic">
                                {schoolInfo.landmark},<br />
                                {schoolInfo.area}, {schoolInfo.city}, India
                            </span>
                        </a>
                        <div className="flex gap-4">
                            <Clock className="text-teal-600 shrink-0" size={24} />
                            <span className="text-slate-600">{schoolInfo.hours}</span>
                        </div>
                        <a href={`tel:${schoolInfo.phone}`} className="flex gap-4 hover:text-teal-600 transition-colors">
                            <Phone className="text-teal-600 shrink-0" size={24} />
                            <span className="text-slate-900 font-black">{schoolInfo.phone}</span>
                        </a>
                    </div>
                </div>
                <div className="space-y-6">
                    <h4 className="text-lg font-black text-slate-400 uppercase tracking-widest">Our Philosophy</h4>
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 text-center">
                        <p className="text-3xl font-black text-slate-900 italic mb-2">"{schoolInfo.tagline}"</p>
                        <p className="text-xs font-bold text-slate-400 tracking-tighter uppercase">Spoken English Environment</p>
                    </div>
                </div>
            </div>
            <div className="mt-16 pt-8 border-t border-slate-200 text-center text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                &copy; {new Date().getFullYear()} WEE CARE PRE-PRIMARY SCHOOL. ALL RIGHTS RESERVED.
            </div>
        </footer>
    );
};

export default Footer;
