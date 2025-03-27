import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() disabled: boolean = true;
  @Input() text?: string;
  @Output() onClick: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  onButtonClick(){
    this.onClick.emit();
  }

}
