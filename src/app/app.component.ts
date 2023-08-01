import {Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {experience, skills, used} from "../data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activeMitem: number = 1
  @ViewChild("columnPage") columnPage: ElementRef
  @ViewChildren("section") sections: QueryList<any>

  skills = skills
  used = used
  experience = experience

  constructor() {}

  goToPrevNextSection(isNext?: boolean) {
    const index = !isNext ? this.activeMitem - 1 - 1 : this.activeMitem - 1 + 1
    if (index < 0 && index >= this.sections.length) return
    this.onClickMitem( index)
  }

  onClickMitem(sectionIndex: number, noScroll?: boolean) {
    const nextSection = this.sections.find((s, index) => index === sectionIndex)
    if (nextSection) {
      this.activeMitem = sectionIndex + 1
      if (!noScroll) {
        const scrollTop = this.sections.toArray()[sectionIndex].nativeElement.offsetTop
        this.columnPage.nativeElement.scrollTo({ top: scrollTop, behavior: 'smooth' })
      }
    }
  }

  onScrollColumnPage(event: any) {
    const targetHeightD2 = event.target.offsetHeight / 2
    const scrollTop = event.target.scrollTop + targetHeightD2

    this.sections.map((section, index: number) => {
      const offsetBottom = section.nativeElement.offsetTop + section.nativeElement.offsetHeight
      if (scrollTop > section.nativeElement.offsetTop && scrollTop < offsetBottom) {
          this.onClickMitem(index, true)
      }
    })

  }

}
