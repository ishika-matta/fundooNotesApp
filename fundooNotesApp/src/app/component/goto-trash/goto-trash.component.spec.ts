import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GotoTrashComponent } from './goto-trash.component';

describe('GotoTrashComponent', () => {
  let component: GotoTrashComponent;
  let fixture: ComponentFixture<GotoTrashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GotoTrashComponent ]
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
