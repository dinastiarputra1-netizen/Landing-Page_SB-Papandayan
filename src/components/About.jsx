import ScrollStack from "./ScrollStack";
import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800", // Suasana Resto
  "https://images.unsplash.com/photo-1606471191009-63994c53433b?q=80&w=800", // Sambal Dadak
  "https://images.unsplash.com/photo-1512058560366-cd2427ffec96?q=80&w=800"  // Nasi Liwet
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          
          {/* Scroll Stack Implementation */}
          <ScrollStack items={images} />

          {/* Bagian Teks */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4">Tentang Cipacing</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
              Rasa Autentik, <br /> Cerita Tradisional.
            </h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Di Resto Cipacing, kami tidak hanya menyajikan makanan. Kami menyajikan kenangan akan masakan rumah dengan **Sambal Dadak** yang legendaris.
            </p>
            <div className="flex gap-8">
              <div>
                <span className="block text-3xl font-black text-orange-600">100%</span>
                <span className="text-slate-500">Bahan Segar</span>
              </div>
              <div>
                <span className="block text-3xl font-black text-orange-600">Asli</span>
                <span className="text-slate-500">Resep Sunda</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}