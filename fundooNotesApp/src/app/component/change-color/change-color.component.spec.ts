import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeColorComponent } from './change-color.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatMenuModule} from '@angular/material/menu';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ChangeColorComponent', () => {
  let component: ChangeColorComponent;
  let fixture: ComponentFixture<ChangeColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({   
      declarations: [ ChangeColorComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [MatMenuModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
