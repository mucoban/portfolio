import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MouseService } from '../shared/services/mouse.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-custom-cursor',
  templateUrl: './custom-cursor.component.html',
  styleUrl: './custom-cursor.component.scss',
  encapsulation: ViewEncapsulation.None,
  standalone: false,
})
export class CustomCursorComponent {
  private requestId: any;
  private tsLastTimeMouseMoved: any;
  private addY = -51;
  private mouse = { x: -100, y: -100 };
  mouseMoving = false;
  hoverLink = false;

  @ViewChild('cursorOutline') cursorOutline!: ElementRef<HTMLDivElement>;
  @ViewChild('cursorBall') cursorBall!: ElementRef<HTMLDivElement>;

  private destroy$ = new Subject<boolean>();

  constructor(
    private cdr: ChangeDetectorRef,
    private mouseService: MouseService,
  ) {
    document.addEventListener('mousemove', (e) => {
      this.mouse.x = e.pageX;
      this.mouse.y = e.pageY;

      this.tsLastTimeMouseMoved = this.requestId;
    });

    document.addEventListener('click', (e) => {
      this.mouseMoving = !this.mouseMoving;
      this.cdr.detectChanges(); // Force the HTML to update
    });

    this.mouseService.mouse$
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => {
        console.log('mouseService.mouse$', value);

        if (value === 'mouseEnterLink') {
          this.hoverLink = true;
          this.cdr.detectChanges();
        } else if (value === 'mouseLeaveLink') {
          this.hoverLink = false;
          this.cdr.detectChanges();
        }
      });
  }

  ngOnInit() {
    this.requestId = requestAnimationFrame((timestamp) => this.step(timestamp));
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  private step(timestamp: any) {
    this.cursorBall.nativeElement.style.top = `${this.mouse.y}px`;
    this.cursorBall.nativeElement.style.left = `${this.mouse.x}px`;

    if (this.mouseMoving) {
      this.cursorOutline.nativeElement.style.transform = `translate(40px, 30px)`;
    } else {
      if (this.addY > -25) {
        this.addY -= 1.2; // bouncing speed
        const a = 2.5 - ((this.addY + 25) / 100 + 1);
        // console.log('aa', { a });
        this.cursorOutline.nativeElement.style.transform = `translate(40px, 30px) scale(${a})`;
      } else {
        this.addY = 75;
      }
    }

    const y = this.mouseMoving ? this.mouse.y : this.mouse.y + this.addY;
    this.cursorOutline.nativeElement.style.top = `${y}px`;

    this.cursorOutline.nativeElement.style.left = `${this.mouse.x}px`;

    this.detectMouseIsMoving();

    this.requestId = requestAnimationFrame((value) => this.step(value));
  }

  private detectMouseIsMoving() {
    const diff = this.requestId - this.tsLastTimeMouseMoved;

    const dNumber = 100;
    if (diff < dNumber && !this.mouseMoving) {
      // console.log('aa trued', diff, diff < 300);
      this.mouseMoving = true;
      this.cdr.detectChanges(); // Force the HTML to update
    } else if (diff >= dNumber && this.mouseMoving) {
      // console.log('aa falsed', diff, diff >= dNumber);
      this.mouseMoving = false;
      this.cdr.detectChanges(); // Force the HTML to update
    }
  }
}
