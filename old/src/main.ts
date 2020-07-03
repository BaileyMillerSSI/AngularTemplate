import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { persistState } from '@datorama/akita';


import { longName } from "../package.json";

if (environment.production) {
  enableProdMode();
}

persistState({
  key: longName+'PWA'
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
