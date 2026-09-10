import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export const generateBusinessPlan = async (idea: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/generate`, { idea });
    return response.data;
  } catch (error) {
    console.error('Error generating business plan:', error);
    throw error;
  }
};

export const generateBrandName = async (idea: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/brand-name`, { idea });
    return response.data;
  } catch (error) {
    console.error('Error generating brand name:', error);
    throw error;
  }
};
