import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketClass } from '../ticket-class';
@Component({
  selector: 'app-entryticket',
  templateUrl: './entryticket.component.html',
  styleUrls: ['./entryticket.component.css']
})
export class EntryticketComponent implements OnInit {
  private  ticketclass: TicketClass[] ;   // object for class is created with array as input
  constructor(private router: Router) { }

  enterTicket(name , comment) {
    this.ticketclass.push(new TicketClass(name, comment)); // new TicketClass for getting only string value
    const x = JSON.stringify(this.ticketclass);
    localStorage.setItem('key', x);
    this.router.navigate(['/ticket']);
  }

  ngOnInit() {
    this.ticketclass = []; // initialised as empty
    if (this.ticketclass.length === 0) {
       this.ticketclass = JSON.parse(localStorage.getItem('key'));
    }
    const data = JSON.parse(localStorage.getItem('key'));

    if (!data) {
      localStorage.setItem('key', JSON.stringify([]));
    }
}
}

