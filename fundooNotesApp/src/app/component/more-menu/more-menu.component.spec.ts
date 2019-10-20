import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreMenuComponent } from './more-menu.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatMenuModule} from '@angular/material/menu';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material';

describe('MoreMenuComponent', () => {
  let component: MoreMenuComponent;
  let fixture: ComponentFixture<MoreMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreMenuComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [ MatMenuModule, HttpClientTestingModule, MatSnackBarModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
