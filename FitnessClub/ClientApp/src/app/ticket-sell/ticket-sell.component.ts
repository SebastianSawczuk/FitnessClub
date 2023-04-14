import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-ticket-sell',
  templateUrl: 'ticket-sell.component.html',
})
export class TicketSellComponent {
  public clients: Client[] = [];
  public tickets: Ticket[] = [];
  selectedTicket: number | undefined;
  selectedClient: number | undefined;
  ticket: Ticket | undefined;
  client: Client | undefined;

  constructor(
    public http: HttpClient,
    @Inject('BASE_URL') public baseUrl: string,
    private router: Router,
    private route: ActivatedRoute
  ) {
    http.get<Ticket[]>(baseUrl + 'ticket').subscribe(
      (result) => {
        this.tickets = result;
      },
      (error) => console.error(error)
    );
    http.get<Client[]>(baseUrl + 'client').subscribe(
      (result) => {
        this.clients = result;
      },
      (error) => console.error(error)
    );
  }

}

export interface Client {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface Ticket {
  id: number;
  name: string;
  price: number;
}
