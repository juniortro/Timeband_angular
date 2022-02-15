import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { Hour } from 'src/app/classes/hours/hour';

@Component({
  selector: 'app-table-edit',
  templateUrl: './table-edit.component.html',
  styleUrls: ['./table-edit.component.css'],
})
export class TableEditComponent implements OnInit {
  days: any[] = [
    {
      name: 'Domingo',
      checked: false,
      timeStart: '',
    },
    {
      name: 'Segunda-feira',
      checked: false,
      timeStart: '',
    },
    {
      name: 'Terça-feira',
      checked: false,
      timeStart: '',
    },
    {
      name: 'Quarta-feira',
      checked: false,
      timeStart: '',
    },
    {
      name: 'Quinta-feira',
      checked: false,
      timeStart: '',
    },
    {
      name: 'Sexta-feira',
      checked: false,
      timeStart: '',
    },
    {
      name: 'Sábado',
      checked: false,
      timeStart: '',
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm(new Hour());
  }

  toggle(data: any): void {
    this.days.filter((day) => {
      if (day.name == data) {
        day.checked = !day.checked;
      }
    });
  }

  updateTimeStart(event: any, day: string): void {
    this.formHours.patchValue({
      days: {
        name: day,
        timeStart: event.target.value,
      },
    });
  }

  updateTimeFinish(event: any): void {
    this.formHours.patchValue({
      days: {
        timeFinish: event.target.value,
      },
    });
  }

  formHours: FormGroup;

  createForm(hour: Hour) {
    this.formHours = this.fb.group({
      description: [hour.description],
      days: this.fb.group([{
        name: [''],
        timeStart: [''],
        timeFinish: [''],
      }]),
    });
  }

  onSubmit() {
    console.log(this.formHours.value);
  }
}
