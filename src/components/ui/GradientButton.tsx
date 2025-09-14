import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  icon?: LucideIcon;
  loading?: boolean;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  variant = 'primary',
  icon: Icon,
  loading = false
}) => {
  const baseClasses = "w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white shadow-lg hover:shadow-xl",
    secondary: "border-2 border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-300"
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`${baseClasses} ${variantClasses[variant]} flex items-center justify-center`}
    >
      {loading ? (
        <div className="flex items-center">
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
          Loading...
        </div>
      ) : (
        <div className="flex items-center">
          {Icon && <Icon className="w-5 h-5 mr-2" />}
          {children}
        </div>
      )}
    </motion.button>
  );
};

export default GradientButton;