import { motion } from "framer-motion";
import CircularGallery from './CircularGallery';
import { Utensils, Soup, Pizza, Coffee, Salad } from "lucide-react"; // Import ikon relevan

// Komponen Internal untuk Ornamen Melayang agar tidak merusak struktur file lain
const Ornament = ({ children, delay = 0, duration = 5, x = "0%", y = "0%" }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ 
      y: [0, -25, 0],
      rotate: [0, 15, -15, 0]
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut"
    }}
    className="absolute pointer-events-none opacity-10 text-orange-500 z-0"
    style={{ left: x, top: y }}
  >
    {children}
  </motion.div>
);

export default function Menu() {
  // Data gambar menu yang akan ditampilkan di putaran 360°
  const menuImages = [
    { image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800", text: "Ayam Goreng Dadak" },
    { image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=800", text: "Ikan Gurame Bakar" },
    { image: "https://images.unsplash.com/photo-1550072951-2fe39a73762c?q=80&w=800", text: "Kol Goreng" },
    { image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=800", text: "Sambal Dadak" },
    { image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800", text: "Nasi Liwet" },
    { image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800", text: "Lalapan Segar" },
  ];

  return (
    <section id="menu" className="py-24 bg-[#030712] overflow-hidden relative">
      
      {/* --- START: Floating Ornaments Section --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Ornament x="5%" y="15%" delay={0} duration={7}><Utensils size={48} /></Ornament>
        <Ornament x="90%" y="20%" delay={1} duration={6}><Soup size={42} /></Ornament>
        <Ornament x="12%" y="70%" delay={2} duration={8}><Pizza size={36} /></Ornament>
        <Ornament x="85%" y="75%" delay={0.5} duration={7}><Coffee size={40} /></Ornament>
        <Ornament x="3%" y="45%" delay={1.5} duration={9}><Salad size={32} /></Ornament>
      </div>
      {/* --- END: Floating Ornaments Section --- */}

      {/* Efek Cahaya Ambient di Latar Belakang */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header dengan Gaya Premium */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
              Galeri Premium
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
              Menu Visual 360°
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Rasakan pengalaman menjelajah kelezatan autentik Cipacing melalui tampilan interaktif masa depan.
            </p>
          </motion.div>
        </div>

        {/* Slot Circular Gallery */}
        <div className="relative h-[650px] w-full group">
          <CircularGallery 
            items={menuImages} 
            bend={1.5}
            textColor="#ffffff"
            borderRadius={0.08}
            scrollSpeed={1.5}
            scrollEase={0.05}
          />
          
          {/* Petunjuk Interaksi */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <div className="w-px h-12 bg-gradient-to-b from-orange-500 to-transparent" />
            <p className="text-orange-500/60 text-[10px] uppercase tracking-[0.2em] font-medium">
              Scroll untuk Memutar
            </p>
          </motion.div>
        </div>

        {/* Ringkasan Harga Statis di Bagian Bawah */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-12">
          {[
            { label: "Ayam Dadak", price: "20K" },
            { label: "Gurame Bakar", price: "45K" },
            { label: "Kol Goreng", price: "10K" },
            { label: "Sambal Dadak", price: "FREE" }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">{item.label}</p>
              <p className="text-white font-bold text-xl">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}