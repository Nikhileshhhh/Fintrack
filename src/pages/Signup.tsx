import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  sendEmailVerification,
  signOut,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';
import { auth } from '../firebase';
import { Mail, Lock, Eye, EyeOff, Chrome } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PasswordStrength from '../components/ui/PasswordStrength';

// Add custom CSS for auth card
const authCardStyles = `
.auth-card {
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
  width: min(420px, 34vw);
  max-width: 420px;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: 32px;
  border: none;
  box-shadow: 0 10px 30px rgba(0,0,0,0.18);
}
@media (max-width: 1024px) {
  .auth-card { right: 4%; max-width: 380px; }
}
@media (max-width: 767px) {
  .auth-card { position: static; transform: none; width: calc(100% - 48px); margin: 24px auto; }
}
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = authCardStyles;
  document.head.appendChild(styleSheet);
}

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
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

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      setLoading(false);
      return;
    }

    try {
      const methods = await fetchSignInMethodsForEmail(auth, formData.email);
      if (methods.includes("password")) {
        setError("This email is already registered. Please verify your email before logging in.");
        setLoading(false);
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      await sendEmailVerification(userCredential.user);
      alert("Verification link sent to your email. Please verify to complete signup.");
      await signOut(auth);
    } catch (err: any) {
      if (err.code === 'auth/email-already-in-use') {
        setError("This email is already registered. Please verify your email.");
      } else {
        setError(err.message || "Signup failed");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError('');
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      navigate('/dashboard');
    } catch (error: any) {
      setError(error.code === 'auth/popup-closed-by-user' ? 'Sign-in cancelled' : error.message);
    } finally {
      setLoading(false);
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
        className="auth-card absolute right-[5%] top-1/2 transform -translate-y-1/2 w-full max-w-[420px] xl:w-[min(420px,34vw)] md:right-[4%] md:max-w-[380px] sm:static sm:transform-none sm:w-[calc(100%-48px)] sm:mx-auto sm:mt-6 sm:mb-6 z-20"
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
          <h2 className="text-2xl font-bold text-[#0B1B2A] mb-3">Create Account</h2>
          <p className="text-gray-600">Join SmartPay and start managing your finances today</p>
        </div>

        {error && (
          <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSignup} className="space-y-[18px]">
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
              placeholder="Create password"
              aria-label="Create password"
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

          <PasswordStrength password={formData.password} />

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              className="w-full h-12 pl-10 pr-12 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-[3px] focus:ring-[rgba(85,102,255,0.18)] focus:border-[#5566FF] transition-all duration-200 text-[#0B1B2A] placeholder-gray-500"
              placeholder="Confirm password"
              aria-label="Confirm password"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[rgba(85,102,255,0.18)] rounded"
              aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
            >
              {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full h-12 bg-gradient-to-r from-[#5566FF] to-[#A24BFF] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-[120ms] disabled:opacity-50 focus:outline-none focus:ring-[3px] focus:ring-[rgba(85,102,255,0.18)]"
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
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
        
        {/* Google Sign Up */}
        <motion.button
          onClick={handleGoogleSignIn}
          whileHover={{ backgroundColor: 'rgba(249,250,251,1)' }}
          className="w-full h-12 flex items-center justify-center gap-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-sm focus:outline-none focus:ring-[3px] focus:ring-[rgba(85,102,255,0.18)]"
        >
          <Chrome className="h-5 w-5 text-red-500" />
          <span className="font-medium text-gray-700">Sign Up with Google</span>
        </motion.button>

        {/* Links */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/')}
              className="text-[#5566FF] hover:text-[#4455EE] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[rgba(85,102,255,0.18)] rounded"
            >
              Sign In
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

export default Signup; 