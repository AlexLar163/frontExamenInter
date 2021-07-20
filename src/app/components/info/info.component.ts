import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnInit(): void {
    this.data = Object.values(this.data);
  }
}
