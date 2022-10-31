import {AfterViewInit, Component, NgZone, OnDestroy, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {NgScrollbar} from "ngx-scrollbar";
import {Subject, takeUntil, tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {

  activeMitem: number = 1
  private skipEventListener: boolean;
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
            if (this.skipEventListener) {
              return
            }
            console.log('scroll')
            const heightLimit = window.innerHeight - 277
            const parentScrollTopLine = e.target.scrollTop + heightLimit / 2
            this.sections.map((section, index) => {
               const sectionOffsetTop = section.nativeElement.offsetTop
               if (1 || section.nativeElement.scrollHeight === heightLimit) {
                 const sectionBottom = sectionOffsetTop + section.nativeElement.scrollHeight
                 const sectionBottomUpper = sectionBottom - heightLimit / 2
                 let addToIndex = 0
                 if (parentScrollTopLine >= sectionBottomUpper
                  && parentScrollTopLine <= sectionBottom
                 ) {
                    addToIndex = 1
                 }
                 else if (parentScrollTopLine >= sectionOffsetTop
                  && parentScrollTopLine <= sectionOffsetTop + heightLimit / 2
                 ) {
                    addToIndex = -1
                 }

                 if (addToIndex) {
                   const nextSectionIndex = index + addToIndex
                   const nextSection = this.sections.find((s, index) => index === nextSectionIndex )
                   if (nextSection) {
                     this.activeMitem = nextSectionIndex + 1
                     this.scroll({ top: nextSection.nativeElement.offsetTop, duration: 600 })
                   }
                 }
               }
            })

          }),
        ),
        tap((e) => {
            this.oldScrollLinePosition = e.target.scrollTop
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(true)
    this.destroy$.unsubscribe()
  }

  onClickMitem(sectionIndex: number) {
    const nextSection = this.sections.find((s, index) => index === sectionIndex)
    if (nextSection) {
      console.log(nextSection.nativeElement.offsetTop)
      this.activeMitem = sectionIndex + 1
      this.scroll({ top: nextSection.nativeElement.offsetTop, duration: 600 })
    }
  }

  private scroll(options: any) {
    this.skipEventListener = true;
    this.scrollbarRef.scrollTo(options)
    setTimeout(() => { this.skipEventListener = false
      console.log('falsed')
    }, options.duration + 600)
  }

}
