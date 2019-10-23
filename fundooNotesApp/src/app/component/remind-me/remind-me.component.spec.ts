import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemindMeComponent } from './remind-me.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('RemindMeComponent', () => {
  let component: RemindMeComponent;
  let fixture: ComponentFixture<RemindMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemindMeComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [ HttpClientModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemindMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
