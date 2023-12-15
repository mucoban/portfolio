import {Component, Input, ViewEncapsulation} from "@angular/core";

@Component({
  selector: 'app-secion-texts',
  styles: [`
    .main-holder {
      display: block;
      width: 157px;
    }
    svg {
      height: 30px;
      path { animation-duration: 1.9s !important; }
    }

    @media only screen and (max-width: 1200px) {
      svg { height: 20px }
    }
  `],
  encapsulation: ViewEncapsulation.ShadowDom,
  template: `
    <div class="main-holder">
      <app-st-info *ngIf="currentSt === sts.info" />
      <app-st-skills *ngIf="currentSt === sts.skills" />
      <app-st-experience *ngIf="currentSt === sts.experience" />
      <app-st-side-works *ngIf="currentSt === sts.sideWorks" />
    </div>
  `
})
export class SectionTextsComponent {

  @Input() currentSt: number = 0

  sts = {
    info: 1,
    skills: 2,
    sideWorks: 3,
    experience: 4,
  }

  constructor() { }

}
