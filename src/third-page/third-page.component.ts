import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css']
})
export class ThirdPageComponent implements OnInit {

  time?: string;
  name?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  pm?: boolean;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.time = params['time'];
      this.name = params['name'];
      this.lastName = params['lastName'];
      this.email = params['email'];
      this.phone = params['phone'];
    });

    if(Number(this.time)<=5 || Number(this.time)==12){
      this.pm = true;
    } else {
      this.pm = false;
    }

   }

  ngOnInit() {
  }

}
