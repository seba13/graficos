import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

@Component({
  selector: 'app-edad',
  templateUrl: './edad.component.html',
  styleUrls: ['./edad.component.css'],
})
export class EdadComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create('chartdiv5', am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.legend = new am4charts.Legend();

    chart.data = [
      {
        rango_etario: 'Sin clasificar',
        count: 10,
      },
      {
        rango_etario: '0-18',
        count: 15,
      },
      {
        rango_etario: '19-26',
        count: 25,
      },
      {
        rango_etario: '27-40',
        count: 32,
      },
      {
        rango_etario: '40+',
        count: 18,
      },
      {
        rango_etario: 'Otros',
        count: 5,
      },
    ];

    let series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = 'count';
    series.dataFields.category = 'rango_etario';
  }
}
