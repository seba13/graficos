import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

@Component({
  selector: 'app-grafico-volumen-minuto',
  templateUrl: './grafico-volumen-minuto.component.html',
  styleUrls: ['./grafico-volumen-minuto.component.scss'],
})
export class GraficoVolumenMinutoComponent implements OnInit {
  interval: any;
  visits: any = 100;
  series: any;
  chart: any;
  ngOnInit(): void {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    this.chart = am4core.create('chartMencionesMinutos', am4charts.XYChart);
    this.chart.hiddenState.properties.opacity = 0;

    this.chart.padding(0, 0, 0, 0);

    this.chart.zoomOutButton.disabled = true;

    this.chart.data = this.loadData();

    let dateAxis = this.chart.xAxes.push(new am4charts.DateAxis());
    
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 55;
    // dateAxis.dateFormats.setKey('second', 'ss');
    // dateAxis.periodChangeDateFormats.setKey('second', '[bold]h:mm a');
    dateAxis.periodChangeDateFormats.setKey('minute', '[bold]HH:mm ');
    dateAxis.tooltipDateFormat = 'HH:mm';
    // dateAxis.periodChangeDateFormats.setKey('hour', '[bold]h:mm a');
    dateAxis.renderer.inside = true;
    dateAxis.renderer.axisFills.template.disabled = true;
    dateAxis.renderer.ticks.template.disabled = true;

    let valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());
    if (valueAxis.tooltip) {
      valueAxis.tooltip.disabled = true;
    }
    valueAxis.interpolationDuration = 500;
    valueAxis.rangeChangeDuration = 500;
    valueAxis.renderer.inside = true;
    valueAxis.renderer.minLabelPosition = 0.05;
    valueAxis.renderer.maxLabelPosition = 0.95;
    valueAxis.renderer.axisFills.template.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;

    dateAxis.title.text = 'Menciones por Minuto';
    valueAxis.title.text = 'Cantidad de Menciones';

    this.series = this.chart.series.push(new am4charts.LineSeries());
    this.series.dataFields.dateX = 'date';
    this.series.dataFields.valueY = 'total_menciones';
    this.series.interpolationDuration = 500;
    this.series.defaultState.transitionDuration = 0;
    this.series.tensionX = 0.8;

    this.series.tooltipText = 'Menciones: [bold]{valueY}[/]';

    let circleBullet = this.series.bullets.push(new am4charts.CircleBullet());
    circleBullet.circle.stroke = am4core.color('#fff');
    circleBullet.circle.radius = 7;
    circleBullet.circle.strokeWidth = 1;
    circleBullet.tooltipText = 'Value: [bold]{value}[/]';

    this.chart.events.on('datavalidated', function () {
      dateAxis.zoom({ start: 1 / 10, end: 1.5 }, false, true);
    });

    dateAxis.interpolationDuration = 500;
    dateAxis.rangeChangeDuration = 500;

    this.chart.cursor = new am4charts.XYCursor();
    this.chart.cursor.behavior = 'panX';
    this.chart.cursor.lineX.opacity = 0;
    this.chart.cursor.lineY.opacity = 0;

    this.startInterval();
  }

  loadData() {
    let data: any[] = [];
    for (let i = 0; i <= 30; i++) {
      this.visits -= Math.round(
        (Math.random() < 0.5 ? 1 : -1) * Math.random() * 10
      );
      data.push({ date: new Date().setSeconds(i - 30), total_menciones: this.visits });
    }

    return data;
  }

  // actualiza la data
  startInterval() {
    this.interval = setInterval(() => {
      this.visits =
        this.visits +
        Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
      let lastdataItem = this.series.dataItems.getIndex(
        this.series.dataItems.length - 1
      );
      this.chart.addData(
        {
          date: new Date(lastdataItem.dateX.getTime() + 1000),
          total_menciones: this.visits,
        },
        1
      );
    }, 10000);
  }
}
