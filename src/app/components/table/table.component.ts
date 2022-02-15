import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }
  rows: string[] = []

  ngOnInit(): void {
  }

  addNewItem(): void {
    this.rows.push('item')
  }

}
