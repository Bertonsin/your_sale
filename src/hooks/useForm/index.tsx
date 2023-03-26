import { FormEvent, useState } from 'react';

export function useForm(steps: JSX.Element[]) {
  const [currentStep, setCurrentStep] = useState(0);

  function changeStep(step: number, event: FormEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (step < 0 || step + 1 > steps.length) return;
    setCurrentStep(step);
  }

  return {
    currentStep,
    changeStep,
    currentComponent: steps[currentStep],
  };
}
