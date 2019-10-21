import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderComponent } from './reminder.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ReminderComponent', () => {
  let component: ReminderComponent;
  let fixture: ComponentFixture<ReminderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [ HttpClientModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
