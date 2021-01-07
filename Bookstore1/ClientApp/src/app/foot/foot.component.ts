import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css']
})
export class FootComponent implements OnInit {
  constructor() { }
  tooltip: string;
  ngOnInit(): void {
    this.smallScreen();
    //alert(window.innerWidth);
  }

  getTooltip(event: any) {
    let id = event.target.id;
    let element = document.getElementById(id);
    let s = element.innerHTML;
    let tooltip = document.getElementById("tooltipDiv");
    tooltip.style.visibility = "visible";

   // tooltip.style.backgroundColor = "white";
    tooltip.innerHTML = s;
    tooltip.style.width = s.length * 9 + "px";
    tooltip.style.left = event.clientX + "px";
    //tooltip.style.top = window.innerHeight - event.clientY + 20 + "px";
    if (window.innerWidth > 1000) {
        tooltip.style.bottom = window.innerHeight - event.clientY - 200 + "px";
    }
    else {
      tooltip.style.bottom = '50px';
    }
    tooltip.style.borderColor = "#ddd";
    tooltip.style.backgroundColor = "white";
  }

  removeTooltip() {
    let tooltip = document.getElementById("tooltipDiv");
    tooltip.style.visibility = "hidden";
  }

  smallScreen() {
    let w = window.innerWidth;
    let bg = document.getElementById('bg-book');
    let m = document.getElementById("svgMiddel");
    let s = document.getElementById("footerSmall");
    let b = document.getElementById("svgBig");
    if (w >= 700) {
      bg.removeChild(m);
      bg.removeChild(s);
    }
   else if (w > 399 && w < 501) {
      bg.removeChild(b);
      bg.removeChild(s);
      let l = document.getElementsByTagNameNS("http://www.w3.org/2000/svg", "textPath");
      l[0].setAttribute('startOffset', '10%');
      l[1].setAttribute('startOffset', '10%');
      l[2].setAttribute('startOffset', '10%');

      /*let ss = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      ss.setAttribute("height", "100%");
      ss.setAttribute("width", "100%");
      ss.setAttribute("viewBox", "0 0 780 200");
      ss.setAttribute("preserveAspectRatio", "xMinYMin");
      let edge = document.createElementNS("http://www.w3.org/2000/svg", "path");*/
      /*let edgeSmall = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      edgeSmall.cx.baseVal.value = 100;
      edgeSmall.cy.baseVal.value = 100;
      edgeSmall.r.baseVal.value = 10;

      edgeSmall.style.stroke = "red";
      ss.appendChild(edgeSmall);*/
      /*edge.setAttribute("d", "M 0 200 L 0 60 Q 290 20 390 60 Q 490 20 780 60 L780 200  440 200 Q390 145 340 200 L0 200");
      //edge.setAttribute("d", "M 0 150 L 0 60 Q 675 0 775 60 Q 875 0 1550 60 L1550 150  825 150 Q775 125 725 150 L0 150");
      edge.style.fill = "#ffff99";
      edge.style.stroke = "#ddd";
      //edge.setAttributeNS("http://www.w3.org/2000/svg", "stroke", "#ffff66");
      ss.appendChild(edge);
      b.appendChild(ss);
     
      let edgeleftdown = document.createElementNS("http://www.w3.org/2000/svg", "path");
      edgeleftdown.setAttribute("d", "M 0 160 Q 290 120 390 160");
      edgeleftdown.style.stroke = "#ddd";
      edgeleftdown.style.fill = "none";

      ss.appendChild(edgeleftdown);

      let edgerightdown = document.createElementNS("http://www.w3.org/2000/svg", "path");
      edgerightdown.setAttribute("d", "M 390 160 Q 490 120 780 160");
      edgerightdown.style.stroke = "#ddd";
      edgerightdown.style.fill = "none";
      ss.appendChild(edgerightdown);*/

      /* let pathleft1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
       pathleft1.setAttributeNS("http://www.w3.org/2000/svg", "d", "M 0 90 Q 290 30 390 90");
 
       let pathleft2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
       pathleft2.setAttributeNS("http://www.w3.org/2000/svg", "d", "M 0 120 Q 290 60 390 120");
 
       let pathright1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
       pathright1.setAttributeNS("http://www.w3.org/2000/svg", "d", "M 390 90 Q 490 30 780 90");
 
       let pathright2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
       edge.setAttributeNS("http://www.w3.org/2000/svg", "d", "M 390 120 Q 490 60 780 120");
       ss.appendChild(pathleft1);
       ss.appendChild(pathleft2);
       ss.appendChild(pathright1);
       ss.appendChild(pathright2);*/
      //alert(edgeSmall.getAttributeNS("http://www.w3.org/2000/svg", "d"));
    }
    else if (w > 500 && w < 700) {
      bg.removeChild(b);
      bg.removeChild(s);
      let l = document.getElementsByTagNameNS("http://www.w3.org/2000/svg", "textPath");
      l[0].setAttribute('startOffset', '30%');
      l[1].setAttribute('startOffset', '30%');
      l[2].setAttribute('startOffset', '30%');

    }
    else {
      bg.removeChild(m);
      bg.removeChild(b);
    }
  }
}
