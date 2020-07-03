import { ID, guid } from '@datorama/akita';

export interface ThemeState {
  isLightMode: boolean;
}

/**
 * A factory function that creates Theme
 */
export function createTheme(params: Partial<ThemeState>) {
  return {
    ...params
  } as ThemeState;
}
