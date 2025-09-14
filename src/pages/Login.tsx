import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';
import { Mail, Lock, Eye, EyeOff, Chrome } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    '/images/slide1.png',
    '/images/slide2.png',
    '/images/slide3.png'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      navigate('/dashboard');
    } catch (err: any) {
      setError('Invalid credentials!');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      navigate('/dashboard');
    } catch (error) {
      setError('Sign-in failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Background - Full Screen */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Auth Card - Right Anchored */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute right-0 lg:right-[2%] xl:right-[3%] top-1/2 transform -translate-y-1/2 w-full max-w-[420px] md:max-w-[380px] sm:static sm:transform-none sm:w-[calc(100%-48px)] sm:mx-auto sm:mt-6 sm:mb-6 z-20"
        style={{
          background: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(8px)',
          borderRadius: '20px',
          padding: '32px',
          border: 'none',
          boxShadow: '0 10px 30px rgba(0,0,0,0.18)'
        }}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#0B1B2A] mb-3">Welcome Back</h2>
          <p className="text-gray-600">Sign in to continue your financial journey</p>
        </div>

        {error && (
          <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-[18px]">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full h-12 pl-10 pr-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-[3px] focus:ring-[rgba(85,102,255,0.18)] focus:border-[#5566FF] transition-all duration-200 text-[#0B1B2A] placeholder-gray-500"
              placeholder="Email address"
              aria-label="Email address"
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full h-12 pl-10 pr-12 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-[3px] focus:ring-[rgba(85,102,255,0.18)] focus:border-[#5566FF] transition-all duration-200 text-[#0B1B2A] placeholder-gray-500"
              placeholder="Password"
              aria-label="Password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[rgba(85,102,255,0.18)] rounded"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>

          <motion.button
            type="submit"
            disabled={isLoading}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full h-12 bg-gradient-to-r from-[#5566FF] to-[#A24BFF] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-[120ms] disabled:opacity-50 focus:outline-none focus:ring-[3px] focus:ring-[rgba(85,102,255,0.18)]"
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </motion.button>
        </form>

        {/* Divider */}
        <div className="my-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-white text-gray-500">or</span>
            </div>
          </div>
        </div>
        
        {/* Google Sign In */}
        <motion.button
          onClick={handleGoogleSignIn}
          whileHover={{ backgroundColor: 'rgba(249,250,251,1)' }}
          className="w-full h-12 flex items-center justify-center gap-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-sm focus:outline-none focus:ring-[3px] focus:ring-[rgba(85,102,255,0.18)]"
        >
          <Chrome className="h-5 w-5 text-red-500" />
          <span className="font-medium text-gray-700">Sign In with Google</span>
        </motion.button>

        {/* Links */}
        <div className="mt-6 text-center space-y-3">
          <button className="text-gray-600 hover:text-gray-800 text-sm transition-colors block focus:outline-none focus:ring-2 focus:ring-[rgba(85,102,255,0.18)] rounded">
            Forgot Password?
          </button>
          <p className="text-gray-600 text-sm">
            Don't have an account?{' '}
            <button
              onClick={() => navigate('/signup')}
              className="text-[#5566FF] hover:text-[#4455EE] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[rgba(85,102,255,0.18)] rounded"
            >
              Sign Up
            </button>
          </p>
        </div>

        {/* Decorative Accent */}
        <div className="flex justify-center mt-6">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-gradient-to-r from-[#5566FF] to-[#A24BFF] rounded-full opacity-60"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-[#5566FF] to-[#A24BFF] rounded-full opacity-40"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-[#5566FF] to-[#A24BFF] rounded-full opacity-20"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
