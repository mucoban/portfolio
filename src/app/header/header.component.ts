import {Component, EventEmitter, HostListener, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  fixedHeader: boolean
  activeNavIndex: number = 0

  @Output() goToSection = new EventEmitter<number>()

  @HostListener('window:scroll', ['$event']) onScroll(event: any) {
    const scrollTop = event.target.documentElement.scrollTop || event.target.body.scrollTop
    const heightLine = 30
    if (scrollTop > heightLine && !this.fixedHeader) this.fixedHeader = true
    else if (scrollTop < heightLine && this.fixedHeader) this.fixedHeader = false
  }

  onGoToSection(index: number) {
    this.activeNavIndex = index
    this.goToSection.next(index)
  }

}
