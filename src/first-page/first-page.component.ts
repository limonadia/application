import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css'],
})
export class FirstPageComponent implements OnInit {

  selectedTime: string = '';

  constructor(private router: Router){}

  toSecondPage(){
    if (this.selectedTime) {
      this.router.navigate(['/second-page'], { queryParams: { time: this.selectedTime } });
    }
  }

  ngOnInit() {}

}
