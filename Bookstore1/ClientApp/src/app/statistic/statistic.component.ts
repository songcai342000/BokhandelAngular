import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {
  @ViewChild('donut', {static: true}) donut: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;

  constructor() { }

  ngOnInit(): void {
    let t = document.getElementById('total');
    if (window.innerHeight < 800) {
      t.style.height = 'auto';
    }
    else {
      t.style.height = '100%';
    }
    this.ctx = this.donut.nativeElement.getContext('2d');
    var data = new Chart(this.ctx, {
      responsive: true,
      type: 'bar',
      data: {
        labels: ['NULRaghuvamsa SudhaL', 'Arvind Gupta TED Talk', 'Event Loop - Philip Roberts', 'Betty is a lucky girl', 'Purple', 'Gone with laugh'],
        datasets: [{
          label: 'Our Best Sales of Last Week',
          data: [10000, 9900, 8000, 5200, 5000, 3000, 2000],
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

}
