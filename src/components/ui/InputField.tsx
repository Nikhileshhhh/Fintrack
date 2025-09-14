import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  icon: LucideIcon;
  required?: boolean;
  rightElement?: React.ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  value,
  onChange,
  placeholder,
  icon: Icon,
  required = false,
  rightElement
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {label && <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>}
      <div className="relative">
        <Icon className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 transition-colors duration-300 ${
          isFocused ? 'text-blue-500' : 'text-gray-400'
        }`} />
        <motion.input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full pl-10 ${rightElement ? 'pr-12' : 'pr-4'} py-4 border border-gray-300 rounded-xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:bg-white/90 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20`}
          placeholder={placeholder}
          required={required}
          whileFocus={{ scale: 1.01 }}
          animate={{
            boxShadow: isFocused 
              ? '0 0 0 3px rgba(59, 130, 246, 0.1), 0 0 20px rgba(59, 130, 246, 0.15)'
              : '0 0 0 0px rgba(59, 130, 246, 0)'
          }}
        />
        {rightElement && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            {rightElement}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default InputField;