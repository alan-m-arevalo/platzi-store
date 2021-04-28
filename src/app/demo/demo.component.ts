import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {


  title = '';
  items = ['nicolas', 'julian', 'juan'];

  power = 10;

    addItem(): void
  {
    this.items.push(this.title);
  }

  deleteItem(index: number): void
  {
    this.items.splice(index, 1);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
