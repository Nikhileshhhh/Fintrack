import React from 'react';
import { motion } from 'framer-motion';
import ModernCarousel from '../components/ui/ModernCarousel';
import AuthContainer from '../components/ui/AuthContainer';

const ModernAuth: React.FC = () => {
  const carouselImages = [
    '/images/slide1.png',
    '/images/slide2.png',
    '/images/slide3.png'
  ];

  const handleAuthSubmit = (data: any, isLogin: boolean) => {
    console.log('Auth submission:', { data, isLogin });
    // Handle authentication logic here
    alert(`${isLogin ? 'Login' : 'Signup'} attempted with: ${data.email}`);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Carousel (7/10 width) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-7/10 h-screen"
      >
        <ModernCarousel 
          images={carouselImages}
          autoPlayInterval={5000}
        />
      </motion.div>

      {/* Right Side - Auth Container (3/10 width) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-3/10 h-screen"
      >
        <AuthContainer onSubmit={handleAuthSubmit} />
      </motion.div>
    </div>
  );
};

export default ModernAuth;