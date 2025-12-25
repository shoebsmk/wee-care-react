import { Users, Heart, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 bg-teal-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-4">Why Parents Choose Wee Care</h2>
                <h3 className="text-4xl font-black text-white mb-16">Dedicated Nurturing Support</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:border-teal-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-teal-50 to-emerald-50 text-teal-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-sm">
                            <Users size={32} />
                        </div>
                        <h4 className="text-2xl font-bold mb-3">Qualified Teachers</h4>
                        <p className="text-slate-500">Expert lead teachers specializing in early childhood education and activity-based learning.</p>
                    </div>
                    <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:border-teal-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-teal-50 to-emerald-50 text-teal-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-sm">
                            <Heart size={32} />
                        </div>
                        <h4 className="text-2xl font-bold mb-3">Dedicated Aaya</h4>
                        <p className="text-slate-500">Nurturing childcare assistants providing constant care and support for every child.</p>
                    </div>
                    <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:border-teal-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-teal-50 to-emerald-50 text-teal-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-sm">
                            <ShieldCheck size={32} />
                        </div>
                        <h4 className="text-2xl font-bold mb-3">Secure Space</h4>
                        <p className="text-slate-500">A safe and loving environment with regular communication with parents.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
