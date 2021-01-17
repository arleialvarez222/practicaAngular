import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      css works!
    </p>
    <br>
  `,
  styles: [`
  p{
    color: red;
    font-size: 20px;
  }
  `]
  //de esta forma solo se afectara la informacion que aparezca en este componente sin afectar los demas
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
