import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-entryticket',
  templateUrl: './entryticket.component.html',
  styleUrls: ['./entryticket.component.css']
})
export class EntryticketComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
 hi(nam: string , com: string) {
   const op = [{'enam': nam , 'ecom': com }];
 const x =  JSON.stringify(op);
localStorage.setItem('key', x);
this.router.navigate(['/ticket']);
    }
  }
