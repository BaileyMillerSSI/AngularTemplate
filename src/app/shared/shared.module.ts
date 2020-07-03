import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../UI/nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FloatButtonComponent } from '../UI/float-button/float-button.component';
import { HomeDashComponent } from '../UI/home-dash/home-dash.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from "@angular/material/button";
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule} from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [NavBarComponent, FloatButtonComponent, HomeDashComponent],
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
    MatCardModule,
  ],
  exports: [
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
    MatSnackBarModule,
  ],
})
export class SharedModule {}
