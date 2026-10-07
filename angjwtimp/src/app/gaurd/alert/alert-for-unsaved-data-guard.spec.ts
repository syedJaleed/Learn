import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { alertForUnsavedDataGuard } from './alert-for-unsaved-data-guard';

describe('alertForUnsavedDataGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) =>
    TestBed.runInInjectionContext(() => alertForUnsavedDataGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
