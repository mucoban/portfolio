import {Component, ElementRef, QueryList, ViewChild, ViewChildren, ViewEncapsulation} from '@angular/core';
import {experience, sideWorks, skills} from "../data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  activeMitem: number = 1
  timer: any
  @ViewChild("columnPage") columnPage: ElementRef
  @ViewChildren("section") sections: QueryList<any>

  skills = skills
  experience = experience
  sideWorks = sideWorks

  constructor() {}

  goToPrevNextSection(isNext?: boolean) {
    const index = !isNext ? this.activeMitem - 1 - 1 : this.activeMitem - 1 + 1
    if (index < 0 && index >= this.sections.length) return
    this.onClickMitem( index)
  }

  onClickMitem(sectionIndex: number, noScroll?: boolean) {
    const nextSection = this.sections.find((s, index) => index === sectionIndex)
    if (nextSection) {
      if (!noScroll) this.activeMitem = sectionIndex + 1
      else {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => { this.activeMitem = sectionIndex + 1 }, 100)
      }
      if (!noScroll) {
        const scrollTop = this.sections.toArray()[sectionIndex].nativeElement.offsetTop
        this.columnPage.nativeElement.scrollTo({ top: scrollTop, behavior: 'smooth' })
      }
    }
  }

  onGoToSection(index: number) {
    const scrollTo = index === 0 ? 0 : this.sections.get(index).nativeElement.offsetTop - 58
    window.scrollTo({ top: scrollTo, behavior: "smooth" })
  }

}
