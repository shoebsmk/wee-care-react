import { Star, CheckCircle } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';
import classroomImage from '../assets/clasroom-with-kids.jpeg';
import heroVideo from '../assets/classroom-video.mp4';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                <div className="text-center space-y-5">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md text-white rounded-full text-xs font-medium border border-white/20">
                        <Star size={12} className="text-orange-400" />
                        <span>Free Admission • Ages {schoolInfo.ageRange}</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                        Where Your Child{' '}
                        <span className="text-orange-400">Learns & Grows</span>
                    </h1>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto">
                        {schoolInfo.environment}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                        <button className="w-full sm:w-auto px-6 py-3 bg-orange-600 text-white rounded-xl font-semibold text-sm shadow-lg hover:bg-orange-500 transition-all">
                            Get Free Admission
                        </button>
                        <button className="w-full sm:w-auto px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-xl font-semibold text-sm border border-white/20 hover:bg-white/20 transition-all">
                            Schedule a Visit
                        </button>
                    </div>

                    {/* Stats Row */}
                    <div className="flex flex-wrap items-center justify-center gap-4 pt-3 text-xs sm:text-sm text-white/80">
                        <span className="flex items-center gap-1.5">
                            <CheckCircle className="text-green-400" size={14} /> Low Fees
                        </span>
                        <span className="text-white/30">•</span>
                        <span className="flex items-center gap-1.5">
                            <CheckCircle className="text-green-400" size={14} /> Max 10/Class
                        </span>
                        <span className="text-white/30">•</span>
                        <span className="flex items-center gap-1.5">
                            <CheckCircle className="text-green-400" size={14} /> Activity Based
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
