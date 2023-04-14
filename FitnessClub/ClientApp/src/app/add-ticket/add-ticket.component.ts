import { HttpClient } from '@angular/common/http';
import { Component, Inject} from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'add-ticket-component',
    templateUrl: './add-ticket.component.html'
})

export class AddTicket {
    name: string | undefined;
    price: number | undefined;
    peroid: number | undefined;

    constructor(public http: HttpClient, @Inject('BASE_URL')public baseUrl: string, private router: Router) {}

    submitForm(){
        const ticket = {name: this.name, peroid: this.peroid, price: this.price};
        this.http.post(this.baseUrl + 'ticket', ticket)
          .subscribe(result => {
            console.log('Post result:', result);
            this.router.navigate(['/ticket-list']);
          });
        }
}

