import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const ulasan = [
  { id: 1, teks: "Sambelnya juara, benar-benar segar karena dibuat mendadak. Ayam gorengnya juga gurih sampai ke dalam.", user: "Asep Sunandar", role: "Mahasiswa Unpad", rating: 5 },
  { id: 2, teks: "Paling enak makan di sini malam-malam karena buka 24 jam. Kol goreng dan sambel dadaknya kombinasi terbaik!", user: "Teh Shanty", role: "Warga Lokal", rating: 5 },
  { id: 3, teks: "Tempat makan Sunda favorit di Jatinangor. Harganya ramah di kantong mahasiswa dan porsinya mengenyangkan.", user: "Rendi Kurnia", role: "Alumni IPDN", rating: 5 },
  { id: 4, teks: "Gak pernah bosen ke sini. Sambel dadaknya itu lho, bikin nambah nasi terus! Nagih banget pkoknya.", user: "Siti Maryam", role: "Kuliner Hunter", rating: 4 }
];

export default function Testimonials() {
  return (
    <section id="ulasan" className="py-24 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-orange-500 font-bold tracking-[0.2em] uppercase text-sm mb-4">Suara Pelanggan</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6">Apa Kata Mereka?</h3>
          <div className="flex justify-center items-center gap-2 text-orange-400">
             <Star size={20} fill="currentColor" />
             <span className="text-white font-bold text-lg">4.9 / 5.0</span>
          </div>
        </motion.div>
      </div>

      {/* Container Marquee dengan Overlay Terkunci */}
      <div className="relative flex overflow-hidden">
        {/* Overlay dipindahkan ke sini agar HANYA menutupi area ulasan */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none z-10" />

        <motion.div 
          className="flex gap-6 whitespace-nowrap py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          style={{ width: "fit-content" }}
        >
          {[...ulasan, ...ulasan].map((item, index) => (
            <div 
              key={index}
              className="w-87.5 md:w-112.5 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] flex flex-col justify-between whitespace-normal"
            >
              <div>
                <Quote className="text-orange-500 mb-6 opacity-50" size={40} />
                <p className="text-gray-200 text-lg leading-relaxed italic mb-8">"{item.teks}"</p>
              </div>
              <div className="flex justify-between items-end border-t border-white/10 pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-black text-xl">
                    {item.user.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-bold">{item.user}</p>
                    <p className="text-xs text-orange-400/80 uppercase tracking-wider">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}