import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from '../client-list/client-list.component';

@Component({
    selector: 'app-check-ticket',
    templateUrl: 'check-ticket.component.html'
})

export class CheckTicketComponent implements OnInit {
    public clients: Client[] = [];
    public idc: number | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    constructor(public http: HttpClient,
        @Inject('BASE_URL') public baseUrl: string,
        private router: Router,
        private route: ActivatedRoute) { 
            
        }

    ngOnInit() {
     }

     getId(){
        this.http.get<number>(`${this.baseUrl}client/1/${this.firstName}/${this.lastName}`).subscribe(
            (result) => {
              this.idc = result;
            },
            (error) => console.error(error)
          );
     }

        submitForm(){
            this.getId();
              this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                this.router.navigate(['/check-ticket-info']);
              });
        }
    
}
