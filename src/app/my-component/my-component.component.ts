import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  template: `
    <div>
      <h1>
        {{ Title }}
      </h1>
    </div>
  `,
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  Title = 'Component Inline Template';
}
