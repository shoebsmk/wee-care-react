import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Curriculum from './components/Curriculum'
import SummerCamp from './components/SummerCamp'
import Footer from './components/Footer'

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
            <Navbar />
            <Hero />
            <About />
            <Programs />
            <Curriculum />
            <SummerCamp />
            <Footer />
        </div>
    )
}

export default App
