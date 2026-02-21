import { motion } from "framer-motion";
import { UtensilsCrossed } from "lucide-react";

export default function Navbar() {
  // Fungsi logika untuk menghubungkan tombol ke WhatsApp
  const handleWhatsApp = () => {
    const nomorWA = "62881023680060"; // Nomor tujuan
    const pesan = encodeURIComponent(
      "Halo Resto Cipacing, saya ingin melakukan pemesanan melalui website."
    );
    window.open(`https://wa.me/${nomorWA}?text=${pesan}`, '_blank');
  };

  return (
    // Container Navbar yang melayang
    <div className="fixed top-6 left-0 right-0 z-[100] px-6">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="max-w-4xl mx-auto bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl shadow-orange-900/10 rounded-[2rem] px-8 py-4 flex justify-between items-center"
      >
        {/* Logo Section */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-orange-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform">
            <UtensilsCrossed size={20} />
          </div>
          <span className="text-xl font-black tracking-tighter text-slate-900 uppercase">
            PAPANDAYAN<span className="text-orange-600">.</span>
          </span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-xs font-black text-slate-600 uppercase tracking-[0.15em]">
          <a href="#menu" className="hover:text-orange-600 transition-colors relative group">
            Menu
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all group-hover:w-full"></span>
          </a>
          <a href="#ulasan" className="hover:text-orange-600 transition-colors relative group">
            Ulasan
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all group-hover:w-full"></span>
          </a>
          <a href="#lokasi" className="hover:text-orange-600 transition-colors relative group">
            Lokasi
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all group-hover:w-full"></span>
          </a>
        </div>

        {/* Action Button - Desain Tetap Sama, Fungsi Ditambahkan */}
        <motion.button 
          onClick={handleWhatsApp} // Trigger fungsi WhatsApp saat diklik
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-orange-600 transition-colors shadow-lg cursor-pointer"
        >
          Pesan
        </motion.button>
      </motion.nav>
    </div>
  );
}