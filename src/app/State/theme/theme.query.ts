import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { ThemeStore } from './theme.store';
import { ThemeState } from './theme.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeQuery extends Query<ThemeState> {

  constructor(protected store: ThemeStore) {
    super(store);
  }


  getMode(): boolean{
    return this.getValue().isLightMode;
  }


  $getMode(): Observable<boolean>
  {
    return this.select(val => val.isLightMode);
  }

}
