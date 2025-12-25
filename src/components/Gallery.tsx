import { useRef, useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

// Import gallery images
import aaya from '../assets/aaya.jpeg';
import classroomEmpty from '../assets/classroom-empty.jpeg';
import classroomWithKids from '../assets/clasroom-with-kids.jpeg';
import kidsPlaying from '../assets/kids-playing.jpeg';
import lobby from '../assets/lobby.jpeg';
import lobby2 from '../assets/lobby-2.jpeg';
import teachersIllustration from '../assets/teachers_illustration.png';

interface GalleryImage {
    src: string;
    alt: string;
    caption: string;
}

const galleryImages: GalleryImage[] = [
    { src: classroomWithKids, alt: 'Classroom With Kids', caption: 'Learning With Friends' },
    { src: kidsPlaying, alt: 'Kids Playing', caption: 'Fun Learning Activities' },
    { src: aaya, alt: 'Caring Support', caption: 'Dedicated Aaya Support' },
    { src: classroomEmpty, alt: 'Classroom', caption: 'Our Colorful Classroom' },
    { src: lobby, alt: 'School Lobby', caption: 'Welcoming School Entrance' },
    { src: lobby2, alt: 'Reception Area', caption: 'Reception & Waiting Area' },
    { src: teachersIllustration, alt: 'Teachers', caption: 'Qualified Teachers' },
];

const Gallery: React.FC = () => {
    const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const { ref: sectionRef, isVisible } = useRevealOnScroll<HTMLElement>();

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => setLightboxOpen(false);

    const goNext = () => setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    const goPrev = () => setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

    return (
        <section
            id="gallery"
            ref={sectionRef}
            className={`py-24 bg-gradient-to-b from-amber-50 via-orange-50 to-stone-50 reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}
        >
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 text-teal-600 rounded-full text-sm font-bold mb-4">
                            <Camera size={16} />
                            <span>Photo Gallery</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900">A Glimpse Inside Wee Care</h2>
                    </div>
                </div>

                <div className="relative">
                    <div
                        ref={carouselRef}
                        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 no-scrollbar"
                    >
                        {galleryImages.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => openLightbox(index)}
                                className="group relative snap-start min-w-[320px] sm:min-w-[420px] md:min-w-[520px] aspect-[5/4] rounded-[2rem] border border-white/60 shadow-sm hover:shadow-md transition-all duration-200 ease-out overflow-hidden"
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent"></div>
                                <div className="relative z-10 h-full flex items-end justify-center p-4 text-center">
                                    <p className="text-white font-black text-base md:text-lg drop-shadow-sm">{image.caption}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            {lightboxOpen && (
                <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-fade-in">
                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 text-white/80 hover:text-white p-2 z-10 transition-transform duration-150 hover:scale-105 active:scale-95"
                        aria-label="Close gallery"
                    >
                        <X size={32} />
                    </button>

                    <button
                        onClick={goPrev}
                        className="absolute left-4 md:left-8 text-white/80 hover:text-white p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-150 hover:scale-105 active:scale-95"
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={32} />
                    </button>

                    <div className="max-w-4xl max-h-[80vh] flex flex-col items-center animate-pop-in">
                        <img
                            src={galleryImages[currentIndex].src}
                            alt={galleryImages[currentIndex].alt}
                            className="max-h-[70vh] object-contain rounded-2xl shadow-2xl"
                        />
                        <p className="text-white font-bold mt-4 text-lg">{galleryImages[currentIndex].caption}</p>
                        <p className="text-white/60 text-sm mt-1">{currentIndex + 1} / {galleryImages.length}</p>
                    </div>

                    <button
                        onClick={goNext}
                        className="absolute right-4 md:right-8 text-white/80 hover:text-white p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-150 hover:scale-105 active:scale-95"
                        aria-label="Next image"
                    >
                        <ChevronRight size={32} />
                    </button>
                </div>
            )}
        </section>
    );
};

export default Gallery;
