import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-fade';

const CarouselBackground: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      gradient: 'from-blue-600 via-purple-600 to-teal-600',
      title: 'Smart Financial Management',
      subtitle: 'Track expenses, set budgets, and achieve your financial goals'
    },
    {
      gradient: 'from-teal-600 via-blue-600 to-indigo-600',
      title: 'Secure & Reliable',
      subtitle: 'Your financial data is protected with bank-level security'
    },
    {
      gradient: 'from-purple-600 via-pink-600 to-blue-600',
      title: 'Real-time Insights',
      subtitle: 'Get instant analytics and reports on your spending patterns'
    },
    {
      gradient: 'from-indigo-600 via-purple-600 to-pink-600',
      title: 'Goal Achievement',
      subtitle: 'Set savings goals and track your progress effortlessly'
    }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`h-full w-full bg-gradient-to-br ${slide.gradient} relative`}>
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 50 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-center text-white px-8 max-w-2xl"
                >
                  <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                    {slide.subtitle}
                  </p>
                </motion.div>
              </div>
              
              {/* Animated shapes */}
              <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
              <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000" />
              <div className="absolute top-1/2 left-10 w-24 h-24 bg-white/15 rounded-full blur-lg animate-bounce" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselBackground;