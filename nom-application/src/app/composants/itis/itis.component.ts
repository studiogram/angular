import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itis',
  template: `
    <p>
      mon composant inline works!
    </p>
  `,
  styles: [ 
    'p { color: purple}'
  ]
})
export class ItisComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {

  }

}
