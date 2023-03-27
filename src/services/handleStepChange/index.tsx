import { HandleStepChangeProps } from './Types/stepChangerProps';

export function HandleStepChange({
  changeStep,
  formData,
  currentStep,
  currentComponent,
  event,
  ListComponents,
  cart,
}: HandleStepChangeProps) {
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
