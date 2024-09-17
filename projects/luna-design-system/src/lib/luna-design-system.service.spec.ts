import { TestBed } from '@angular/core/testing';

import { LunaDesignSystemService } from './luna-design-system.service';

describe('LunaDesignSystemService', () => {
  let service: LunaDesignSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LunaDesignSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
