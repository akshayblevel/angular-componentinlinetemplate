# angular-componentinlinetemplate

my-component.component.ts

```js
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
```
app.module.ts

```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, MyComponentComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

app.component.html

```html
<app-my-component></app-my-component>
```


