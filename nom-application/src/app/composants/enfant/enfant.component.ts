import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent implements OnInit {
  @Output() name = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    
  }
  infoParent() {
    this.name.emit('test');
  }

}
