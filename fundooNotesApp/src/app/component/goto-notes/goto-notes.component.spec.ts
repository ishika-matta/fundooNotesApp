import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GotoNotesComponent } from './goto-notes.component';

describe('GotoNotesComponent', () => {
  let component: GotoNotesComponent;
  let fixture: ComponentFixture<GotoNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GotoNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GotoNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
