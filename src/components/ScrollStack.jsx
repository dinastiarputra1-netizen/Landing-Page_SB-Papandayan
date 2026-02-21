import { motion } from "framer-motion";

export default function ScrollStack({ items, className = "" }) {
  return (
    <div className={`relative h-[500px] w-full ${className}`}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50, rotate: 0 }}
          whileInView={{ 
            opacity: 1, 
            y: index * 10, // Memberi efek tumpukan sedikit bergeser ke bawah
            rotate: index % 2 === 0 ? -3 : 3, // Miring bergantian
            scale: 1 - index * 0.05 // Semakin ke bawah tumpukan, semakin kecil sedikit
          }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="absolute inset-0 w-full h-full rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl"
          style={{ zIndex: items.length - index }}
        >
          <img src={item} alt={`Stack ${index}`} className="w-full h-full object-cover" />
        </motion.div>
      ))}
    </div>
  );
}