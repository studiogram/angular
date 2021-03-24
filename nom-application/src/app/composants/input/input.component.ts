import { Component, Input, OnInit } from '@angular/core';
import { Animal } from 'src/app/interfaces/animal';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() id: number;
  @Input() animal: Animal;
  constructor() { }

  ngOnInit(): void {
  }

}
