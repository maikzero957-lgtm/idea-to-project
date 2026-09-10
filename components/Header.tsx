'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Header() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar');
  };

  return (
    <header className="bg-gradient-to-r from-primary to-secondary text-white py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {t('common:header.title')}
        </h1>
        <p className="text-lg md:text-xl opacity-90 mb-6">
          {t('common:header.subtitle')}
        </p>

        <button
          onClick={toggleLanguage}
          className="bg-white text-primary px-4 py-2 rounded-lg font-bold hover:bg-opacity-90 transition"
        >
          {i18n.language === 'ar' ? 'English' : 'العربية'}
        </button>
      </motion.div>
    </header>
  );
}
