import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  loading: boolean = true;
  imageUrl?: string;
  constructor() { }

  ngOnInit() {
    this.loading = true; 
    setTimeout(() => {
      this.imageUrl = "https://merrimacshs.eq.edu.au/SiteCollectionImages/news-icons/Kinetic.png";
      this.loading = false; 
    }, 1000);
    
  }

}
