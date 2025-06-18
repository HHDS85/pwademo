'use client';
import { useState } from 'react';
import Step1Details from './steps/Step1Details';
import Step2Publisher from './steps/Step2Publisher';
import Step3Budget from './steps/Step3Budget';
import Step4Media from './steps/Step4Media';
import Step5Review from './steps/Step5Review';
import { useWizard } from '@/lib/WizardContext';
import { saveCampaign } from '@/lib/saveCampaign';

const steps = [
  { title: 'Details', component: Step1Details },
  { title: 'Publisher', component: Step2Publisher },
  { title: 'Budget', component: Step3Budget },
  { title: 'Media', component: Step4Media },
  { title: 'Review', component: Step5Review }
];

export default function Wizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const StepComponent = steps[currentStep].component;
  const { formData } = useWizard();

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSave = async (type: 'draft' | 'active') => {
    await saveCampaign(formData, type);
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <div className="flex justify-between mb-8">
        {steps.map((step, index) => (
          <div key={index} className="text-center flex-1">
            <div className={\`w-8 h-8 mx-auto rounded-full text-white \${index <= currentStep ? 'bg-black' : 'bg-gray-300'}\`}>
              {index + 1}
            </div>
            <div className={\`mt-2 text-sm \${index === currentStep ? 'font-bold' : 'text-gray-500'}\`}>
              {step.title}
            </div>
          </div>
        ))}
      </div>

      <div className="border p-6 rounded shadow bg-white dark:bg-gray-800 mb-6">
        <StepComponent />
      </div>

      <div className="flex justify-between">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className="px-4 py-2 bg-gray-300 text-black rounded disabled:opacity-50"
        >
          Zurück
        </button>

        {currentStep < steps.length - 1 ? (
          <button onClick={handleNext} className="px-4 py-2 bg-black text-white rounded">
            Weiter
          </button>
        ) : (
          <div className="flex gap-4">
            <button
              onClick={() => handleSave('draft')}
              className="bg-gray-300 text-black px-4 py-2 rounded"
            >
              Als Entwurf speichern
            </button>
            <button
              onClick={() => handleSave('active')}
              className="bg-black text-white px-4 py-2 rounded"
            >
              Jetzt verbindlich bestellen
            </button>
          </div>
        )}
      </div>
    </div>
  );
}