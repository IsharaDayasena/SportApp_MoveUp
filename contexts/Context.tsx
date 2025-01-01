import React, { createContext, useState, useContext } from 'react';

interface ContextType {
  count: number;
  increment: () => void;
}

// Provide a default value for the context
const Context = createContext<ContextType | undefined>(undefined);

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };


  return (
    <Context.Provider value={{ 
      count, 
      increment
    }}>
      {children}
    </Context.Provider>
  );
};

export const useCustomContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useCustomContext must be used within a Provider');
  }
  return context;
};
