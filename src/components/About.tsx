import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 bg-teal-600 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-teal-500/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-teal-400/20 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-teal-200 uppercase tracking-widest mb-4">Why Parents Choose Wee Care</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-white">Dedicated Nurturing Support</h3>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1: Qualified Teachers */}
                    <div className="relative min-h-[360px] rounded-[2.5rem] border border-white/40 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden">
                        {/* Replace with: Teachers interacting with kids in a bright classroom */}
                        <img
                            src="https://images.unsplash.com/photo-1761604478724-13fe879468cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzY2NjQ3OTk0fA&ixlib=rb-4.1.0&q=80&w=1080"
                            alt="Qualified Teachers"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent"></div>
                        <div className="relative z-10 h-full flex flex-col justify-end p-6">
                            <h4 className="text-2xl font-black text-white drop-shadow-sm">Qualified Teachers</h4>
                            <p className="text-white/90 leading-relaxed mt-2">
                                Expert lead teachers specializing in early childhood education and activity-based learning.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Dedicated Aaya */}
                    <div className="relative min-h-[360px] rounded-[2.5rem] border border-white/40 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden">
                        {/* Replace with: Caring support staff assisting a child */}
                        <img
                            src="https://images.unsplash.com/photo-1736479507452-557c1bb4c374?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzY2NjQ3OTk1fA&ixlib=rb-4.1.0&q=80&w=1080"
                            alt="Dedicated Aaya"
                            className="absolute inset-0 w-full h-full object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent"></div>
                        <div className="relative z-10 h-full flex flex-col justify-end p-6">
                            <h4 className="text-2xl font-black text-white drop-shadow-sm">Dedicated Aaya</h4>
                            <p className="text-white/90 leading-relaxed mt-2">
                                Nurturing childcare assistants providing constant care and support for every child.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Secure Space */}
                    <div className="relative min-h-[360px] rounded-[2.5rem] border border-white/40 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden">
                        {/* Replace with: Safe, clean, and welcoming school environment */}
                        <img
                            src="https://images.unsplash.com/photo-1731865745081-4aeb28e2bc57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzY2NjQ3OTk1fA&ixlib=rb-4.1.0&q=80&w=1080"
                            alt="Secure Space"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent"></div>
                        <div className="relative z-10 h-full flex flex-col justify-end p-6">
                            <h4 className="text-2xl font-black text-white drop-shadow-sm">Secure Space</h4>
                            <p className="text-white/90 leading-relaxed mt-2">
                                A safe and loving environment with regular communication with parents.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
