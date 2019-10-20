import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router'; 
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ AuthService ],
      imports: [ RouterModule, RouterTestingModule.withRoutes([]) ]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});

