import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  id: number;
  ra: number;
  name: string;
  degree: string;
  class: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id:1, ra:12346, name:"Nome do aluno 1", degree:"Ensino Fundamental", class:"A"},
  {id:2, ra:456798, name:"Nome do aluno 2", degree:"1° ano do ensino médio", class:"B"},
  {id:3, ra:752156, name:"Nome do aluno 3", degree:"2° ano ensino médio", class:"C"},
  {id:4, ra:852348, name:"Nome do aluno 4", degree:"3° ano do ensino médio", class:"D"},
  {id:5, ra:454643, name:"Nome do aluno 5", degree:"Cursinho", class:"E"}
];

@Component({
  selector: 'table-filtering-example',
  styleUrls: ['table-filtering-example.css'],
  templateUrl: 'table-filtering-example.html',
})
export class TableFilteringExample {
  displayedColumns: string[] = ['id', 'ra', 'name', 'degree', 'class'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(filterValue.trim())
  }
}
