import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedComponentsModule } from '../components/navbar/SharedComponents';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedComponentsModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  selectedTime: string = '';

}
