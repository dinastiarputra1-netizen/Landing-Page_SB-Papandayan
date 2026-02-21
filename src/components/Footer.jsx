import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-20 pb-10 border-t border-orange-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Identity */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white font-black">
                SB
              </div>
              <span className="text-xl font-black tracking-tighter text-slate-900 uppercase">
                PAPANDAYAN<span className="text-orange-600">.</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Pioneer Sambel Dadak segar di Jatinangor. Kami menyajikan kehangatan masakan Sunda asli setiap hari, 24 jam nonstop.
            </p>
            <div className="flex gap-4">
              <motion.a whileHover={{ y: -3 }} href="#" className="p-2 bg-orange-50 text-orange-600 rounded-xl hover:bg-orange-600 hover:text-white transition-all">
                <Instagram size={18} />
              </motion.a>
              <motion.a whileHover={{ y: -3 }} href="#" className="p-2 bg-orange-50 text-orange-600 rounded-xl hover:bg-orange-600 hover:text-white transition-all">
                <Facebook size={18} />
              </motion.a>
              <motion.a whileHover={{ y: -3 }} href="#" className="p-2 bg-orange-50 text-orange-600 rounded-xl hover:bg-orange-600 hover:text-white transition-all">
                <Twitter size={18} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Navigasi</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-orange-600 transition-colors">Beranda</a></li>
              <li><a href="#menu" className="hover:text-orange-600 transition-colors">Menu Populer</a></li>
              <li><a href="#ulasan" className="hover:text-orange-600 transition-colors">Testimoni</a></li>
              <li><a href="#lokasi" className="hover:text-orange-600 transition-colors">Lokasi & Peta</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Kontak</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-orange-600" /> +62 881-0236-80060
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-orange-600" /> halo@sambelcipacing.com
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-orange-600 mt-1" /> 
                <span>Jl. Raya Cipacing No.13, Jatinangor, Sumedang</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Promo */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Dapatkan Promo</h4>
            <p className="text-gray-500 text-sm mb-4">Daftarkan email Anda untuk info diskon mahasiswa.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email kamu" 
                className="bg-gray-100 border-none rounded-xl px-4 py-2 text-sm w-full focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <button className="bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-orange-600 transition-all">
                Gabung
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">
            © {currentYear} Resto Sambel Dadak Cipacing. Dibuat dengan React & Tailwind.
          </p>
          <div className="flex gap-8 text-xs text-gray-400 uppercase tracking-tighter">
            <a href="#" className="hover:text-slate-900">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}