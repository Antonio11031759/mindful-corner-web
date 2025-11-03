import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Video, MapPin, Euro } from "lucide-react";

const WorkFormat = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const formats = [
    {
      icon: Clock,
      title: "Длительность",
      description: "50 минут",
    },
    {
      icon: Video,
      title: "Онлайн",
      description: "Zoom / Google Meet",
    },
    {
      icon: MapPin,
      title: "Очный приём",
      description: "По записи",
    },
    {
      icon: Euro,
      title: "Стоимость",
      description: "80 € онлайн / 100 € очно",
    },
  ];

  return (
    <section className="py-20 px-4" ref={ref}>
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Формат работы
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {formats.map((format, index) => {
              const Icon = format.icon;
              return (
                <motion.div
                  key={format.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-sm text-center"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{format.title}</h3>
                  <p className="text-muted-foreground">{format.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="aspect-[16/9] bg-secondary rounded-3xl shadow-md flex items-center justify-center text-8xl"
          >
            📸
          </motion.div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Фото кабинета
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkFormat;
