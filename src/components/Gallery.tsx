import { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

// Import gallery images
import classroomEmpty from '../assets/classroom-empty.jpeg';
import kidsPlaying from '../assets/kids-playing.jpeg';
import lobby from '../assets/lobby.jpeg';
import lobby2 from '../assets/lobby-2.jpeg';

interface GalleryImage {
    src: string;
    alt: string;
    caption: string;
}

const galleryImages: GalleryImage[] = [
    { src: classroomEmpty, alt: 'Classroom', caption: 'Our Colorful Classroom' },
    { src: kidsPlaying, alt: 'Kids Playing', caption: 'Fun Learning Activities' },
    { src: lobby, alt: 'School Lobby', caption: 'Welcoming School Entrance' },
    { src: lobby2, alt: 'Reception Area', caption: 'Reception & Waiting Area' },
];

const Gallery: React.FC = () => {
    const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => setLightboxOpen(false);

    const goNext = () => setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    const goPrev = () => setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

    return (
        <section id="gallery" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 text-rose-600 rounded-full text-sm font-bold mb-4">
                        <Camera size={16} />
                        <span>Photo Gallery</span>
                    </div>
                    <h2 className="text-4xl font-black text-slate-900">A Glimpse Inside Wee Care</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {galleryImages.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => openLightbox(index)}
                            className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <p className="text-white font-bold text-sm">{image.caption}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {lightboxOpen && (
                <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 text-white/80 hover:text-white p-2 z-10"
                        aria-label="Close gallery"
                    >
                        <X size={32} />
                    </button>

                    <button
                        onClick={goPrev}
                        className="absolute left-4 md:left-8 text-white/80 hover:text-white p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={32} />
                    </button>

                    <div className="max-w-4xl max-h-[80vh] flex flex-col items-center">
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
                        className="absolute right-4 md:right-8 text-white/80 hover:text-white p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
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
