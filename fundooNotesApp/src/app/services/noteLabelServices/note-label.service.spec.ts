import { TestBed, inject } from '@angular/core/testing';

import { NoteLabelService } from './note-label.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NoteLabelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ NoteLabelService ],
      imports: [ HttpClientTestingModule ]
    });
  });

  it('should be created', inject([NoteLabelService], (service: NoteLabelService) => {
    expect(service).toBeTruthy();
  }));
});
