import { Component, OnInit } from '@angular/core';
import { HourService } from './hour.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor(private hourService: HourService) {}
  rows: string[] = [];

  ngOnInit(): void {
    this.getData()
  }

  addNewItem(): void {
    //POST PARA ADICIONAR NOVO ELEMENTO
    this.itens.push({});
  }

  itens: any = [];

  getData() {
    this.hourService.getData().subscribe((res) => {
      this.itens = res;
      console.log(res);
    });
  }
}
