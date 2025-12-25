import { Star, CheckCircle, Smile } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative pt-10 pb-20 lg:pt-24 lg:pb-32 bg-white overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-700 rounded-full text-sm font-bold border border-orange-100">
                            <Star size={16} />
                            <span>Free Admission for Ages {schoolInfo.ageRange}</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1]">
                            Where Your Child <br /><span className="text-orange-600">Learns & Grows</span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            {schoolInfo.description}
                            <br /><span className="font-bold text-orange-600 mt-2 block italic">— {schoolInfo.environment}</span>
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <button className="w-full sm:w-auto px-8 py-5 bg-orange-600 text-white rounded-2xl font-bold text-lg shadow-2xl hover:bg-orange-700 transition-all">
                                Get Free Admission
                            </button>
                            <div className="flex items-center gap-3 px-6 py-5 bg-white border border-slate-200 rounded-2xl">
                                <CheckCircle className="text-green-600" size={24} />
                                <div className="text-left">
                                    <p className="text-sm font-bold text-slate-900 leading-none">Low Fees</p>
                                    <p className="text-xs text-slate-500 tracking-tight">Activity Based Learning</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square bg-gradient-to-br from-orange-400 to-rose-500 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col items-center justify-center text-white p-12">
                            <Smile size={100} className="mb-8 opacity-30" />
                            <h3 className="text-4xl font-black mb-4 text-center">Spoken English Environment</h3>
                            <p className="text-white/80 text-center font-medium">Safe & secure learning for children aged 1-6 years.</p>
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-50 hidden sm:block">
                            <p className="text-3xl font-black text-orange-600 leading-none">10</p>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Students Max / Class</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
