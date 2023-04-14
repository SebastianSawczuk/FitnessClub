import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TicketService } from '../ticket-list/ticket-list.service';
import { Client } from '../client-list/client-list.component';

@Component({
    selector: 'app-check-ticket-info',
    templateUrl: 'check-ticket-info.component.html'
})

export class CheckTicketInfoComponent implements OnInit {
    public clients: Client[] = [];
    firstName: string | undefined;
    lastName: string | undefined;
    isActual: boolean | undefined;
    idc: number | undefined;
    constructor(public http: HttpClient, @Inject('BASE_URL') public baseUrl: string, private router: Router,
    private route: ActivatedRoute) { 
        this.idc = Number(this.route.snapshot.queryParamMap.get('idc'));

        http.get<boolean>(baseUrl + 'client_ticket/' + this.idc).subscribe(
            (result) => {
              this.isActual = result;
            },
            (error) => console.error(error)
          );
        
    }

    ngOnInit() {
        this.idc = Number(this.route.snapshot.queryParamMap.get('idc'));
     }
}

interface isActual{
id: number;
idt: number;
idc: number;
date: string;
actual: boolean;
}