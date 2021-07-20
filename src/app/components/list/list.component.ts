import { Component, OnInit } from '@angular/core';
import { GetListService } from 'src/app/services/get-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(private api: GetListService) {}
  arrKeys: any;
  arrValues: any;
  ngOnInit(): void {
    this.api.getListWorkers().subscribe((data) => {
      this.arrKeys = Object.keys(Object.values(data)[0]);
      this.arrValues = Object.values(Object.values(data));
      console.log(this.arrValues);
    });
  }

}
