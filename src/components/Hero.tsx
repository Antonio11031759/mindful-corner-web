import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 md:py-0">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight">
              Екатерина Иванова
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              Психолог, консультант
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Помогаю обрести внутреннюю устойчивость, ясность и гармонию
            </p>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="rounded-full px-8 shadow-md hover:shadow-lg transition-all"
            >
              Записаться на консультацию
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-md aspect-square bg-secondary rounded-3xl shadow-lg flex items-center justify-center text-9xl">
              📸
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
