import { Check } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

const extraActivities: string[] = ["Play Blocks", "Cars", "Jigsaws", "Sliding Games", "Arts & Crafts", "Kids Shows on TV"];

const Curriculum: React.FC = () => {
    return (
        <section id="curriculum" className="py-24 bg-slate-900 text-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-4">What We Teach</h2>
                    <h3 className="text-4xl font-black">Activity Based Learning</h3>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {schoolInfo.curriculum.map((item, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center text-center">
                            <div className="w-10 h-10 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-4">
                                <Check size={20} />
                            </div>
                            <h4 className="font-black text-lg mb-1">{item.name}</h4>
                            <p className="text-slate-400 text-sm">{item.details}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-12 bg-white/5 p-8 rounded-3xl border border-white/10 text-center">
                    <h4 className="text-emerald-400 font-bold mb-4 uppercase text-xs tracking-widest">Extra Activities</h4>
                    <div className="flex flex-wrap justify-center gap-4">
                        {extraActivities.map((act, idx) => (
                            <span key={idx} className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium">{act}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Curriculum;
