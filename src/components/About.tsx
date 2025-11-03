import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-4" ref={ref}>
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Обо мне
          </h2>

          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-sm">
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Я помогаю людям справляться с тревогой, депрессивными состояниями, сложностями в отношениях и личностными кризисами. В своей работе я использую научно обоснованные методы, которые помогают не только облегчить симптомы, но и понять их причины.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Моя задача — создать безопасное пространство, где вы сможете быть собой, исследовать свои переживания и найти путь к изменениям. Я верю, что каждый человек обладает внутренними ресурсами для роста и исцеления.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Работаю в подходах <strong>КПТ, схема-терапия, ЭФТ</strong> — выбираю методы индивидуально под запрос и особенности каждого клиента.
            </p>

            <div className="border-t border-border pt-8">
              <h3 className="text-2xl font-semibold mb-6">Мои дипломы</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="aspect-[3/4] bg-secondary rounded-2xl flex items-center justify-center text-6xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  >
                    📄
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
