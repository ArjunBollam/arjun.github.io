import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class PageService {
  page: String ;
  private subject = new Subject<any>();

  getpage(): Observable<any> {
      return this.subject.asObservable();
  }
  setpage(page: String) {
      this.subject.next(page);
  }
  constructor() {
      this.page = 'home';
  }
}
