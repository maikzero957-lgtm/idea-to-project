'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useProjectStore } from '@/store/projectStore';
import { generateBusinessPlan } from '@/services/aiService';

export default function IdeaForm() {
  const { t } = useTranslation();
  const { idea, setIdea, setLoading, setResults, loading } = useProjectStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!idea.trim()) return;

    setLoading(true);
    try {
      const results = await generateBusinessPlan(idea);
      setResults(results);
    } catch (error) {
      console.error('Error:', error);
      alert(t('common:form.error') || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <textarea
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        placeholder={t('common:form.placeholder')}
        className="w-full p-4 border-2 border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
        rows={5}
        disabled={loading}
      />
      <button
        type="submit"
        disabled={loading || !idea.trim()}
        className="mt-4 w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-opacity-90 disabled:opacity-50 transition"
      >
        {loading ? t('common:form.loading') : t('common:form.submit')}
      </button>
    </form>
  );
}
