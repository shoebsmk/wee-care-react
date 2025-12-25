import { Star, CheckCircle } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';
import classroomImage from '../assets/clasroom-with-kids.jpeg';
import heroVideo from '../assets/classroom-video.mp4';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative min-h-[85vh] flex items-center overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={classroomImage}
                    className="w-full h-full object-cover"
                >
                    <source src={heroVideo} type="video/mp4" />
                    {/* Fallback image if video doesn't load */}
                    <img
                        src={classroomImage}
                        alt="Children learning in classroom"
                        className="w-full h-full object-cover"
                    />
                </video>
                {/* Dark overlay with stronger left gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40"></div>
            </div>

            {/* Content - Left Aligned */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-2xl space-y-6">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md text-white rounded-full text-xs font-medium border border-white/20">
                        <Star size={12} className="text-emerald-400" />
                        <span>Preschool and Daycare</span>
                    </div>

                    {/* Headline - Large with italic styling */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
                        <span className="font-light italic">Nurturing </span>
                        <span className="font-bold">Young Minds</span>
                        <br />
                        <span className="font-light italic">Through </span>
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Joyful Learning</span>
                    </h1>

                    {/* Tagline */}
                    <p className="text-lg text-white/80 font-medium">
                        Free Admissions Now Open!
                    </p>

                    {/* CTA Button */}
                    <div className="pt-2">
                        <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-lg font-bold text-base shadow-xl shadow-teal-500/30 hover:from-teal-400 hover:to-emerald-400 hover:-translate-y-0.5 transition-all duration-300">
                            Apply Now
                        </button>
                    </div>

                    {/* Stats Row */}
                    <div className="flex flex-wrap items-center gap-4 pt-4 text-sm text-white/80">
                        <span className="flex items-center gap-1.5">
                            <CheckCircle className="text-emerald-400" size={16} /> Spoken English Environment
                        </span>
                        <span className="text-white/30">•</span>
                        <span className="flex items-center gap-1.5">
                            <CheckCircle className="text-emerald-400" size={16} /> Low Fees
                        </span>
                        <span className="text-white/30">•</span>
                        <span className="flex items-center gap-1.5">
                            <CheckCircle className="text-emerald-400" size={16} /> Max 10/Class
                        </span>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
