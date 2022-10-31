import {AfterViewInit, Component, NgZone, OnDestroy, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {NgScrollbar} from "ngx-scrollbar";
import {Subject, takeUntil, tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {

  private firstscroll: boolean;
  private oldScrollLinePosition: number = 0
  private destroy$ = new Subject<boolean>()
  @ViewChild(NgScrollbar, { static: true }) scrollbarRef: NgScrollbar;
  @ViewChildren("section") sections: QueryList<any>

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit() {
    this.scrollbarRef.verticalScrolled
      .pipe(
        takeUntil(this.destroy$),
        tap((e: any) => this.ngZone.run(() => {
        if (this.firstscroll) return
        this.firstscroll = true
         const heightLimit = window.innerHeight - 260
          const parentScrollTopLine = e.target.scrollTop + heightLimit / 2
          console.log('tap', parentScrollTopLine)
          this.sections.map((section, index) => {
             const sectionOffsetTop = section.nativeElement.offsetTop
             if (section.nativeElement.scrollHeight === heightLimit) {
               if (parentScrollTopLine >= sectionOffsetTop
                && parentScrollTopLine <= sectionOffsetTop + heightLimit
               ) {
                 const nextSectionIndex = index + (this.oldScrollLinePosition <= parentScrollTopLine ? 1 : -1)
                 const nextSection = this.sections.find((s, index) => index === nextSectionIndex )
                 console.log(nextSection.nativeElement.offsetTop)
                 if (nextSection) { this.scrollbarRef.scrollTo({ top: nextSection.nativeElement.offsetTop, duration: 800 }) }
               }
             }
          })
          this.oldScrollLinePosition = parentScrollTopLine
        }))
      )
      .subscribe();


  }

  ngOnDestroy() {
    this.destroy$.next(true)
    this.destroy$.unsubscribe()
  }

}
