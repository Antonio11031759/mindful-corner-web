import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-4 bg-secondary/30" ref={ref}>
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Начало работы
          </h2>

          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3">Первичная сессия</h3>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  На первой встрече мы познакомимся, обсудим ваш запрос и определим цели работы. Это возможность понять, подходим ли мы друг другу, и задать все интересующие вопросы.
                </p>
              </div>

              <div className="h-px bg-border" />

              <div>
                <h3 className="text-2xl font-semibold mb-3">После трёх встреч</h3>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Мы заключаем терапевтический контракт и согласовываем формат дальнейшей работы — частоту встреч, длительность терапии и другие важные детали.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
