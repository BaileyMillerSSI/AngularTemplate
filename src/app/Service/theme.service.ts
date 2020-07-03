import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeStore } from "../State/theme.store";
import { ThemeQuery } from "../State/theme.query";

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(private themeStore: ThemeStore, private themeQuery: ThemeQuery) {}

  public setMode(mode: boolean): void {
    this.themeStore.update({
      isLightMode: mode,
    });

    this.themeStore.setHasCache(true);
  }

  public resetMode(): void {
    this.themeStore.reset();
  }

  public isLightMode(): boolean {
    return this.themeQuery.getMode() === true;
  }

  public $isLightMode(): Observable<boolean> {
    return this.themeQuery.$getMode();
  }
}
