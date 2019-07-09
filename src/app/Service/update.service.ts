import { Injectable, ApplicationRef } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material';
import { first } from 'rxjs/operators';
import { interval, concat } from 'rxjs';
import { environment } from 'src/environments/environment';


import { version, longName } from '../../../package.json';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  private deferredPrompt = null;

  constructor(appRef: ApplicationRef, private updates: SwUpdate, private _snackBar: MatSnackBar) {

    if (environment.production) {

      this.setupInstallButton();

      this.updates.available.subscribe(event => {
        console.log(`Old: ${event.current.hash} New: ${event.available.hash}`);
        this.DisplayUpdateNotification();
      });

      this.updates.activated.subscribe(event => {
        console.log(`Old was: ${event.previous.hash} New is ${event.current.hash}`);
      });


      const appIsStable$ = appRef.isStable.pipe(first(isStable => isStable === true));

      const everySixHours$ = interval(6 * 60 * 60 * 1000);
      const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);

      everySixHoursOnceAppIsStable$.subscribe(x => this.doUpdateCheck());
    }
  }


  public doUpdateCheck() {
    if (environment.production) {
      console.log("Checking for Updates.");
      this.updates.checkForUpdate();
    }
  }

  public GetAppVersion()
  {
    return version;
  }

  public GetAppName()
  {
    return longName;
  }

  public CanInstallPWA()
  {
    return this.deferredPrompt != null;
  }

  public ServiceWorkerAvailable()
  {
    return this.updates.isEnabled;
  }

  private DisplayUpdateNotification() {
    // 
    var updateNotification = this._snackBar.open("An Update is available", "Update", {
      horizontalPosition: "left"
    });


    updateNotification.afterDismissed().subscribe(x => {
      if (!x.dismissedByAction) {
        // Sleep 10 seconds and show again
        setTimeout(() => {
          this.DisplayUpdateNotification();
        }, 10 * 1000);
      }
    });


    updateNotification.onAction().subscribe(() => {
      // Perform the update
      console.log("Update Triggered");
      this.UpdateApplication();
    });
  }



  public UpdateApplication() {
    this.updates.activateUpdate().then(() => document.location.reload());
  }


  public InstallPWA() {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      this.deferredPrompt.userChoice.then(function (choiceResult) {

        if (choiceResult.outcome === 'accepted') {
          console.log('Your PWA has been installed');
        } else {
          console.log('User chose to not install your PWA');
        }

        this.deferredPrompt = null;
      }.bind(this));
    }
  }

  private setupInstallButton() {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e;
    });
  }
}
