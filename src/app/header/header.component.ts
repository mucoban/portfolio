import {
  Component,
  EventEmitter,
  HostListener,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { MouseService } from '../shared/services/mouse.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class HeaderComponent {
  fixedHeader: boolean;
  mobileMenuOn: boolean;
  activeNavIndex: number = 0;

  constructor(private mouseService: MouseService) {}

  @Output() goToSection = new EventEmitter<number>();

  @HostListener('window:scroll', ['$event']) onScroll(event: any) {
    const scrollTop =
      event.target.documentElement.scrollTop || event.target.body.scrollTop;
    const heightLine = 30;
    if (scrollTop > heightLine && !this.fixedHeader) this.fixedHeader = true;
    else if (scrollTop < heightLine && this.fixedHeader)
      this.fixedHeader = false;
  }

  onGoToSection(index: number) {
    this.activeNavIndex = index;
    this.goToSection.next(index);
    if (this.mobileMenuOn) this.mobileMenuOn = false;
  }

  mouseEnterLink() {
    this.mouseService.mouseEnterLink();
  }

  mouseLeaveLink() {
    this.mouseService.mouseLeaveLink();
  }
}
