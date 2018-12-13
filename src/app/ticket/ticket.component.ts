import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  goo() {
    this.router.navigate(['/entryticket']);
  }
  ngOnInit() {
    this.p = localStorage.getItem('key');
  this. obj = JSON.parse(this.p);
  }




}


