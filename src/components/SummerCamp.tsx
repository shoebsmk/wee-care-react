import { Sun, Calendar, User, CheckCircle } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

const SummerCamp: React.FC = () => {
    const { ref: sectionRef, isVisible } = useRevealOnScroll<HTMLElement>();

    return (
        <section
            id="summercamp"
            ref={sectionRef}
            className={`py-24 bg-white reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}
        >
            <div className="max-w-6xl mx-auto px-4">
                <div className="bg-gradient-to-r from-teal-500 to-emerald-500 rounded-[3rem] p-12 text-white relative overflow-hidden">
                    <Sun size={140} className="absolute -top-10 -right-10 text-white/20 animate-spin-slow" />
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-sm font-black uppercase mb-4 tracking-tighter">Seasonal Special: May-June</h2>
                            <h3 className="text-5xl font-black mb-6 leading-tight">Summer Camp <br />(Learn & Play)</h3>
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-2xl font-bold flex items-center gap-2">
                                    <Calendar size={18} /> {schoolInfo.summerCamp.dates}
                                </div>
                                <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-2xl font-bold flex items-center gap-2">
                                    <User size={18} /> Ages {schoolInfo.summerCamp.age}
                                </div>
                            </div>
                            <button className="bg-white text-teal-600 px-10 py-5 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">Join the Fun</button>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {schoolInfo.summerCamp.activities.map((act, i) => (
                                <div key={i} className="bg-white/10 p-4 rounded-xl border border-white/20 text-sm font-bold flex items-center gap-2">
                                    <CheckCircle size={16} /> {act}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SummerCamp;
