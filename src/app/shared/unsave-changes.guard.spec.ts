import { TestBed, async, inject } from '@angular/core/testing';

import { UnsaveChangesGuard } from './unsave-changes.guard';

describe('UnsaveChangesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnsaveChangesGuard]
    });
  });

  it('should ...', inject([UnsaveChangesGuard], (guard: UnsaveChangesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
