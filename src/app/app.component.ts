import { Component, VERSION } from '@angular/core';
import { map, skip, take, filter, delay, Subject } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

// Look at read.me
export class AppComponent {
  public log: string[] = [];
  private _btn2Counter = 0;
  public button1Click$: Subject<string> = new Subject<string>();
  public button2Click$: Subject<number> = new Subject<number>();

  constructor() {
    // код пишем только тут в конструкторе

    // код пишем только тут в конструкторе
    this.button1Click$
      .pipe()
      .subscribe((value) => this.log.push(value.toString()));

    this.button2Click$
      .pipe(
        take(5),
        map((value) => value * 10)
      )
      .subscribe((value) => this.log.push(value.toString()));
  }

  button1Click() {
    this.button1Click$.next(new Date().toISOString());
  }

  button2Click() {
    this.button2Click$.next(this._btn2Counter++);
  }
}
