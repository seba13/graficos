import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

@Component({
  selector: 'app-tipo-usuarios',
  templateUrl: './tipo-usuarios.component.html',
  styleUrls: ['./tipo-usuarios.component.css'],
})
export class TipoUsuariosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create('chartdiv4', am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.legend = new am4charts.Legend();

    chart.data = [
      {
        genero: 'Sin clasificar',
        count: 10,
      },
      {
        genero: 'Masculino',
        count: 15,
      },
      {
        genero: 'Femenino',
        count: 25,
      },
      {
        genero: 'Corporativo',
        count: 32,
      },
      {
        genero: 'Otros',
        count: 18,
      },
      
    ];

    let series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = 'count';
    series.dataFields.category = 'genero';
  }
}
