import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable/lib/components/datatable.component';

@Component({
  selector: 'app-compartidos',
  templateUrl: './compartidos.component.html',
  styleUrls: ['./compartidos.component.css']
})
export class CompartidosComponent implements OnInit {
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
      { prop:'ranking', name: 'ranking' },
      { prop:'frecuencia', name: 'frecuencia' },
      { prop: 'link', name: 'Link de los mas compartidos' },
      { prop: 'ver', name: 'Ver menciones' },
     
    ];
  }

  loadRows(){
    this.rows = [
      {
        ranking:'Ana',
        frecuencia: '@Ana',
        link: 3,
        ver:'<i class="fa fa-comments">',
      },{
        ranking:'Ana',
        frecuencia: '@Ana',
        link: 3,
        ver:'<i class="fa fa-comments">',
      },{
        ranking:'Ana',
        frecuencia: '@Ana',
        link: 3,
        ver:'<i class="fa fa-comments">',
      },{
        ranking:'Ana',
        frecuencia: '@Ana',
        link: 3,
        ver:'<i class="fa fa-comments">',
      },{
        ranking:'Ana',
        frecuencia: '@Ana',
        link: 3,
        ver:'<i class="fa fa-comments">',
      },{
        ranking:'Ana',
        frecuencia: '@Ana',
        link: 3,
        ver:'<i class="fa fa-comments">',
      },{
        ranking:'Ana',
        frecuencia: '@Ana',
        link: 3,
        ver:'<i class="fa fa-comments">',
      },{
        ranking:'Ana',
        frecuencia: '@Ana',
        link: 3,
        ver:'<i class="fa fa-comments">',
      },{
        ranking:'Ana',
        frecuencia: '@Ana',
        link: 3,
        ver:'<i class="fa fa-comments">',
      },{
        ranking:'Ana',
        frecuencia: '@Ana',
        link: 3,
        ver:'<i class="fa fa-comments">',
      },{
        ranking:'Ana',
        frecuencia: '@Ana',
        link: 3,
        ver:'<i class="fa fa-comments">',
      },{
        ranking:'Ana',
        frecuencia: '@Ana',
        link: 3,
        ver:'<i class="fa fa-comments">',
      },{
        ranking:'Ana',
        frecuencia: '@Ana',
        link: 3,
        ver:'<i class="fa fa-comments">',
      },{
        ranking:'Ana',
        frecuencia: '@Ana',
        link: 3,
        ver:'<i class="fa fa-comments">',
      },{
        ranking:'Ana',
        frecuencia: '@Ana',
        link: 3,
        ver:'<i class="fa fa-comments">',
      },{
        ranking:'Ana',
        frecuencia: '@Ana',
        link: 3,
        ver:'<i class="fa fa-comments">',
      },{
        ranking:'Ana',
        frecuencia: '@Ana',
        link: 3,
        ver:'<i class="fa fa-comments">',
      },{
        ranking:'Ana',
        frecuencia: '@Ana',
        link: 3,
        ver:'<i class="fa fa-comments">',
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
      return d.ranking.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
    this.table.offset = 0;
  }

}
