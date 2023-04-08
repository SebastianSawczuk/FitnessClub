import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';

@Component({
    selector: 'app-ticket-list',
    templateUrl: './ticket-list.component.html'
})

export class TicketListComponent {
    public tickets: Ticket[] = [];

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) { 
        http.get<Ticket[]>(baseUrl + 'ticket').subscribe(result => {
            this.tickets = result;
        }, error => console.error(error))
    }
}

interface Ticket {
    id: number;
    name: string;
    price: number;
    actual: boolean;
    date: Date;
}