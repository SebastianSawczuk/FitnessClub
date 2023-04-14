import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-client-list',
    templateUrl: 'client-list.component.html'
})

export class ClientListComponent{
    public clients: Client[] = [];

    constructor(public http: HttpClient, @Inject('BASE_URL') public baseUrl: string, private router: Router) {
        http.get<Client[]>(baseUrl + 'client').subscribe(
          (result) => {
            this.clients = result;
          },
          (error) => console.error(error)
        );
      }


    deleteClient(clientId: number) {
    this.http.delete(this.baseUrl + 'client/' + clientId).subscribe(result => {
      console.log('Client deleted.');
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/client-list']);
      });
    });
  }
}

export interface Client {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  }
  