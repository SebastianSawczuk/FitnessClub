import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { AddTicket } from './add-ticket/add-ticket.component';
import { EditTicket } from './edit-ticket/edit-ticket.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientAddComponent } from './client-add/client-add.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { TicketSellComponent } from './ticket-sell/ticket-sell.component';
import { SummaryComponent } from './summary/summary.component';
import { CheckTicketComponent } from './check-ticket/check-ticket.component';
import { CheckTicketInfoComponent } from './check-ticket-info/check-ticket-info';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    TicketListComponent,
    AddTicket,
    EditTicket,
    ClientListComponent,
    ClientAddComponent,
    ClientEditComponent,
    TicketSellComponent,
    SummaryComponent,
    CheckTicketComponent,
    CheckTicketInfoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'ticket-list', component: TicketListComponent },
      { path: 'add-ticket', component: AddTicket },
      { path: 'edit-ticket', component: EditTicket },
      { path: 'client-list', component: ClientListComponent },
      { path: 'client-add', component: ClientAddComponent },
      { path: 'client-edit', component: ClientEditComponent },
      { path: 'ticket-sell', component: TicketSellComponent },
      { path: 'summary', component: SummaryComponent },
      { path: 'check-ticket', component: CheckTicketComponent },
      { path: 'check-ticket-info', component: CheckTicketInfoComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
