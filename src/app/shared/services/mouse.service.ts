import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MouseService {
  mouse$ = new Subject<string>();

  tlog() {
    console.log('tlog');
  }

  mouseEnterLink() {
    this.mouse$.next('mouseEnterLink');
  }

  mouseLeaveLink() {
    this.mouse$.next('mouseLeaveLink');
  }
}
