import React from 'react';
import { motion } from 'framer-motion';

interface PasswordStrengthProps {
  password: string;
}

const PasswordStrength: React.FC<PasswordStrengthProps> = ({ password }) => {
  const getStrength = (password: string) => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    return score;
  };

  const strength = getStrength(password);
  const strengthLabels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
  const strengthColors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-blue-500', 'bg-green-500'];
  const strengthTextColors = ['text-red-600', 'text-orange-600', 'text-yellow-600', 'text-blue-600', 'text-green-600'];

  if (!password) return null;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      transition={{ duration: 0.3 }}
      className="mt-3 p-3 bg-white/50 backdrop-blur-sm rounded-lg border border-white/30"
    >
      <div className="flex space-x-1 mb-2">
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            className={`h-2 flex-1 rounded-full transition-all duration-300 ${
              index < strength ? strengthColors[strength - 1] : 'bg-gray-200'
            }`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: index < strength ? 1 : 0.3 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          />
        ))}
      </div>
      <p className={`text-sm font-medium transition-colors duration-300 ${
        strength > 0 ? strengthTextColors[strength - 1] : 'text-gray-500'
      }`}>
        Password Strength: {strengthLabels[strength - 1] || 'Very Weak'}
      </p>
      {strength < 3 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-2 text-xs text-gray-600"
        >
          <p>Tips: Use 8+ characters, mix upper/lowercase, numbers & symbols</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default PasswordStrength;