import { Clock } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

const programImages: Record<string, string> = {
    Daycare: 'https://images.unsplash.com/photo-1504484656217-38f8ffc617f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzY2NjQ4OTUwfA&ixlib=rb-4.1.0&q=80&w=1080',
    Nursery: 'https://images.unsplash.com/photo-1760704892974-60b5ddb59825?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzY2NjQ3OTk1fA&ixlib=rb-4.1.0&q=80&w=1080',
    'L.K.G': 'https://images.unsplash.com/photo-1759147893749-7c92a92cd9d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzY2NjQ3OTk2fA&ixlib=rb-4.1.0&q=80&w=1080',
    'U.K.G': 'https://images.unsplash.com/photo-1759977064094-840dfc694bee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzY2NjQ3OTk2fA&ixlib=rb-4.1.0&q=80&w=1080',
};

const Programs: React.FC = () => {
    const { ref: sectionRef, isVisible } = useRevealOnScroll<HTMLElement>();

    return (
        <section
            id="programs"
            ref={sectionRef}
            className={`py-24 bg-orange-200 relative overflow-hidden reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}
        >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-300/30 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div>
                        <h2 className="text-sm font-bold text-orange-800 uppercase mb-2 tracking-widest">Our Programs</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-slate-900">Pre-Primary Excellence</h3>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl text-orange-800 font-bold flex items-center gap-2 shadow-sm border border-orange-100">
                        <Clock size={20} className="text-orange-600" />
                        <span>{schoolInfo.hours}</span>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                    {schoolInfo.programs.map((prog, i) => (
                        <div
                            key={i}
                            className="relative min-h-[360px] rounded-[2.5rem] border border-white/50 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden"
                        >
                            <img
                                src={
                                    programImages[prog.name] ??
                                    `https://placehold.co/800x600/orange/white?text=${prog.name.replace(' ', '+')}`
                                }
                                alt={prog.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent"></div>
                            <div className="relative z-10 h-full flex flex-col justify-between p-6">
                                <div className="flex justify-end">
                                    <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-orange-700 shadow-sm">
                                        {prog.name.includes('care') ? '10 Months+' : '2.5 Years+'}
                                    </div>
                                </div>

                                <div className="text-center">
                                    <h4 className="text-3xl font-black text-white drop-shadow-sm">{prog.name}</h4>
                                    <p className="text-white/90 font-semibold text-sm mt-2">{prog.timing}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;
