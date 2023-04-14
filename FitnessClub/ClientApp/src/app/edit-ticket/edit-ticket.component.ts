import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: 'edit-ticket.component.html',
})
export class EditTicket {
  id: number | undefined;
  name: string | undefined;
  peroid: number |undefined;
  price: number | undefined;

  constructor(
    public http: HttpClient,
    @Inject('BASE_URL') public baseUrl: string,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.queryParamMap.get('id'));
    this.name = String(this.route.snapshot.queryParamMap.get('name'));
    this.peroid = Number(this.route.snapshot.queryParamMap.get('peroid'));
    this.price = Number(this.route.snapshot.queryParamMap.get('price'));
  }

  submitForm() {
    const data = { name: this.name, price: this.price };

    this.http
      .put(this.baseUrl + 'ticket/' + this.id, data)
      .subscribe((result) => {
        console.log('Post result:', result);
        this.router.navigate(['/ticket-list']);
      });
  }
}
