import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import { PortfolioComponent } from './Portfolio/portfolio.component';
import { PageService } from './page.service';
import { MovieListComponent } from './Movies/movie-list.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, PortfolioComponent, MovieListComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot([
      {path : 'portfolio', component: PortfolioComponent },
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  providers: [PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
