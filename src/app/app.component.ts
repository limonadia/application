import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedComponentsModule } from './components/navbar/SharedComponents';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedComponentsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'task';
}
