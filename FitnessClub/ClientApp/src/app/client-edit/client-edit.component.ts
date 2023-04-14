import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-edit',
  templateUrl: 'client-edit.component.html',
})
export class ClientEditComponent {
  id: number | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;

  constructor(
    public http: HttpClient,
    @Inject('BASE_URL') public baseUrl: string,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.queryParamMap.get('id'));
    this.firstName = String(this.route.snapshot.queryParamMap.get('firstName'));
    this.lastName = String(this.route.snapshot.queryParamMap.get('lastName'));
    this.email = String(this.route.snapshot.queryParamMap.get('email'));
  }

  submitForm() {
    const data = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
    };

    this.http
      .put(this.baseUrl + 'client/' + this.id, data)
      .subscribe((result) => {
        console.log('Post result:', result);
        this.router.navigate(['/client-list']);
      });
  }
}
