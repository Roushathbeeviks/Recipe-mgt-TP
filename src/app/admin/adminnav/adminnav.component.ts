import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminnav',
  templateUrl: './adminnav.component.html',
  styleUrls: ['./adminnav.component.css']
})
export class AdminnavComponent implements OnInit {

  constructor(private routes:Router) { }

  ngOnInit(): void {
  }

  logout()
  {
    localStorage.clear();
    // window.location.reload();
    this.routes.navigate(['/'])
  }
}
