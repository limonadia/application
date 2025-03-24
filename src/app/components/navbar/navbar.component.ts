import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  imageUrl?: string;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.imageUrl = "https://merrimacshs.eq.edu.au/SiteCollectionImages/news-icons/Kinetic.png";
    }, 500);
  }

}
