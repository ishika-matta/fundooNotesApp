import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconTrayComponent } from './icon-tray.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('IconTrayComponent', () => {
  let component: IconTrayComponent;
  let fixture: ComponentFixture<IconTrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconTrayComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [ HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
