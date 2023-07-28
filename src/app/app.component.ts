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

  onClickMitem(sectionIndex: number) {
    const nextSection = this.sections.find((s, index) => index === sectionIndex)
    if (nextSection) {
      this.activeMitem = sectionIndex + 1
      const scrollTop = this.sections.toArray()[sectionIndex].nativeElement.offsetTop
      this.columnPage.nativeElement.scrollTo({ top: scrollTop, behavior: 'smooth' })
    }
  }

}
