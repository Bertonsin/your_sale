import { FormEvent } from 'react';

export type ButtonsContainerProps = {
  ListComponents: JSX.Element[];
  currentComponent: JSX.Element;
  currentStep: number;
  changeStep: (step: number, event: FormEvent<HTMLButtonElement>) => void;
};
