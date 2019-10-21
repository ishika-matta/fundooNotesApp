import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayComponent } from './display.component';
import { NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

describe('DisplayComponent', () => {
  let component: DisplayComponent;
  let fixture: ComponentFixture<DisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      declarations: [ DisplayComponent ],
     providers: [{ provide: MatDialog, useValue: {} },
                {provide: MatDialogRef, useValue: {}},],
     schemas: [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA ]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
