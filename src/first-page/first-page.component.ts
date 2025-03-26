import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SharedComponentsModule } from '../components/SharedComponents';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css'],
  standalone: true,
  imports:[SharedComponentsModule, FormsModule]
})
export class FirstPageComponent implements OnInit {

  selectedTime: string = '';

  constructor(private router: Router){}

  toSecondPage(){
    this.router.navigate(['/second-page']);
  }

  ngOnInit() {
  }

}
