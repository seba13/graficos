import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

@Component({
  selector: 'app-grafico-volumen-hora',
  templateUrl: './grafico-volumen-hora.component.html',
  styleUrls: ['./grafico-volumen-hora.component.scss'],
})
export class GraficoVolumenHoraComponent implements OnInit {
  chart: any;
  chartData: any[] = [];
  constructor() {}

  ngOnInit(): void {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart
    this.chart = am4core.create('chartMencionesHora', am4charts.XYChart);
    this.chart.paddingRight = 20;

    
    this.chart.data = this.generateChartDataTemplate();
    

    // console.log(this.chart.data);
    let dateAxis = this.chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.baseInterval = {
      timeUnit: 'minute',
      count: 10,
    };
    dateAxis.tooltipDateFormat = 'HH:mm';
    dateAxis.periodChangeDateFormats.setKey("hour", "HH");

    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 40;
    dateAxis.renderer.labels.template.fontSize = 12;
    dateAxis.renderer.labels.template.horizontalCenter = "right";

    let valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());
    if(valueAxis.tooltip){
      valueAxis.tooltip.disabled = true;
    }
 
    dateAxis.title.text = "Menciones por Hora"
    valueAxis.title.text = "Cantidad de Menciones"
    let series = this.chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = 'value';
    series.dataFields.valueY = 'total_menciones';
    series.tooltipText = 'Menciones: [bold]{valueY}[/]';
    series.fillOpacity = 0.3;
    
    series.fillOpacity = 0.5;
    series.strokeWidth = 3;
    series.strokeWidth = 2;
    series.minBulletDistance = 10;
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.background.cornerRadius = 20;
    series.tooltip.background.fillOpacity = 0.5;
    series.tooltip.label.padding(12,12,12,12)
    let bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.radius = 6;
    bullet.circle.fill = am4core.color('#fff');
    bullet.circle.strokeWidth = 3;

    this.chart.cursor = new am4charts.XYCursor();
    this.chart.cursor.lineY.opacity = 0;
    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    this.chart.scrollbarX = scrollbarX;

    dateAxis.start = 0;
    dateAxis.keepSelection = true;

    dateAxis.strictMinMax = true;
    dateAxis.max = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDay(),23,59,59).getTime();
    dateAxis.min = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDay(),0,0,0).getTime();
  }

  generateChartDataTemplate() {
   
 
    
    for(let i = 0;i<24;i++){
      let date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDay(),i,0,0)
     
      this.chartData.push({
        value: date,
        total_menciones: Math.floor(Math.random()*10)*i + 5
      })
    }
  
    // this.chartData = [
    //   {
    //     date: new Date(2019,5,15,0,0,0),
    //     visits: 400,
    //   },
    //   {
    //     date: new Date(2019,5,15,1,0,0),
    //     visits: 100,
    //   },
    //   {
    //     date: new Date(2019,5,15,2,0,0),
    //     visits: 420,
    //   },
    //   {
    //     date: new Date(2019,5,15,3,0,0),
    //     visits: 380,
    //   },
    //   {
    //     date: new Date(2019,5,15,4,0,0),
    //     visits: 380,
    //   },
    //   {
    //     date: new Date(2019,5,15,5,0,0),
    //     visits: 380,
    //   },
    //   {
    //     date: new Date(2019,5,15,6,0,0),
    //     visits: 380,
    //   },
    //   {
    //     date: new Date(2019,5,15,7,0,0),
    //     visits: 400,
    //   },
    //   {
    //     date: new Date(2019,5,15,8,0,0),
    //     visits: 100,
    //   },
    //   {
    //     date: new Date(2019,5,15,9,0,0),
    //     visits: 420,
    //   },
    //   {
    //     date: new Date(2019,5,15,10,0,0),
    //     visits: 380,
    //   },
    //   {
    //     date: new Date(2019,5,15,11,0,0),
    //     visits: 380,
    //   },
    //   {
    //     date: new Date(2019,5,15,12,0,0),
    //     visits: 380,
    //   },
    //   {
    //     date: new Date(2019,5,15,13,0,0),
    //     visits: 380,
    //   },
    //   {
    //     date: new Date(2019,5,15,14,0,0),
    //     visits: 400,
    //   },
    //   {
    //     date: new Date(2019,5,15,15,0,0),
    //     visits: 100,
    //   },
    //   {
    //     date: new Date(2019,5,15,16,0,0),
    //     visits: 420,
    //   },
    //   {
    //     date: new Date(2019,5,15,17,0,0),
    //     visits: 380,
    //   },
    //   {
    //     date: new Date(2019,5,15,18,0,0),
    //     visits: 380,
    //   },
    //   {
    //     date: new Date(2019,5,15,19,0,0),
    //     visits: 380,
    //   },
    //   {
    //     date: new Date(2019,5,15,20,0,0),
    //     visits: 380,
    //   },
    //   {
    //     date: new Date(2019,5,15,21,0,0),
    //     visits: 400,
    //   },
    //   {
    //     date: new Date(2019,5,15,22,0,0),
    //     visits: 100,
    //   },
    //   {
    //     date: new Date(2019,5,15,23,0,0),
    //     visits: 420,
    //   }
     
    // ]

    return this.chartData;
  }
}
