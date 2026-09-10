'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useProjectStore } from '@/store/projectStore';
import { motion } from 'framer-motion';

export default function ResultsDisplay() {
  const { t } = useTranslation();
  const { results } = useProjectStore();

  if (!results.brandName) return null;

  const resultSections = [
    { key: 'brandName', title: t('common:results.brandName') },
    { key: 'businessPlan', title: t('common:results.businessPlan') },
    { key: 'targetAudience', title: t('common:results.targetAudience') },
    { key: 'services', title: t('common:results.services') },
    { key: 'marketing', title: t('common:results.marketing') },
    { key: 'costs', title: t('common:results.costs') },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-primary mb-8">
          {t('common:results.businessPlan')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resultSections.map((section, index) => (
            <motion.div
              key={section.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-secondary"
            >
              <h3 className="text-xl font-bold text-dark mb-3">
                {section.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {(results as any)[section.key]}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
