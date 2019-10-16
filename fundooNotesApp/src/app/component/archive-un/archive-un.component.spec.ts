import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveUnComponent } from './archive-un.component';

describe('ArchiveUnComponent', () => {
  let component: ArchiveUnComponent;
  let fixture: ComponentFixture<ArchiveUnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveUnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveUnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
