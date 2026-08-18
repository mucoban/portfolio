import {Component, Input, ViewEncapsulation} from "@angular/core";

@Component({
    selector: 'app-secion-texts',
    styles: [`
    .main-holder {
      display: block;
      width: 157px;
      margin-bottom: -8px;
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
      @if (currentSt === sts.info) {
        <app-st-info />
      }
      @if (currentSt === sts.skills) {
        <app-st-skills />
      }
      @if (currentSt === sts.experience) {
        <app-st-experience />
      }
      @if (currentSt === sts.sideWorks) {
        <app-st-side-works />
      }
    </div>
    `,
    standalone: false
})
export class SectionTextsComponent {

  @Input() currentSt: number = 0

  sts = {
    info: 1,
    skills: 2,
    experience: 3,
    sideWorks: 4,
  }

  constructor() { }

}
