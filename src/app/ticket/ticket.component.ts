import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketClass } from '../ticket-class';
@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
 p: string;
q: string;
rows: any;
obj: any;

  constructor(private router: Router) {}
  createTicket() {
    this.router.navigate(['/entryticket']);
  }
  ngOnInit() {
    this.p = localStorage.getItem('key');
    this. obj = JSON.parse(this.p);
  }
}
