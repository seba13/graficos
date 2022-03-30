import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

@Component({
  selector: 'app-grafico-volumen-dia',
  templateUrl: './grafico-volumen-dia.component.html',
  styleUrls: ['./grafico-volumen-dia.component.scss']
})
export class GraficoVolumenDiaComponent implements OnInit {

  constructor() { }
  chart:any
  ngOnInit(): void {
     /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    this.chart = am4core.create('chartMencionesDia', am4charts.XYChart);

    
    this.chart.data = this.loadData()

    let categoryAxis = this.chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.ticks.template.disabled = true;
    categoryAxis.renderer.line.opacity = 0;
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.minGridDistance = 40;
    categoryAxis.dataFields.category = 'fecha_salida';
    categoryAxis.startLocation = 0.4;
    categoryAxis.endLocation = 0.6;

    let valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());
    if (valueAxis.tooltip) {
      valueAxis.tooltip.disabled = true;
    }
    valueAxis.renderer.line.opacity = 0;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.min = 0;
    categoryAxis.title.text = "Menciones por día"
    valueAxis.title.text = "Cantidad de Menciones"
    let lineSeries = this.chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.categoryX = 'fecha_salida';
    lineSeries.dataFields.valueY = 'sum';
    lineSeries.tooltipText = `{fecha_salida}
    {valueY.value} menciones`;
    lineSeries.fillOpacity = 0.5;
    lineSeries.strokeWidth = 3;
    lineSeries.propertyFields.stroke = 'lineColor';
    lineSeries.propertyFields.fill = 'lineColor';
    
    let bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
    bullet.circle.radius = 6;
    bullet.circle.fill = am4core.color('#fff');
    bullet.circle.strokeWidth = 3;

    this.chart.cursor = new am4charts.XYCursor();
    this.chart.cursor.behavior = 'panX';
    this.chart.cursor.lineX.opacity = 0;
    this.chart.cursor.lineY.opacity = 0;

    this.chart.scrollbarX = new am4core.Scrollbar();
    this.chart.scrollbarX.parent = this.chart.bottomAxesContainer;
  }


  loadData(){
    return [
      {
        fecha_salida:new Date(2019,5,12).toLocaleDateString('es-CL', { month:"short", day:'numeric'}),
        sum: 23.5,
        expenses: 21.1,
        lineColor: this.chart.colors.next(),
      },
      {
        fecha_salida:new Date(2019,5,13).toLocaleDateString('es-CL', { month:"short", day:'numeric'}),
        sum: 26.2,
        expenses: 30.5,
      },
      {
        fecha_salida:new Date(2019,5,15).toLocaleDateString('es-CL', { month:"short", day:'numeric'}),
        sum: 30.1,
        expenses: 34.9,
      },
      {
        fecha_salida:new Date(2019,5,16).toLocaleDateString('es-CL', { month:"short", day:'numeric'}),
        sum: 20.5,
        expenses: 23.1,
      },
      {
        fecha_salida:new Date(2019,5,18).toLocaleDateString('es-CL', { month:"short", day:'numeric'}),
        sum: 30.6,
        expenses: 28.2,
        lineColor: this.chart.colors.next(),
      },
      {
        fecha_salida:new Date(2019,5,21).toLocaleDateString('es-CL', { month:"short", day:'numeric'}),
        sum: 34.1,
        expenses: 31.9,
      },
      
    ];
  }
}
