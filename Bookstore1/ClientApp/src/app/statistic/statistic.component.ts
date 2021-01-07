import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { Sale } from '../sale';


@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {
  @ViewChild('donut', { static: true }) donut: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;
  @Input() sales: Sale[]=[];

  constructor() { }

  ngOnInit(): void {
    this.sales = [{ id: 1, name: 'Nulraghuvamsa SudhaL', amount: 10000 }, { id: 2, name: 'Arvind Gupta TED Talk', amount: 9900 }, { id: 3, name: 'Event Loop - Philip Roberts', amount: 8000 }, { id: 4, name: 'Betty is a lucky girl', amount: 5200 }, { id: 5, name: 'Purple', amount: 5000 }, { id: 6, name: 'Gone with laugh', amount: 3500 }];
    if (window.innerWidth >= 801) {
      this.bigChart();
    }
    else if (window.innerWidth >= 250 && window.innerWidth < 801) {
      this.middelChart();
    }
    else {
      this.smallChart();
    }
  }

  bigChart() {
      this.ctx = this.donut.nativeElement.getContext('2d');
      var data = new Chart(this.ctx, {
        responsive: true,
        type: 'bar',
        data: {
          labels: ['Nulraghuvamsa SudhaL', 'Arvind Gupta TED Talk', 'Event Loop - Philip Roberts', 'Betty is a lucky girl', 'Purple', 'Gone with laugh'],
          datasets: [{
            label: 'Our Best Sales of Last Week',
            data: [10000, 9900, 8000, 5200, 5000, 3500, 2000],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                callback: function (label, index, labels) {
                  if (/\.s/.test(label)) {
                    return label.split(" ");
                  }
                  else {
                    return label;
                  }
                  beginAtZero: true
                }
              }
            }]
          }
        }
      });
    }

  middelChart() {
    this.ctx = this.donut.nativeElement.getContext('2d');
    var data = new Chart(this.ctx, {
      responsive: true,
      type: 'bar',
      data: {
        labels: ['Nulraghuvamsa SudhaL', 'Arvind Gupta TED Talk', 'Event Loop - Philip Roberts', 'Betty is a lucky girl', 'Purple', 'Gone with laugh'],
        datasets: [{
          label: 'Our Best Sales of Last Week',
          data: [10000, 9900, 8000, 5200, 5000, 3500, 2000],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              fontSize: 9,
              fontFamily: 'sans-serif',
              callback: function (label, index, labels) {
                if (/\.s/.test(label)) {
                  return label.split(" ");
                }
                else {
                  return label;
                }
                beginAtZero: true
              }
            }
          }],
          xAxes: [{
            ticks: {
              fontSize: 9,
              fontFamily: 'sans-serif'
            }
          }]
        }
      }
    });
  }

  smallChart() {
    this.ctx = this.donut.nativeElement.getContext('2d');
    var data = new Chart(this.ctx, {
      responsive: true,
      type: 'bar',
      data: {
        labels: ['NULRaghuvamsa SudhaL', 'Arvind Gupta TED Talk', 'Event Loop - Philip Roberts', 'Betty is a lucky girl', 'Purple', 'Gone with laugh'],
        datasets: [{
          label: 'Our Best Sales of Last Week',
          data: [10000, 9900, 8000, 5200, 5000, 3500, 2000],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              fontSize: 9,
              fontFamily: 'sans-serif',
              max: 10000,
              min: 0,
              stepSize: 3000,
              callback: function (label, index, labels) {
                if (/\.s/.test(label)) {
                  return label.split(" ");
                }
                else {
                  return label;
                }
                beginAtZero: true
              }
            }
          }],
          xAxes: [{
            ticks: {
              fontSize: 9,
              fontFamily: 'sans-serif'
            }
          }]
        }
      }
    });
   
  }

}
