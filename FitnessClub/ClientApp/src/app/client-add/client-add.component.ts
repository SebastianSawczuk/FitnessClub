import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-client-add',
    templateUrl: 'client-add.component.html'
})

export class ClientAddComponent {
    firstName: string | undefined;
    lastName: string | undefined;
    email: string | undefined;
    
    constructor(public http: HttpClient, @Inject('BASE_URL')public baseUrl: string, private router: Router) {}

    submitForm(){
        const client = {firstName: this.firstName, lastName: this.lastName, email: this.email };
        this.http.post(this.baseUrl + 'client', client)
          .subscribe(result => {
            console.log('Post result:', result);
            this.router.navigate(['/client-list']);
          });
        }
}