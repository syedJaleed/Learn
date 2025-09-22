import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

  ngOnInit(){
  }

  newStr = "";

  @Output() messageEvent  = new EventEmitter<string>();

  addNewItem(){
    this.messageEvent.emit(this.newStr);
  }
}
