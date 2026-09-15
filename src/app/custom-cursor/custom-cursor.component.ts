import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

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

  @ViewChild('cursorOutline') cursorOutline!: ElementRef<HTMLDivElement>;
  @ViewChild('cursorBall') cursorBall!: ElementRef<HTMLDivElement>;

  constructor(private cdr: ChangeDetectorRef) {
    document.addEventListener('mousemove', (e) => {
      this.mouse.x = e.pageX;
      this.mouse.y = e.pageY;

      this.tsLastTimeMouseMoved = this.requestId;
    });

    document.addEventListener('click', (e) => {
      this.mouseMoving = !this.mouseMoving;
      this.cdr.detectChanges(); // Force the HTML to update
    });
  }

  ngOnInit() {
    this.requestId = requestAnimationFrame((timestamp) => this.step(timestamp));
  }

  private step(timestamp: any) {
    this.cursorBall.nativeElement.style.top = `${this.mouse.y}px`;
    this.cursorBall.nativeElement.style.left = `${this.mouse.x}px`;

    if (this.mouseMoving) {
      this.cursorOutline.nativeElement.style.transform = `translate(20px, 10px)`;
    } else {
      if (this.addY > -25) {
        this.addY -= 1.2; // bouncing speed
        const a = 2.5 - ((this.addY + 25) / 100 + 1);
        // console.log('aa', { a });
        this.cursorOutline.nativeElement.style.transform = `translate(20px, 10px) scale(${a})`;
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
