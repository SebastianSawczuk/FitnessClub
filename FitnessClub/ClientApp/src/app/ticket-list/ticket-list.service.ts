import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from './ticket-list.component';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private tickets: Ticket[] = [];

  constructor(public http: HttpClient, @Inject('BASE_URL')public baseUrl: string) {
    this.updateList();
  }
  
  updateList(){
    this.http.get<Ticket[]>(this.baseUrl + 'ticket').subscribe(tickets => {
        this.tickets = tickets;
      });
  }

  getTicketsList(): Observable<Ticket[]> {
    this.updateList();
    return of(this.tickets);
  }
}



