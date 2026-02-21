import { motion } from "framer-motion";
import { ArrowRight, Utensils } from "lucide-react";
import SplitText from "@/components/SplitText";

export default function Hero() {
  return (
    // Tambahkan pt-40 agar konten turun di bawah Navbar melayang
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40 pb-20">
      
      {/* Background & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/gambar-hero.jpg" 
          alt="Sambal Sunda"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#fffaf5]" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge Buka 24 Jam - Diberi z-index agar di depan overlay */}
          <span className="inline-flex items-center gap-2 bg-orange-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-8 shadow-xl relative z-20">
            <Utensils size={16} /> Buka 24 Jam Non-Stop
          </span>
          
          {/* Judul dengan SplitText */}
          <div className="mb-8">
            <SplitText
              text="Pedesnya Nagih,"
              className="text-5xl md:text-8xl font-black text-orange-500 italic justify-center pb-4"
              delay={150}
            />
            <SplitText
              text="Rasanya Autentik."
              className="text-5xl md:text-8xl font-black text-white justify-center pb-4"
              delay={300}
            />
          </div>

          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Rasakan sensasi Sambel Dadak yang diulek langsung dari cobek. Warisan rasa Sunda asli di jantung Jatinangor.
          </p>

          {/* Container Tombol Interaktif */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            
            {/* Tombol LIHAT MENU dengan Real-Click Effect */}
          <motion.button 
            // Tambahkan fungsi scroll ini
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
  
            whileHover={{ scale: 1.05, backgroundColor: "#ea580c" }}
            whileTap={{ 
            scale: 0.92, 
            y: 4,
            boxShadow: "0px 2px 10px rgba(0,0,0,0.3)" 
            }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="bg-orange-600 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-[0_10px_20px_rgba(234,88,12,0.4)] flex items-center justify-center gap-3 group cursor-pointer"
            >
            Lihat Menu 
            <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
          </motion.button>

            {/* Tombol TENTANG KAMI dengan Ghost Effect */}
            <motion.button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-10 py-4 rounded-2xl font-bold text-lg transition-colors cursor-pointer"
            >
            Tentang Kami
            </motion.button>

          </div>
        </motion.div>
      </div>
    </section>
  );
}