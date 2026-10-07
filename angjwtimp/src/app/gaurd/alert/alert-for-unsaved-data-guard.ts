import { CanDeactivateFn } from '@angular/router';
import { CanComponentDeactivate } from './canDeactivate.interface';

export const alertForUnsavedDataGuard: CanDeactivateFn<CanComponentDeactivate> = (
  component
) => {
  return component.canDeactivate ? component.canDeactivate() : true;
};
