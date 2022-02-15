import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router'
import { TableEditComponent } from './components/table-edit/table-edit.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  { path: '', component: TableComponent },
  { path: 'edit', component: TableEditComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
