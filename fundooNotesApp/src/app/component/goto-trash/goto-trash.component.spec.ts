import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GotoTrashComponent } from './goto-trash.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GotoTrashComponent', () => {
  let component: GotoTrashComponent;
  let fixture: ComponentFixture<GotoTrashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GotoTrashComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [ HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GotoTrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
