import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AutosizeModule } from 'ngx-autosize';


import { DialogCardComponent } from './dialog-card.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
describe('DialogCardComponent', () => {
  let component: DialogCardComponent;
  let fixture: ComponentFixture<DialogCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCardComponent ],
      schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ],
      imports: [ AutosizeModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
