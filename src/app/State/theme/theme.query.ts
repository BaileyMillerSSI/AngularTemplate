import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { ThemeStore } from './theme.store';
import { ThemeState } from './theme.model';

@Injectable({ providedIn: 'root' })
export class ThemeQuery extends Query<ThemeState> {

  constructor(protected store: ThemeStore) {
    super(store);
  }

}
