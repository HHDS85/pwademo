'use client';
import { createContext, useContext, useState } from 'react';

const WizardContext = createContext();

export function WizardProvider({ children }) {
  const [formData, setFormData] = useState({});
  return (
    <WizardContext.Provider value={{ formData, setFormData }}>
      {children}
    </WizardContext.Provider>
  );
}

export function useWizard() {
  return useContext(WizardContext);
}