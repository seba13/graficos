import { Component, OnDestroy, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

@Component({
  selector: 'app-aplicaciones',
  templateUrl: './aplicaciones.component.html',
  styleUrls: ['./aplicaciones.component.css'],
})
export class AplicacionesComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create('chartdiv', am4charts.XYChart3D);

    // Add data
    chart.data = [
      {
        nombre_source: 'Twitter for android',
        total: 23.5,
        color: chart.colors.next(),
      },
      {
        nombre_source: 'Twitter web app',
        total: 26.2,
        color: chart.colors.next(),
      },
      {
        nombre_source: 'twitter for iphone',
        total: 30.1,
        color: chart.colors.next(),
      },
      {
        nombre_source: 'Twitter for Ipad',
        total: 29.5,
        color: chart.colors.next(),
      }
    ];

    // Create axes
    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'nombre_source';
    categoryAxis.numberFormatter.numberFormat = '#';
    categoryAxis.renderer.inversed = true;
    
    categoryAxis.title.text = "Aplicaciones"
    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Cantidad de Tweets"
    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries3D());
    
    series.dataFields.valueX = 'total';
    series.dataFields.categoryY = 'nombre_source';
    series.name = 'Total';
    series.columns.template.propertyFields.fill = 'color';
    series.columns.template.tooltipText = ` {nombre_source}
    {valueX} tweets`;
    series.columns.template.column3D.stroke = am4core.color('#fff');
    series.columns.template.column3D.strokeOpacity = 0.2;
  }
  ngOnDestroy(): void {
    am4core.disposeAllCharts();
  }
}
