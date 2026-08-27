import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P5trialComponent } from './p5trial.component';

describe('P5trialComponent', () => {
  let component: P5trialComponent;
  let fixture: ComponentFixture<P5trialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P5trialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P5trialComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
