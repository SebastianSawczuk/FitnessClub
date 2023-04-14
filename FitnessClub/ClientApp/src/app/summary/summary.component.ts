import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client-list/client-list.component';
import { Ticket } from '../ticket-list/ticket-list.component';
import { TicketService } from '../ticket-list/ticket-list.service';

@Component({
  selector: 'app-summary',
  templateUrl: 'summary.component.html',
})
export class SummaryComponent implements OnInit {
    public tickets: Ticket[] = [];
    public clients: Client[] = [];
    public idt: number | undefined;
    public idc: number | undefined;

    constructor(public http: HttpClient, @Inject('BASE_URL') public baseUrl: string, private router: Router, private ticketService: TicketService,
    private route: ActivatedRoute) {
        this.idt = Number(this.route.snapshot.queryParamMap.get('selectedTicket'));
        this.idc = Number(this.route.snapshot.queryParamMap.get('selectedClient'));
      http.get<Ticket[]>(baseUrl + 'ticket/' + this.idt).subscribe(
        (result) => {
          this.tickets = result;
        },
        (error) => console.error(error)
      );

      http.get<Client[]>(baseUrl + 'client/' + this.idc).subscribe(
        (result) => {
          this.clients = result;
        },
        (error) => console.error(error)
      );
    }

  ngOnInit(): void {
    this.idt = Number(this.route.snapshot.queryParamMap.get('selectedTicket'));
  }

  submitForm(){
    const sell = {id_client: this.idc, id_ticket: this.idt, id: this.tickets[0].peroid};
    this.http.post(this.baseUrl + 'client_ticket', sell)
      .subscribe(result => {
        console.log('Post result:', result);
        this.router.navigate(['/ticket-list']);
      });
    }
}
