import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

const Countdown: React.FC = () => {
    // Target date: March 1, 2026 (approximate start of next session admissions)
    const targetDate = new Date('2026-03-01T00:00:00').getTime();
    const [timeLeft, setTimeLeft] = useState<{
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000),
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const items = [
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds },
    ];

    return (
        <section className="py-12 bg-teal-900 border-y border-teal-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left space-y-2">
                        <div className="inline-flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-widest text-sm">
                            <Calendar size={16} />
                            Admissions 2026
                        </div>
                        <h2 className="text-3xl font-black text-white">Counting Down to the Next Big Step!</h2>
                        <p className="text-teal-200/70 font-medium">Pre-registration for our 2026 academic batch is coming soon.</p>
                    </div>

                    <div className="flex gap-4 sm:gap-6">
                        {items.map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 shadow-xl">
                                    <span className="text-2xl sm:text-3xl font-black text-white">{String(item.value).padStart(2, '0')}</span>
                                </div>
                                <span className="text-xs font-bold text-teal-300 uppercase mt-2 tracking-wider">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Countdown;
