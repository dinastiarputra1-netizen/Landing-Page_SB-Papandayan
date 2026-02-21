import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  // Fungsi untuk menghubungkan ke API WhatsApp
  const handleWhatsApp = () => {
    const nomorWA = "62881023680060"; 
    const pesan = encodeURIComponent(
      "Halo Resto Cipacing, saya melihat website Anda dan ingin bertanya mengenai menu atau melakukan pemesanan."
    );
    window.open(`https://wa.me/${nomorWA}?text=${pesan}`, '_blank');
  };

  return (
    <section id="lokasi" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
              Mampir Yuk ke <br /> <span className="text-orange-600">Tempat Kami.</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-orange-100 p-3 rounded-2xl text-orange-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">Alamat</h4>
                  <p className="text-gray-500">Jl. Raya Cipacing No.13, Kec. Jatinangor, Sumedang.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-orange-100 p-3 rounded-2xl text-orange-600">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">Jam Operasional</h4>
                  <p className="text-gray-500">Buka 24 Jam Setiap Hari (Senin - Minggu)</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-orange-100 p-3 rounded-2xl text-orange-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">Telepon</h4>
                  <p className="text-gray-500">08810-2368-0060</p>
                </div>
              </div>
            </div>

            <motion.button 
              onClick={handleWhatsApp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto bg-green-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-green-100 hover:bg-green-700 transition-all flex items-center justify-center gap-3 cursor-pointer"
            >
              <MessageCircle size={20} fill="currentColor" />
              Hubungi via WhatsApp
            </motion.button>
          </motion.div>

          {/* Google Maps Embed Terpasang */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[450px] w-full rounded-[3rem] overflow-hidden shadow-2xl border-8 border-orange-50 bg-gray-100"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.529107860022!2d107.75635207403592!3d-6.946738568004526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c30070764d67%3A0xc6f56fa94fca6309!2sSambel%20dadak%20papandayan!5e0!3m2!1sid!2sid!4v1771669412626!5m2!1sid!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Resto Cipacing"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}