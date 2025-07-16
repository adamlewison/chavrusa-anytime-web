// src/hooks/useToast.ts
import { useCallback } from 'react';

export const useToast = () => {
  const showToast = useCallback((message: string) => {
    // Simple toast notification
    const toast = document.createElement("div");
    toast.textContent = message;
    toast.className =
      "fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-2xl text-sm font-medium z-50 shadow-xl";
    document.body.appendChild(toast);
    setTimeout(() => {
      if (document.body.contains(toast)) {
        document.body.removeChild(toast);
      }
    }, 2500);
  }, []);

  return showToast;
};
