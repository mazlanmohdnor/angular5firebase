import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  wishtext = '';
  wishes = [];
  wishcount = 0;

  constructor() {}

  ngOnInit() {}

  addWish() {
    this.wishes.push(this.wishtext);
    this.wishtext = '';
    this.wishcount = this.wishes.length;
  }
  remove(i) {
    this.wishes.splice(i, 1);
    this.wishcount = this.wishes.length;
  }
}
