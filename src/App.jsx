import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer'; // Import footer
import About from "./components/About";

function App() {
  return (
    <div className="min-h-screen bg-[#fffaf5] selection:bg-orange-200">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Testimonials />
      <Contact />
      <Footer /> {/* Gunakan komponen Footer di sini */}
    </div>
  )
}

export default App;