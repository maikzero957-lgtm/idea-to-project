'use client';

import IdeaForm from "@/components/IdeaForm";
import ResultsDisplay from "@/components/ResultsDisplay";
import { I18nextProvider } from 'react-i18next';
import i18n from '@/config/i18n';

export default function Home() {
  return (
    <I18nextProvider i18n={i18n}>
      <main className="min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <IdeaForm />
          </section>
          <section>
            <ResultsDisplay />
          </section>
        </div>
      </main>
    </I18nextProvider>
  );
}
