import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SvgSkillComponent } from './svg-skill.component';

describe('SvgSkillComponent', () => {
  let component: SvgSkillComponent;
  let fixture: ComponentFixture<SvgSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgSkillComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SvgSkillComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
