import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabDialogBoxComponent } from './collab-dialog-box.component';

describe('CollabDialogBoxComponent', () => {
  let component: CollabDialogBoxComponent;
  let fixture: ComponentFixture<CollabDialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollabDialogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollabDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
