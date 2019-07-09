import { Component } from '@angular/core';
import { ThemeService } from './Service/theme.service';
import { UpdateService } from './Service/update.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  
  constructor(public themeService: ThemeService, private updateService: UpdateService, private title: Title){
    this.title.setTitle(updateService.GetAppName());
  }
}
