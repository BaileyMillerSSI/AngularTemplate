import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../UI/nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatMenuModule, MatSlideToggleModule, MatSnackBarModule } from '@angular/material';


@NgModule({
  declarations: [NavBarComponent],
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
    MatSnackBarModule
  ],
  exports:[
    // UI 
    NavBarComponent,

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
