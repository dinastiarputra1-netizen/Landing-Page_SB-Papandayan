import { motion } from "framer-motion";
import { Utensils, Soup, Pizza, Coffee, Salad } from "lucide-react";

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
    className="absolute pointer-events-none opacity-10 text-orange-500"
    style={{ left: x, top: y }}
  >
    {children}
  </motion.div>
);

export default function FloatingOrnaments() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Ikon Alat Makan */}
      <Ornament x="8%" y="15%" delay={0} duration={7}>
        <Utensils size={48} />
      </Ornament>
      
      <Ornament x="88%" y="25%" delay={1} duration={6}>
        <Soup size={42} />
      </Ornament>

      <Ornament x="15%" y="65%" delay={2} duration={8}>
        <Pizza size={36} />
      </Ornament>

      <Ornament x="80%" y="75%" delay={0.5} duration={7}>
        <Coffee size={40} />
      </Ornament>

      <Ornament x="5%" y="45%" delay={1.5} duration={9}>
        <Salad size={32} />
      </Ornament>

      <Ornament x="92%" y="55%" delay={0.8} duration={6}>
        <Utensils size={30} className="rotate-45" />
      </Ornament>
    </div>
  );
}