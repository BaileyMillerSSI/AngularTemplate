import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { ThemeState, createTheme } from './theme.model';

export function createInitialState(): ThemeState {
  // Setup the default theme
  // Start out in light mode
  return createTheme({
    isLightMode: true
  });
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'Theme', resettable: true})
export class ThemeStore extends Store<ThemeState> {
  constructor() {
    super(createInitialState());
  }
}

