import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeledNotesComponent } from './labeled-notes.component';

describe('LabeledNotesComponent', () => {
  let component: LabeledNotesComponent;
  let fixture: ComponentFixture<LabeledNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabeledNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabeledNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
