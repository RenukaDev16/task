import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TicketComponent } from './ticket/ticket.component';
import { EntryticketComponent } from './entryticket/entryticket.component';
const appRoutes: Routes = [
  {
path : 'login',
component: LoginFormComponent
  },
  {
    path : 'dashboard',
    component : DashboardComponent
  },
  {
    path : 'home' ,
    component : HomeComponent
  },
  {
    path : 'ticket' ,
    component : TicketComponent
  },
  {
    path : 'entryticket' ,
    component : EntryticketComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    DashboardComponent,
    HomeComponent,
    TicketComponent,
    EntryticketComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
