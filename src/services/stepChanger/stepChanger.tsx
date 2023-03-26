import { StepChangerProps } from './Types/stepChangerProps';

export function StepChanger({
  changeStep,
  formData,
  currentStep,
  currentComponent,
  event,
  ListComponents,
  cart,
}: StepChangerProps) {
  if (formData.client !== null && currentComponent === ListComponents[0]) {
    changeStep(currentStep + 1, event);
  }
  if (formData.item !== null && currentComponent === ListComponents[1]) {
    changeStep(currentStep + 1, event);
  }
  if (cart.length > 0 && currentComponent === ListComponents[2]) {
    changeStep(currentStep + 1, event);
  }
}
