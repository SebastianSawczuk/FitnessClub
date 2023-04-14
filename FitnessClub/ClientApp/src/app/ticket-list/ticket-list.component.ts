import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditTicket } from '../edit-ticket/edit-ticket.component';
import { TicketService } from './ticket-list.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
})
export class TicketListComponent{
  public tickets: Ticket[] = [];

  constructor(public http: HttpClient, @Inject('BASE_URL') public baseUrl: string, private router: Router, private ticketService: TicketService) {
    http.get<Ticket[]>(baseUrl + 'ticket').subscribe(
      (result) => {
        this.tickets = result;
      },
      (error) => console.error(error)
    );
  }


  deleteTicket(ticketId: number) {
    this.http.delete(this.baseUrl + 'ticket/' + ticketId).subscribe(result => {
      console.log('Ticket deleted.');
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/ticket-list']);
      });
    });
  }
}


export interface Ticket {
  id: number;
  name: string;
  peroid: number;
  price: number;
}
