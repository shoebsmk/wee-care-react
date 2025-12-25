import { Clock } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

const Programs: React.FC = () => {
    return (
        <section id="programs" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div>
                        <h2 className="text-sm font-bold text-teal-600 uppercase mb-2">Our Programs</h2>
                        <h3 className="text-4xl font-black">Pre-Primary Excellence</h3>
                    </div>
                    <div className="bg-teal-50 px-6 py-3 rounded-2xl text-teal-700 font-bold flex items-center gap-2">
                        <Clock size={20} /> {schoolInfo.hours}
                    </div>
                </div>
                <div className="grid md:grid-cols-4 gap-6">
                    {schoolInfo.programs.map((prog, i) => (
                        <div key={i} className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 text-center hover:border-teal-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-emerald-600 text-white rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                                <span className="text-xl font-black">{prog.name[0]}</span>
                            </div>
                            <h4 className="text-xl font-black mb-1">{prog.name}</h4>
                            <p className="text-teal-600 font-bold text-sm mb-4">Admissions Open</p>
                            <div className="pt-4 border-t border-slate-200">
                                <span className="text-xs font-bold text-slate-400 uppercase">Admission Fee</span>
                                <p className="text-green-600 font-black">{prog.fee.toUpperCase()}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;
