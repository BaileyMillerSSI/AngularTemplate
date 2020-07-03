import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../UI/nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatMenuModule, MatSlideToggleModule, MatSnackBarModule, MatGridListModule, MatCardModule } from '@angular/material';
import { FloatButtonComponent } from '../UI/float-button/float-button.component';
import { HomeDashComponent } from '../UI/home-dash/home-dash.component';


@NgModule({
  declarations: 
  [
    NavBarComponent,
    FloatButtonComponent,
    HomeDashComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatGridListModule,
    MatCardModule
  ],
  exports:[
    // UI 
    NavBarComponent,
    FloatButtonComponent,
    HomeDashComponent,

    // Material Modules
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatSnackBarModule
  ]
})
export class SharedModule { }
