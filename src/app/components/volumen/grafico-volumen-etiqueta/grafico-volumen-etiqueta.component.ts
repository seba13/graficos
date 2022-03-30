import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

@Component({
  selector: 'app-grafico-volumen-etiqueta',
  templateUrl: './grafico-volumen-etiqueta.component.html',
  styleUrls: ['./grafico-volumen-etiqueta.component.scss']
})
export class GraficoVolumenEtiquetaComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create('chartdivMencionesEtiqueta', am4charts.XYChart);

    let data = [];
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    chart.data = [
      {
        fecha_salida:new Date(2019,5,12).toLocaleDateString('es-CL', { month:"short", day:'numeric'}),
        sum: 23.5,
        expenses: 21.1,
        lineColor: chart.colors.next(),
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
        lineColor: chart.colors.next(),
      },
      {
        fecha_salida:new Date(2019,5,21).toLocaleDateString('es-CL', { month:"short", day:'numeric'}),
        sum: 34.1,
        expenses: 31.9,
      },
      
    ];

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.ticks.template.disabled = true;
    categoryAxis.renderer.line.opacity = 0;
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.minGridDistance = 40;
    categoryAxis.dataFields.category = 'fecha_salida';
    categoryAxis.startLocation = 0.4;
    categoryAxis.endLocation = 0.6;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    if (valueAxis.tooltip) {
      valueAxis.tooltip.disabled = true;
    }
    valueAxis.renderer.line.opacity = 0;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.min = 0;
    categoryAxis.title.text = "Volumen Comparativo de Tags del tema"
    valueAxis.title.text = "Cantidad de Menciones"
    let lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.categoryX = 'fecha_salida';
    lineSeries.dataFields.valueY = 'sum';
    lineSeries.tooltipText = `{fecha_salida}
    {valueY.value} impresiones`;
    lineSeries.fillOpacity = 0.5;
    lineSeries.strokeWidth = 3;
    lineSeries.propertyFields.stroke = 'lineColor';
    lineSeries.propertyFields.fill = 'lineColor';

    let bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
    bullet.circle.radius = 6;
    bullet.circle.fill = am4core.color('#fff');
    bullet.circle.strokeWidth = 3;

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = 'panX';
    chart.cursor.lineX.opacity = 0;
    chart.cursor.lineY.opacity = 0;

    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX.parent = chart.bottomAxesContainer;
  }

  ngOnDestroy(): void {
    am4core.disposeAllCharts();
  }

}
