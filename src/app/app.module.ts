import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { ServicesComponent } from './components/services/services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntersectionDirective } from './intersection.directive';
import { IntersectionVisibleDirective } from './intersection-visible.directive';
import { IntersectionVisibleTwoDirective } from './intersection-visible-two.directive';
import { IntersectionShineDirective } from './intersection-shine.directive';
import { IntersectionFadeInDirective } from './intersection-fade-in.directive';
import { SeccionComponent } from './components/seccion/seccion.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PresentationComponent,
    ServicesComponent,
    ProjectsComponent,
    FooterComponent,
    IntersectionDirective,
    IntersectionVisibleDirective,
    IntersectionVisibleTwoDirective,
    IntersectionShineDirective,
    IntersectionFadeInDirective,
    SeccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
