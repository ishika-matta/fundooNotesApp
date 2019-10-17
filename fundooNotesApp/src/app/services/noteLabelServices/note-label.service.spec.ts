import { TestBed, inject } from '@angular/core/testing';

import { NoteLabelService } from './note-label.service';

describe('NoteLabelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoteLabelService]
    });
  });

  it('should be created', inject([NoteLabelService], (service: NoteLabelService) => {
    expect(service).toBeTruthy();
  }));
});
