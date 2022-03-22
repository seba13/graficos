import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable/lib/components/datatable.component';

@Component({
  selector: 'app-influencias',
  templateUrl: './influencias.component.html',
  styleUrls: ['./influencias.component.css'],
})
export class InfluenciasComponent implements OnInit {
  @ViewChild('tableMySearch', { static: true }) table: any;

  rows: any = [];
  tempRows: any = [];
  columns: any = [];
  expanded: any = {};
  timeout: any;

  sendingData: boolean = false;
  ngOnInit(): void {
    this.loadColumns();
    this.loadRows();
  }

  loadColumns(): void {
    this.columns = [
      { prop:'nombre_real', name: 'Nombre' },
      { prop:'nombre', name: 'Usuario' },
      { prop: 'total_menciones', name: 'Interacciones' },
      { prop: 'Mencion', name: 'Menciones' },
      { prop:'Respuesta', name: 'Respuestas' },
      { prop:'RT', name: 'RT' },
      { prop:'followers_count', name: 'Followers' },
      { prop:'friends_count', name: 'Following' },
      { prop:'location', name: 'Ubicacion' },
      { prop:'statuses_count', name: 'Tweets' },
    ];
  }

  loadRows(){
    this.rows = [
      {
        nombre_real:'Ana',
        nombre: '@Ana',
        total_menciones: 3,
        Mencion:3,
        Respuesta: 0,
        RT: 0,
        followers_count: 100000,
        friends_count: 958,
        location: 'cali, colombia',
        statuses_count: 19834
      },{
        nombre_real:'John',
        nombre: '@JohnMiltonR_',
        total_menciones: 3,
        Mencion:3,
        Respuesta: 0,
        RT: 0,
        followers_count: 72554,
        friends_count: 150,
        location: 'cali, colombia',
        statuses_count: 19834
      },{
        nombre_real:'John',
        nombre: '@JohnMiltonR_',
        total_menciones: 3,
        Mencion:3,
        Respuesta: 0,
        RT: 0,
        followers_count: 39360,
        friends_count: 722,
        location: 'cali, colombia',
        statuses_count: 19834
      },{
        nombre_real:'John',
        nombre: '@JohnMiltonR_',
        total_menciones: 3,
        Mencion:3,
        Respuesta: 0,
        RT: 0,
        followers_count: 39360,
        friends_count: 722,
        location: 'cali, colombia',
        statuses_count: 19834
      },{
        nombre_real:'John',
        nombre: '@JohnMiltonR_',
        total_menciones: 3,
        Mencion:3,
        Respuesta: 0,
        RT: 0,
        followers_count: 39360,
        friends_count: 722,
        location: 'cali, colombia',
        statuses_count: 19834
      },{
        nombre_real:'John',
        nombre: '@JohnMiltonR_',
        total_menciones: 3,
        Mencion:3,
        Respuesta: 0,
        RT: 0,
        followers_count: 39360,
        friends_count: 722,
        location: 'cali, colombia',
        statuses_count: 19834
      },{
        nombre_real:'John',
        nombre: '@JohnMiltonR_',
        total_menciones: 3,
        Mencion:3,
        Respuesta: 0,
        RT: 0,
        followers_count: 39360,
        friends_count: 722,
        location: 'cali, colombia',
        statuses_count: 19834
      },{
        nombre_real:'John',
        nombre: '@JohnMiltonR_',
        total_menciones: 3,
        Mencion:3,
        Respuesta: 0,
        RT: 0,
        followers_count: 39360,
        friends_count: 722,
        location: 'cali, colombia',
        statuses_count: 19834
      },{
        nombre_real:'John',
        nombre: '@JohnMiltonR_',
        total_menciones: 3,
        Mencion:3,
        Respuesta: 0,
        RT: 0,
        followers_count: 39360,
        friends_count: 722,
        location: 'cali, colombia',
        statuses_count: 19834
      },{
        nombre_real:'John',
        nombre: '@JohnMiltonR_',
        total_menciones: 3,
        Mencion:3,
        Respuesta: 0,
        RT: 0,
        followers_count: 39360,
        friends_count: 722,
        location: 'cali, colombia',
        statuses_count: 19834
      },{
        nombre_real:'John',
        nombre: '@JohnMiltonR_',
        total_menciones: 3,
        Mencion:3,
        Respuesta: 0,
        RT: 0,
        followers_count: 39360,
        friends_count: 722,
        location: 'cali, colombia',
        statuses_count: 19834
      },{
        nombre_real:'John',
        nombre: '@JohnMiltonR_',
        total_menciones: 3,
        Mencion:3,
        Respuesta: 0,
        RT: 0,
        followers_count: 39360,
        friends_count: 722,
        location: 'cali, colombia',
        statuses_count: 19834
      },{
        nombre_real:'John',
        nombre: '@JohnMiltonR_',
        total_menciones: 3,
        Mencion:3,
        Respuesta: 0,
        RT: 0,
        followers_count: 39360,
        friends_count: 722,
        location: 'cali, colombia',
        statuses_count: 19834
      },{
        nombre_real:'Jorge Iglesias',
        nombre: '@Jorge Iglesias',
        total_menciones: 3,
        Mencion:3,
        Respuesta: 0,
        RT: 0,
        followers_count: 39360,
        friends_count: 722,
        location: 'cali, colombia',
        statuses_count: 19834
      },{
        nombre_real:'John',
        nombre: '@JohnMiltonR_',
        total_menciones: 3,
        Mencion:3,
        Respuesta: 0,
        RT: 0,
        followers_count: 39360,
        friends_count: 722,
        location: 'cali, colombia',
        statuses_count: 19834
      },{
        nombre_real:'John',
        nombre: '@JohnMiltonR_',
        total_menciones: 3,
        Mencion:3,
        Respuesta: 0,
        RT: 0,
        followers_count: 39360,
        friends_count: 722,
        location: 'cali, colombia',
        statuses_count: 19834
      },{
        nombre_real:'John',
        nombre: '@JohnMiltonR_',
        total_menciones: 3,
        Mencion:3,
        Respuesta: 0,
        RT: 0,
        followers_count: 39360,
        friends_count: 722,
        location: 'cali, colombia',
        statuses_count: 19834
      },{
        nombre_real:'John',
        nombre: '@JohnMiltonR_',
        total_menciones: 3,
        Mencion:3,
        Respuesta: 0,
        RT: 0,
        followers_count: 39360,
        friends_count: 722,
        location: 'cali, colombia',
        statuses_count: 19834
      },{
        nombre_real:'John',
        nombre: '@JohnMiltonR_',
        total_menciones: 3,
        Mencion:3,
        Respuesta: 0,
        RT: 0,
        followers_count: 39360,
        friends_count: 722,
        location: 'cali, colombia',
        statuses_count: 19834
      },{
        nombre_real:'John',
        nombre: '@JohnMiltonR_',
        total_menciones: 3,
        Mencion:3,
        Respuesta: 0,
        RT: 0,
        followers_count: 39360,
        friends_count: 722,
        location: 'cali, colombia',
        statuses_count: 19834
      },{
        nombre_real:'John',
        nombre: '@JohnMiltonR_',
        total_menciones: 3,
        Mencion:3,
        Respuesta: 0,
        RT: 0,
        followers_count: 39360,
        friends_count: 722,
        location: 'cali, colombia',
        statuses_count: 19834
      },{
        nombre_real:'John',
        nombre: '@JohnMiltonR_',
        total_menciones: 3,
        Mencion:3,
        Respuesta: 0,
        RT: 0,
        followers_count: 39360,
        friends_count: 722,
        location: 'cali, colombia',
        statuses_count: 19834
      },{
        nombre_real:'John',
        nombre: '@JohnMiltonR_',
        total_menciones: 3,
        Mencion:3,
        Respuesta: 0,
        RT: 0,
        followers_count: 39360,
        friends_count: 722,
        location: 'cali, colombia',
        statuses_count: 19834
      },{
        nombre_real:'John',
        nombre: '@JohnMiltonR_',
        total_menciones: 3,
        Mencion:3,
        Respuesta: 0,
        RT: 0,
        followers_count: 39360,
        friends_count: 722,
        location: 'cali, colombia',
        statuses_count: 19834
      },{
        nombre_real:'John',
        nombre: '@JohnMiltonR_',
        total_menciones: 3,
        Mencion:3,
        Respuesta: 0,
        RT: 0,
        followers_count: 39360,
        friends_count: 722,
        location: 'cali, colombia',
        statuses_count: 19834
      },{
        nombre_real:'John',
        nombre: '@JohnMiltonR_',
        total_menciones: 3,
        Mencion:3,
        Respuesta: 0,
        RT: 0,
        followers_count: 60000,
        friends_count: 722,
        location: 'cali, colombia',
        statuses_count: 19834
      },
    ]
    this.tempRows = this.rows.slice()
  }

  setPage(event: any) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }

  filterNameSearch(event:any) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempRows.filter(function (d:any) {
      return d.nombre_real.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
    this.table.offset = 0;
  }
}
