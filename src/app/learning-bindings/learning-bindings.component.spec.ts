import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningBindingsComponent } from './learning-bindings.component';

describe('LearningBindingsComponent', () => {
  let component: LearningBindingsComponent;
  let fixture: ComponentFixture<LearningBindingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningBindingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
