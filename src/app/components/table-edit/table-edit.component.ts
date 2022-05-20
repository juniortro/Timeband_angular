import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Hour } from 'src/app/classes/hours/hour';
import { HourService } from './hour.service';
import { ActivatedRoute } from '@angular/router';

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
      timeFinish: '',
    },
    {
      name: 'Segunda-feira',
      checked: false,
      timeStart: '',
      timeFinish: '',
    },
    {
      name: 'Terça-feira',
      checked: false,
      timeStart: '',
      timeFinish: '',
    },
    {
      name: 'Quarta-feira',
      checked: false,
      timeStart: '',
      timeFinish: '',
    },
    {
      name: 'Quinta-feira',
      checked: false,
      timeStart: '',
      timeFinish: '',
    },
    {
      name: 'Sexta-feira',
      checked: false,
      timeStart: '',
      timeFinish: '',
    },
    {
      name: 'Sábado',
      checked: false,
      timeStart: '',
      timeFinish: '',
    },
  ];

  constructor(
    private fb: FormBuilder,
    private hourService: HourService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.createForm(new Hour());
    this.getData();
    console.log(this.itens)
  }

  toggle(data: any): void {
    this.itens.days.filter((day: any) => {
      if (day.name == data) {
        day.checked = !day.checked;
      }
    });
  }

  updateTimeStart(event: any, day: string): void {
    this.itens.days.filter((d: any) => {
      if (d.name == day) {
        d.timeStart = event.target.value;
      }
    });
  }

  updateTimeFinish(event: any, day: string): void {
    this.itens.days.filter((d: any) => {
      if (d.name == day) {
        d.timeFinish = event.target.value;
      }
    });
  }

  formHours: FormGroup;

  createForm(hour: Hour) {
    this.formHours = this.fb.group({
      id: this.id,
      description: [hour.description],
      days: this.fb.group({
        name: [''],
        timeStart: [''],
        timeFinish: [''],
      }),
    });
  }

  onSubmit() {
    this.formHours.value.days = this.itens.days;
    console.log(JSON.stringify(this.formHours.value));
    this.createForm(new Hour());
  }

  itens: any = {
    days: [
      {
        checked: false
      },
      {
        checked: false
      },
      {
        checked: false
      },
      {
        checked: false
      },
      {
        checked: false
      },
      {
        checked: false
      },
      {
        checked: false
      },
    ]
  };
  
  id: any = this.route.snapshot.params['id'];

  getData() {
    this.hourService
      .getData()
      .subscribe(res => res.filter((i: any) => {
        if(i.id == this.id){
          this.itens = i
        }
      }));
  }
}
