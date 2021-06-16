import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    setTimeout(() => this.navigate(), 10000);
  }

  navigate() {
    this.router.navigate(['booklist']);
  }


  loadImages() {
    let d = document.getElementById('recommandBooks');
    let i1 = document.createElement('img');
    let i2 = document.createElement('img');
    let i3 = document.createElement('img');
    i1.setAttribute('src', 'assets/images/askim.jpg');
    i2.setAttribute('src', 'assets/images/askim.jpg');
    i3.setAttribute('src', 'assets/images/askim.jpg');
    d.appendChild(i1);
    d.appendChild(i2);
    d.appendChild(i3);

  }

  getPosition() {
    let imgs = document.getElementsByTagName('img');
    let t1 = imgs[0].offsetTop;
    let t2 = imgs[1].offsetTop;
    let t3 = imgs[2].offsetTop;
    let l1 = imgs[0].offsetLeft;
    let l2 = imgs[1].offsetLeft;
    let l3 = imgs[2].offsetLeft;
    alert(t1);
  }

  getDistance() {

  }

  move1(event: any) {
    /*let i1 = document.getElementById('img1');
    let d1 = document.getElementById('d1');

    event.stopPropagation();
    var x = event.pageX,
      y = event.pageY;

    let itop = i1.style.top;
    let ileft = i1.style.left;
    alert(itop);
    alert(parseInt(itop.substring(0, it.length - 2)));
    if (parseInt(itop.substring(0, it.length - 2)) < d1.offsetTop && parseInt(ileft.substring(0, it.length - 2)) < d1.offsetLeft) {
      itop = (y + 20) + 'px';
      ileft = (x + 20) + 'px';
    }*/
    let d1 = document.getElementById('d1');
    event.stopPropagation();
    var x = event.pageX,
      y = event.pageY;
    d1.style.top = (y + 20) + 'px';
    d1.style.left = (x + 20) + 'px';
    /*if (x < 500 && y < 500) {
      i1.style.top = (y + 2) + 'px';
      i1.style.left = (x + 2) + 'px';
    }
    else {
      i1.style.top = 200 + 'px';
      i1.style.left = 200 + 'px';
    }*/
  }

  move2(event: any) {
    let i2 = document.getElementById('img2');
    let d2 = document.getElementById('d2');

    event.stopPropagation();
    var x = event.pageX,
      y = event.pageY;

    let itop = i2.style.top;
    let ileft = i2.style.left;

    if (parseInt(itop.substring(0, itop.length - 2)) < d2.offsetTop && parseInt(ileft.substring(0, itop.length - 2)) < d2.offsetLeft) {
      itop = (y + 20) + 'px';
      ileft = (x + 20) + 'px';
    }
  }

  move3(event: any) {
    let i1 = document.getElementById('img1');
    event.stopPropagation();
    var x = event.pageX,
      y = event.pageY;
    i1.style.top = (y + 20) + 'px';
    i1.style.left = (x + 20) + 'px';
  }
}
