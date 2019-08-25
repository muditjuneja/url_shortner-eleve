import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RedirectionComponent } from './redirection/redirection.component'
import { Routes, RouterModule } from '@angular/router';
import { ShortnerComponent } from './shortner/shortner.component';
import { ListComponent } from './list/list.component';


const appRoutes: Routes = [
  {
    path: '',
    component: ShortnerComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  { path: ':code', component: RedirectionComponent },
  // { path: '**', component: AppComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    RedirectionComponent,
    ShortnerComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
