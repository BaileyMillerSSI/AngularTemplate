import { Injectable } from '@angular/core';
import { ThemeStore } from '../State/theme/theme.store';
import { ThemeState } from '../State/theme/theme.model';
import { ThemeQuery } from '../State/theme/theme.query';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {

  constructor(private themeStore: ThemeStore,
              private themeQuery: ThemeQuery) {

  }

  public setMode(mode: boolean): void
  {
    this.themeStore.update({
      isLightMode: mode
    });

    this.themeStore.setHasCache(true);
  }

  public resetMode(): void
  {
    this.themeStore.reset();
  }

  public isLightMode(): boolean{
    return this.themeQuery.getMode() === true;
  }

  public $isLightMode(): Observable<boolean>
  {
    return this.themeQuery.$getMode();
  }


}
