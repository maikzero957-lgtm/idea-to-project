import { create } from 'zustand';

interface ProjectStore {
  idea: string;
  loading: boolean;
  results: {
    brandName: string;
    businessPlan: string;
    targetAudience: string;
    services: string;
    marketing: string;
    costs: string;
  };
  setIdea: (idea: string) => void;
  setLoading: (loading: boolean) => void;
  setResults: (results: any) => void;
  reset: () => void;
}

const initialResults = {
  brandName: '',
  businessPlan: '',
  targetAudience: '',
  services: '',
  marketing: '',
  costs: '',
};

export const useProjectStore = create<ProjectStore>((set) => ({
  idea: '',
  loading: false,
  results: initialResults,
  setIdea: (idea) => set({ idea }),
  setLoading: (loading) => set({ loading }),
  setResults: (results) => set({ results }),
  reset: () => set({ idea: '', loading: false, results: initialResults }),
}));
