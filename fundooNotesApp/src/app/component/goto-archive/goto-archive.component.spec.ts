import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GotoArchiveComponent } from './goto-archive.component';

describe('GotoArchiveComponent', () => {
  let component: GotoArchiveComponent;
  let fixture: ComponentFixture<GotoArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GotoArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GotoArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
