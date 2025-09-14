import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, PieChart, CreditCard, Target } from 'lucide-react';

const FinanceCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Track Expenses Easily",
      description: "Monitor your spending patterns and stay within budget with our intuitive expense tracking system.",
      icon: PieChart,
      gradient: "from-blue-500 via-purple-500 to-teal-500",
      bgPattern: "opacity-10"
    },
    {
      title: "Smart Budgeting",
      description: "Create personalized budgets and get AI-powered insights to optimize your financial health.",
      icon: TrendingUp,
      gradient: "from-emerald-500 via-cyan-500 to-blue-500",
      bgPattern: "opacity-10"
    },
    {
      title: "Secure Payments",
      description: "Manage all your cards and accounts in one place with bank-level security and encryption.",
      icon: CreditCard,
      gradient: "from-purple-500 via-pink-500 to-red-500",
      bgPattern: "opacity-10"
    },
    {
      title: "Plan Your Savings",
      description: "Set financial goals and track your progress with personalized savings recommendations.",
      icon: Target,
      gradient: "from-orange-500 via-red-500 to-pink-500",
      bgPattern: "opacity-10"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradient} flex flex-col justify-center items-center text-white p-12 text-center`}
        >
          <div className="absolute inset-0 bg-black/10" />
          
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring", bounce: 0.4 }}
            className="relative z-10 mb-8"
          >
            <div className="w-32 h-32 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center">
              {React.createElement(slides[currentSlide].icon, { className: "w-16 h-16 text-white" })}
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl font-bold mb-6 relative z-10"
          >
            {slides[currentSlide].title}
          </motion.h2>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl opacity-90 max-w-md leading-relaxed relative z-10"
          >
            {slides[currentSlide].description}
          </motion.p>

          {/* Decorative elements */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000" />
        </motion.div>
      </AnimatePresence>
      
      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide 
                ? 'w-8 h-3 bg-white shadow-lg' 
                : 'w-3 h-3 bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FinanceCarousel;