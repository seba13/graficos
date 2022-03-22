import { Component, OnDestroy, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

@Component({
  selector: 'app-interacciones',
  templateUrl: './interacciones.component.html',
  styleUrls: ['./interacciones.component.css'],
})
export class InteraccionesComponent implements OnInit, OnDestroy {
  chart: any;
  constructor() {}

  ngOnInit(): void {
    this.loadChart()
  }


  loadChart(){
    am4core.useTheme(am4themes_animated);
    this.chart = am4core.create('chartdiv3', am4charts.XYChart);
    this.chart.colors.step = 2;
    this.chart.data = this.generateChartData();
    let dateAxis = this.chart.xAxes.push(new am4charts.DateAxis());
    
    dateAxis.renderer.minGridDistance = 50;
    
    // nombre Variable, nombre Leyenda, posicion columna(izq, der), forma figura
    this.createAxisAndSeries('total_menciones', 'Menciones', false, 'circle');
    this.createAxisAndSeries('total_respuestas', 'Respuesta', true, 'triangle');
    this.createAxisAndSeries('total_rt', 'RT', true, 'rectangle');

    // Add legend
    this.chart.legend = new am4charts.Legend();

    // Add cursor
    this.chart.cursor = new am4charts.XYCursor();
  }

  createAxisAndSeries(field: any, name: any, opposite: any, bullet: any) {
    let valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis<any>());
    if (this.chart.yAxes.indexOf(valueAxis) != 0) {
      // valueAxis.syncWithAxis = this.chart.yAxes.getIndex(0);
    }
    
    let series = this.chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = field;
    series.dataFields.dateX = 'fecha_salida';
    series.strokeWidth = 2;
    series.yAxis = valueAxis;
    series.name = name;
    series.tooltipText = '{name}: [bold]{valueY}[/]';
    series.tensionX = 0.8;
    series.showOnInit = true;

    let interfaceColors = new am4core.InterfaceColorSet();

    switch (bullet) {
      case 'triangle':
        let bullet2 = series.bullets.push(new am4charts.Bullet());
        bullet2.width = 12;
        bullet2.height = 12;
        bullet2.horizontalCenter = 'middle';
        bullet2.verticalCenter = 'middle';

        let triangle = bullet2.createChild(am4core.Triangle);
        triangle.stroke = interfaceColors.getFor('background');
        triangle.strokeWidth = 2;
        triangle.direction = 'top';
        triangle.width = 12;
        triangle.height = 12;
        break;
      case 'rectangle':
        let bullet3 = series.bullets.push(new am4charts.Bullet());
        bullet3.width = 10;
        bullet3.height = 10;
        bullet3.horizontalCenter = 'middle';
        bullet3.verticalCenter = 'middle';

        let rectangle = bullet3.createChild(am4core.Rectangle);
        rectangle.stroke = interfaceColors.getFor('background');
        rectangle.strokeWidth = 2;
        rectangle.width = 10;
        rectangle.height = 10;
        break;
      default:
        let bullet = series.bullets.push(new am4charts.CircleBullet());
        bullet.circle.stroke = interfaceColors.getFor('background');
        bullet.circle.strokeWidth = 2;
        break;
    }
    valueAxis.renderer.line.strokeOpacity = 1;
    valueAxis.renderer.line.strokeWidth = 2;
    valueAxis.renderer.line.stroke = series.stroke;
    valueAxis.renderer.labels.template.fill = series.stroke;
    valueAxis.renderer.opposite = opposite;

    valueAxis.title.text = "Cantidad de "+name
    
  }

  // generate some random data, quite different range
  generateChartData() {
    let chartData = [
      {
        fecha_salida: new Date(2019, 5, 12).toLocaleDateString('es-CL', {
          month: 'short',
          day: 'numeric',
        }),
        total_menciones: 1510,
        total_respuestas: 1100,
        total_rt: 800,
      },
      {
        fecha_salida: new Date(2019, 5, 13).toLocaleDateString('es-CL', {
          month: 'short',
          day: 'numeric',
        }),
        total_menciones: 1810,
        total_respuestas: 1300,
        total_rt: 500,
      },
      {
        fecha_salida: new Date(2019, 5, 15).toLocaleDateString('es-CL', {
          month: 'short',
          day: 'numeric',
        }),
        total_menciones: 1465,
        total_respuestas: 780,
        total_rt: 110,
      },
      {
        fecha_salida: new Date(2019, 5, 16).toLocaleDateString('es-CL', {
          month: 'short',
          day: 'numeric',
        }),
        total_menciones: 1690,
        total_respuestas: 1700,
        total_rt: 1100,
      },
      {
        fecha_salida: new Date(2019, 5, 18).toLocaleDateString('es-CL', {
          month: 'short',
          day: 'numeric',
        }),
        total_menciones: 900,
        total_respuestas: 850,
        total_rt: 1000,
      },
      {
        fecha_salida: new Date(2019, 5, 21).toLocaleDateString('es-CL', {
          month: 'short',
          day: 'numeric',
        }),
        total_menciones: 1510,
        total_respuestas: 1100,
        total_rt: 800,
      },
    ];

    return chartData;
  }

  ngOnDestroy(): void {
    am4core.disposeAllCharts();

  }
}
