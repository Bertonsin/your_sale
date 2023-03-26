import { FormDataProps } from '../../../contexts/orderContext/Types/orderContextProps';

export type StepChangerProps = {
  changeStep: (step: number, event: React.FormEvent<HTMLButtonElement>) => void;
  formData: FormDataProps;
  currentStep: number;
  currentComponent: JSX.Element;
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>;
  ListComponents: JSX.Element[];
  cart: FormDataProps[];
};
