// src/hooks/useGreeting.ts
import { useState, useEffect } from 'react';

export const useGreeting = () => {
  const [greeting, setGreeting] = useState('Good Morning');

  useEffect(() => {
    const getGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) return "Good Morning";
      if (hour < 18) return "Good Afternoon";
      return "Good Evening";
    };
    setGreeting(getGreeting());
  }, []);

  return greeting;
};
