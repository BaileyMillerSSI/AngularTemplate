import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ThemeService } from 'src/app/Service/theme.service';
import { UpdateService } from 'src/app/Service/update.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, public themeService: ThemeService, public updateService: UpdateService) {}



  openSettings()
  {
    console.log(`Current App Version: ${this.updateService.GetAppVersion()}`);
  }

}
